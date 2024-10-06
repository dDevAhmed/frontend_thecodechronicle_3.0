import { Link } from "react-router-dom";  
import BasicTable from "../components/BasicTable"  
import Button from "../ui/Button"  
import Card from "../ui/Card"  
import { CiMail, CiStar, CiWarning } from "react-icons/ci";  
import { FiSend } from "react-icons/fi";  
import { GoPencil } from "react-icons/go";  
import { MdImportantDevices } from "react-icons/md";  
import { BiTrash } from "react-icons/bi";  

const inboxNavigation = [  
    { id: 1, name: 'Inbox', href: '#', icon: CiMail, count: 1253, current: true },  
    { id: 2, name: 'Starred', href: '#', icon: CiStar, count: 245, current: false },  
    { id: 3, name: 'Sent', href: '#', icon: FiSend, count: 24532, current: false },  
    { id: 4, name: 'Draft', href: '#', icon: GoPencil, count: 9, current: false },  
    { id: 5, name: 'Spam', href: '#', icon: CiWarning, count: 14, current: false },  
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

const Inbox = () => {  
    return (  
        <>  
            <h3 className="text-[1.5rem] font-semibold text-[#202224]">Inbox</h3>  
            <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5">  
                <div className="col-span-1">  
                    <Card style={{ backgroundColor: '#fff' }}>  
                        <Button style={{ backgroundColor: '#4880FF', color: 'white', display: 'block', width: '100%', padding: '10px' }}>+ Compose</Button>  
                        <h3 className="text-[1rem] text-[#202224] mt-5 font-semibold">My Email</h3>  
                        <ul role="list" className="mt-2 ml-3 space-y-1">  
                            {inboxNavigation.map((navItem) => {  
                                const IconComponent = navItem.icon; // Get the icon component  
                                
                                return (  
                                    <li key={navItem.id}>  
                                        <Link  
                                            to={navItem.href}  
                                            className={classNames(  
                                                navItem.current  
                                                    ? 'bg-gray-50 text-[#4880FF]'  
                                                    : 'text-[#202224] hover:bg-gray-50 hover:text-[#4880FF]',  
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
                                <div className="relative flex items-start ml-3 mb-3 cursor-pointer" key={index}>  
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
                    </Card>  
                </div>  
                <div className="col-span-2">  
                    <Card style={{ backgroundColor: '#fff' }}>  
                        <h3 className="text-[1rem] text-[#202224] font-semibold">My Email</h3>  
                        <BasicTable></BasicTable>  
                    </Card>  
                </div>  
            </div>  
        </>  
    )  
}  

export default Inbox;