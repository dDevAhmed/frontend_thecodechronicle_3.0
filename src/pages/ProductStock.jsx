/* eslint-disable no-unused-vars */
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import Card from "../ui/Card"
import TablePagination from "../components/TablePagination";
import ProductStockTable from "../components/ProductStockTable";
import PagesTitle from "../components/PagesTitle";
import { useProducts } from "../services/Product";

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

const ProductStock = () => {
  const { data, error, isLoading } = useProducts()

  if (isLoading) {
    // fixme - add spinner
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <PagesTitle />

        {/* //fixme - make component */}
        <div className="relative bg-white rounded-full w-fit">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="search"
            name="search"
            type="search"
            placeholder="Search product"
            className="block w-full rounded-full border-0 bg-transparent py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <Card classNames={'px-4 py-5 sm:p-6'} style={{ backgroundColor: '#fff', display: 'relative', marginTop: '20px' }}>
        <ProductStockTable
          header={['image', 'product name', 'category', 'price', 'piece', 'available color', 'action']}
          data={data}
        />
      </Card>
      <TablePagination />
    </>
  )
}

export default ProductStock;