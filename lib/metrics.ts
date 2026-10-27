import { rfqs } from '@/lib/mock-data';

export function getDashboardMetrics() {
  const openRfqs = rfqs.filter((rfq) => !['Won', 'Lost', 'Rejected', 'Sales Order'].includes(rfq.status));
  const pipelineValue = openRfqs.reduce((sum, rfq) => sum + rfq.totalValue, 0);
  const pendingApproval = rfqs.filter((rfq) => rfq.status === 'Pending Plant Head').length;
  const awaitingWonLost = rfqs.filter((rfq) => rfq.status === 'Quoted to Customer' || rfq.status === 'Awaiting Customer Input').length;
  const won = rfqs.filter((rfq) => rfq.status === 'Won').length;
  const lost = rfqs.filter((rfq) => rfq.status === 'Lost').length;
  const conversion = (won / Math.max(1, won + lost)) * 100;
  const wonOrderValue = rfqs.filter((rfq) => rfq.status === 'Won').reduce((sum, rfq) => sum + rfq.totalValue, 0);

  return {
    openPipeline: { label: 'Open Pipeline', value: String(openRfqs.length), tone: 'blue', delta: 'Live' },
    pipelineValue: { label: 'Pipeline Value', value: `₹${pipelineValue.toLocaleString('en-IN')}`, tone: 'purple', delta: 'FY26' },
    pendingApproval: { label: 'Pending Approval', value: String(pendingApproval), tone: 'orange', delta: 'SLA' },
    awaitingWonLost: { label: 'Awaiting Won/Lost', value: String(awaitingWonLost), tone: 'teal', delta: 'Follow-up' },
    won: { label: 'Won', value: String(won), tone: 'green', delta: 'This month' },
    lost: { label: 'Lost', value: String(lost), tone: 'red', delta: 'Review' },
    conversion: { label: 'Conversion', value: `${conversion.toFixed(1)}%`, tone: 'slate', delta: 'Trend' },
    wonOrderValue: { label: 'Won Order Value', value: `₹${wonOrderValue.toLocaleString('en-IN')}`, tone: 'green', delta: 'Revenue' }
  } as const;
}

export function getRecentRfqMovement() {
  return [...rfqs].sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()).slice(0, 5);
}

export function getStatusMix() {
  const counts = { Draft: 0, 'With Operations': 0, 'With Technical': 0, 'Awaiting Customer Input': 0, 'With Purchase': 0, 'Pricing → Operations': 0, 'Pending Plant Head': 0, Approved: 0, 'Quoted to Customer': 0, Won: 0, Lost: 0, 'On Hold (Sales)': 0, 'Sales Order': 0, Rejected: 0 };

  for (const rfq of rfqs) {
    counts[rfq.status] = (counts[rfq.status] ?? 0) + 1;
  }

  return counts;
}
