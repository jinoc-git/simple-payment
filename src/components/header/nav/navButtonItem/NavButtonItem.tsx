'use client';

import React from 'react';

import { NavigationMenuItem } from '@radix-ui/react-navigation-menu';

import { Button } from '@/components/ui/button';

interface NavButtonItemProps {
  value: string;
  onClick?: () => void;
}

const NavButtonItem = (props: NavButtonItemProps) => {
  const { value, onClick } = props;

  return (
    <NavigationMenuItem>
      <Button variant={'ghost'} onClick={onClick}>
        {value}
      </Button>
    </NavigationMenuItem>
  );
};

export default NavButtonItem;
