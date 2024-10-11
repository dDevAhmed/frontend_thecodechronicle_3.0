import { Link } from "react-router-dom";
import { TiWarningOutline } from "react-icons/ti";
import { MdMailOutline, MdImportantDevices, MdInfo, MdArchive } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { LuPencil } from "react-icons/lu";
import { BiTrash } from "react-icons/bi";
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { IoMdTrash } from "react-icons/io";
import Button from "../ui/Button"
import Card from "../ui/Card"
import EmailList from "../components/EmailList";
import TablePagination from "../components/TablePagination";
import PagesTitle from "../components/PagesTitle";

const inboxNavigation = [
    { id: 1, name: 'Inbox', href: '#', icon: MdMailOutline, count: 1253, current: true },
    { id: 2, name: 'Starred', href: '#', icon: FaRegStar, count: 245, current: false },
    { id: 3, name: 'Sent', href: '#', icon: FiSend, count: 24532, current: false },
    { id: 4, name: 'Draft', href: '#', icon: LuPencil, count: 9, current: false },
    { id: 5, name: 'Spam', href: '#', icon: TiWarningOutline, count: 14, current: false },
    { id: 6, name: 'Important', href: '#', icon: MdImportantDevices, count: 18, current: false },
    { id: 7, name: 'Bin', href: '#', icon: BiTrash, count: 9, current: false },
];

const labels = [
    { id: 1, name: 'Primary', href: '#', border: '#00B69B', checked: false },
    { id: 2, name: 'Social', href: '#', border: '#5A8CFF', checked: false },
    { id: 3, name: 'Work', href: '#', border: '#FD9A56', checked: false },
    { id: 4, name: 'Friends', href: '#', border: '#D456FD', checked: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const Calendar = () => {
    return (
        <>
            <PagesTitle />

            <div className="mt-5 grid grid-cols-1 md:grid-cols-4 gap-5">
                <div className="col-span-1 md:col-span-1">
                    {/* <EmailSidebar /> */}
                    {/* //fixme - make component */}
                    <div className="sticky top-28">
                        <Card classNames={'px-4 py-5 sm:p-6'} style={{ backgroundColor: '#fff' }}>
                            <Button style={{ backgroundColor: '#4880FF', color: 'white', display: 'block', width: '100%', padding: '10px' }}>+ Compose</Button>
                            <h3 className="text-[1rem] text-[#202224] mt-5 font-semibold">My Email</h3>
                            <ul role="list" className="mt-2 space-y-1">
                                {inboxNavigation.map((navItem) => {
                                    const IconComponent = navItem.icon; // Get the icon component  
    
                                    return (
                                        <li key={navItem.id}>
                                            <Link
                                                to={navItem.href}
                                                className={classNames(
                                                    navItem.current
                                                        ? 'bg-gray-100 text-[#4880FF]'
                                                        : 'text-[#202224] hover:bg-gray-100 hover:text-[#4880FF]',
                                                    'group flex justify-between rounded-md p-2 text-sm font-normal leading-6',
                                                )}
                                            >
                                                <span className="flex items-center">
                                                    <IconComponent
                                                        aria-hidden="true"
                                                        className={classNames(
                                                            navItem.current ? 'text-[#4880FF]' : 'text-gray-400 group-hover:text-[#4880FF]',
                                                            'h-6 w-6 mr-2' // Added margin for spacing  
                                                        )}
                                                    />
                                                    {navItem.name}
                                                </span>
                                                <span>{navItem.count}</span>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                            <h3 className="text-[1rem] text-[#202224] mt-5 mb-3 font-semibold">Label</h3>
                            {
                                labels.map((label, index) => (
                                    <div className="relative flex items-start ml-3 mb-3" key={index}>
                                        <div className="flex h-6 items-center">
                                            <input
                                                id={label.name}
                                                name="comments"
                                                type="checkbox"
                                                aria-describedby="comments-description"
                                                className="h-4 w-4 rounded border"
                                                style={{
                                                    borderColor: label.border,
                                                    accentColor: label.checked ? label.border : 'transparent', // For checked color  
                                                }}
                                            />
                                        </div>
                                        <div className="ml-3 text-sm leading-6">
                                            <label htmlFor={label.name} className="font-normal text-[#202224]">
                                                {label.name}
                                            </label>
                                        </div>
                                    </div>
                                ))
                            }
                            <button
                                className="text-[#202224] text-opacity-50 mt-5"
                            >
                                + Create New Label
                            </button>
                        </Card>
                    </div>
                </div>
                <div className="col-span-1 md:col-span-3">
                    <Card classNames={'px-4 py-5 sm:p-6'} style={{ backgroundColor: '#fff' }}>
                        <div className="flex items-center justify-between mb-10">
                            {/* //fixme - make component */}
                            <div className="relative bg-[#F5F6FA] rounded-full w-1/2">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <MagnifyingGlassIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="search"
                                    name="search"
                                    type="search"
                                    placeholder="Search mail"
                                    className="block w-full rounded-full border-0 bg-transparent py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <span className="isolate inline-flex rounded-md shadow-sm">
                                <button
                                    type="button"
                                    className="relative inline-flex items-center rounded-l-md bg-white px-2 py-2 text-[#202224] ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
                                >
                                    <span className="sr-only">download</span>
                                    <MdArchive aria-hidden="true" className="h-5 w-5" />
                                </button>
                                <button
                                    type="button"
                                    className="relative -ml-px inline-flex items-center bg-white px-2 py-2 text-[#202224] ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
                                >
                                    <span className="sr-only">information</span>
                                    <MdInfo aria-hidden="true" className="h-5 w-5" />
                                </button>
                                <button
                                    type="button"
                                    className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-2 py-2 text-[#202224] ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
                                >
                                    <span className="sr-only">delete</span>
                                    <IoMdTrash aria-hidden="true" className="h-5 w-5" />
                                </button>
                            </span>
                        </div>
                        {/* <div className="relative flex items-start border-b py-3">
                            <div className="flex h-6 items-center">
                                <input
                                    id="comments"
                                    name="comments"
                                    type="checkbox"
                                    aria-describedby="comments-description"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                            </div>
                            <div className="flex h-6 items-center ml-3">
                                <CiStar
                                    aria-describedby="comments-description"
                                    className="h-6 w-6 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                            </div>

                            <div className="ml-3 text-sm leading-6">
                                <label htmlFor="comments" className="font-medium text-gray-900">
                                </label>
                                <span id="comments-description" className="text-gray-500">
                                    <span className="sr-only">New comments </span>so you always know what's happening.
                                </span>
                            </div>
                        </div> */}
                        <EmailList />
                    </Card>
                    <TablePagination />
                </div>
            </div>
        </>
    )
}

export default Calendar;