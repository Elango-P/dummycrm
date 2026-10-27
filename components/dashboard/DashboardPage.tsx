import { getDashboardMetrics, getRecentRfqMovement, getStatusMix } from '@/lib/metrics';
import { rfqs } from '@/lib/mock-data';

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

export function DashboardPage() {
  const metrics = getDashboardMetrics();
  const recent = getRecentRfqMovement();
  const statusMix = getStatusMix();

  return (
    <div className="page-shell space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {Object.values(metrics).map((metric) => (
          <div key={metric.label} className="card p-4">
            <div className="mb-2 text-[12px] text-[#6b7280]">{metric.label}</div>
            <div className="flex items-end justify-between">
              <div className="text-[26px] font-bold tracking-tight">{metric.value}</div>
              <span className={`badge ${metric.tone === 'blue' ? 'badge-blue' : metric.tone === 'purple' ? 'badge-purple' : metric.tone === 'teal' ? 'badge-teal' : metric.tone === 'green' ? 'badge-green' : metric.tone === 'orange' ? 'badge-orange' : metric.tone === 'red' ? 'badge-red' : 'badge-slate'}`}>
                {metric.delta ?? 'Live'}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="card p-5">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-bold">Workload by stage</h3>
            <span className="text-xs text-[#6b7280]">Open RFQs</span>
          </div>
          <div className="space-y-4">
            {[
              ['Operations', 3],
              ['Technical', 4],
              ['Purchase', 2],
              ['Plant Head', 2],
              ['BDE', 5]
            ].map(([label, count]) => (
              <div key={label}>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span className="font-medium">{label}</span>
                  <span className="text-[#6b7280]">{count} RFQs</span>
                </div>
                <div className="h-2.5 rounded-full bg-[#edf1f7]">
                  <div className="h-full rounded-full bg-[#2b6ef7]" style={{ width: `${Math.min(100, (Number(count) / 7) * 100)}%` }} />
                </div>
                <div className="mt-1 text-[11px] text-[#6b7280]">84% on-time completion</div>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-5">
          <h3 className="mb-4 text-lg font-bold">Sales outcome</h3>
          <div className="space-y-3">
            {[
              ['Won', rfqs.filter((rfq) => rfq.status === 'Won').length, 'bg-[#22c55e]'],
              ['Lost', rfqs.filter((rfq) => rfq.status === 'Lost').length, 'bg-[#ef4444]'],
              ['On Hold', rfqs.filter((rfq) => rfq.status === 'On Hold (Sales)').length, 'bg-[#f59e0b]']
            ].map(([label, count, color]) => (
              <div key={label} className="flex items-center justify-between rounded-xl bg-[#f8f9fc] px-3 py-2">
                <div className="flex items-center gap-2">
                  <span className={`h-2.5 w-2.5 rounded-full ${color}`} />
                  <span className="text-sm font-medium">{label}</span>
                </div>
                <span className="text-sm font-bold">{count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
        <div className="card p-5">
          <h3 className="mb-4 text-lg font-bold">Recent RFQ movement</h3>
          <div className="overflow-hidden rounded-xl border border-[#edf1f7]">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-[#f8f9fc] text-[#55627d]">
                <tr>
                  <th className="px-3 py-2 font-semibold">RFQ</th>
                  <th className="px-3 py-2 font-semibold">Customer</th>
                  <th className="px-3 py-2 font-semibold">Stage</th>
                  <th className="px-3 py-2 font-semibold">Updated</th>
                </tr>
              </thead>
              <tbody>
                {recent.map((rfq) => (
                  <tr key={rfq.id} className="table-row">
                    <td className="px-3 py-2 font-medium text-[#172036]">{rfq.rfqNumber}</td>
                    <td className="px-3 py-2">{rfq.customerName}</td>
                    <td className="px-3 py-2"><span className={`badge ${statusColors[rfq.status] ?? 'status-default'}`}>{rfq.status}</span></td>
                    <td className="px-3 py-2 text-[#6b7280]">{new Date(rfq.lastUpdated).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card p-5">
          <h3 className="mb-4 text-lg font-bold">Status mix</h3>
          <div className="space-y-3">
            {Object.entries(statusMix).map(([status, count]) => (
              <div key={status} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className={`badge ${statusColors[status] ?? 'status-default'}`}>{status}</span>
                </div>
                <span className="font-semibold">{count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
