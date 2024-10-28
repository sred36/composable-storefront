import React, {useState, useEffect} from 'react'
import Header from './Header'
import Navigation from './Navigation'
import Search from './Search'
import ProductImage from './ProductImage'
import ProductDetails from './ProductDetails'

let data = [
    {
        id: 1,
        title: "Men's T-Shirt",
        image: 'One',
        description: 'A comfortable and stylish t-shirt for men.',
        availableSizes: ['S', 'M', 'L', 'XL'],
        price: '$19.99',
        seeMore: ['Two', 'Three', 'Four'],
        swatchColor: 'green-small'
    },
    {
        id: 2,
        title: "Women's Dress",
        image: 'Two',
        description: 'A fashionable dress for women, perfect for any occasion.',
        availableSizes: ['S', 'M', 'L'],
        price: '$39.99',
        seeMore: ['Five', 'Three', 'Four'],
        swatchColor: 'blue'
    },
    {
        id: 3,
        title: "Kids' Hoodie",
        image: 'Three',
        description: 'A cozy hoodie for kids, great for chilly days.',
        availableSizes: ['XS', 'S', 'M', 'L'],
        price: '$29.99',
        seeMore: ['Two', 'Five', 'Four'],
        swatchColor: 'blue'
    },
    {
        id: 4,
        title: 'Unisex Sneakers',
        image: 'Six',
        description: 'Stylish and comfortable sneakers for everyone.',
        availableSizes: ['6', '7', '8', '9', '10'],
        price: '$49.99',
        seeMore: ['Two', 'Three', 'One'],
        swatchColor: 'sky-small'
    },
    {
        id: 5,
        title: "Men's Jeans",
        image: 'Five',
        description: 'Classic denim jeans for men, versatile and durable.',
        availableSizes: ['30', '32', '34', '36'],
        price: '$39.99',
        seeMore: ['Two', 'Three', 'One'],
        swatchColor: 'red-small'
    }
]

const Product = () => {
    // Define state using the useState hook
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [productItems, setProductItems] = useState(data)
    const [activeProductId, setActiveProductId] = useState(data[2])

    // useEffect(() => {
    //     // Fetch local JSON data
    //     const fetchProducts = async () => {
    //         try {
    //             const response = await fetch('./Layout/ProductInfo.json') // Adjust this path if necessary
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok')
    //             }
    //             const result = await response.json()
    //             setIsLoaded(true)
    //             setProductItems(result)
    //             console.log('ddd', result)
    //             setActiveProductId(result[2]) // Set the first product as active by default
    //             console.log(result)
    //         } catch (error) {
    //             console.error('Error fetching products:', error)
    //         }
    //     }

    //     fetchProducts()
    // }, [])

    const sendImageData = (id) => {
        const selectedProduct = productItems.find((element) => element.swatchColor === id)
        if (selectedProduct) {
            setActiveProductId(selectedProduct)
            setIsLoaded(false) // Assuming you set it back to false on new product selection
        }
    }

    const selectedData = activeProductId

    return (
        <div>
            <Header />
            <Navigation />
            <Search />
            <ProductImage productImageProps={activeProductId} />
            <ProductDetails
                productImageProps={activeProductId}
                seletedItem={selectedData}
                sendImageData={sendImageData}
            />
        </div>
    )
}

export default Product
