import React from 'react'
import Theme from './Theme'
import { Dropdown, DropdownItem } from "flowbite-react";
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

export default function Nav() {
  return (
    <Navbar className='fixed z-10 flex flex-row justify-between w-full py-5 bg-zinc-50 '>
    <NavbarBrand href="https://flowbite-react.com">
      <img src="img/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite React Logo" />
      <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbase</span>
    </NavbarBrand>
    <div className="flex gap-5 md:order-2">
      <Button color="purple" className='hidden sm:block'>Get started</Button>
      <Theme />
      <NavbarToggle />
    </div>
    <NavbarCollapse>
      <NavbarLink href="#" active>
        Home
      </NavbarLink>
      <NavbarLink href="#">Explore</NavbarLink>
      <NavbarLink href="#">Product
      {/* <Dropdown label="Dropdown button">
      <DropdownItem>Product</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem>Earnings</DropdownItem>
      <DropdownItem>Sign out</DropdownItem>
    </Dropdown> */}
      </NavbarLink>
      <NavbarLink href="#">Resources</NavbarLink>
      <NavbarLink href="#">Pricing</NavbarLink>
    </NavbarCollapse>
  </Navbar>

  )
}
