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
import { Link } from 'react-router-dom'
import { useState } from 'react';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

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

const LeftSidebar = () => {
    const [shrinkSidebar, setShrinkSidebar] = useState(false)

    return (
        <div className={`hidden lg:inset-y-0 lg:z-50 lg:flex lg:flex-col grow`}>
            <div className="flex grow flex-col gap-y-5 border-r border-gray-200 bg-white px-6 pb-4">
                <div className="flex h-16 shrink-0 items-center gap-3">
                    <img
                        alt="DashStack Logo"
                        src={AppLogo}
                        className="h-8 w-auto"
                    />
                    <h3 className={`text-brand-primary-black font-semibold ${shrinkSidebar ? 'hidden' : 'flex'}`}><span className='text-[#2CABE0]'>Dash</span>Stack</h3>
                </div>
                <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                            <ul role="list" className="-mx-2 space-y-1">
                                {navigation.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            to={item.href}
                                            className={classNames(
                                                location.pathname === item.href
                                                    ? 'bg-brand-primary-blue text-[#fff]'
                                                    : 'text-brand-primary-black hover:bg-gray-100 hover:text-brand-primary-blue',
                                                'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                                            )}
                                        >
                                            {/* {
                                            location.pathname === item.href
                                        } */}
                                            <item.icon
                                                aria-hidden="true"
                                                className={classNames(
                                                    location.pathname === item.href ? 'text-[#fff]' : 'text-brand-primary-black group-hover:text-brand-primary-blue',
                                                    'h-6 w-6 shrink-0',
                                                )}
                                            />
                                            {shrinkSidebar ? '' : item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li>
                            <div className="text-xs font-semibold leading-6 text-gray-400">Your pages</div>
                            <ul role="list" className="-mx-2 mt-2 space-y-1">
                                {pages.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            to={item.href}
                                            className={classNames(
                                                location.pathname === item.href
                                                    ? 'bg-brand-primary-blue text-[#fff]'
                                                    : 'text-brand-primary-black hover:bg-gray-100 hover:text-brand-primary-blue',
                                                'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                                            )}
                                        >
                                            <item.icon
                                                aria-hidden="true"
                                                className={classNames(
                                                    location.pathname === item.href ? 'text-[#fff]' : 'text-brand-primary-black group-hover:text-brand-primary-blue',
                                                    'h-6 w-6 shrink-0',
                                                )}
                                            />
                                            {shrinkSidebar ? '' : item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li>
                            <ul role="list" className="-mx-2 space-y-1">
                                {bottomNavigation.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            to={item.href}
                                            className={classNames(
                                                location.pathname === item.href
                                                    ? 'bg-brand-primary-blue text-[#fff]'
                                                    : 'text-brand-primary-black hover:bg-gray-100 hover:text-brand-primary-blue',
                                                'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                                            )}
                                        >
                                            <item.icon
                                                aria-hidden="true"
                                                className={classNames(
                                                    location.pathname === item.href ? 'text-[#fff]' : 'text-brand-primary-black group-hover:text-brand-primary-blue',
                                                    'h-6 w-6 shrink-0',
                                                )}
                                            />
                                            {shrinkSidebar ? '' : item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default LeftSidebar