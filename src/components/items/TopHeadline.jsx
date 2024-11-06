/* eslint-disable react/prop-types */
import Button from '../../ui/Button'
import Card from '../../ui/Card'
import Pill from '../../ui/Pill'
import { Link } from 'react-router-dom'
import Share from '../../ui/icons/Share'
import Bookmark from '../../ui/icons/Bookmark'
import { capitalizeWords } from '../../utils/capitalize'

const TopHeadline = ({ post }) => {
    return (
        <Card classNames={'p-2 group'} style={{ backgroundColor: '#fff' }}>
            <div className='grid grid-cols-4 gap-2'>

                <div className="h-full w-full bg-cover bg-no-repeat bg-center rounded-[.3125rem]" style={{ backgroundImage: `url(${post.primaryMedia})` }}></div>

                <div className='col-span-3'>
                    <Link to={'postpage'} className='font-normal text-md w-fit block group-hover:underline'>{capitalizeWords(post.title)}</Link>
                    <div className='flex items-center justify-between mt-3'>
                        <Pill title={post.category} />
                        <p className='text-sm text-gray-700'>2 hours ago</p>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default TopHeadline