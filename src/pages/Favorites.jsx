import PagesTitle from "../components/PagesTitle";
import ProductCard from "../components/ProductCard";

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
            <ProductCard key={index} product={product}/>
          ))
        }
      </div>
    </>
  )
}

export default Favorites