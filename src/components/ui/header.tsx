"use client";
import { signOut } from "next-auth/react";
import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";

export default function Header() {
  return (
    <Navbar shouldHideOnScroll maxWidth="full">
      <NavbarBrand>
        <Link href="/" className="cursor-pointer">
          <img src="/maybank-logo.svg" className="w-40" />
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button variant="solid" size="sm" className="font-medium" onClick={() => signOut()}>
            Sign Out
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
