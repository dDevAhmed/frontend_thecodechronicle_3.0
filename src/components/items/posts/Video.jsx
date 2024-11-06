/* eslint-disable react/prop-types */
import { FaPlay } from "react-icons/fa6";
import { IoPlayOutline } from "react-icons/io5";
import { IoPlay } from "react-icons/io5";
import { CiPause1 } from "react-icons/ci";
import { FaPause } from "react-icons/fa6";
import Card from "../../../ui/Card";

const Video = ({ post }) => {
  return (
    <>
      <Card classNames={''} style={{ backgroundColor: '#fff' }}>
        <video className="h-80 w-full" controls>
          <source src={post.primaryMedia} type="video/mp4" />
          {/* <source src={post.videoOgg} type="video/ogg" />   */}
          Your browser does not support the video tag.
        </video>
      </Card>
    </>
  );
}

export default Video;

// import { useRef, useState } from "react";
// import { FaPlay, FaPause } from "react-icons/fa6";
// import { CiPause1 } from "react-icons/ci";
// import Card from "../../../ui/Card";

// const Video = ({ post }) => {
//   const videoRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const handlePlayPause = () => {
//     if (isPlaying) {
//       videoRef.current.pause();
//     } else {
//       videoRef.current.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   return (
//     <Card classNames={''} style={{ backgroundColor: '#fff', position: 'relative' }}>
//       <video ref={videoRef} className="h-80 w-full" onClick={handlePlayPause}>
//         <source src={post.primaryMedia} type="video/mp4" />
//         {/* <source src={post.videoOgg} type="video/ogg" />   */}
//         Your browser does not support the video tag.
//       </video>
//       <div
//         className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center"
//         onClick={handlePlayPause}
//         style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', cursor: 'pointer' }}
//       >
//         {isPlaying ? <CiPause1 size={40} color="#fff" /> : <FaPlay size={40} color="#fff" />}
//       </div>
//     </Card>
//   );
// }

// export default Video;