import Card from "../ui/Card"
import TablePagination from "../components/TablePagination";
import OrdersTable from "../components/OrdersTable";
import PagesTitle from "../components/PagesTitle";
import ProductStockTable from "../components/ProductStockTable";

const orderListsData = [
  {
    id: "00001",
    name: "christine brooks",
    address: "889 kutch green apt. 448",
    date: "04 Sep 2019",
    type: "electric",
    status: "completed",
  },
  {
    id: "00002",
    name: "rosie pearson",
    address: "979 immanuel ferry suite 526",
    date: "28 May 2019",
    type: "Book",
    status: "processing",
  },
  {
    id: "00003",
    name: "darrell caldwell",
    address: "8567 fride ports",
    date: "23 Nov 2019",
    type: "Medicine",
    status: "rejected",
  },
  {
    id: "00004",
    name: "gilbert johnston",
    address: "765 destiny lake suite 600",
    date: "05 Feb 2019",
    type: "Mobile",
    status: "completed",
  },
  {
    id: "00005",
    name: "alan cain",
    address: "042 mylene throughway",
    date: "29 Jul 2019",
    type: "watch",
    status: "processing",
  },
  {
    id: "00006",
    name: "Alfred Murray",
    address: "543 weinman mountain",
    date: "15 Aug 2019",
    type: "medicine",
    status: "completed",
  },
  {
    id: "00007",
    name: "maggie sullivan",
    address: "new scottsberg",
    date: "21 Dec 2019",
    type: "watch",
    status: "processing",
  },
  {
    id: "00008",
    name: "rosie todd",
    address: "new joh",
    date: "30 Apr 2019",
    type: "medicine",
    status: "hold",
  },
  {
    id: "00009",
    name: "Dottie Miles",
    address: "124 lyla forge suite 375",
    date: "09 Jan 2019",
    type: "book",
    status: "transit",
  },
  {
    id: "00010",
    name: "christine brooks",
    address: "889 kutch green apt. 448",
    date: "04 Sep 2019",
    type: "electric",
    status: "completed",
  },
  {
    id: "00011",
    name: "rosie pearson",
    address: "979 immanuel ferry suite 526",
    date: "28 May 2019",
    type: "Book",
    status: "processing",
  },
  {
    id: "00012",
    name: "darrell caldwell",
    address: "8567 fride ports",
    date: "23 Nov 2019",
    type: "medicine",
    status: "rejected",
  },
  {
    id: "00013",
    name: "gilbert johnston",
    address: "765 destiny lake suite 600",
    date: "05 Feb 2019",
    type: "mobile",
    status: "completed",
  },
  {
    id: "00014",
    name: "alan cain",
    address: "042 mylene throughway",
    date: "29 Jul 2019",
    type: "watch",
    status: "processing",
  },
  {
    id: "00015",
    name: "alfred murray",
    address: "543 weinman mountain",
    date: "15 Aug 2019",
    type: "medicine",
    status: "completed",
  },
  {
    id: "00016",
    name: "Maggie Sullivan",
    address: "new sottsberg",
    date: "21 Dec 2019",
    type: "Watch",
    status: "processing",
  },
  {
    id: "00017",
    name: "Rosie Todd",
    address: "new joh",
    date: "30 Apr 2019",
    type: "medicine",
    status: "hold",
  },
  {
    id: "00018",
    name: "dottie miles",
    address: "124 lyla forge suite 375",
    date: "09 Jan 2019",
    type: "book",
    status: "transit",
  },
];

const productStockData = [
  {
    image: '/src/assets/images/products/product-9.jpg',
    productName: "Apple Watch Series 4",
    category: "digital product",
    price: 690.00,
    piece: 63,
    availableColor: ['#000000', '#9F9F9F', '#E98F8F'],
  }, 
  {
    image: '/src/assets/images/products/product-6.jpg',
    productName: "Apple Smart Keyboard",
    category: "digital product",
    price: 179.00,
    piece: 16,
    availableColor: ['#000000', '#E98F8F', '#4D88EF', '#E9C157'],
  }, 
  {
    image: '/src/assets/images/products/product-5.jpg',
    productName: "Canon - EOS 5D Mark IV DSLR Camera",
    category: "digital product",
    price: 3599.00,
    piece: 6,
    availableColor: ['#882853', '#7CB7F5', '#12163C', '#4343EE'],
  }, 
  {
    image: '/src/assets/images/products/product-17.jpg',
    productName: "Trainer",
    category: "fashion",
    price: 99.00,
    piece: 80,
    availableColor: ['#283988', '#000000', '#A32147'],
  }, 
  {
    image: '/src/assets/images/products/product-20.jpg',
    productName: "Form Seat",
    category: "furniture",
    price: 300.00,
    piece: 5,
    availableColor: ['#283988', '#000000', '#A32147'],
  }, 
  {
    image: '/src/assets/images/products/product-16.jpg',
    productName: "Mophler",
    category: "fashion",
    price: 350.00,
    piece: 5,
    availableColor: ['#000000', '#F57C7C', '#4D88EF', '#E9C157'],
  }, 
  {
    image: '/src/assets/images/products/product-11.jpg',
    productName: "MacBook Pro 13\" Display, i5",
    category: "digital product",
    price: 1199.99,
    piece: 13,
    availableColor: ['#882853', '#7CB7F5', '#12163C', '#4343EE'],
  }, 
];

const Table = () => {
  return (
    <>
      <PagesTitle />

      <Card classNames={'px-4 py-5 sm:p-6'} style={{ backgroundColor: '#fff', display: 'relative', marginTop: '20px' }}>
        <OrdersTable
          header={['id', 'name', 'address', 'date', 'type', 'status']}
          data={orderListsData}
        />
      </Card>

      <Card classNames={'px-4 py-5 sm:p-6'} style={{ backgroundColor: '#fff', display: 'relative', marginTop: '20px' }}>
        <ProductStockTable
          header={['image', 'product name', 'category', 'price', 'available color', 'action']}
          data={productStockData}
        />
      </Card>
    </>
  )
}

export default Table