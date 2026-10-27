import { Customer, Rfq, Role, Stage } from '@/lib/types';

export const currentUser = {
  name: 'Anand Kumar',
  role: 'Operations',
  email: 'anand.kumar@vezewire.com'
};

export const customers: Customer[] = [
  { id: 'c-1', name: 'Aarav Controls', contact: 'Rohit Mehta', email: 'rohit@aaravcontrols.com', phone: '+91 98765 12345', company: 'Aarav Controls' },
  { id: 'c-2', name: 'BluePeak Automation', contact: 'Neha Verma', email: 'neha@bluepeakautomation.in', phone: '+91 98200 11223', company: 'BluePeak Automation' },
  { id: 'c-3', name: 'Crestline Switchgear', contact: 'Vikram Shah', email: 'vikram@crestlineswitchgear.com', phone: '+91 98901 55567', company: 'Crestline Switchgear' },
  { id: 'c-4', name: 'Dynamo Industries', contact: 'Sana Khan', email: 'sana@dynamoindustries.in', phone: '+91 98111 87513', company: 'Dynamo Industries' },
  { id: 'c-5', name: 'Elite Robotics', contact: 'Arjun Pillai', email: 'arjun@eliterobotics.co', phone: '+91 99600 33445', company: 'Elite Robotics' },
  { id: 'c-6', name: 'Fabricate One', contact: 'Priya Nair', email: 'priya@fabricateone.in', phone: '+91 96543 22009', company: 'Fabricate One' },
  { id: 'c-7', name: 'Gleam Components', contact: 'Rahul Sinha', email: 'rahul@gleamcomponents.com', phone: '+91 93455 67890', company: 'Gleam Components' },
  { id: 'c-8', name: 'Horizon Drives', contact: 'Aditi Joshi', email: 'aditi@horizondrives.in', phone: '+91 99080 44167', company: 'Horizon Drives' },
  { id: 'c-9', name: 'IronFlow Systems', contact: 'Karan Singh', email: 'karan@ironflowsystems.in', phone: '+91 97313 88790', company: 'IronFlow Systems' },
  { id: 'c-10', name: 'Jupiter Electric', contact: 'Deepa Menon', email: 'deepa@jupiterelectric.com', phone: '+91 92999 10321', company: 'Jupiter Electric' }
];

