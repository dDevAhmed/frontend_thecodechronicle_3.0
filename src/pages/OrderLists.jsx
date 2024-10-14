import { useOrders } from "../services/Order"
import Card from "../ui/Card"
import Filter from "../components/Filter";
import TablePagination from "../components/TablePagination";
import OrdersTable from "../components/OrdersTable";
import PagesTitle from "../components/PagesTitle";

const OrderLists = () => {

  const { data, isLoading, error } = useOrders();

  if (isLoading) {
    // fixme - add spinner
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  return (
    <>
      <PagesTitle />

      <div className="mt-5"><Filter /></div>

      <Card classNames={'px-4 py-5 sm:p-6'} style={{ backgroundColor: '#fff', display: 'relative', marginTop: '20px' }}>
        <OrdersTable
          header={['id', 'name', 'address', 'date', 'type', 'status']}
          data={data}
        />
      </Card>
      <TablePagination />
    </>
  )
}

export default OrderLists