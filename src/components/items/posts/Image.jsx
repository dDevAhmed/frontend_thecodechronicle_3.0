/* eslint-disable react/prop-types */
import Pill from '../../../ui/Pill'
import { Link } from 'react-router-dom'
import Card from '../../../ui/Card'
import Button from '../../../ui/Button'
import Bookmark from '../../../ui/icons/Bookmark'
import Share from '../../../ui/icons/Share'
import { capitalizeWords } from '../../../utils/capitalize'

const Image = ({ post }) => {
    return (
        <Card classNames={'p-5 sm:p-6 group'} style={{ backgroundColor: '#fff' }}>
            <div className='grid grid-cols-4 gap-5'>

                <div className="h-full w-full bg-cover bg-no-repeat bg-center rounded-[.3125rem]" style={{ backgroundImage: `url(${post.primaryMedia})` }}></div>

                <div className='col-span-3'>
                    <Pill title={post.category} />
                    <Link to={'postpage'} className='font-semibold text-xl w-fit block mt-3 group-hover:underline'>{capitalizeWords(post.title)}</Link>

                    <p className='text-gray-700 mt-2'>
                        {post.message.length > 150
                            ? post.message.slice(0, 150) + '...'
                            : post.message}
                    </p>
                    <div className='flex items-center justify-between mt-5'>
                        {/* //todo - show hours (2 hours ago) if same day else show date (Nov 02 2024) */}
                        <p className='text-sm text-gray-700'>2 hours ago</p>
                        <div className='flex items-center gap-3'>
                            <Button classNames={'text-lg'} title={'save'} onClick={''}><Bookmark /></Button>
                            <Button classNames={'text-lg'} title={'share'} onClick={''}> <Share /></Button>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default Image