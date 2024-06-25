import React, { useEffect, useState } from 'react';
import './Product.css';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { productList } from './ProductList';
import { doc, getDoc, increment, setDoc, updateDoc } from 'firebase/firestore';
import { db } from './firebase';

function Product() {
  const [count, setCount] = useState(0);
  const [isPush, setIsPush] = useState(() => JSON.parse(localStorage.getItem("good")) || false);

  useEffect(() => {
    localStorage.setItem("good", JSON.stringify(isPush))
  }, [isPush])
  useEffect(() => {
    const fetchCount = async () => {
      const docRef = doc(db, "likes", "button1");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setCount(docSnap.data().count);
      } else {
        await setDoc(docRef, { count: 0 });
      }
    };

    fetchCount();
  }, []);

  const handleClick = async () => {
    setIsPush(prev => !prev);
    const docRef = doc(db, "likes", "button1");

    if (isPush) {
      await updateDoc(docRef, {
        count: increment(-1)
      });
    } else {
      await updateDoc(docRef, {
        count: increment(1)
      });
    }

    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setCount(docSnap.data().count);
    }
  };

  return (
    <div>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <h1 style={{ textAlign: "center", fontSize: "50px", borderBottom: "1px solid rgb(217, 217, 217)", width: "70%" }}>Product</h1>
      </div>
      <div className='pa'>
        {productList.map((pro, index) => (
          <div key={index} className='product' id='product' >
            <div className='product-content'>
              <h3>Product{index + 1}</h3>
              <div className='main_img'>
                <img src={pro.img} alt={`img${index + 1}`} className='product_img' />
              </div>
              <div className='likecontent'>
                <button className="like-btn" onClick={handleClick}>
                  <ThumbUpIcon style={isPush ? { color: "#98e0fa", marginTop: "8px" } : { color: "rgb(255,255,255)", marginTop: "8px" }} />
                </button>
                <p className='like'>Like </p>
                <p className='like'>{count}</p>
              </div>
            </div>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
