import Link from 'next/link';
import { notFound } from 'next/navigation';
import { rfqDetailData, rfqDocuments } from '@/lib/rfq-detail-data';
import { customers, rfqs } from '@/lib/mock-data';

const workflowStages = [
  'RFQ created',
  'Operations',
  'Technical / BOM',
  'Purchase pricing',
  'Plant Head approve',
  'Quoted to Customer',
  'Won / Lost',
  'Sales Order'
];

const statusColors: Record<string, string> = {
  Draft: 'status-draft',
  'With Operations': 'status-operations',
  'With Technical': 'status-technical',
  'Awaiting Customer Input': 'status-default',
  'With Purchase': 'status-purchase',
  'Pricing → Operations': 'status-operations',
  'Pending Plant Head': 'status-plant-head',
  Approved: 'status-approved',
  'Quoted to Customer': 'status-quoted',
  Won: 'status-won',
  Lost: 'status-lost',
  'On Hold (Sales)': 'status-onhold',
  'Sales Order': 'status-approved',
  Rejected: 'status-rejected'
};

function formatActivityDate(value: string) {
  return new Date(value).toLocaleString('en-GB', {
    day: '2-digit',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit'
  });
}

export function RfqDetailPage({ id }: { id: string }) {
  const rfq = rfqs.find((item) => item.id === id || item.rfqNumber === id);
  if (!rfq) notFound();

  const details = rfqDetailData[rfq.rfqNumber];
  const documents = rfqDocuments[rfq.rfqNumber] ?? rfq.documents;
  const activity = details?.activity ?? rfq.activity;
  const customer = customers.find((item) => item.id === rfq.customerId);
  const completedStages = rfq.status === 'With Technical' ? 2 : 1;

  return (
    <div className="page-shell space-y-5">
      <Link href="/rfqs" className="inline-flex items-center gap-1 text-sm text-[#64748b] hover:text-[#172036]">
        <span aria-hidden="true">←</span> Inbox
      </Link>

      <section className="card overflow-hidden p-5 sm:p-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-xl font-bold tracking-tight sm:text-2xl">{rfq.rfqNumber}</h1>
              <span className={`badge ${statusColors[rfq.status] ?? 'status-default'}`}>{rfq.status}</span>
            </div>
            <p className="mt-1 text-sm text-[#64748b]">
              {rfq.customerName} · PN {rfq.partNumber} · via email
            </p>
          </div>
          <div className="min-w-[118px] rounded-2xl bg-[#f7f9fc] px-4 py-3 text-right">
            <div className="text-[10px] font-medium uppercase tracking-wide text-[#718096]">Currently with</div>
            <div className="text-sm font-bold">{rfq.assignee === 'Dev' ? 'Raja' : rfq.assignee}</div>
            <span className={`badge mt-1 ${statusColors[rfq.status] ?? 'status-default'}`}>{rfq.currentRole}</span>
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-2" aria-label="RFQ workflow progress">
          {workflowStages.map((stage, index) => {
            const done = index < completedStages;
            return (
              <span
                key={stage}
                className={`inline-flex items-center rounded-full px-3 py-1.5 text-[11px] font-semibold ${
                  done ? 'bg-[#e9fbf3] text-[#047857]' : 'bg-[#f1f4f8] text-[#64748b]'
                }`}
              >
                {done ? '✓' : '○'} {stage}
              </span>
            );
          })}
        </div>
      </section>

      <div className="grid items-start gap-5 lg:grid-cols-[minmax(0,2.4fr)_minmax(280px,1fr)]">
        <div className="space-y-5">
          <section className="card overflow-hidden">
            <h2 className="border-b border-[#e8ebf2] px-5 py-3 text-sm font-bold">Your action</h2>
            <p className="px-5 py-5 text-sm leading-6 text-[#64748b]">
              This RFQ is currently with <strong className="font-semibold text-[#334155]">{rfq.assignee === 'Dev' ? 'Raja' : rfq.assignee}</strong>
              {' '}(<span className={`badge ${statusColors[rfq.status] ?? 'status-default'}`}>{rfq.currentRole}</span>). Switch to that user to act, or wait for the handoff.
            </p>
          </section>

          <section className="card overflow-hidden">
            <h2 className="border-b border-[#e8ebf2] px-5 py-3 text-sm font-bold">Requirement</h2>
            <div className="space-y-4 p-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-[10px] font-medium uppercase tracking-wide text-[#718096]">Contact</div>
                  <div className="mt-1 text-sm">{details?.contact ?? customer?.phone ?? '—'}</div>
                </div>
                <div>
                  <div className="text-[10px] font-medium uppercase tracking-wide text-[#718096]">Qty</div>
                  <div className="mt-1 text-sm">{rfq.quantity}</div>
                </div>
              </div>
              <div>
                <div className="text-[10px] font-medium uppercase tracking-wide text-[#718096]">Description</div>
                <div className="mt-1 text-sm">{details?.description ?? rfq.productName}</div>
              </div>
              {details?.roleTimelines && (
                <div className="rounded-xl bg-[#f7f9fc] p-3">
                  <div className="mb-2 text-[10px] font-medium uppercase tracking-wide text-[#718096]">Role timelines</div>
                  <div className="space-y-1.5">
                    {details.roleTimelines.map((timeline) => (
                      <div key={timeline.role} className="flex flex-wrap gap-x-2 text-xs leading-5">
                        <span className="font-semibold text-[#172036]">{timeline.role}</span>
                        <span>{timeline.duration}</span>
                        <span className="text-[#64748b]">due {timeline.due}</span>
                        <span className={timeline.status === 'done' ? 'text-[#059669]' : 'text-[#c2410c]'}>
                          {timeline.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>

          <section className="card overflow-hidden">
            <h2 className="border-b border-[#e8ebf2] px-5 py-3 text-sm font-bold">Customer documents</h2>
            <ul className="space-y-2 p-5">
              {documents.length > 0 ? documents.map((document) => (
                <li key={document.id} className="flex min-w-0 items-center justify-between gap-3 rounded-xl bg-[#f7f9fc] px-3 py-2.5 text-xs">
                  <span className="min-w-0 truncate">{document.name}</span>
                  <a href={document.url} className="shrink-0 font-semibold text-blue-700 hover:underline">Open</a>
                </li>
              )) : (
                <li className="rounded-xl bg-[#f7f9fc] px-3 py-3 text-sm text-[#64748b]">No customer documents attached.</li>
              )}
            </ul>
          </section>
        </div>

        <section className="card overflow-hidden">
          <h2 className="border-b border-[#e8ebf2] px-5 py-3 text-sm font-bold">Activity</h2>
          <ol className="space-y-3 p-4">
            {activity.map((item) => (
              <li key={item.id} className="border-l border-[#dbe4f0] pl-3">
                <div className="text-xs font-semibold leading-4 text-[#172036]">{item.action}</div>
                <div className="mt-0.5 text-[10px] text-[#718096]">{item.user} · {formatActivityDate(item.at)}</div>
                {item.details && <p className="mt-1 text-[11px] leading-[1.45] text-[#53647f]">{item.details}</p>}
              </li>
            ))}
          </ol>
        </section>
      </div>

      <footer className="flex flex-wrap justify-between gap-2 border-t border-[#e1e6ef] pt-3 text-[10px] text-[#718096]">
        <span>Vezewire Technologies · Quotation workflow</span>
        <span className="flex gap-4"><a href="#" className="hover:underline">Privacy Policy</a><a href="#" className="hover:underline">Terms of Service</a></span>
      </footer>
    </div>
  );
}
