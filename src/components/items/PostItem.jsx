import { Link } from 'react-router-dom';
import Card from '../../ui/Card';
import Pill from '../../ui/Pill';
import PostImage from '../../assets/images/posts/jumping_mountains.jpg'
import Bookmark from '../../ui/icons/Bookmark';
import Share from '../../ui/icons/Share';
import Button from '../../ui/Button';

const PostItem = () => {
    return (
        <Card classNames={'px-4 py-5 sm:p-6'} style={{ backgroundColor: '#fff' }}>
            <div className='flex flex-col gap-5 justify-between'>
                <div className='flex items-center justify-between'>
                    <Pill title='Health' />
                    <p className='text-sm text-gray-700'>Nov 02 2024</p>
                </div>
                <div className="h-72 w-full bg-cover bg-no-repeat bg-center rounded-[.3125rem]" style={{ backgroundImage: `url(${PostImage})` }}></div>
                <Link to={'postpage'} className='font-semibold text-xl w-fit'>Title Here</Link>
                <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolores delectus harum qui laborum molestiae temporibus laudantium fugit?...
                    {/* //todo - add elipsis for post */}
                    {/* {content.content.p1.length > 100
              ? content.content.p1.slice(0, 100) + '...'
              : content.content.p1} */}
                </p>
                <div className='flex items-center justify-between'>
                    <Link to={''}>View Post</Link>
                    <div className='flex items-center gap-3'>
                        <Button classNames={'text-lg'} title={'save'} onClick={''}><Bookmark /></Button>
                        <Button classNames={'text-lg'} title={'share'} onClick={''}> <Share /></Button>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default PostItem