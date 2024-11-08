/* eslint-disable react/prop-types */
import SearchBarBackground from '../../assets/images/city_skyline_1.jpg'
import Card from '../../ui/Card'
import SearchBar from '../SearchBar'

const HomeHero = ({ classNames }) => {
  return (
    <Card classNames={classNames}>
      <div className="h-56 w-full bg-cover bg-no-repeat bg-center rounded-[.3125rem] flex items-center"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0) 70%), url(${SearchBarBackground})`,
        }}>
        <div className='w-full'>
          <SearchBar classNames={'w-3/5 m-auto'} />
          <span className='mt-5 flex items-center justify-center gap-3 text-white text-sm'>
            <p>Ai</p>
            <p>&#35;backend</p>
            <p>Health</p>
            <p>#devtips</p>
            <p>Performance</p>
          </span>
        </div>
      </div>
    </Card>
  )
}

export default HomeHero