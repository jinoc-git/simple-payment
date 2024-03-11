import { redirect } from 'next/navigation';

import { getAuthSession } from '@/lib/serverActions';

export default async function Home() {
  const session = await getAuthSession();

  if (!session) redirect('/signin');

  return (
    <main className="min-h-[calc(100vh-48px)] bg-gray-100">
      <div>상품 목록</div>
    </main>
  );
}
