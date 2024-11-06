/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { capitalizeWords } from '../../utils/capitalize';
import { Link } from 'react-router-dom'

const TrendingTopic = ({ trending }) => {

    return (
       <>
           <Link to={''} className='font-medium text-sm'>#{trending.topic.replace(' ', '')}</Link>
           <p className='text-xs text-gray-500'>{trending.postCount} Posts</p>
       </>
    );
}

export default TrendingTopic