export const rfqs: Rfq[] = [
  {
    id: 'rfq-001', rfqNumber: 'RFQ-2026-001', customerId: 'c-1', customerName: 'Aarav Controls', productName: 'Control Panel Assembly', partNumber: 'CPA-08', quantity: 180, targetDeliveryDate: '2026-11-05', status: 'With Technical', stage: 'Technical', assignee: 'Nisha', department: 'Technical', currentRole: 'Technical', lastUpdated: '2026-10-27T11:00:00Z', createdAt: '2026-10-21T09:30:00Z', updatedAt: '2026-10-27T11:00:00Z', totalValue: 85600, notes: ['BOM under review', 'Client requested compact enclosure'], documents: [{ id:'doc-1', name:'spec-sheet.pdf', url:'#', type:'PDF'}], activity: [{id:'a-1', at:'2026-10-27T11:00:00Z', action:'Assigned to Technical', user:'Anand', details:'Escalated for BOM review'}], productLines: [{ sku:'CPA-08-A', description:'Assembly enclosure', qty: 180, unitPrice: 420, total: 75600 }, { sku:'CPA-08-B', description:'Control unit', qty: 180, unitPrice: 55, total: 9900 }]
  },
  {
    id: 'rfq-002', rfqNumber: 'RFQ-2026-002', customerId: 'c-2', customerName: 'BluePeak Automation', productName: 'VFD Control Cabinet', partNumber: 'VCC-12', quantity: 64, targetDeliveryDate: '2026-11-12', status: 'Approved', stage: 'Plant Head approval', assignee: 'Suresh', department: 'Plant Head', currentRole: 'Plant Head', lastUpdated: '2026-10-25T15:45:00Z', createdAt: '2026-10-18T08:15:00Z', updatedAt: '2026-10-25T15:45:00Z', totalValue: 124000, notes: ['Pricing reviewed', 'Need customer confirmation'], documents: [{ id:'doc-2', name:'cabinet-quote.pdf', url:'#', type:'PDF'}], activity: [{id:'a-2', at:'2026-10-25T15:45:00Z', action:'Approved by Plant Head', user:'Plant Head', details:'Quotation package approved'}], productLines: [{ sku:'VCC-12-A', description:'Cabinet assembly', qty: 64, unitPrice: 1500, total: 96000 }, { sku:'VCC-12-B', description:'VFD integration kit', qty: 64, unitPrice: 437.5, total: 28000 }]
  },
  {
    id: 'rfq-003', rfqNumber: 'RFQ-2026-003', customerId: 'c-3', customerName: 'Crestline Switchgear', productName: 'Power Distribution Unit', partNumber: 'PDU-44', quantity: 92, targetDeliveryDate: '2026-11-10', status: 'Quoted to Customer', stage: 'BDE sends invoice', assignee: 'Arun', department: 'BDE', currentRole: 'BDE', lastUpdated: '2026-10-23T14:20:00Z', createdAt: '2026-10-16T12:00:00Z', updatedAt: '2026-10-23T14:20:00Z', totalValue: 98000, notes: ['Quotation sent', 'Need commercial feedback'], documents: [{ id:'doc-3', name:'commercial-offer.pdf', url:'#', type:'PDF'}], activity: [{id:'a-3', at:'2026-10-23T14:20:00Z', action:'Quoted to customer', user:'Arun', details:'Submitted quotation package'}], productLines: [{ sku:'PDU-44-A', description:'Distribution panel', qty: 92, unitPrice: 950, total: 87400 }, { sku:'PDU-44-B', description:'External breaker kit', qty: 92, unitPrice: 115, total: 10580 }]
  },
  {
    id: 'rfq-004', rfqNumber: 'RFQ-2026-004', customerId: 'c-4', customerName: 'Dynamo Industries', productName: 'Sensor Junction Box', partNumber: 'SJB-22', quantity: 240, targetDeliveryDate: '2026-11-16', status: 'With Purchase', stage: 'Purchase', assignee: 'Pooja', department: 'Purchase', currentRole: 'Purchase', lastUpdated: '2026-10-26T09:50:00Z', createdAt: '2026-10-20T10:10:00Z', updatedAt: '2026-10-26T09:50:00Z', totalValue: 67000, notes: ['Supplier shortlist ready'], documents: [{id:'doc-4', name:'supplier-list.xlsx', url:'#', type:'XLSX'}], activity: [{id:'a-4', at:'2026-10-26T09:50:00Z', action:'Supplier evaluation', user:'Pooja', details:'Three suppliers shortlisted'}], productLines: [{ sku:'SJB-22-A', description:'Junction box', qty: 240, unitPrice: 210, total: 50400 }, { sku:'SJB-22-B', description:'Sealing kit', qty: 240, unitPrice: 69, total: 16560 }]
  },
  {
    id: 'rfq-005', rfqNumber: 'RFQ-2026-005', customerId: 'c-5', customerName: 'Elite Robotics', productName: 'Servo Drive Enclosure', partNumber: 'SDE-17', quantity: 136, targetDeliveryDate: '2026-11-18', status: 'Pending Plant Head', stage: 'Plant Head approval', assignee: 'Ritika', department: 'Plant Head', currentRole: 'Plant Head', lastUpdated: '2026-10-27T08:15:00Z', createdAt: '2026-10-17T07:24:00Z', updatedAt: '2026-10-27T08:15:00Z', totalValue: 115200, notes: ['Awaiting plant review'], documents: [{id:'doc-5', name:'enclosure-spec.pdf', url:'#', type:'PDF'}], activity: [{id:'a-5', at:'2026-10-27T08:15:00Z', action:'Submitted for approval', user:'Ritika', details:'Commercial package prepared'}], productLines: [{ sku:'SDE-17-A', description:'Drive enclosure', qty: 136, unitPrice: 780, total: 106080 }, { sku:'SDE-17-B', description:'Cooling module', qty: 136, unitPrice: 67, total: 9120 }]
  },
  {
    id: 'rfq-006', rfqNumber: 'RFQ-2026-006', customerId: 'c-6', customerName: 'Fabricate One', productName: 'Custom Heat Exchanger', partNumber: 'CHE-24', quantity: 50, targetDeliveryDate: '2026-11-22', status: 'Sales Order', stage: 'Sales Order', assignee: 'Mahesh', department: 'Operations', currentRole: 'Operations', lastUpdated: '2026-10-21T16:10:00Z', createdAt: '2026-10-12T09:44:00Z', updatedAt: '2026-10-21T16:10:00Z', totalValue: 186500, salesOrderNumber: 'SO-2026-014', invoiceId: 'INV-2026-091', notes: ['Production release completed'], documents: [{id:'doc-6', name:'heat-exchanger-drawing.pdf', url:'#', type:'PDF'}], activity: [{id:'a-6', at:'2026-10-21T16:10:00Z', action:'Sales order created', user:'Mahesh', details:'Production and procurement started'}], productLines: [{ sku:'CHE-24-A', description:'Heat exchanger body', qty: 50, unitPrice: 3000, total: 150000 }, { sku:'CHE-24-B', description:'Core assembly', qty: 50, unitPrice: 730, total: 36500 }]
  },
  {
    id: 'rfq-007', rfqNumber: 'RFQ-2026-007', customerId: 'c-7', customerName: 'Gleam Components', productName: 'IoT Power Gateway', partNumber: 'IPG-35', quantity: 220, targetDeliveryDate: '2026-11-28', status: 'Won', stage: 'Won / Lost / On Hold', assignee: 'Ravi', department: 'BDE', currentRole: 'BDE', lastUpdated: '2026-10-18T13:10:00Z', createdAt: '2026-10-08T10:35:00Z', updatedAt: '2026-10-18T13:10:00Z', totalValue: 210000, notes: ['Customer confirmed order'], documents: [{id:'doc-7', name:'gateway-quote.pdf', url:'#', type:'PDF'}], activity: [{id:'a-7', at:'2026-10-18T13:10:00Z', action:'Won', user:'Ravi', details:'Customer accepted quotation'}], productLines: [{ sku:'IPG-35-A', description:'Gateway PCB', qty: 220, unitPrice: 700, total: 154000 }, { sku:'IPG-35-B', description:'Firmware kit', qty: 220, unitPrice: 255, total: 56100 }]
  },
  {
    id: 'rfq-008', rfqNumber: 'RFQ-2026-008', customerId: 'c-8', customerName: 'Horizon Drives', productName: 'Motor Control Board', partNumber: 'MCB-41', quantity: 320, targetDeliveryDate: '2026-11-29', status: 'Awaiting Customer Input', stage: 'BDE sends invoice', assignee: 'Priya', department: 'BDE', currentRole: 'BDE', lastUpdated: '2026-10-24T10:00:00Z', createdAt: '2026-10-14T09:10:00Z', updatedAt: '2026-10-24T10:00:00Z', totalValue: 165000, notes: ['Waiting on customer design signoff'], documents: [{id:'doc-8', name:'design-feedback.pdf', url:'#', type:'PDF'}], activity: [{id:'a-8', at:'2026-10-24T10:00:00Z', action:'Awaiting customer input', user:'Priya', details:'Customer design review pending'}], productLines: [{ sku:'MCB-41-A', description:'Control board', qty: 320, unitPrice: 420, total: 134400 }, { sku:'MCB-41-B', description:'Connector set', qty: 320, unitPrice: 95, total: 30400 }]
  },
  {
    id: 'rfq-009', rfqNumber: 'RFQ-2026-009', customerId: 'c-9', customerName: 'SEI Circuits', productName: 'new RFQ for 6 cable models', partNumber: 'BOM-BER-091026', quantity: 1, targetDeliveryDate: '2026-10-30', status: 'With Technical', stage: 'Technical', assignee: 'Raja', department: 'Technical', currentRole: 'Technical', lastUpdated: '2026-10-27T10:35:00', createdAt: '2026-10-13T10:19:00', updatedAt: '2026-10-27T10:35:00', totalValue: 0, notes: ['Customer clarification and BOM review in progress'], documents: [], activity: [{id:'a-9', at:'2026-10-13T10:19:00', action:'RFQ created', user:'Sheetal', details:'Unique ID RFQ-2026-009 · Source: email'}], productLines: []
  },
  {
    id: 'rfq-010', rfqNumber: 'RFQ-2026-010', customerId: 'c-10', customerName: 'Jupiter Electric', productName: 'Transformer Cooling Unit', partNumber: 'TCU-19', quantity: 48, targetDeliveryDate: '2026-12-05', status: 'Lost', stage: 'Won / Lost / On Hold', assignee: 'Kavya', department: 'BDE', currentRole: 'BDE', lastUpdated: '2026-10-19T16:40:00Z', createdAt: '2026-10-11T09:28:00Z', updatedAt: '2026-10-19T16:40:00Z', totalValue: 142500, notes: ['Customer chose competitor'], documents: [{id:'doc-10', name:'customer-feedback.pdf', url:'#', type:'PDF'}], activity: [{id:'a-10', at:'2026-10-19T16:40:00Z', action:'Lost', user:'Kavya', details:'Commercial outcome recorded as lost'}], productLines: [{ sku:'TCU-19-A', description:'Cooling unit', qty: 48, unitPrice: 2400, total: 115200 }, { sku:'TCU-19-B', description:'Controls pack', qty: 48, unitPrice: 570, total: 27300 }]
  },
  {
    id: 'rfq-011', rfqNumber: 'RFQ-2026-011', customerId: 'c-2', customerName: 'BluePeak Automation', productName: 'PLC Panel Board', partNumber: 'PPB-31', quantity: 120, targetDeliveryDate: '2026-12-11', status: 'With Operations', stage: 'Operations', assignee: 'Anand', department: 'Operations', currentRole: 'Operations', lastUpdated: '2026-10-27T12:25:00Z', createdAt: '2026-10-24T07:30:00Z', updatedAt: '2026-10-27T12:25:00Z', totalValue: 79000, notes: ['Operations assigned technical and purchase review'], documents: [{id:'doc-11', name:'panel-layout.pdf', url:'#', type:'PDF'}], activity: [{id:'a-11', at:'2026-10-27T12:25:00Z', action:'Assigned to Operations', user:'Anand', details:'Technical and purchase tasks assigned'}], productLines: [{ sku:'PPB-31-A', description:'Panel board', qty: 120, unitPrice: 560, total: 67200 }, { sku:'PPB-31-B', description:'I/O module', qty: 120, unitPrice: 98, total: 11760 }]
  },
  {
    id: 'rfq-012', rfqNumber: 'RFQ-2026-012', customerId: 'c-4', customerName: 'Dynamo Industries', productName: 'MCC Panel Upgrade', partNumber: 'MCC-73', quantity: 28, targetDeliveryDate: '2026-12-15', status: 'Rejected', stage: 'Plant Head approval', assignee: 'Shiv', department: 'Plant Head', currentRole: 'Plant Head', lastUpdated: '2026-10-22T09:15:00Z', createdAt: '2026-10-09T11:40:00Z', updatedAt: '2026-10-22T09:15:00Z', totalValue: 83500, notes: ['Project rejected due to budget constraints'], documents: [{id:'doc-12', name:'rejection-notes.pdf', url:'#', type:'PDF'}], activity: [{id:'a-12', at:'2026-10-22T09:15:00Z', action:'Rejected', user:'Shiv', details:'Plant Head rejected commercial package'}], productLines: [{ sku:'MCC-73-A', description:'Panel upgrade kit', qty: 28, unitPrice: 2600, total: 72800 }, { sku:'MCC-73-B', description:'Monitoring controller', qty: 28, unitPrice: 382, total: 10696 }]
  },
  {
    id: 'rfq-013', rfqNumber: 'RFQ-2026-013', customerId: 'c-1', customerName: 'Aarav Controls', productName: 'Industrial Relay Rack', partNumber: 'IRR-15', quantity: 110, targetDeliveryDate: '2026-12-19', status: 'With Technical', stage: 'Technical', assignee: 'Nisha', department: 'Technical', currentRole: 'Technical', lastUpdated: '2026-10-27T13:40:00Z', createdAt: '2026-10-13T08:20:00Z', updatedAt: '2026-10-27T13:40:00Z', totalValue: 63000, notes: ['Missing relay data'], documents: [{id:'doc-13', name:'relay-info.pdf', url:'#', type:'PDF'}], activity: [{id:'a-13', at:'2026-10-27T13:40:00Z', action:'Technical review', user:'Nisha', details:'Waiting for missing relay data'}], productLines: [{ sku:'IRR-15-A', description:'Relay rack', qty: 110, unitPrice: 470, total: 51700 }, { sku:'IRR-15-B', description:'Filter block', qty: 110, unitPrice: 102, total: 11220 }]
  },
  {
    id: 'rfq-014', rfqNumber: 'RFQ-2026-014', customerId: 'c-6', customerName: 'Fabricate One', productName: 'Compact Pneumatic Valve', partNumber: 'CPV-11', quantity: 410, targetDeliveryDate: '2026-12-22', status: 'Pricing → Operations', stage: 'Operations', assignee: 'Anand', department: 'Operations', currentRole: 'Operations', lastUpdated: '2026-10-23T11:25:00Z', createdAt: '2026-10-15T12:18:00Z', updatedAt: '2026-10-23T11:25:00Z', totalValue: 118400, notes: ['Pricing returned for validation'], documents: [{id:'doc-14', name:'valve-pricing.xlsx', url:'#', type:'XLSX'}], activity: [{id:'a-14', at:'2026-10-23T11:25:00Z', action:'Returned to Operations', user:'Anand', details:'Pricing package reassessed'}], productLines: [{ sku:'CPV-11-A', description:'Valve body', qty: 410, unitPrice: 220, total: 90200 }, { sku:'CPV-11-B', description:'Pneumatic actuator', qty: 410, unitPrice: 69, total: 28290 }]
  },
  {
    id: 'rfq-015', rfqNumber: 'RFQ-2026-015', customerId: 'c-9', customerName: 'IronFlow Systems', productName: 'Battery Management Module', partNumber: 'BMM-76', quantity: 86, targetDeliveryDate: '2027-01-03', status: 'On Hold (Sales)', stage: 'Won / Lost / On Hold', assignee: 'Kavya', department: 'BDE', currentRole: 'BDE', lastUpdated: '2026-10-20T13:09:00Z', createdAt: '2026-10-05T09:31:00Z', updatedAt: '2026-10-20T13:09:00Z', totalValue: 96000, notes: ['Customer placed project on hold'], documents: [{id:'doc-15', name:'hold-notice.pdf', url:'#', type:'PDF'}], activity: [{id:'a-15', at:'2026-10-20T13:09:00Z', action:'On Hold', user:'Kavya', details:'Project paused pending customer decision'}], productLines: [{ sku:'BMM-76-A', description:'Management module', qty: 86, unitPrice: 950, total: 81700 }, { sku:'BMM-76-B', description:'Sensor harness', qty: 86, unitPrice: 166, total: 14276 }]
  },
  {
    id: 'rfq-016', rfqNumber: 'RFQ-2026-016', customerId: 'c-3', customerName: 'Crestline Switchgear', productName: 'Load Monitoring Device', partNumber: 'LMD-62', quantity: 310, targetDeliveryDate: '2027-01-05', status: 'Approved', stage: 'Plant Head approval', assignee: 'Ritika', department: 'Plant Head', currentRole: 'Plant Head', lastUpdated: '2026-10-18T12:05:00Z', createdAt: '2026-10-03T10:11:00Z', updatedAt: '2026-10-18T12:05:00Z', totalValue: 150200, notes: ['Approved after technical clearance'], documents: [{id:'doc-16', name:'device-approval.pdf', url:'#', type:'PDF'}], activity: [{id:'a-16', at:'2026-10-18T12:05:00Z', action:'Approved', user:'Ritika', details:'Quotation approved for customer sharing'}], productLines: [{ sku:'LMD-62-A', description:'Monitoring device', qty: 310, unitPrice: 420, total: 130200 }, { sku:'LMD-62-B', description:'Calibration kit', qty: 310, unitPrice: 64, total: 19840 }]
  },
  {
    id: 'rfq-017', rfqNumber: 'RFQ-2026-017', customerId: 'c-5', customerName: 'Elite Robotics', productName: 'Compact Motor Drive', partNumber: 'CMD-29', quantity: 200, targetDeliveryDate: '2027-01-08', status: 'With Purchase', stage: 'Purchase', assignee: 'Pooja', department: 'Purchase', currentRole: 'Purchase', lastUpdated: '2026-10-26T15:45:00Z', createdAt: '2026-10-24T14:40:00Z', updatedAt: '2026-10-26T15:45:00Z', totalValue: 128600, notes: ['Supplier quotation due this week'], documents: [{id:'doc-17', name:'supplier-quote.pdf', url:'#', type:'PDF'}], activity: [{id:'a-17', at:'2026-10-26T15:45:00Z', action:'Supplier sourcing', user:'Pooja', details:'Requested supplier quote'}], productLines: [{ sku:'CMD-29-A', description:'Motor drive', qty: 200, unitPrice: 520, total: 104000 }, { sku:'CMD-29-B', description:'Cooling fan', qty: 200, unitPrice: 123, total: 24600 }]
  }
];

