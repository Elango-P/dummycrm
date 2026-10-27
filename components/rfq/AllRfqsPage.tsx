'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { rfqs, statusOptions } from '@/lib/mock-data';

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

export function AllRfqsPage() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const filtered = useMemo(() => {
    return rfqs.filter((rfq) => {
      const matchesSearch = !search || rfq.rfqNumber.toLowerCase().includes(search.toLowerCase()) || rfq.customerName.toLowerCase().includes(search.toLowerCase()) || rfq.productName.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = statusFilter === 'All' || rfq.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [search, statusFilter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const paged = filtered.slice((page - 1) * pageSize, page * pageSize);

  const inProgress = rfqs.filter((rfq) => !['Won', 'Lost', 'Rejected', 'Sales Order'].includes(rfq.status)).length;
  const completed = rfqs.filter((rfq) => ['Won', 'Lost', 'Rejected', 'Sales Order'].includes(rfq.status)).length;

  return (
    <div className="page-shell space-y-5">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">All RFQs</h1>
          <p className="mt-1 text-sm text-[#6b7280]">In-progress records appear first and completed records follow.</p>
        </div>
        <div className="text-right text-sm text-[#6b7280]">
          <div>{inProgress} in progress</div>
          <div>{completed} completed</div>
        </div>
      </div>

      <div className="card p-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <input value={search} onChange={(e) => { setPage(1); setSearch(e.target.value); }} placeholder="Search RFQ, customer, product" className="w-full rounded-xl border border-[#e5e7eb] bg-white px-3 py-2 text-sm text-[#172036] outline-none ring-0 md:max-w-[440px]" />
          <select value={statusFilter} onChange={(e) => { setPage(1); setStatusFilter(e.target.value); }} className="rounded-xl border border-[#e5e7eb] bg-white px-3 py-2 text-sm text-[#172036] outline-none md:min-w-[180px]">
            <option value="All">All statuses</option>
            {statusOptions.map((status) => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-left text-sm">
            <thead className="bg-[#f8f9fc] text-[#55627d]">
              <tr>
                <th className="px-4 py-3 font-semibold">RFQ number</th>
                <th className="px-4 py-3 font-semibold">Customer / product</th>
                <th className="px-4 py-3 font-semibold">Current status</th>
                <th className="px-4 py-3 font-semibold">Assigned employee</th>
                <th className="px-4 py-3 font-semibold">Department</th>
                <th className="px-4 py-3 font-semibold">Last updated</th>
                <th className="px-4 py-3 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paged.map((rfq) => (
                <tr key={rfq.id} className="table-row">
                  <td className="px-4 py-3 font-semibold text-[#172036]">{rfq.rfqNumber}</td>
                  <td className="px-4 py-3">
                    <div className="font-medium">{rfq.customerName}</div>
                    <div className="text-[#6b7280]">{rfq.productName}</div>
                  </td>
                  <td className="px-4 py-3"><span className={`badge ${statusColors[rfq.status] ?? 'status-default'}`}>{rfq.status}</span></td>
                  <td className="px-4 py-3">{rfq.assignee}</td>
                  <td className="px-4 py-3">{rfq.department}</td>
                  <td className="px-4 py-3 text-[#6b7280]">{new Date(rfq.lastUpdated).toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</td>
                  <td className="px-4 py-3">
                    <Link href={`/rfqs/${encodeURIComponent(rfq.id)}`} className="inline-flex rounded-md border border-[#dfe5ee] bg-white px-2.5 py-1.5 text-xs font-semibold text-[#1f2a44] hover:bg-[#f7f9fc]">Open</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm text-[#4b5563]">
        <div>Showing {filtered.length === 0 ? 0 : (page - 1) * pageSize + 1}-{Math.min(page * pageSize, filtered.length)} of {filtered.length}</div>
        <div className="flex gap-2">
          <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1} className="rounded-md border border-[#e5e7eb] bg-white px-3 py-1.5 disabled:cursor-not-allowed disabled:opacity-50">Previous</button>
          <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages} className="rounded-md border border-[#e5e7eb] bg-white px-3 py-1.5 disabled:cursor-not-allowed disabled:opacity-50">Next</button>
        </div>
      </div>
    </div>
  );
}
