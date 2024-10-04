import Card from "../ui/Card"
import { IoIosTrendingUp, IoIosTrendingDown } from "react-icons/io";
import { HiMiniUsers, HiMiniCube } from "react-icons/hi2";
import { BiLineChart } from "react-icons/bi";
import { PiClockCounterClockwiseFill } from "react-icons/pi";

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
          icon: 'progress',
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
          icon: 'progress',
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
          icon: 'regress',
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
          icon: 'progress',
          rate: 1.8,
          time: 'yesterday'
        }
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
                <span className={`flex items-center gap-2 ${stat.growth.icon === 'progress' ? 'text-[#00B69B]' : 'text-[#F93C65]'}`}>
                  {stat.growth.icon === 'progress' ? <IoIosTrendingUp /> : <IoIosTrendingDown />}
                  {stat.growth.rate}%
                </span>
                <span className="text-[#60606]">{stat.growth.icon === 'progress' ? <span>Up</span> : <span>Down</span>} from {stat.growth.time}</span>
              </p>
            </div>
          </Card>
        ))}
      </div>
    </>
  )
}

export default Dashboard