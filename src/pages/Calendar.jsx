import { useEvents } from "../services/Events"
import Button from "../ui/Button"
import Card from "../ui/Card"
import Spinner from "../ui/Spinner"
import PagesTitle from "../components/PagesTitle";
import CalendarCmp from '../components/CalendarCmp'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const Calendar = () => {

    const { data, error, isLoading } = useEvents()

    if (isLoading) {
        // fixme - add spinner
        return <div className='mt-20'><Spinner /></div>;
    }

    if (error) {
        return <div>Error fetching data: {error.message}</div>;
    }
    return (
        <>
            <PagesTitle />

            <div className="mt-5 grid grid-cols-1 md:grid-cols-4 gap-5">
                <div className="col-span-1 md:col-span-1">
                    <div className="sticky top-28">
                        <Card classNames={'px-4 py-5 sm:p-6'} style={{ backgroundColor: '#fff' }}>
                            <Button style={{ backgroundColor: '#4880FF', color: 'white', display: 'block', width: '100%', padding: '10px' }}>+ Add new event</Button>
                            <h3 className="text-[1rem] text-brand-primary-black mt-5 font-semibold mb-10">You are going to</h3>
                            {
                                data.map((calendarEvent, index) => (
                                    <div key={index} className='flex gap-3 mb-5 items-start'>
                                        <img src={calendarEvent.image} alt='event image' className='rounded-full h-10 w-10' />
                                        <div>
                                            <h3 className='text-[#202224] font-semibold'>{calendarEvent.name}</h3>
                                            {/* <p className='text-[#202224] text-opacity-60'>{calendarEvent.date} at {calendarEvent.time}</p> */}
                                            <p className='text-[#202224] text-opacity-60 text-[.75rem]'>{calendarEvent.address}</p>
                                        </div>
                                    </div>

                                ))
                            }
                            <Button className='bg-red-500 mx-auto p-5'>See More</Button>
                        </Card>
                    </div>
                </div>
                <div className="col-span-1 md:col-span-3">
                    <Card classNames={'px-4 py-5 sm:p-6'} style={{ backgroundColor: '#fff' }}>
                        <CalendarCmp />
                    </Card>
                </div>
            </div>
        </>
    )
}

export default Calendar;