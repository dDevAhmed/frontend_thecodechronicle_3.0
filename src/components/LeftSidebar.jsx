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
import { IoHomeOutline } from "react-icons/io5";
import { SlFire } from "react-icons/sl";
import { MdOutlineExplore } from "react-icons/md";
import { LuBookmark } from "react-icons/lu";
import { IoNewspaperOutline } from "react-icons/io5";
import { HiOutlineCog8Tooth } from "react-icons/hi2";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineLogout } from "react-icons/hi";
import Divider from '../ui/Divider';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const navigation = [
    { name: 'Home', href: '/', icon: IoHomeOutline, current: false },
    { name: 'Breaking News', href: '/products', icon: SlFire, current: false },
    { name: 'Explore', href: '/favorites', icon: MdOutlineExplore, current: false },
]
const usernavigation = [
    { id: 1, name: 'Saved', href: '/pricing', icon: LuBookmark, current: false },
    { id: 2, name: 'Subscriptions', href: '/todo', icon: IoNewspaperOutline, current: false },
    { id: 3, name: 'Settings', href: '/contact', icon: HiOutlineCog8Tooth, current: false },
    { id: 4, name: 'Account', href: '/invoice', icon: AiOutlineUser, current: false },
    { id: 5, name: 'Log Out', href: '/ui-elements', icon: HiOutlineLogout, current: false },
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
                    <h3 className={`text-brand-primary-black font-hanalei ${shrinkSidebar ? 'hidden' : 'flex'}`}>The Code Chronicle</h3>
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
                                                    : 'text-gray-700 hover:bg-gray-100 hover:text-brand-primary-blue',
                                                'group flex gap-x-3 rounded-md p-2 text-sm leading-6',
                                            )}
                                        >
                                            {/* {
                                            location.pathname === item.href
                                        } */}
                                            <item.icon
                                                aria-hidden="true"
                                                className={classNames(
                                                    location.pathname === item.href ? 'text-[#fff]' : 'text-gray-700 group-hover:text-brand-primary-blue',
                                                    'h-6 w-6 shrink-0',
                                                )}
                                            />
                                            {shrinkSidebar ? '' : item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <Divider />
                        <li>
                            <ul role="list" className="-mx-2 space-y-1">
                                {usernavigation.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            to={item.href}
                                            className={classNames(
                                                location.pathname === item.href
                                                    ? 'bg-brand-primary-blue text-[#fff]'
                                                    : 'text-gray-700 hover:bg-gray-100 hover:text-brand-primary-blue',
                                                'group flex gap-x-3 rounded-md p-2 text-sm  leading-6',
                                            )}
                                        >
                                            <item.icon
                                                aria-hidden="true"
                                                className={classNames(
                                                    location.pathname === item.href ? 'text-[#fff]' : 'text-gray-700 group-hover:text-brand-primary-blue',
                                                    'h-6 w-6 shrink-0',
                                                )}
                                            />
                                            {shrinkSidebar ? '' : item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <Divider />
                        <h3 className='font-bold'>Following</h3>
                        <li>
                            <ul role="list" className="-mx-2 space-y-1">
                                {bottomNavigation.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            to={item.href}
                                            className={classNames(
                                                location.pathname === item.href
                                                    ? 'bg-brand-primary-blue text-[#fff]'
                                                    : 'text-gray-700 hover:bg-gray-100 hover:text-brand-primary-blue',
                                                'group flex gap-x-3 rounded-md p-2 text-sm leading-6',
                                            )}
                                        >
                                            <item.icon
                                                aria-hidden="true"
                                                className={classNames(
                                                    location.pathname === item.href ? 'text-[#fff]' : 'text-gray-700 group-hover:text-brand-primary-blue',
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
                {/* //todo - go to about - landing page*/}
                <Link to={''} className='text-sm'>Help and Information</Link>
            </div>
        </div>
    )
}

export default LeftSidebar