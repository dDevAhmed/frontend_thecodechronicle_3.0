import { IoIosTrendingUp, IoIosTrendingDown } from "react-icons/io";
import { HiMiniUsers, HiMiniCube } from "react-icons/hi2";
import { BiLineChart } from "react-icons/bi";
import { PiClockCounterClockwiseFill } from "react-icons/pi";
// eslint-disable-next-line no-unused-vars
import { ResponsiveContainer, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Area, PieChart, Pie } from "recharts"
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import Card from "../ui/Card"
import Dropdown from "../ui/Dropdown";
import DashboardTable from "../components/DashboardTable";
import FeaturedProductImage from '../assets/images/products/product-10.jpg'
import PagesTitle from "../components/PagesTitle";

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
    sales: [
      {
        sales: 5,
        percentage: 10,
      },
      {
        sales: 10,
        percentage: 50,
      },
      {
        sales: 15,
        percentage: 10,
      },
      {
        sales: 20,
        percentage: 99,
      },
      {
        sales: 25,
        percentage: 0,
      },
      {
        sales: 30,
        percentage: 35,
      },
      {
        sales: 35,
        percentage: 70,
      },
      {
        sales: 40,
        percentage: 15,
      },
      {
        sales: 45,
        percentage: 35,
      },
      {
        sales: 50,
        percentage: 8,
      },
      {
        sales: 55,
        percentage: 25,
      },
      {
        sales: 60,
        percentage: 10,
      },
    ]
  },
  {
    products: [
      {
        image: '/src/assets/images/products/product-9.jpg',
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
    revenue: [
      {
        sales: 5,
        profit: 55,
        percentage: 10,
      },
      {
        sales: 10,
        profit: 50,
        percentage: 50,
      },
      {
        sales: 15,
        profit: 45,
        percentage: 10,
      },
      {
        sales: 20,
        profit: 40,
        percentage: 99,
      },
      {
        sales: 25,
        profit: 35,
        percentage: 0,
      },
      {
        sales: 30,
        profit: 30,
        percentage: 35,
      },
      {
        sales: 35,
        profit: 25,
        percentage: 70,
      },
      {
        sales: 40,
        profit: 20,
        percentage: 15,
      },
      {
        sales: 45,
        profit: 15,
        percentage: 35,
      },
      {
        sales: 50,
        profit: 10,
        percentage: 8,
      },
      {
        sales: 55,
        profit: 5,
        percentage: 25,
      },
      {
        sales: 60,
        profit: 0,
        percentage: 10,
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
          <Card key={index} classNames={'px-4 py-5 sm:p-6'} style={{ backgroundColor: '#fff' }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#202224] font-normal">{stat.title}</p>
                <h3 className="text-[#202224] font-semibold text-[1.875rem] mt-3">{stat.title == 'Total Sales' && '$'}{stat.value.toLocaleString()}</h3>
              </div>
              <span
                className={`text-[2rem] rounded-2xl p-2`}
                style={{
                  backgroundColor: `${stat.icon.bg}30`,
                  color: stat.icon.bg,
                }}
              >
                {stat.icon.img}
              </span>
            </div>
            <div className="mt-5">
              <p className="flex items-center gap-2 text-[.8125rem]">
                <span className={`flex items-center gap-2 ${stat.growth.name === 'progress' ? 'text-[#00B69B]' : 'text-[#F93C65]'}`}>
                  {stat.growth.name === 'progress' ? <IoIosTrendingUp /> : <IoIosTrendingDown />}
                  {stat.growth.rate}%
                </span>
                <span className="text-[#606060]">{stat.growth.name === 'progress' ? <span>Up</span> : <span>Down</span>} from {stat.growth.time}</span>
              </p>
            </div>
          </Card>
        ))}
      </div>
      <ResponsiveContainer>
        <Card classNames={'px-4 py-5 sm:p-6 mt'} style={{ backgroundColor: '#fff', marginTop: '20px' }}>
          <span className="flex items-center justify-between  mb-5">
            <h3 className="text-[#202224] text-[1.125rem] font-semibold">Sales Details</h3>
            <Dropdown />
          </span>

          {/* //fixme - mobile responsiveness */}
          <AreaChart width={900} height={250} data={dashboardData[1].sales}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorPercentage" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#42B6F6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#BFE8FF" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="sales" />
            <YAxis domain={[0, 100]} ticks={[20, 40, 60, 80, 100]} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="sales" stroke="#4379EE" fillOpacity={1} fill="url(#colorPercentage)" />
          </AreaChart>
        </Card>
      </ResponsiveContainer>
      <Card classNames={'px-4 py-5 sm:p-6'} style={{ backgroundColor: '#fff', marginTop: '20px' }}>
        <span className="flex items-center justify-between  mb-5">
          <h3 className="text-[#202224] text-[1.125rem] font-semibold">Deals Details</h3>
          <Dropdown />
        </span>
        <DashboardTable header={['image', 'product name', 'location', 'date - time', 'piece', 'amount', 'status']} data={dashboardData[2]?.products || []} />
      </Card>
      <ResponsiveContainer width="100%">
        <Card classNames={'px-4 py-5 sm:p-6'} style={{ backgroundColor: '#fff', marginTop: '20px' }}>
          <span className="flex items-center justify-between  mb-5">
            <h3 className="text-[#202224] text-[1.125rem] font-semibold">Revenue</h3>
            <Dropdown />
          </span>

          {/* //fixme - mobile responsiveness and charts */}
          <AreaChart width={900} height={250} data={dashboardData[2].revenue}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="sales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FF946D" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#BFE8FF" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="profit" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#42B6F6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#BFE8FF" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="profit" />
            <YAxis domain={[0, 100]} ticks={[20, 40, 60, 80, 100]} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="sales" stroke="#F9978A" fillOpacity={1} fill="url(#sales)" />
            <Area type="monotone" dataKey="profit" stroke="#E3B9FF" fillOpacity={1} fill="url(#profit)" />
          </AreaChart>
        </Card>
      </ResponsiveContainer>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5">
        <Card classNames={'px-4 py-5 sm:p-6'} style={{ backgroundColor: '#fff' }}>
          <h3 className="text-[#202224] text-[1.125rem] font-semibold">Customers</h3>
          <PieChart width={900} height={250}>
            <Pie data={dashboardData[1]} dataKey="sales" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
            <Pie data={dashboardData[1]} dataKey="sales" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
          </PieChart>
        </Card>
        <Card classNames={'px-4 py-5 sm:p-6'} style={{ backgroundColor: '#fff' }}>
          <h3 className="text-[#202224] text-[22px] font-semibold">Featured Product</h3>
          <span className="relative">
            <img src={FeaturedProductImage} alt="Feature Product" className="m-auto h-40" />
            <span className="absolute top-1/2 left-0 right-0 flex items-center justify-between transform -translate-y-1/2">
              <IoChevronBackOutline className="bg-[rgba(226,234,248,0.8)] text-[#626262] rounded-full p-2 h-8 w-8 flex items-center justify-center cursor-pointer" />
              <IoChevronForwardOutline className="bg-[rgba(226,234,248,0.8)] text-[#626262] rounded-full p-2 h-8 w-8 flex items-center justify-center cursor-pointer" />
            </span>
          </span>
          <span className="text-center mt-5">
            <p className="text-[#282D32] font-medium text-[1.125rem]">Sony 4k Screen</p>
            <p className="text-[#4880FF]">$1750</p>
          </span>
        </Card>
        <Card classNames={'px-4 py-5 sm:p-6'} style={{ backgroundColor: '#fff' }}>
          <h3 className="text-[#202224] text-[1.125rem] font-semibold">Sales Analytics</h3>
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