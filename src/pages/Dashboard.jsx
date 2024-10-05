import Card from "../ui/Card"
import { IoIosTrendingUp, IoIosTrendingDown } from "react-icons/io";
import { HiMiniUsers, HiMiniCube } from "react-icons/hi2";
import { BiLineChart } from "react-icons/bi";
import { PiClockCounterClockwiseFill } from "react-icons/pi";
// eslint-disable-next-line no-unused-vars
import { ResponsiveContainer, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Area } from "recharts"

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
        sales: '5k',
        percentage: 10,
      },
      {
        sales: '10k',
        percentage: 50,
      },
      {
        sales: '15k',
        percentage: 10,
      },
      {
        sales: '20k',
        percentage: 99,
      },
      {
        sales: '25k',
        percentage: 0,
      },
      {
        sales: '30k',
        percentage: 35,
      },
      {
        sales: '35k',
        percentage: 70,
      },
      {
        sales: '40k',
        percentage: 15,
      },
      {
        sales: '45k',
        percentage: 35,
      },
      {
        sales: '50k',
        percentage: 8,
      },
      {
        sales: '55k',
        percentage: 25,
      },
      {
        sales: '60k',
        percentage: 10,
      },
    ]
  }
]

const Dashboard = () => {
  return (
    <>
      <h3 className="text-[1.5rem] font-semibold text-[#202224]">Dashboard</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-5">
        {dashboardData[0].stats.map((stat, index) => (
          <Card key={index}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#202224] font-normal">{stat.title}</p>
                <h3 className="text-[#202224] font-semibold text-[1.875rem] mt-3">{stat.value}</h3>
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
      <div className="mt-5">
        <ResponsiveContainer width="100%">
          <Card>
            <h3 className="text-[#202224] text-[1.125rem] font-semibold mb-5">Sales Details</h3>
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
              <Area type="monotone" dataKey="percentage" stroke="#4379EE" fillOpacity={1} fill="url(#colorPercentage)" />
            </AreaChart>
          </Card>
        </ResponsiveContainer>
      </div>
    </>
  )
}

export default Dashboard