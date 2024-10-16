import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import Card from "../../ui/Card";

const data = [
    { year: 2015, sales: 30, profit: 60 },
    { year: 2016, sales: 100, profit: 90 },
    { year: 2017, sales: 50, profit: 40 },
    { year: 2018, sales: 75, profit: 80 },
    { year: 2019, sales: 90, profit: 100 },
];

const SalesAnalyticsChart = () => {
    return (
        <Card classNames={'px-4 py-5 sm:p-6'} style={{ backgroundColor: '#fff' }}>
            <h3 className="text-brand-primary-black text-[1.125rem] font-semibold">Sales Analytics</h3>
            <ResponsiveContainer width="100%" height={250}>
                <LineChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 0, bottom: 10 }}
                >
                    <XAxis
                        dataKey="year"
                        axisLine={false}
                        tickLine={false}
                        stroke="#9ca3af"
                        dy={10}
                    />
                    <YAxis axisLine={false} tickLine={false} stroke="#9ca3af" dx={-10} />
                    <Tooltip />
                    <Line
                        type="monotone"
                        dataKey="sales"
                        stroke="#4880FF"
                        strokeWidth={3}
                    />
                    <Line
                        type="monotone"
                        dataKey="profit"
                        stroke="#00B69B"
                        strokeWidth={3}
                    />
                </LineChart>
            </ResponsiveContainer>
        </Card>
    );
};

export default SalesAnalyticsChart;