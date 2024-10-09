import Card from "../ui/Card"
import Filter from "../components/Filter";
import OrdersList from '../components/OrdersList'
import TablePagination from "../components/TablePagination";

const OrderLists = () => {
  return (
    <>
      {/* //fixme - make dynamic */}
      <h3 className="text-[1.5rem] font-semibold text-[#202224]">Order Lists</h3>
      <div className="mt-5"><Filter /></div>

      <Card style={{ backgroundColor: '#fff', display: 'relative', marginTop: '20px' }}>
        <OrdersList />
      </Card>
      <TablePagination />
    </>
  )
}

export default OrderLists