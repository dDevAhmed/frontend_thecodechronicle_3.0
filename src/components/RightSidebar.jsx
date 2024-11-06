/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { trendingTopicsData } from '../data/data'
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import TrendingTopic from '../components/items/TrendingTopic'
import Weather from './widgets/Weather';
import Subscribe from './Subscribe';

const RightSidebar = () => {
    const [showMore, setShowMore] = useState(false); // Initially set to false to show only 5 topics.  

    const handleShowMore = () => {
        setShowMore(!showMore); // Toggle showMore on button click  
    };

    return (
        <div className={`hidden lg:inset-y-0 lg:z-50 lg:flex lg:flex-col`}>
            <div className="flex grow flex-col gap-y-5 border-l border-gray-200 bg-white px-6 pt-5 pb-20 min-h-screen">

                <div className=''>
                    <h3 className='font-semibold mb-3'>Trending Topics</h3>
                    <div className='flex flex-col gap-y-2'>
                        <div className={`flex flex-col ${showMore ? 'overflow-y-auto max-h-[18.75rem]' : 'max-h-[9.375rem]'}`}>
                            {
                                // Adjust slice depending on showMore state  
                                trendingTopicsData?.slice(0, showMore ? trendingTopicsData.length : 2).map((trending, index) => (
                                    <div key={index} className={`pb-2 ${trending !== trendingTopicsData[trendingTopicsData.length - 1] && 'border-b'}`}>
                                        <TrendingTopic trending={trending} />
                                    </div>
                                ))
                            }
                        </div>
                        <a href='#' className='text-sm flex items-center gap-2 cursor-pointer' onClick={handleShowMore}>
                            {showMore ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
                            {showMore ? 'Show less' : 'Show more'}
                        </a>
                    </div>
                </div>

                <div className='grow'>
                    <Subscribe />
                </div>

                <div className='grow'>
                    <Weather />
                </div>
            </div>
        </div>
    );
}

export default RightSidebar;