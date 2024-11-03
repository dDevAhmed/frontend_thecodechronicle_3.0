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
                    <div className="relative md:fixed md:h-full md:w-[16.666%] overflow-y-auto">
                        {/* //fixme - change to sidebar and pass children */}
                        <LeftSidebar />
                    </div>
                </div>

                <div className="col-span-1 md:col-span-4">

                    <main className="py-5 lg:py-10 bg-[#F5F6FA] min-h-screen">
                        <div className="px-4 sm:px-6 lg:px-8"><Outlet /></div>
                    </main>
                </div>

                <div className='col-span-1'>
                    <div className="relative md:fixed md:h-full md:w-[16.666%] overflow-y-auto">
                        <LeftSidebar />
                    </div>
                </div>
            </div>
        </>
    )
}
