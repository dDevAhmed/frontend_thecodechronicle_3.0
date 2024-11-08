import { buildOrderedPosts, categorizePosts } from "../../features/SortingPosts";
import VideoPost from "../sections/VideoPost";
import TextPost from "../sections/TextPost";
import ImagePost from "../sections/ImagePost";
import GalleryPost from "../sections/GalleryPost";

/* eslint-disable react/prop-types */
const NewsFeed = ({ unorderedPosts }) => {
  const categorizedPosts = categorizePosts(unorderedPosts);
  const orderedPosts = buildOrderedPosts(categorizedPosts);

  return (
    <div className="flex flex-col gap-5">
      {orderedPosts.map((post, index) => {
        switch (post.type) {
          case 'video':
            return <VideoPost key={index} videoPosts={post} />;
          case 'text':
            return <TextPost key={index} textPosts={post} />;
          case 'image':
            return <ImagePost key={index} imagePosts={post} />;
          case 'gallery':
            return <GalleryPost key={index} galleryPosts={post} />;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default NewsFeed