import React from 'react';
import './ProductPage.css';

// Sample product data
const products = [
  { id: 1, image: 'web1.jpg', title: 'Web App 1', description: 'Description for Web App 1' },
  { id: 2, image: 'web2.jpg', title: 'Web App 2', description: 'Description for Web App 2' },
  { id: 3, image: 'web3.jpg', title: 'Web App 3', description: 'Description for Web App 3' },
  { id: 4, image: 'web4.jpg', title: 'Web App 4', description: 'Description for Web App 4' },
  // Add more items as needed, up to 10 per section
];

const ProductSection = ({ title, products, className }) => (
  <div className={`product-section ${className}`}>
    <h2>{title} ({products.length})</h2>
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.title} className="product-image" />
          <h3 className="product-title">{product.title}</h3>
          <p className="product-description">{product.description}</p>
        </div>
      ))}
    </div>
  </div>
);

function ProductPage() {
  return (
    <div className="product-page">
      <ProductSection title="Web Applications" products={products} className="section-web" />
      <ProductSection title="Mobile Applications" products={products} className="section-mobile" />
      <ProductSection title="Game Development" products={products} className="section-game" />
    </div>
  );
}

export default ProductPage;
