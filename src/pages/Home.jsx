import React from 'react'
import { getProducts } from '../data/Products'
import ProductCard from '../components/ProductCard';
function Home() {
    const products = getProducts();
    return (
        <div className="page">
            <div className="home-hero">
                <h1 className='home-title'>Welcome to ECO Hub </h1>
            </div>
            <div className="container">

                <p className='home-subtitle'>Discover Amazings Products</p>
                <h2 className="page-title">Our Products</h2>
                <div className="product-grid">
                    {products.map((product) => (
                        <ProductCard product={product} key={product.id} />
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Home
