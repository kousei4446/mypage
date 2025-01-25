import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { products } from './deta';




function ProductDetail() {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));
    const navigate = useNavigate();

    // products が6つのみの場合にコンテンツを表示
    if (product) {
        return (
            <>
                {/* <button onClick={() => navigate("/mypage/product")}>戻る</button> */}
                <br />
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%" }}>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "80%" }}>
                        <div style={{ borderRadius: "10px", background: "linear-gradient(45deg, #757575 0%, #9E9E9E 45%, #E8E8E8 70%, #9E9E9E 85%, #757575 90% 100%)", padding: "0px 10px" }}>
                            <p style={{ color: "white" }}>{product.title}</p>
                        </div>
                        <br />
                        <h4>期間</h4>
                        <p>{product.when}</p>
                        <h4>概要</h4>
                        <p>{product.content}</p>
                        <h4>機能</h4>
                        <ul>
                            {product.func.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                        <h4>イメージ図</h4>
                        <div style={{ overflow: "auto", display: "flex", flexDirection: "row", width: "98vw" }}>
                            {product.img.map((image, index) => (
                                <img
                                    src={image}
                                    key={index}
                                    alt={`product${index}`}
                                    style={{ maxWidth: "500px", maxHeight: "500px", margin: "0px 20px", boxShadow: "0px 0px 15px -5px #777777", border: "1px solid black" }}
                                />
                            ))}
                        </div>
                        <h4>技術スタック</h4>
                        <ul>
                            {product.tools.map((tool, index) => (
                                <li key={index}>{tool}</li>
                            ))}
                        </ul>

                        <h4>URL</h4>
                        <a href={product.url[0]} target="_blank" rel="noopener noreferrer">ソースコードはこちら</a>
                        {product.url.length == 2 && <a href={product.url[1]} target="_blank" rel="noopener noreferrer">こちらからappをお試しできます!!</a>}

                        <br />
                        <br />
                    </div>
                </div>
                <div className="sample"></div>
                <footer>
                    <p>© 2024 Kudo Kousei</p>
                </footer>
            </>
        );
    } else {
        return <p>ページを作成中です。</p>;
    }
}

export default ProductDetail;
