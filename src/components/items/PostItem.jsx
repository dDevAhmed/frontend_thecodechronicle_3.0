/* eslint-disable react/prop-types */
import Video from './posts/Video';
import Text from './posts/Text';
import Image from './posts/Image';
// import Gallery from './posts/Gallery';

const PostItem = ({ post }) => {
    
    return (
        post.type === 'text'
            ? <Text post={post} />
            : post.type === 'video'
                ? <Video post={post} />
                : post.type === 'image'
                && <Image post={post} />
        // todo - add gallery
        // : post.type === 'gallery'
        // && <Video post={post} />
    );
}

export default PostItem