export const statusOptions = [
  'Draft',
  'With Operations',
  'With Technical',
  'Awaiting Customer Input',
  'With Purchase',
  'Pricing → Operations',
  'Pending Plant Head',
  'Approved',
  'Quoted to Customer',
  'Won',
  'Lost',
  'On Hold (Sales)',
  'Sales Order',
  'Rejected'
] as const;

export const stageDetails = [
  { title: 'BDE creates RFQ', role: 'BDE', description: 'Capture customer requirements from WhatsApp, email, or calls.', count: 9 },
  { title: 'Operations', role: 'Operations', description: 'Receive RFQ and assign technical and purchase tasks.', count: 4 },
  { title: 'Technical', role: 'Technical', description: 'Review BOM, missing information, and technical feasibility.', count: 2 },
  { title: 'Purchase', role: 'Purchase', description: 'Record supplier sourcing and purchasing notes.', count: 4 },
  { title: 'Plant Head approval', role: 'Plant Head', description: 'Review the quotation package and approve or reject.', count: 3 },
  { title: 'BDE sends invoice', role: 'BDE', description: 'Upload customer invoice or related commercial documents.', count: 2 },
  { title: 'Won / Lost / On Hold', role: 'Sales', description: 'Record customer commercial outcome after feedback.', count: 3 },
  { title: 'Sales Order', role: 'Operations', description: 'Create sales order for won opportunities and track progress.', count: 1 }
] as const;

export const navItems = [
  { label: 'Dashboard', href: '/' },
  { label: 'Inbox', href: '/inbox' },
  { label: 'All RFQs', href: '/rfqs' },
  { label: 'Handoff Flow', href: '/handoff' }
];
