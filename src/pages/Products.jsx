import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import Card from "../ui/Card"
import Pattern1 from '../assets/images/pattern_1.png'
import Button from "../ui/Button"
import PagesTitle from "../components/PagesTitle";

const products = [
  {
    image: '/src/assets/images/products/product-6.jpg',
    name: 'Apple Smart Keyboard',
    price: '179.99',
    rating: 4,
    reviewCount: 10
  },
  {
    image: '/src/assets/images/products/product-5.jpg',
    name: 'Canon - EOS 5D Mark IV DSLR Camera',
    price: '3599.99',
    rating: 4,
    reviewCount: 15
  },
  {
    image: '/src/assets/images/products/product-11.jpg',
    name: 'MacBook Pro 13" Display, i5',
    price: '1199.99',
    rating: 3,
    reviewCount: 6
  },
]

const Products = () => {
  return (
    <>
      <PagesTitle />

      <Card style={{ backgroundImage: `url(${Pattern1})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#4880FF', color: 'white', marginTop: '20px', position: 'relative' }}>
        <div className="px-20">
          <p className="text-[.75rem]">September 12-22</p>
          {/* //fixme - h3-enjoy resize */}
          <h3 className="text-[1.5rem] font-semibold mt-1 ">Enjoy free home delivery this summer</h3>
          <p className="text-[.75rem] mt-1">Designer Dresses - Pick from trendy Designer Dress.</p>
          <Button style={{ backgroundColor: '#FF8743', color: 'white', marginTop: '20px' }}>Get Started</Button>
        </div>
        <span className="absolute top-1/2 left-0 right-0 flex items-center justify-between transform -translate-y-1/2 p-5">
          <IoChevronBackOutline className="bg-[rgba(226,234,248,0.8)] text-[#626262] rounded-full p-2 h-8 w-8 flex items-center justify-center cursor-pointer" />
          <IoChevronForwardOutline className="bg-[rgba(226,234,248,0.8)] text-[#626262] rounded-full p-2 h-8 w-8 flex items-center justify-center cursor-pointer" />
        </span>
      </Card>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5">
        {
          products.map((product, index) => (
            <Card key={index} style={{ backgroundColor: '#fff', display: 'relative' }}>
              <span className="relative">
                <IoMdHeartEmpty className="absolute right-0 cursor-pointer" />
                <img src={product.image} alt="Product Image" className="m-auto h-40" />
                <span className="absolute top-1/2 left-0 right-0 flex items-center justify-between transform -translate-y-1/2">
                  <IoChevronBackOutline className="bg-[rgba(226,234,248,0.8)] text-[#626262] rounded-full p-2 h-8 w-8 flex items-center justify-center cursor-pointer" />
                  <IoChevronForwardOutline className="bg-[rgba(226,234,248,0.8)] text-[#626262] rounded-full p-2 h-8 w-8 flex items-center justify-center cursor-pointer" />
                </span>
              </span>
              {/* //fixme - flex out as in col */}
              <span className="flex flex-col justify-between">
                <p className="text-[#202224] text-[1.125rem] font-medium">{product.name}</p>
                <span>
                  <p className="text-[#4880FF] text-[.75rem] mt-2">${product.price}</p>
                  <span className="flex items-center gap-2 mt-2">
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <MdOutlineStarPurple500
                          key={rating}
                          aria-hidden="true"
                          className={`${product.rating > rating ? 'text-[#FF9500]' : 'text-gray-200'} h-5 w-5 flex-shrink-0`}
                        />
                      ))}
                    </div>
                    ({product.reviewCount})
                  </span>
                  <Button style={{ backgroundColor: '#E2EAF8', marginTop: '20px', color: '#202224' }}>Edit Product</Button>
                </span>
              </span>
            </Card>
          ))
        }
      </div>
    </>
  )
}

export default Products