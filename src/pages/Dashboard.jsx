const dashboardData = [
  {
    stats: [
      {
        title: 'Total User',
        value: 40689,
        icon: {
          img: 'users',
          bg: '#8280FF'
        },
        growth: {
          icon: 'progress',
          rate: 8.5,
          time: 'yesterday'
        }
      }
    ]
  }
]

const Dashboard = () => {
  return (
    <>
      <h3 className="text-[1.5rem] font-semibold text-[#202224]">Dashboard</h3>
    </>
  )
}

export default Dashboard