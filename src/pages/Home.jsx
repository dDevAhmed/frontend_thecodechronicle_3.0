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
import { postDataNew, postsData, topHeadlineData } from "../data/data";
import TopHeadline from "../components/items/TopHeadline";
import ImageOnly from '../components/items/posts/Image'
import Audio from "../components/items/posts/Audio";
import CurrencyConverter from "../components/widgets/currency/CurrencyConverter";
import PostsNav from "../components/PostsNav";
import Divider from '../ui/Divider'
import Featured from "../components/sections/Featured";
import AudioStamp from "../ui/stamps/Audio";
import { useState } from "react";
import Videos from "../components/views/Videos";
import Pictures from "../components/views/Pictures";
import NewsFeed from "../components/views/NewsFeed";

const Home = () => {

  const allNews = postDataNew;
  
  const regularNews = postsData?.filter(post => post.type !== 'imageonly');
  const audioNews = postsData?.filter(post => post.type === 'audio');
  const photoNews = postsData?.filter(photo => photo.type === 'imageonly');

  const [currentTab, setCurrentTab] = useState('posts');

  const handleTabChange = (tabId) => {
    setCurrentTab(tabId);
  };

  return (
    <div className="flex flex-col gap-5 pt-5">

      <Section classNames={''}>
        <HomeHero classNames={'col-span-2'} />
      </Section>

      <Divider />

      <Section classNames={'flex items-start'}>
        <div className='pr-5'><AudioStamp /></div>
        <div className='overflow-x-auto scrollbar-hide flex-1'>
          <div className="flex gap-5 min-w-[120%]">
            {audioNews.map((audio, index) => (
              <Audio key={index} audio={audio} />
            ))}
          </div>
        </div>
      </Section>

      <Divider />

      <Section>
        <SectionTitle>Featured</SectionTitle>
        <Featured />
      </Section>

      <Section classNames={'sticky top-20'}>
        <PostsNav currentTab={currentTab} onTabChange={handleTabChange} />
        <div className="overflow-y-auto py-5">
          {
            currentTab === 'posts'
              ? <NewsFeed unorderedPosts={postDataNew} />
              : currentTab === 'videos'
                ? <Videos />
                : currentTab === 'pictures'
                && <Pictures photoNews={photoNews} />
          }
        </div>
      </Section>

      {/* subscribe newsletter here */}

      {/* footer here */}

    </div>
  )
}

export default Home