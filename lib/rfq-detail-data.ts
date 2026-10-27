import type { ActivityLog } from '@/lib/types';

export type RfqDetailData = {
  contact: string;
  description: string;
  roleTimelines: { role: string; duration: string; due: string; status: string }[];
  activity: ActivityLog[];
};

export const rfqDetailData: Record<string, RfqDetailData> = {
  'RFQ-2026-009': {
    contact: '1165609311',
    description: 'new RFQ for 6 cable models.',
    roleTimelines: [
      { role: 'Operations', duration: '12 hours', due: '13 Oct, 10:19 pm', status: 'done' },
      { role: 'Technical', duration: '24 hours', due: '28 Oct, 10:35 am', status: 'pending' },
      { role: 'Purchase', duration: '48 hours', due: '30 Oct, 10:35 am (after Technical)', status: 'pending' }
    ],
    activity: [
      { id: 'a-009-1', at: '2026-10-27T10:35:00', action: 'Assigned to Technical (Purchase pre-set)', user: 'Sakthivel', details: '' },
      { id: 'a-009-2', at: '2026-10-27T10:35:00', action: 'Purchase timeline set', user: 'Sakthivel', details: '48 hours · due 30/10/2026, 10:35:12 am (starts after Technical due)' },
      { id: 'a-009-3', at: '2026-10-27T10:35:00', action: 'Technical timeline set', user: 'Sakthivel', details: '24 hours — Clarification received kindly check and complete the BOM · due 28/10/2026, 10:35:12 am' },
      { id: 'a-009-4', at: '2026-10-22T03:32:00', action: 'Customer inputs received', user: 'Sheetal', details: 'Received inputs from customer. Part No. 7199 • Should PVC sleeves be used in the marked areas? Yes please. • Could you please share the harness clip details corresponding to the attached images? We do not have further information. Please consider alternative clips. • Should a single-core wire be used for the harness? Please consider stranded wires. • Part No. 8837 • Please confirm the type and specifications of the power cord required. Plug type “I” for Argentina, 220VAC 10A. • Kindly share the datasheets and manufacturer part numbers for the 3-pin connector and terminal.' },
      { id: 'a-009-5', at: '2026-10-15T10:22:00', action: 'Missing inputs — forwarded to BDE', user: 'Sakthivel', details: 'Required clarification for the harness: 7199 — PVC sleeve and harness clip details; 8837 — type of power chord required; 3-pin connector and terminal datasheet and manufacturer number. Mail shared for sales to share with customer for clarification.' },
      { id: 'a-009-6', at: '2026-10-14T12:33:00', action: 'Missing inputs — sent to Operations', user: 'Raja', details: 'Required clarification for the harness: 7199 — PVC sleeve and harness clip details; 8837 — type of power chord required; 3-pin connector and terminal datasheet and manufacturer number. Mail shared for sales to share with customer for clarification.' },
      { id: 'a-009-7', at: '2026-10-14T11:44:00', action: 'Assigned to Technical (Purchase pre-set)', user: 'Sakthivel', details: '' },
      { id: 'a-009-8', at: '2026-10-14T11:44:00', action: 'Purchase timeline set', user: 'Sakthivel', details: '48 hours · due 17/10/2026, 11:44:28 am (starts after Technical due)' },
      { id: 'a-009-9', at: '2026-10-14T11:44:00', action: 'Technical timeline set', user: 'Sakthivel', details: '24 hours — Kindly share the clarification to customer · due 15/10/2026, 11:44:28 am' },
      { id: 'a-009-10', at: '2026-10-13T10:19:00', action: 'Assigned to Operations', user: 'Sheetal', details: 'Assigned right after RFQ creation · 12-hour Operations SLA' },
      { id: 'a-009-11', at: '2026-10-13T10:19:00', action: 'RFQ created', user: 'Sheetal', details: 'Unique ID RFQ-2026-009 · Source: email' }
    ]
  }
};

export const rfqDocuments: Record<string, { id: string; name: string; url: string }[]> = {
  'RFQ-2026-009': [
    { id: 'doc-009-1', name: 'BOM-BER-091026.xlsx', url: '#' },
    { id: 'doc-009-2', name: 'CHICOTE SEÑALES controlador BB.pdf', url: '#' },
    { id: 'doc-009-3', name: 'CHICOTE UART controlador BB.pdf', url: '#' },
    { id: 'doc-009-4', name: 'CHICOTE borneras de potencia controlador BB.pdf', url: '#' },
    { id: 'doc-009-5', name: 'CHICOTE borneras de señales controlador BB.pdf', url: '#' },
    { id: 'doc-009-6', name: 'CHICOTE I2C controlador BB.pdf', url: '#' },
    { id: 'doc-009-7', name: 'CHICOTE potencia controlador BB.pdf', url: '#' },
    { id: 'doc-009-8', name: 'Vezewire Clarification - BET - 091026 Harness Kit (1).xlsx', url: '#' },
    { id: 'doc-009-9', name: 'BOM-BER-091026 Customer Inputs.pdf', url: '#' }
  ]
};
