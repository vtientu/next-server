"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import navigation from "@/data/navigation.json";

type Navigation = {
  title: string;
  href: string;
  children: Navigation[];
};

const navigationData: Navigation[] = navigation.data;

export function MenuCategory() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex flex-row">
        {navigationData.map((item) => (
          <NavigationMenuItem key={item.title} className="relative">
            {item.children.length > 0 ? (
              <NavigationMenuTrigger className="uppercase bg-bg-gray-700 text-background hover:bg-bg-gray-700 hover:data-[state=open]:bg-bg-gray-700 focus:bg-bg-gray-700 focus:data-[state=open]:bg-bg-gray-700 hover:text-background focus:text-background data-[state=open]:bg-bg-gray-700 data-[state=open]:text-background">
                {item.title}
              </NavigationMenuTrigger>
            ) : (
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "uppercase bg-bg-gray-700 text-background hover:bg-bg-gray-700 hover:data-[state=open]:bg-bg-gray-700 focus:bg-bg-gray-700 focus:data-[state=open]:bg-bg-gray-700 hover:text-background focus:text-background data-[state=open]:bg-bg-gray-700 data-[state=open]:text-background"
                  )}
                >
                  {item.title}
                </NavigationMenuLink>
              </Link>
            )}
            {item.children.length > 0 && (
              <NavigationMenuContent className="absolute min-w-[120px] top-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]">
                <ul>
                  {item.children.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    />
                  ))}
                </ul>
              </NavigationMenuContent>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = ({ className, title, href }: ListItemProps) => {
  return (
    <li>
      <NavigationMenuLink asChild className="w-full">
        <Link
          href={href}
          className={cn(
            "block select-none space-y-2 p-2 font-medium hover:text-blue-500",
            className
          )}
        >
          <div className="text-sm leading-none">{title}</div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

type ListItemProps = {
  className?: string;
  title: string;
  href: string;
};
