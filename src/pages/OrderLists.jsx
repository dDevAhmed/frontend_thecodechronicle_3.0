import Card from "../ui/Card"
import Filter from "../components/Filter";
import OrdersList from '../components/OrdersList'

const OrderLists = () => {
  return (
    <>
      {/* //fixme - make dynamic */}
      <h3 className="text-[1.5rem] font-semibold text-[#202224]">Order Lists</h3>
      <div className="mt-5"><Filter /></div>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5">
        <Card style={{ backgroundColor: '#fff', display: 'relative' }}>
          <OrdersList />
        </Card>
      </div>
    </>
  )
}

export default OrderLists