/* eslint-disable react/prop-types */
const NewsFeed = ({ unorderedPosts }) => {
  const categorizedPosts = categorizePosts(unorderedPosts);
  const orderedPosts = buildOrderedPosts(categorizedPosts);

  return (
    <div className="news-feed">
      {orderedPosts.map((post, index) => {
        switch (post.type) {
          case 'video':
            return <VideoPost key={index} url={post.content} />;
          case 'text':
            return <TextPost key={index} text={post.content} />;
          case 'images':
            return <ImageGallery key={index} images={post.content} />;
          case 'videos':
            return <VideosGallery key={index} videos={post.content} />;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default NewsFeed