import { CiPause1, CiPlay1, CiMicrophoneOn } from "react-icons/ci";  
import Card from "../../../ui/Card";  
import { useEffect, useRef, useState } from "react";  

const HomeAudio = ({ audio }) => {  
  const [isPlaying, setIsPlaying] = useState(false);  
  const [isHovered, setIsHovered] = useState(false);  
  const [remainingTime, setRemainingTime] = useState(0); // State for remaining time  
  const audioRef = useRef(null);  

  const togglePlayback = () => {  
    if (isPlaying) {  
      audioRef.current.pause(); 
       
      setIsPlaying(false);  
    } else {  
      audioRef.current.play();  
      setIsPlaying(true);  
    }  
  };  

  // Effect to handle audio ending  
  useEffect(() => {  
    const audioElement = audioRef.current;  
    
    if (audioElement) {  
      const handleEnded = () => {  
        setIsPlaying(false); // Reset playing state  
        setRemainingTime(0); // Reset remaining time when audio ends  
      };  

      // Attach event listener for 'ended' event  
      audioElement.addEventListener('ended', handleEnded);  
      
      // Cleanup listener on component unmount  
      return () => {  
        audioElement.removeEventListener('ended', handleEnded);  
      };  
    }  
  }, []);   

  // Effect to update remaining time  
  useEffect(() => {  
    const audioElement = audioRef.current;  

    const updateRemainingTime = () => {  
      if (audioElement && isPlaying) {  
        const remaining = audioElement.duration - audioElement.currentTime;  
        setRemainingTime(remaining);  
      }  
    };  

    let intervalId;  

    if (isPlaying) {  
      intervalId = setInterval(updateRemainingTime, 1000); // Update every second  
    }  

    // Cleanup interval on unmount or when playback stops  
    return () => {  
      clearInterval(intervalId);  
    };  
  }, [isPlaying]);  

  // Format remaining time in minutes and seconds  
  const formatTime = (time) => {  
    const minutes = Math.floor(time / 60);  
    const seconds = Math.floor(time % 60);  
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;  
  };  

  return (  
    <div className="flex flex-col items-center">  
      <Card classNames={'p-3 flex flex-col gap-5 items-center rounded'}  
        style={{ backgroundColor: '#fff' }}  
        onMouseEnter={() => setIsHovered(true)}  
        onMouseLeave={() => setIsHovered(false)}>  

        {isPlaying ? (  
          <CiPause1 className="h-9 w-9 cursor-pointer" onClick={togglePlayback} />  
        ) : (  
          isHovered ? (  
            <CiPlay1 className="h-9 w-9 cursor-pointer" onClick={togglePlayback} />  
          ) : (  
            <CiMicrophoneOn className="h-9 w-9" />  
          )  
        )}  

        {/* Audio element */}  
        <div className="hidden">  
          <audio ref={audioRef} className="w-full grow mt-2" controls>  
            <source src={audio.primaryMedia} type="audio/mpeg" />  
            Your browser does not support the audio element.  
          </audio>  
        </div>  
      </Card>  
      <p className='mt-2 text-center text-xs text-gray-700'>  
        {isPlaying ? formatTime(remainingTime) : '10hrs ago'}  
      </p>  
    </div>  
  );  
}  

export default HomeAudio;