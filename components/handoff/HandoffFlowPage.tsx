import { stageDetails } from '@/lib/mock-data';

export function HandoffFlowPage() {
  return (
    <div className="page-shell py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Handoff Flow</h1>
      </div>

      <div className="relative space-y-4">
        <div className="absolute left-[28px] top-4 bottom-4 w-px bg-[#d9dfe9]" />
        {stageDetails.map((stage, index) => (
          <div key={stage.title} className="relative flex gap-5">
            <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#dfe5ee] bg-white text-xl font-bold text-[#172036] shadow-sm">
              {index + 1}
            </div>
            <div className="card w-full p-4">
              <div className="mb-2 flex items-start justify-between gap-4">
                <div>
                  <div className="text-[15px] font-bold">{stage.title}</div>
                  <div className="text-xs font-medium text-[#64748b]">{stage.role}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-[#6b7280]">{stage.count} records</div>
                </div>
              </div>
              <p className="mb-4 text-sm text-[#4b5563]">{stage.description}</p>
              <div className="flex flex-wrap gap-2">
                {['RFQ-2026-001', 'RFQ-2026-005', 'RFQ-2026-009'].map((chip) => (
                  <button key={chip} className="rounded-full border border-[#dfe5ee] bg-[#f8f9fc] px-3 py-1 text-xs font-medium text-[#32415e] hover:bg-white">
                    {chip}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
