import FeaturedPicture from '../../assets/images/posts/holding-candle.jpg'
const Featured = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
            <div className='flex flex-col gap-5'>
                <div className='bg-cover bg-no-repeat bg-center rounded w-full h-full' style={{ backgroundImage: `url(${FeaturedPicture})` }}></div>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum porro magni cupiditate fugiat hic natus quae eius aliquam,</p>
            </div>

            <div className='flex flex-col gap-5'>
                <div className='grid grid-cols-3 gap-5'>
                    <div className='bg-cover bg-no-repeat bg-center rounded min-h-28' style={{ backgroundImage: `url(${FeaturedPicture})` }}></div>
                    <h3 className='col-span-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                </div>

                <div className='grid grid-cols-3 gap-5'>
                    <div className='bg-cover bg-no-repeat bg-center rounded min-h-28' style={{ backgroundImage: `url(${FeaturedPicture})` }}></div>
                    <h3 className='col-span-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                </div>

                <div className='grid grid-cols-3 gap-5'>
                    <div className='bg-cover bg-no-repeat bg-center rounded min-h-28' style={{ backgroundImage: `url(${FeaturedPicture})` }}></div>
                    <h3 className='col-span-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                </div>
            </div>
        </div>
    )
}

export default Featured