import React from 'react';

import { redirect } from 'next/navigation';

import AddProduct from '@/components/admin-page/AddProduct';
import { getAuthSession } from '@/lib/serverActions';

export default async function Admin() {
  const session = await getAuthSession();

  if (!session) redirect('/signin');

  const isAdmin = session?.user.user_metadata.role === '관리자';
  if (!isAdmin) redirect('/');

  return (
    <main className="min-h-[calc(100vh-48px)] flex-box bg-gray-100">
      <div>
        <AddProduct />
      </div>
    </main>
  );
}
