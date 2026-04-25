"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children}) => {
    const currentPath = usePathname();
    const isActive = currentPath === href;
    return (
        <Link href={href} className={`${isActive ? "border-b-2 border-gray-600": ""}`}>
            {children}
        </Link>
    );
};

export default NavLink;