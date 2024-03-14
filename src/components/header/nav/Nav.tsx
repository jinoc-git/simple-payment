'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import useToastModal from '@/hooks/useToastModal';
import { signout } from '@/lib/auth';

import NavButtonItem from './navButtonItem/NavButtonItem';
import NavLinkItem from './navLinkItem/NavLinkItem';
import { NavigationMenu, NavigationMenuList } from '../../ui/navigation-menu';

import type { Session } from '@supabase/auth-helpers-nextjs';

interface NavProps {
  session: Session | null;
}

const Nav = ({ session }: NavProps) => {
  const router = useRouter();
  const { toast } = useToastModal();

  const isLogin = session !== null;
  const isAdmin = session?.user.user_metadata.role === '관리자';

  const onClickLogout = async () => {
    try {
      await signout();
      router.push('/signin');
      router.refresh();
    } catch (error) {
      if (error instanceof Error) toast.warning(error.message, 2000);
    }
  };

  return (
    <NavigationMenu>
      <NavigationMenuList className=" w-[380px] justify-between">
        {isLogin ? (
          <>
            <NavLinkItem href="/" value="홈" />
            {isAdmin && <NavLinkItem href="/admin" value="관리" />}
            <NavButtonItem value="로그아웃" onClick={onClickLogout} />
          </>
        ) : (
          <>
            <NavLinkItem href="/signin" value="로그인" />
            <NavLinkItem href="/signup" value="회원가입" />
          </>
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Nav;
