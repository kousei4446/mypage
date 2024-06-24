import React from 'react'
import "./Product.css"
import image1 from "../img/img1.png"
// import image2 from "../img/img2.png"
// import image4 from "../img/img4.png"
// import image5 from "../img/img5.png"
// import image6 from "../img/img6.png"
// import image7 from "../img/img7.png"

function Product() {
  return (
    <div>
      <br />
      <h1 style={{ textAlign: "center", fontSize: "50px" }}>Product</h1>
      <br />
      <br />
      <div className='product' id='product' style={{ width: "80vw" }}>
        <div className='product-content'>
          <h3>product1</h3>
          <img src={image1} alt='img1' height="280px" className='product_img' />
          <div>
            <p>Like</p>
          </div>
        </div>
        <br />

{/*         
        <div className='display'>
          <div>
            <img src={image1} alt='img1' height="280px" className='product_img' />
            <p>60秒間でどれだけタイピング入力できるかを見ることができます!!<br />
              ソースコードは
              <a href='https://github.com/githubacountf/typimg.git' target='_blank' rel="noopener noreferrer">こちら</a>
            </p>
            <h4 style={{ textAlign: "center" }}>使用技術</h4>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <br />
            </ul>
          </div>

          <div>
            <img src={image2} alt='img2' height="300px" className='product_img' />
            <p>英単語で遊べます
              <a href='https://mytango-66aa6.web.app' target="_blank" rel="noopener noreferrer">遊ぶ</a>
            </p>
            <h4 style={{ textAlign: "center" }}>使用技術</h4>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
          </div>
          <div>
            <img src={image4} alt='img4' height="300px" className='product_img' />
            <p>api fetchを用いて外部のデータの取得によって作成しました
              <br />ソースコードは
              <a href='https://github.com/githubacountf/pokemon-app.git' target="_blank" rel="noopener noreferrer">こちら</a>
            </p>
            <h4 style={{ textAlign: "center" }}>使用技術</h4>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
          </div>
          <div>
            <img src={image5} alt='img5' height="300px" className='product_img' />
            <p>Todoアプリを作成しました。localStorageの利用によって更新しても消えないようにした。
              <br />ソースコードは
              <a href='https://github.com/githubacountf/Todo-app.git' target="_blank" rel="noopener noreferrer">こちら</a>
            </p>
            <h4 style={{ textAlign: "center" }}>使用技術</h4>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
          </div>

          <div>
            <img src={image6} alt='img6' className='product_img' />
            <p>連立方程式を加減法で解ける完全オリジナルアプリ
              <br />ソースコードは
              <a href='https://github.com/kousei4446/simultaneous_equation.git' target="_blank" rel="noopener noreferrer">こちら</a>
            </p>
            <h4 style={{ textAlign: "center" }}>使用技術</h4>
            <ul>
              <li>HTML</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
          </div>

          <div>
            <img src={image7} alt='img7' className='product_img' />
            <p>料理の名前、手順、材料等をメモれる完全オリジナルアプリ
              <br />ソースコードは
              <a href='https://github.com/kousei4446/smapho-recipe-app.git' target="_blank" rel="noopener noreferrer">こちら</a>
            </p>
            <h4 style={{ textAlign: "center" }}>使用技術</h4>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
          </div>

        </div> */}
      </div>
    </div>
  )
}

export default Product