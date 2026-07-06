// Analytics Tracking Utility for Woodify Homes V2.0

export interface TrackedEvent {
  id: string;
  eventName: string;
  timestamp: string;
  params: Record<string, any>;
}

// Stubs for third-party trackers
const trackGA4 = (eventName: string, params: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, params);
  }
  console.log(`[GA4 Tracked]: ${eventName}`, params);
};

const trackPixel = (eventName: string, params: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', eventName, params);
  }
  console.log(`[Meta Pixel Tracked]: ${eventName}`, params);
};

const trackClarity = (eventName: string, params: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).clarity) {
    (window as any).clarity('event', eventName, params);
  }
  console.log(`[Clarity Tracked]: ${eventName}`, params);
};

// Main tracking function
export const trackEvent = (eventName: string, params: Record<string, any> = {}) => {
  const timestamp = new Date().toISOString();
  const id = Math.random().toString(36).substring(2, 11);
  const eventData: TrackedEvent = { id, eventName, timestamp, params };

  // Log locally in localStorage for visual CRM verification
  try {
    const existingEventsJson = localStorage.getItem('woodify_analytics_events');
    const existingEvents: TrackedEvent[] = existingEventsJson ? JSON.parse(existingEventsJson) : [];
    existingEvents.unshift(eventData);
    // Keep only the last 100 events to save space
    localStorage.setItem('woodify_analytics_events', JSON.stringify(existingEvents.slice(0, 100)));
  } catch (e) {
    console.error('Error saving tracking event to localStorage:', e);
  }

  // Send to integrations
  trackGA4(eventName, params);
  trackPixel(eventName, params);
  trackClarity(eventName, params);

  // Dispatch a custom event to notify components (like the CRM dashboard)
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('woodify_event_tracked', { detail: eventData }));
  }
};
