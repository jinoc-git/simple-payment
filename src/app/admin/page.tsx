import React from 'react';

import { redirect } from 'next/navigation';

import { getAuthSession } from '@/lib/serverActions';

export default async function page() {
  const session = await getAuthSession();

  if (!session) redirect('/signin');

  const isAdmin = session?.user.user_metadata.role === '관리자';
  if (!isAdmin) redirect('/');

  return (
    <main className="min-h-[calc(100vh-88px)] flex-box bg-gray-100">
      <div>상품 추가</div>
    </main>
  );
}
