import React, { useState } from 'react';
import './Product.css';
import { Link } from 'react-router-dom';

function Product() {
  const [count, setCount] = useState(0);
  const productList = [
    "https://firebasestorage.googleapis.com/v0/b/kousei-site-6b348.appspot.com/o/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%20(354).png?alt=media&token=7cf2253d-080c-4c26-bfa3-91770a0f40cc",
    "https://firebasestorage.googleapis.com/v0/b/kousei-site-6b348.appspot.com/o/img6.png?alt=media&token=202f69cd-12e9-4d78-a76a-6a5d45280d3e",
    "https://firebasestorage.googleapis.com/v0/b/kousei-site-6b348.appspot.com/o/producthome.png?alt=media&token=26dfc7d9-257d-4e67-a3c9-287b0ea6fd63"
  ]
  const discription = ["英単語学習webアプリです。", "連立方程式を加減法で解くwebアプリです。", "迷子、落とし物を見つけるwebアプリです。"]

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
