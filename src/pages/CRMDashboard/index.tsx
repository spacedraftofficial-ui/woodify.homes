import React, { useState, useEffect } from 'react';
import { 
  HiOutlineUser, 
  HiOutlineClipboardList, 
  HiOutlineTrendingUp, 
  HiArrowLeft,
  HiOutlineTrash
} from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Define lead assignment stages
const assignmentFlow = [
  "Website Lead",
  "CRM Entry",
  "Duplicate Check",
  "Source Tagging",
  "Lead Score",
  "Assign to CRM Executive",
  "First Call",
  "Qualification",
  "Designer Consultation",
  "Site Visit",
  "Proposal",
  "Conversion"
];

// Initial mock leads to pre-populate if localStorage is empty
const initialMockLeads = [
  {
    id: "L-X8B9Z1A",
    name: "Sakthi Sakthidharan",
    mobile: "+91 94445 12345",
    email: "sakthi@example.com",
    city: "Chennai",
    bhk: "3 BHK",
    budget: "₹10-15 Lakhs",
    possession: "1-3 Months",
    packageSelected: "3 BHK - Elite Curation",
    sourcePage: "Packages Page - 3 BHK",
    utmSource: "facebook",
    utmCampaign: "chennai_interiors_v2",
    deviceType: "mobile",
    timestamp: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
    status: "Lead Score",
    notes: "Lead score evaluated to high. Matching with senior CRM agent."
  },
  {
    id: "L-K9M2J4D",
    name: "Vikram Sen",
    mobile: "+91 98234 56789",
    email: "vikram@outlook.com",
    city: "Chennai",
    bhk: "3 BHK",
    budget: "₹15-20 Lakhs",
    possession: "Immediate",
    packageSelected: "3 BHK - Premium Luxury",
    sourcePage: "Hero Section CTA",
    utmSource: "google",
    utmCampaign: "search_brand_chennai",
    deviceType: "desktop",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    status: "Website Lead",
    notes: "New lead created. Awaiting duplicate validation check."
  },
  {
    id: "L-P2W5N7Q",
    name: "Ananya Reddy",
    mobile: "+91 73057 78404",
    email: "ananya.r@gmail.com",
    city: "Chennai",
    bhk: "Villa",
    budget: "₹30+ Lakhs",
    possession: "3-6 Months",
    packageSelected: "Bespoke Complete Villa Scope",
    sourcePage: "Packages Page - Villa Interiors",
    utmSource: "instagram",
    utmCampaign: "luxury_villa_reels",
    deviceType: "tablet",
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    status: "Designer Consultation",
    notes: "Assigned to Lead Architect. Meeting scheduled for layout review."
  }
];

