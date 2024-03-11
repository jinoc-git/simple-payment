'use client';

import React from 'react';

import {
  NavigationMenuItem,
  NavigationMenuLink,
} from '@radix-ui/react-navigation-menu';
import Link from 'next/link';

import { navigationMenuTriggerStyle } from '../../../ui/navigation-menu';

interface NavLinkItemProps {
  href: string;
  value: string;
}

const NavLinkItem = (props: NavLinkItemProps) => {
  const { href, value } = props;

  return (
    <NavigationMenuItem>
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          {value}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};

export default NavLinkItem;
