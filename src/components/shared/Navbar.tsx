"use client"
import React, { useState } from 'react';

import { GraduationCap, Menu, X } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [{
        label: 'Home',
        path: '/'
    }, {
        label: 'About',
        path: '/about'
    }, {
        label: 'Departments',
        path: '/departments'
    }, {
        label: 'Teachers',
        path: '/teachers-public'
    }, {
        label: 'Admission',
        path: '/admission'
    }, {
        label: 'Notices',
        path: '/notices-public'
    }, {
        label: 'Gallery',
        path: '/gallery'
    }, {
        label: 'Contact',
        path: '/contact'
    }];
    const isActive = (path: string) => {
        if (path === '/' && location.pathname !== '/') return false;
        return location.pathname.startsWith(path);
    };
    return <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-lg bg-blue-600 flex items-center justify-center">
                        <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-lg text-gray-900 leading-none">
                            Feni Polytechnic
                        </span>
                        <span className="text-sm text-gray-500 font-medium">
                            Institute
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navItems.map(item => <Link key={item.path} href={item.path} className={`text-sm font-medium transition-colors hover:text-blue-600 ${isActive(item.path) ? 'text-blue-600' : 'text-gray-600'}`}>
                        {item.label}
                    </Link>)}
                    <Button variant="default" size="sm" className="ml-4">
                        Login
                    </Button>
                </nav>

                {/* Mobile Menu Button */}
                <button className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="lg:hidden border-t border-gray-200 bg-white absolute w-full shadow-lg">
            <div className="px-4 pt-2 pb-6 space-y-1">
                {navItems.map(item => <Link key={item.path} href={item.path} className={`block px-3 py-3 rounded-md text-base font-medium ${isActive(item.path) ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`} onClick={() => setIsMenuOpen(false)}>
                    {item.label}
                </Link>)}
                <div className="pt-4 px-3">
                    <Link href={`/login`}>
                        <Button variant="default" className="w-full justify-center" onClick={() => {

                            setIsMenuOpen(false);
                        }}>

                            Login Portal
                        </Button>
                    </Link>
                </div>
            </div>
        </div>}
    </header>;
}