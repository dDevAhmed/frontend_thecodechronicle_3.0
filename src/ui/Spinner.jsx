import { ColorRing } from 'react-loader-spinner'

const Spinner = () => {
  return (
    <div className='flex flex-col items-center'>
      <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel=""
            wrapperStyle={{}}
            wrapperClass=""
          />
    </div>
  )
}

export default Spinner
