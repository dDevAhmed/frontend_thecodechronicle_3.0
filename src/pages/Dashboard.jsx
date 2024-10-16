import { HiMiniUsers, HiMiniCube } from "react-icons/hi2";
import { BiLineChart } from "react-icons/bi";
import { PiClockCounterClockwiseFill } from "react-icons/pi";
import { ResponsiveContainer, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Area, PieChart, Pie } from "recharts"
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import Card from "../ui/Card"
import Dropdown from "../ui/Dropdown";
import DashboardStat from "../components/cards/DashboardStat";
import DashboardTable from "../components/DashboardTable";
import FeaturedProductImage from '../assets/images/products/product-10.jpg'
import AppleWatchImage from '../assets/images/products/product-9.jpg'
import PagesTitle from "../components/PagesTitle";
import SalesChart from "../components/charts/SalesChart";
import RevenueChart from "../components/charts/RevenueChart";

const dashboardData = [
  {
    stats: [
      {
        title: 'Total User',
        value: 40689,
        icon: {
          img: <HiMiniUsers />,
          bg: '#8280FF'
        },
        growth: {
          name: 'progress',
          rate: 8.5,
          time: 'yesterday'
        }
      },
      {
        title: 'Total Order',
        value: 10293,
        icon: {
          img: <HiMiniCube />,
          bg: '#FEC53D'
        },
        growth: {
          name: 'progress',
          rate: 1.3,
          time: 'pass week'
        }
      },
      {
        title: 'Total Sales',
        value: 89000,
        icon: {
          img: <BiLineChart />,
          bg: '#4AD991'
        },
        growth: {
          name: 'regress',
          rate: 4.3,
          time: 'yesterday'
        }
      },
      {
        title: 'Total Pending',
        value: 2040,
        icon: {
          img: <PiClockCounterClockwiseFill />,
          bg: '#FF9066'
        },
        growth: {
          name: 'progress',
          rate: 1.8,
          time: 'yesterday'
        }
      },
    ]
  },
  {
    products: [
      {
        image: AppleWatchImage,
        productName: 'apple watch',
        location: '6096 marjolaine landing',
        datetime: '12.09.2019 - 12.53 PM',
        piece: 423,
        amount: 34295,
        status: 'delivered'
      },
    ]
  },
  {
    analytics: [
      {
        date: 2015,
        percentage: 0,
      },
      {
        date: 2015,
        percentage: 0,
      }
    ]
  }
]

const Dashboard = () => {
  return (
    <>
      <PagesTitle />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-5">
        {dashboardData[0].stats.map((stat, index) => (
          <DashboardStat key={index} stat={stat} />
        ))}
      </div>

      <div className="mt-5">
        <SalesChart />
      </div>

      <Card classNames={'px-4 py-5 sm:p-6'} style={{ backgroundColor: '#fff', marginTop: '20px' }}>
        <span className="flex items-center justify-between  mb-5">
          <h3 className="text-brand-primary-black text-[1.125rem] font-semibold">Deals Details</h3>
          <Dropdown />
        </span>
        <DashboardTable header={['image', 'product name', 'location', 'date - time', 'piece', 'amount', 'status']} data={dashboardData[1]?.products || []} />
      </Card>

      <div className="mt-5">
        <RevenueChart />
      </div>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5">
        <Card classNames={'px-4 py-5 sm:p-6'} style={{ backgroundColor: '#fff' }}>
          <h3 className="text-brand-primary-black text-[1.125rem] font-semibold">Customers</h3>
          <PieChart width={900} height={250}>
            <Pie data={dashboardData[1]} dataKey="sales" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
            <Pie data={dashboardData[1]} dataKey="sales" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
          </PieChart>
        </Card>
        <Card classNames={'px-4 py-5 sm:p-6'} style={{ backgroundColor: '#fff' }}>
          <h3 className="text-brand-primary-black text-[22px] font-semibold">Featured Product</h3>
          <span className="relative">
            <img src={FeaturedProductImage} alt="Feature Product" className="m-auto h-40" />
            <span className="absolute top-1/2 left-0 right-0 flex items-center justify-between transform -translate-y-1/2">
              <IoChevronBackOutline className="bg-[rgba(226,234,248,0.8)] text-[#626262] rounded-full p-2 h-8 w-8 flex items-center justify-center cursor-pointer" />
              <IoChevronForwardOutline className="bg-[rgba(226,234,248,0.8)] text-[#626262] rounded-full p-2 h-8 w-8 flex items-center justify-center cursor-pointer" />
            </span>
          </span>
          <span className="text-center mt-5">
            <p className="text-[#282D32] font-medium text-[1.125rem]">Sony 4k Screen</p>
            <p className="text-brand-primary-blue">$1750</p>
          </span>
        </Card>
        <Card classNames={'px-4 py-5 sm:p-6'} style={{ backgroundColor: '#fff' }}>
          <h3 className="text-brand-primary-black text-[1.125rem] font-semibold">Sales Analytics</h3>
          <PieChart width={900} height={250}>
            <Pie data={dashboardData[1]} dataKey="sales" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
            <Pie data={dashboardData[1]} dataKey="sales" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
          </PieChart>
        </Card>
      </div>
    </>
  )
}

export default Dashboard