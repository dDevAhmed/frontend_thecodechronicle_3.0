/* eslint-disable react/prop-types */
import { capitalizeWords } from '../../utils/capitalize';
import Image from './posts/Image';
import Video from './posts/Video';
import Audio from './posts/ARCHIVEDAudio';
import ImageOnly from './posts/ImageOnly';

const PostItem = ({ post }) => {

    return (
        post.type === 'image' && post.hasMessage === true
            ? <Image post={post} />
            : post.type === 'video'
                ? <Video post={post} />
                // : post.type === 'audio'
                //     ? <Audio post={post} />
                : post.type === 'imageonly'
                && <ImageOnly post={post} />

    );
}

export default PostItem