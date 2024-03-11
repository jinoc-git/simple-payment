import React from 'react';

import { getAuthSession } from '@/lib/serverActions';

import Nav from './nav/Nav';

const Header = async () => {
  const session = await getAuthSession();

  return (
    <header className=" flex justify-center w-full h-[48px]">
      <Nav session={session} />
    </header>
  );
};

export default Header;
