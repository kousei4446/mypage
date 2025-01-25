import React, { useState } from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
import { discription, productList } from './deta';

function Product() {
  const [count, setCount] = useState(0);

  return (
    <>
      <br />
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <h1 style={{
          textAlign: "center",
          //  borderBottom: "1px solid rgb(217, 217, 217)",
          width: "60%"
        }}>Product</h1>
      </div>
      <div style={{ display: "flex", justifyContent: "center", flexDirection: "clum", width: "100%" }}>
        <div style={{ width: "70%" }}>
          <div className='pa'>
            {productList.map((pro, index) => (
              <div key={index} className='product' id='product' >
                <div className='product-content'>
                  <h3>Product{index + 1}</h3>
                  <div className='main_img'>
                    <img src={pro} alt={`img${index + 1}`} className='product_img' />
                  </div>
                </div>
                <br />
                <p>{discription[index]}</p>
                <Link to={`/mypage/product/${index + 1}`}>詳しくはこちら</Link>
                <br />
              </div>
            ))}
          </div>
        </div>
        <div className="sample"></div>
      </div>

      <footer>
        <p>© 2024 Kudo Kousei</p>
      </footer>
    </>
  );
}

export default Product;
