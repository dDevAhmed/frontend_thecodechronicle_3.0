/* eslint-disable react/prop-types */
import { AiOutlineAudio } from "react-icons/ai";
import Card from "../../../ui/Card";
import { capitalizeWords } from "../../../utils/capitalize";

const Audio = ({ post }) => {
  return (
    <Card classNames={'p-3 flex gap-5 items-center'} style={{ backgroundColor: '#fff' }}>
      <AiOutlineAudio className="h-10 w-10" />
      <div className="grow">
        <h3 className='font-semibold text-sm w-fit block mt-3 group-hover:underline'>{capitalizeWords(post.title)}</h3>
        <audio className="w-full grow mt-2" controls>
          {/* <source src="horse.ogg" type="audio/ogg"/> */}
          <source src={post.primaryMedia} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </Card>
  )
}

export default Audio