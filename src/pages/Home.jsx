/* eslint-disable no-unused-vars */
import { HiMiniUsers, HiMiniCube } from "react-icons/hi2";
import { BiLineChart } from "react-icons/bi";
import { PiClockCounterClockwiseFill } from "react-icons/pi";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import Card from "../ui/Card"
import Dropdown from "../ui/Dropdown";
import AppleWatchImage from '../assets/images/products/product-9.jpg'
import PagesTitle from "../components/PagesTitle";
import PostItem from "../components/items/PostItem";
import HomeHero from "../components/sections/HomeHero";
import SectionTitle from "../ui/SectionTitle";
import Section from "../ui/Section";
import Video from "../components/items/Video";
import { postsData, topHeadlineData } from "../data/data";
import TopHeadline from "../components/items/TopHeadline";
import ImageOnly from '../components/items/posts/ImageOnly'
import HomeAudio from "../components/items/posts/HomeAudio";

const Dashboard = () => {

  const regularNews = postsData?.filter(post => post.type !== 'imageonly');
  const audioNews = postsData?.filter(post => post.type === 'audio');
  const photoNews = postsData?.filter(photo => photo.type === 'imageonly');

  return (
    <>
      <Section>
        {/* <SectionTitle>Quick Takes</SectionTitle> */}
        <div className='overflow-x-auto scrollbar-hide'>
          <div className="flex gap-5 min-w-[120%]">
            {audioNews.map((audio, index) => (
              <HomeAudio key={index} audio={audio} />
            ))}
          </div>
        </div>
      </Section>

      <Section classNames={'grid grid-cols-1 lg:grid-cols-3 gap-5'}>
        {/* //todo - replace with stock market widget */}
        <HomeHero />
        <HomeHero classNames={'col-span-2'} />
      </Section>

      <Section>
        {/* <SectionTitle>Quick Takes</SectionTitle> */}
        <div className='overflow-x-auto scrollbar-hide'>
          <div className="flex gap-5 min-w-[120%]">
            <Video videoSrc={''} classNames={'rounded-xl'} />
            <Video videoSrc={''} classNames={'rounded-xl'} />
            <Video videoSrc={''} classNames={'rounded-xl'} />
            <Video videoSrc={''} classNames={'rounded-xl'} />
            <Video videoSrc={''} classNames={'rounded-xl'} />
            <Video videoSrc={''} classNames={'rounded-xl'} />
            <Video videoSrc={''} classNames={'rounded-xl'} />
            <Video videoSrc={''} classNames={'rounded-xl'} />
            <Video videoSrc={''} classNames={'rounded-xl'} />
            <Video videoSrc={''} classNames={'rounded-xl'} />
          </div>
        </div>
      </Section>

      <Section>
        <SectionTitle>For You</SectionTitle>

        <div className="flex flex-col gap-5 mt-5">
          {
            regularNews?.map((post, index) => (
              <PostItem key={index} post={post} />
            ))
          }
        </div>
      </Section>

      <Section>
        <SectionTitle>Photo News</SectionTitle>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
          {
            <ImageOnly post={photoNews[0]} classNames={'h-60'} />
          }
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
            {
              photoNews.slice(1).map((post, index) => (
                <ImageOnly key={index + 1} post={post} classNames={''} />
              ))
            }
          </div>
        </div>
      </Section>
    </>
  )
}

export default Dashboard