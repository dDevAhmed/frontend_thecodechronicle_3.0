import { Legend } from "@headlessui/react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const salesData = [
    { sales: '5k', percentage: 20 },
    { sales: '10k', percentage: 40 },
    { sales: '15k', percentage: 45 },
    { sales: '20k', percentage: 64 },
    { sales: '25k', percentage: 50 },
    { sales: '30k', percentage: 40 },
    { sales: '35k', percentage: 30 },
    { sales: '40k', percentage: 50 },
    { sales: '45k', percentage: 55 },
    { sales: '50k', percentage: 45 },
    { sales: '55k', percentage: 50 },
    { sales: '60k', percentage: 60 },
];

const CurrencyChart = () => {
    return (
        <ResponsiveContainer width='100%' height={150}>
            <AreaChart data={salesData}
                margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
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
    )
}

export default CurrencyChart