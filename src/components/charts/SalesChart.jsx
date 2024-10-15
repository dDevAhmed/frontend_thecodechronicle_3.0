import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { Legend } from '@headlessui/react'
import { salesData } from '../../data/data'
import Card from '../../ui/Card'
import Dropdown from '../../ui/Dropdown'

const SalesChart = () => {
    return (
        <Card classNames={'py-5 sm:p-6 '} style={{ backgroundColor: '#fff' }}>
            <span className="flex items-center justify-between mb-5">
                <h3 className="text-brand-primary-black text-[1.125rem] font-semibold">Sales Details</h3>
                <Dropdown />
            </span>
            <ResponsiveContainer width='100%' height={300}>
                <AreaChart data={salesData}
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
            </ResponsiveContainer>
        </Card>
    )
}

export default SalesChart