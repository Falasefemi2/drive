"use client"

import { useState } from 'react';
import { Box, CarTaxiFront, Menu } from "lucide-react"
import logo from "@/public/logo.jpg"
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

interface HeaderMenu {
    id: number;
    name: string;
    icon: React.ReactNode;
}

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const headerMenu: HeaderMenu[] = [
        {
            id: 1,
            name: 'Ride',
            icon: <CarTaxiFront />
        },
        {
            id: 2,
            name: 'Package',
            icon: <Box />
        }
    ]
    return (
        <header className="p-4 border-b-[4px] border-gray-200">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center gap-4 sm:gap-8">
                    <Image src={logo} alt="logo" width={50} height={50} className="w-12 h-12 sm:w-[70px] sm:h-[70px]" />
                    <div className="hidden sm:flex items-center gap-6">
                        {headerMenu.map((menu) => (
                            <div key={menu.id} className="flex items-center gap-2 cursor-pointer">
                                {menu.icon}
                                <h2 className="text-lg font-semibold">{menu.name}</h2>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <UserButton />
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="sm:hidden">
                        <Menu />
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="sm:hidden mt-4">
                    {headerMenu.map((menu) => (
                        <div key={menu.id} className="flex items-center gap-2 py-2 cursor-pointer">
                            {menu.icon}
                            <h2 className="text-lg font-semibold">{menu.name}</h2>
                        </div>
                    ))}
                </div>
            )}
        </header>
    )
}