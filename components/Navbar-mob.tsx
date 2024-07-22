"use client"

import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { ModeToggle } from './DarkMode';
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs'

const menulist = [
    {
        name: "Home",
        href: '/',
    },
]

const NavbarMob = () => {

    const pathname = usePathname();
    const [navbar, setNavbar] = useState(false);

    return (
        <>
            <div className='flex md:hidden items-center justify-between p-5 border-b'>
                <div className="menu flex gap-5">
                    <button onClick={() => setNavbar(!navbar)}>
                        {navbar ? (<X className='hover:text-primary transition-all hover:scale-110 cursor-pointer' />) : (<Menu className='hover:text-primary transition-all hover:scale-110 cursor-pointer' />)}
                    </button>
                </div>
                <div className="logo">
                    <Link href={'/'} className='hover:text-primary text-lg font-serif'>Sid</Link>
                </div>
                <div className="icons flex gap-3 justify-center items-center">
                    <div>
                    <ModeToggle />
                    </div>
                    <div className='flex items-center justify-center'>
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    </div>
                </div>
            </div>
            <div className={`w-full fixed z-10 ease-in-out duration-300 ${navbar ? "translate-x-0" : "translate-x-full"}`}>
                <div className='flex justify-start items-start'>
                    <div className='h-screen fixed md:hidden w-full bg-secondary shadow-md rounded-md'>
                        <ul className='space-y-1 py-4'>
                            {menulist.map((link) => {
                                const isActive = pathname.endsWith(link.href);
                                return (
                                    <li key={link.name} className='hover:bg-primary/10 text-md rounded text-zinc-500 hover:text-primary py-2 px-6 text-lg'>
                                        <Link className={`${isActive ? "text-primary" : ""}`} onClick={() => setNavbar(!navbar)} href={link.href}>{link.name}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavbarMob