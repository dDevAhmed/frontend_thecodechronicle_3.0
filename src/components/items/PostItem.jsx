import { Link } from 'react-router-dom';
import Card from '../../ui/Card';
import Pill from '../../ui/Pill';

const PostItem = () => {
    return (
        <Card classNames={ }>
            <div className='flex flex-col gap-5 justify-between'>
                <div className='flex items-center justify-center'>
                    <Pill>Health</Pill>
                    <p>Nov 02 2024</p>
                </div>
                <div className='border h-40 w-full'>
                    image here
                </div>
                <h3>Title Here</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolores delectus harum qui laborum molestiae temporibus laudantium fugit?
                    {/* //todo - add elipsis for post */}

                </p>
                <div className='flex items-center justify-between'>
                    <Link to={ }>View Post</Link>
                    <div>
                        
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default PostItem