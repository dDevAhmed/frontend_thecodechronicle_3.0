import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import Card from "../ui/Card"
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
  {
    image: '/src/assets/images/products/product-1.jpg',
    name: 'GoPro - HERO7 Black HD Waterproof Action',
    price: '349.99',
    rating: 3,
    reviewCount: 2
  },
  {
    image: '/src/assets/images/products/product-9.jpg',
    name: 'Apple Watch Series 4 Gold Aluminum Case',
    price: '499.99',
    rating: 4,
    reviewCount: 4
  },
  {
    image: '/src/assets/images/products/product-3.jpg',
    name: 'Lenovo - 330-15IKBR 15.6"',
    price: '339.99',
    rating: 3,
    reviewCount: 2
  },
  {
    image: '/src/assets/images/products/product-7.jpg',
    name: 'Bose - SoundSport  wireless headphones',
    price: '199.99',
    rating: 3,
    reviewCount: 4
  },
  {
    image: '/src/assets/images/products/product-8.jpg',
    name: 'Microsoft - Refurbish Xbox One S 500GB',
    price: '279.99',
    rating: 3,
    reviewCount: 6
  },
  {
    image: '/src/assets/images/products/product-14.jpg',
    name: 'GoPro - HERO7 Black HD Waterproof Action',
    price: '35.41',
    rating: 3,
    reviewCount: 10
  },
]

const Favorites = () => {
  return (
    <>
        <PagesTitle />

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
              {/* //fixme - flex out as in col, make component */}
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

export default Favorites