export const CRMDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [leads, setLeads] = useState<any[]>([]);
  const [selectedLead, setSelectedLead] = useState<any | null>(null);
  const [analyticsEvents, setAnalyticsEvents] = useState<any[]>([]);
  const [activeSubTab, setActiveSubTab] = useState<'pipeline' | 'analytics'>('pipeline');

  // Load leads and events from localStorage
  const loadData = () => {
    // Leads
    const savedLeadsJson = localStorage.getItem('woodify_crm_leads');
    if (savedLeadsJson) {
      setLeads(JSON.parse(savedLeadsJson));
    } else {
      localStorage.setItem('woodify_crm_leads', JSON.stringify(initialMockLeads));
      setLeads(initialMockLeads);
    }

    // Analytics Events
    const savedEventsJson = localStorage.getItem('woodify_analytics_events');
    if (savedEventsJson) {
      setAnalyticsEvents(JSON.parse(savedEventsJson));
    }
  };

  useEffect(() => {
    document.title = "Woodify V2.0 CRM & Lead Flow Dashboard";
    loadData();

    // Listen to newly tracked events to hot-reload analytics logs
    const handleEventTracked = () => {
      loadData();
    };

    window.addEventListener('woodify_event_tracked', handleEventTracked);
    return () => window.removeEventListener('woodify_event_tracked', handleEventTracked);
  }, []);

  // Update a lead status (pipeline stage progression)
  const advanceLeadStatus = (leadId: string) => {
    const updatedLeads = leads.map(lead => {
      if (lead.id === leadId) {
        const currentIdx = assignmentFlow.indexOf(lead.status);
        const nextIdx = Math.min(currentIdx + 1, assignmentFlow.length - 1);
        const nextStatus = assignmentFlow[nextIdx];
        
        let note = lead.notes;
        if (nextStatus === "CRM Entry") note = "Lead entry logged in database.";
        if (nextStatus === "Duplicate Check") note = "Duplicate verification check completed. Lead unique.";
        if (nextStatus === "Source Tagging") note = `Source tagged as ${lead.utmSource} (${lead.utmCampaign}).`;
        if (nextStatus === "Lead Score") note = `Lead score calculated. Budget: ${lead.budget}.`;
        if (nextStatus === "Assign to CRM Executive") note = "Lead dispatched to senior CRM coordinator.";
        if (nextStatus === "First Call") note = "First call initialized. Customer details verified.";
        if (nextStatus === "Qualification") note = "Lead qualified. Core requirements documented.";
        if (nextStatus === "Designer Consultation") note = "Assigned to interior designer. Technical consultation setup.";
        if (nextStatus === "Site Visit") note = "Laser-measurements and site context visit scheduled.";
        if (nextStatus === "Proposal") note = "Proposal with exact billing code sheet shared with client.";
        if (nextStatus === "Conversion") note = "Agreement signed. Advanced deposit secured. Project moved to Execution!";

        return { ...lead, status: nextStatus, notes: note };
      }
      return lead;
    });

    localStorage.setItem('woodify_crm_leads', JSON.stringify(updatedLeads));
    setLeads(updatedLeads);
    if (selectedLead && selectedLead.id === leadId) {
      setSelectedLead(updatedLeads.find(l => l.id === leadId));
    }
  };

  // Reset local database
  const handleResetData = () => {
    localStorage.removeItem('woodify_crm_leads');
    localStorage.removeItem('woodify_analytics_events');
    loadData();
    setSelectedLead(null);
  };

  return (
    <div className="min-h-screen bg-woodify-bg pt-28 flex flex-col justify-between">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-6 md:px-12 w-full py-6">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-woodify-burgundy hover:text-woodify-text transition-colors mb-8 font-inter uppercase tracking-widest"
        >
          <HiArrowLeft /> Back to Website
        </button>

        {/* Dashboard Title */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
          <div>
            <span className="font-inter text-xs tracking-widest uppercase font-semibold text-woodify-burgundy mb-2 block">
              CRM Integration Node
            </span>
            <h1 className="font-playfair text-3xl sm:text-4xl font-bold tracking-tight text-woodify-text">
              Lead Flow & Analytics Dashboard
            </h1>
            <p className="font-inter text-xs text-woodify-text/60 mt-1 font-light">
              Phase 6 CRM verification node. Watch how website leads enter the pipeline and progress through assignment stages.
            </p>
          </div>

          <button
            onClick={handleResetData}
            className="flex items-center gap-2 font-inter text-[10px] tracking-widest uppercase font-bold py-3 px-6 rounded-full border border-red-200 hover:bg-red-50 text-red-500 transition-all"
          >
            <HiOutlineTrash /> Reset Simulator
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex border-b border-woodify-text/10 mb-8 gap-6 font-inter text-xs tracking-widest uppercase font-bold">
          <button
            onClick={() => setActiveSubTab('pipeline')}
            className={`pb-3 border-b-2 transition-all ${
              activeSubTab === 'pipeline'
                ? 'border-woodify-burgundy text-woodify-burgundy'
                : 'border-transparent text-woodify-text/40 hover:text-woodify-text/80'
            }`}
          >
            Leads Pipeline Flow
          </button>
          <button
            onClick={() => setActiveSubTab('analytics')}
            className={`pb-3 border-b-2 transition-all ${
              activeSubTab === 'analytics'
                ? 'border-woodify-burgundy text-woodify-burgundy'
                : 'border-transparent text-woodify-text/40 hover:text-woodify-text/80'
            }`}
          >
            Analytics Event Tracker
          </button>
        </div>

        {/* Pipeline Tab Content */}
        {activeSubTab === 'pipeline' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Leads Table */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-woodify-text/5 shadow-sm overflow-hidden">
              <div className="p-5 border-b border-woodify-text/5 bg-woodify-bg/40 flex justify-between items-center">
                <span className="font-playfair font-bold text-base text-woodify-text flex items-center gap-2">
                  <HiOutlineUser className="text-woodify-burgundy" /> Capture Registry
                </span>
                <span className="font-inter text-[10px] text-woodify-text/50 font-bold">
                  {leads.length} Active Leads
                </span>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left font-inter text-xs">
                  <thead>
                    <tr className="bg-woodify-bg/20 text-woodify-text/40 border-b border-woodify-text/5 font-semibold tracking-wider uppercase text-[9px]">
                      <th className="py-4 px-5">Lead ID</th>
                      <th className="py-4 px-5">Customer</th>
                      <th className="py-4 px-5">Configuration</th>
                      <th className="py-4 px-5">Pipeline Stage</th>
                      <th className="py-4 px-5">Captured</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-woodify-text/5">
                    {leads.map((lead) => (
                      <tr 
                        key={lead.id} 
                        onClick={() => setSelectedLead(lead)}
                        className={`cursor-pointer transition-colors ${
                          selectedLead?.id === lead.id 
                            ? 'bg-woodify-burgundy/5' 
                            : 'hover:bg-woodify-text/2'
                        }`}
                      >
                        <td className="py-4 px-5 font-bold font-mono text-woodify-burgundy">
                          {lead.id}
                        </td>
                        <td className="py-4 px-5">
                          <p className="font-bold text-woodify-text">{lead.name}</p>
                          <p className="text-[10px] text-woodify-text/50 font-light mt-0.5">{lead.mobile}</p>
                        </td>
                        <td className="py-4 px-5 font-light">
                          <p className="font-medium">{lead.bhk} ({lead.budget})</p>
                          <p className="text-[10px] text-woodify-coral font-semibold mt-0.5">{lead.utmSource} / {lead.utmCampaign}</p>
                        </td>
                        <td className="py-4 px-5">
                          <span className="inline-block px-2.5 py-1 bg-woodify-burgundy/10 text-woodify-burgundy rounded-full text-[10px] tracking-wide font-semibold">
                            {lead.status}
                          </span>
                        </td>
                        <td className="py-4 px-5 text-woodify-text/50 font-light text-[10px]">
                          {new Date(lead.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right: Pipeline Details & Interactive Progression */}
            <div className="lg:col-span-5 space-y-6">
              {selectedLead ? (
                <div className="bg-white rounded-2xl border border-woodify-text/5 shadow-sm p-6 space-y-6">
                  {/* Lead Metadata */}
                  <div className="border-b border-woodify-text/10 pb-4">
                    <span className="font-inter text-[9px] tracking-widest uppercase font-bold text-woodify-coral block mb-1">
                      Lead Profile Selected
                    </span>
                    <h3 className="font-playfair text-xl font-bold text-woodify-text">
                      {selectedLead.name}
                    </h3>
                    <p className="font-inter text-xs text-woodify-text/50 mt-1 font-light">
                      {selectedLead.email} &bull; {selectedLead.city}
                    </p>
                  </div>

                  {/* Captured CRM Fields Checklist */}
                  <div className="grid grid-cols-2 gap-4 font-inter text-xs bg-woodify-bg/30 p-4 rounded-xl border border-woodify-text/5">
                    <div>
                      <span className="text-[9px] text-woodify-text/40 block font-semibold">BHK Preference</span>
                      <span className="font-medium text-woodify-text mt-0.5 block">{selectedLead.bhk}</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-woodify-text/40 block font-semibold">Budget Tier</span>
                      <span className="font-medium text-woodify-text mt-0.5 block">{selectedLead.budget}</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-woodify-text/40 block font-semibold">Possession Date</span>
                      <span className="font-medium text-woodify-text mt-0.5 block">{selectedLead.possession}</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-woodify-text/40 block font-semibold">Source Page</span>
                      <span className="font-medium text-woodify-text mt-0.5 block truncate">{selectedLead.sourcePage}</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-woodify-text/40 block font-semibold">Campaign & Channel</span>
                      <span className="font-semibold text-woodify-coral mt-0.5 block">{selectedLead.utmSource} / {selectedLead.utmCampaign}</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-woodify-text/40 block font-semibold">Device / Screen</span>
                      <span className="font-medium text-woodify-text mt-0.5 block uppercase">{selectedLead.deviceType}</span>
                    </div>
                  </div>

                  {/* CRM Lead Assignment Progression Flow */}
                  <div>
                    <h4 className="font-playfair text-sm font-bold text-woodify-text mb-4 flex items-center gap-2">
                      <HiOutlineClipboardList className="text-woodify-burgundy" /> Assignment Flow Progression
                    </h4>
                    
                    <div className="relative border-l border-woodify-text/10 pl-6 space-y-4 max-h-[300px] overflow-y-auto pr-2">
                      {assignmentFlow.map((stage, idx) => {
                        const currentStageIdx = assignmentFlow.indexOf(selectedLead.status);
                        const isCompleted = idx < currentStageIdx;
                        const isActive = idx === currentStageIdx;
                        
                        return (
                          <div key={stage} className="relative text-xs">
                            {/* Bullet circle */}
                            <div className={`absolute -left-[30px] top-0.5 w-2 h-2 rounded-full border transition-all ${
                              isCompleted 
                                ? 'bg-green-600 border-green-600' 
                                : isActive 
                                ? 'bg-woodify-burgundy border-woodify-burgundy scale-125 animate-pulse' 
                                : 'bg-white border-woodify-text/20'
                            }`} />
                            
                            <span className={`font-inter text-[10px] tracking-wide font-bold uppercase ${
                              isCompleted 
                                ? 'text-green-600/80 font-medium' 
                                : isActive 
                                ? 'text-woodify-burgundy' 
                                : 'text-woodify-text/30'
                            }`}>
                              {idx + 1}. {stage}
                            </span>
                            {isActive && (
                              <p className="font-inter text-[11px] text-woodify-text/70 mt-1 leading-normal font-light italic">
                                &raquo; {selectedLead.notes}
                              </p>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Advance flow action */}
                  {selectedLead.status !== "Conversion" && (
                    <button
                      onClick={() => advanceLeadStatus(selectedLead.id)}
                      className="w-full bg-woodify-text hover:bg-luxury-gradient text-white font-inter text-xs tracking-widest uppercase font-bold py-4 rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5"
                    >
                      Advance Status Stage &rarr;
                    </button>
                  )}
                </div>
              ) : (
                <div className="bg-white rounded-2xl border border-woodify-text/5 shadow-sm p-8 text-center text-woodify-text/50 font-inter text-xs py-16">
                  <p>Select a lead row from the Capture Registry table to inspect profile metadata and test the pipeline assignment flow progression.</p>
                </div>
              )}
            </div>

          </div>
        ) : (
          /* Analytics Tab Content */
          <div className="bg-white rounded-2xl border border-woodify-text/5 shadow-sm overflow-hidden p-6">
            <div className="p-4 border-b border-woodify-text/5 flex justify-between items-center mb-6">
              <span className="font-playfair font-bold text-base text-woodify-text flex items-center gap-2">
                <HiOutlineTrendingUp className="text-woodify-burgundy" /> Analytics Logs
              </span>
              <span className="font-inter text-[10px] text-woodify-text/50 font-bold uppercase tracking-wider">
                Capturing GA4 / GTM / Meta Pixel events
              </span>
            </div>

            {analyticsEvents.length > 0 ? (
              <div className="space-y-4">
                {analyticsEvents.map((evt) => (
                  <div key={evt.id} className="p-4 bg-woodify-bg/30 border border-woodify-text/5 rounded-xl font-mono text-[10px] space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="bg-woodify-burgundy/10 text-woodify-burgundy px-2 py-0.5 rounded-md font-bold uppercase">
                        {evt.eventName}
                      </span>
                      <span className="text-woodify-text/40">
                        {new Date(evt.timestamp).toLocaleString()}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-woodify-text/70 mt-2 font-inter">
                      {Object.entries(evt.params).map(([key, val]) => (
                        <div key={key} className="truncate">
                          <span className="font-bold text-woodify-text/40">{key}: </span>
                          <span className="font-medium text-woodify-text/80">{String(val)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 text-woodify-text/45 font-inter text-xs">
                <p>No events logged yet. Navigate through the site sections, click CTAs, open packages, and submit forms to capture analytics events.</p>
              </div>
            )}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default CRMDashboard;
