import { useProducts } from "../services/Product";  
import { useOrders } from "../services/Order";  
import Card from "../ui/Card";  
import OrdersTable from "../components/OrdersTable";  
import PagesTitle from "../components/PagesTitle";  
import ProductStockTable from "../components/ProductStockTable";  

const Table = () => {  
  const { data: productData, error: productError, isLoading: productLoading } = useProducts();  
  const { data: orderData, error: orderError, isLoading: orderLoading } = useOrders();  

  // Show loading state if either request is loading  
  if (productLoading || orderLoading) {  
    // You can implement a spinner here as a loading indicator  
    return <div>Loading...</div>;  
  }  

  // Show error state if either request has an error  
  if (productError) {  
    return <div>Error fetching products: {productError.message}</div>;  
  }  
  
  if (orderError) {  
    return <div>Error fetching orders: {orderError.message}</div>;  
  }  

  return (  
    <>  
      <PagesTitle />  

      <Card classNames={'px-4 py-5 sm:p-6'} style={{ backgroundColor: '#fff', display: 'relative', marginTop: '20px' }}>  
        <OrdersTable  
          header={['id', 'name', 'address', 'date', 'type', 'status']}  
          data={orderData}  
        />  
      </Card>  

      <Card classNames={'px-4 py-5 sm:p-6'} style={{ backgroundColor: '#fff', display: 'relative', marginTop: '20px' }}>  
        <ProductStockTable  
          header={['image', 'product name', 'category', 'price', 'piece', 'available color', 'action']}  
          data={productData}  
        />  
      </Card>  
    </>  
  );  
};  

export default Table;