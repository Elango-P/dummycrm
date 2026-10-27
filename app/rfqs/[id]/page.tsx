import { RfqDetailPage } from '@/components/rfq/RfqDetailPage';

export default function RfqDetailRoute({ params }: { params: { id: string } }) {
  return <RfqDetailPage id={decodeURIComponent(params.id)} />;
}
