"use client";

import * as React from "react";
import Link from "next/link";
import {
  Building2,
  ChevronDown,
  Landmark,
  Menu,
  Mountain,
} from "lucide-react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const Logo = () => (
  <Link href="/" className="flex items-center gap-2" prefetch={false}>
    <Landmark className="h-8 w-8 text-primary" />
    <span className="text-xl font-bold text-primary">BANKA</span>
  </Link>
);

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Logo />
        <div className="hidden md:flex">
          <DesktopNav />
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        <Button className="hidden md:inline-flex" asChild>
          <Link href="/contact">درخواست مشاوره</Link>
        </Button>
      </div>
    </header>
  );
}

const DesktopNav = () => {
  const pathname = usePathname();
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {NAV_LINKS.map((link) =>
          link.children ? (
            <NavigationMenuItem key={link.label}>
              <NavigationMenuTrigger>{link.label}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {link.children.map((child) => (
                    <ListItem
                      key={child.label}
                      title={child.label}
                      href={child.href}
                    >
                      {/* Optional description here */}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={link.href}>
              <Link href={link.href} legacyBehavior passHref>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  active={pathname === link.href}
                >
                  {link.label}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          )
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const MobileNav = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open main menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="p-4">
          <div className="mb-4">
            <Logo />
          </div>
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <SheetClose asChild key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-md p-2 text-right font-medium hover:bg-accent"
                >
                  {link.label}
                </Link>
              </SheetClose>
            ))}
            <Button className="mt-4" asChild>
              <Link href="/contact">درخواست مشاوره</Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
