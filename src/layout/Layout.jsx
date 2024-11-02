/* eslint-disable no-unused-vars */
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
'use client'

import { useState } from 'react'
import { Link, Outlet, useLocation } from "react-router-dom";
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
} from '@headlessui/react'
import {
    Bars3Icon,
    BellIcon,
    CalendarIcon,
    ChartPieIcon,
    Cog6ToothIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { LiaHeart, LiaListAlt, LiaGiftSolid, LiaCalendar, LiaClipboard, LiaUserFriendsSolid, LiaUserSolid, LiaTableSolid, LiaCogSolid, LiaPowerOffSolid, } from "react-icons/lia";
import { SlChart } from "react-icons/sl";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { PiGridFour } from "react-icons/pi";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { PiSquareSplitVerticalBold } from "react-icons/pi";
import SearchBar from '../components/SearchBar';
import NavDrawer from '../ui/NavDrawer';
import AppLogo from '../assets/images/dash_stack_logo.png'
import LeftSidebar from '../components/LeftSidebar';

const navigation = [
    { name: 'Dashboard', href: '/', icon: AiOutlineDashboard, current: false },
    { name: 'Products', href: '/products', icon: PiGridFour, current: false },
    { name: 'Favorites', href: '/favorites', icon: LiaHeart, current: false },
    { name: 'Inbox', href: '/inbox', icon: HiOutlineChatAlt2, current: false },
    { name: 'Order Lists', href: '/order-lists', icon: LiaListAlt, current: false },
    { name: 'Products Stock', href: '/product-stock', icon: PiSquareSplitVerticalBold, current: false },
]
const pages = [
    { id: 1, name: 'Pricing', href: '/pricing', icon: LiaGiftSolid, current: false },
    { id: 2, name: 'Calendar', href: '/calendar', icon: LiaCalendar, current: false },
    { id: 3, name: 'To-Do', href: '/todo', icon: LiaClipboard, current: false },
    { id: 4, name: 'Contact', href: '/contact', icon: LiaUserFriendsSolid, current: false },
    { id: 5, name: 'Invoice', href: '/invoice', icon: FaRegMoneyBillAlt, current: false },
    { id: 6, name: 'UI Elements', href: '/ui-elements', icon: SlChart, current: false },
    { id: 7, name: 'Team', href: '/team', icon: LiaUserSolid, current: false },
    { id: 8, name: 'Table', href: '/table', icon: LiaTableSolid, current: false },
]
const bottomNavigation = [
    { name: 'Settings', href: '#', icon: LiaCogSolid, current: false },
    { name: 'Logout', href: '#', icon: LiaPowerOffSolid, current: false },
]
const userNavigation = [
    { name: 'Your profile', href: '#' },
    { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Layout() {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [shrinkSidebar, setShrinkSidebar] = useState(false)
    const location = useLocation()

    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
            <div className='grid grid-cols-1 md:grid-cols-6'>
                <div className='col-span-1'>
                    <LeftSidebar />
                </div>

                <div className="col-span-1 md:col-span-4">
                    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
                        <button type="button" onClick={() => setSidebarOpen(true)} className="-m-2.5 p-2.5 text-brand-primary-black lg:hidden">
                            <span className="sr-only">Open sidebar</span>
                            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                        </button>

                        {/* Separator */}
                        <div aria-hidden="true" className="h-6 w-px bg-gray-200 lg:hidden" />

                        <div className="flex flex-1 items-center justify-between gap-x-4 self-strentch lg:gap-x-6">

                            <span className='flex items-center gap-5 w-1/2'>
                                {/* //fixme - shrink side bar */}
                                {/* <NavDrawer onClick={() => setShrinkSidebar(!shrinkSidebar)} /> */}
                                <SearchBar classNames={'w-1/2 bg-[#fff]'} inputClassNames={'block w-full border-0 py-0 pl-10 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm bg-[#F5F6FA]'} />
                            </span>

                            {/* <form action="#" method="GET" className="relative flex flex-1">
                                <label htmlFor="search-field" className="sr-only">
                                    Search
                                </label>
                                <MagnifyingGlassIcon
                                    aria-hidden="true"
                                    className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
                                />
                                <input
                                    id="search-field"
                                    name="search"
                                    type="search"
                                    placeholder="Search..."
                                    className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                                />
                            </form> */}
                            <div className="flex items-center gap-x-4 lg:gap-x-6">
                                <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon aria-hidden="true" className="h-6 w-6" />
                                </button>

                                {/* Separator */}
                                <div aria-hidden="true" className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200" />

                                {/* Profile dropdown */}
                                <Menu as="div" className="relative">
                                    <MenuButton className="-m-1.5 flex items-center p-1.5">
                                        <span className="sr-only">Open user menu</span>
                                        <img
                                            alt=""
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            className="h-8 w-8 rounded-full bg-gray-50"
                                        />
                                        <span className="hidden lg:flex lg:items-center">
                                            <span aria-hidden="true" className="ml-4 text-sm font-semibold leading-6 text-gray-900">
                                                Tom Cook
                                            </span>
                                            <ChevronDownIcon aria-hidden="true" className="ml-2 h-5 w-5 text-gray-400" />
                                        </span>
                                    </MenuButton>
                                    <MenuItems
                                        transition
                                        className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                    >
                                        {userNavigation.map((item) => (
                                            <MenuItem key={item.name}>
                                                <a
                                                    href={item.href}
                                                    className="block px-3 py-1 text-sm leading-6 text-gray-900 data-[focus]:bg-gray-50"
                                                >
                                                    {item.name}
                                                </a>
                                            </MenuItem>
                                        ))}
                                    </MenuItems>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <main className="py-5 bg-[#F5F6FA] min-h-screen">
                        <div className="px-4 sm:px-6 lg:px-8"><Outlet /></div>
                    </main>
                </div>

                <div className='col-span-1'>
                    <LeftSidebar />
                </div>
            </div>
        </>
    )
}
