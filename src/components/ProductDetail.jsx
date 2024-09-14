import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const products = [
    {
        id: 1,
        title: "英単語学習webアプリ",
        when: "2023年2月~3月",
        content: "大学1年のころ英語の勉強していたとき英単語を毎日持ち歩くのが大変だなと思い開発しました。私の所属している大学の先輩の影響でReactに興味を持ったためReactを使いました。当時はバックエンドやRestのurl設計概念はもちろんルーティングの設定方法もわからなかったので表示の切り替えをuseStateの変数に真偽値を持たせて行い、データの保存はローカルストレージに保存するというやり方をとりました。音声読み上げは自分が欲しいなと思ったが作り方が検討もつかなかったためchatGPTを活用し導入しました。",
        func: [
            "英単語の日本語を表示・非表示機能",
            "指定した単語の保存機能",
            "指定した範囲内でのランダムで英単語が表示される機能",
            "英語音声読み上げ機能"

        ],
        tools: ["React", "Firebase Hosting"],
        img: [
            "https://firebasestorage.googleapis.com/v0/b/kousei-site-6b348.appspot.com/o/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%20(355).png?alt=media&token=d39275cf-99b2-4d17-9806-ba511ce3a857",
            "https://firebasestorage.googleapis.com/v0/b/kousei-site-6b348.appspot.com/o/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%20(356).png?alt=media&token=b31e760a-8d40-4a1b-bc56-bc47eeb29bfe",
            "https://firebasestorage.googleapis.com/v0/b/kousei-site-6b348.appspot.com/o/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%20(357).png?alt=media&token=2440c553-9a8f-40a3-a973-9e5b50d017c8",
            "https://firebasestorage.googleapis.com/v0/b/kousei-site-6b348.appspot.com/o/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%20(358).png?alt=media&token=d60f689d-ec93-4098-918f-668ea1c3f2f7"
        ],
        url: "https://mytango-66aa6.web.app/"
    },
    {
        id: 2,
        title: "連立方程式を加減法で解くwebアプリ",
        when: "2023年4月",
        content: "私は塾バイトをしており、ふと連立方程式を解けるようなwebサイトがあればいいなと考え簡単ではありますが作ってみました。授業等で時間が無くなったためCSSや機能面をあまり凝れなかった点が難点です。",
        func: ["数字を入力すると加減法で解いた解答を出す機能"],
        tools: ["React"],
        img: [
            "https://firebasestorage.googleapis.com/v0/b/kousei-site-6b348.appspot.com/o/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%20(360).png?alt=media&token=d4abf483-561e-4b55-a2fd-3e5c97900725",
            "https://firebasestorage.googleapis.com/v0/b/kousei-site-6b348.appspot.com/o/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%20(361).png?alt=media&token=e347bccb-dab3-4924-9228-b31ca8f475d0"
        ],
        url: "https://simultaneousequation-2e472.web.app/"
    },
    {
        id: 3,
        title: "迷子、落とし物を見つけるwebアプリ",
        when: "2024年6月~2024年7月",
        content: "大学の実践系の授業の一環として、防災の課題解決をおこなうためのwebアプリケーションを作りました。災害時のみで使えるアプリは普及されないと考えたため、普段は落とし物などを見つけたらそれを投稿してものを無くした人がこのアプリを使って見つけることができると考えこれを作りました。そして、災害時は高齢者、障害者小さなお子さんの迷子やペットを探すことができます。",
        func: ["ユーザー情報の変更", "落とし物や迷子の投稿", "その投稿に対してのチャット", "過去の投稿の削除", "絞り込み機能"],
        tools: ["React", "React Router", "React Icons", "Firebase Firestore", "Firebase Authentication", "Firebase Hosting", "Firebase Cloud Storage"],
        img: [
            "https://firebasestorage.googleapis.com/v0/b/kousei-site-6b348.appspot.com/o/producthome.png?alt=media&token=26dfc7d9-257d-4e67-a3c9-287b0ea6fd63",
            "https://firebasestorage.googleapis.com/v0/b/kousei-site-6b348.appspot.com/o/product1.png?alt=media&token=a752fb40-8812-4ff3-842b-6f4b89cf8b3c",
            "https://firebasestorage.googleapis.com/v0/b/kousei-site-6b348.appspot.com/o/product4.png?alt=media&token=4741216e-7583-4f42-90c0-3a428fab6b34",
            "https://firebasestorage.googleapis.com/v0/b/kousei-site-6b348.appspot.com/o/product5.png?alt=media&token=0ab64efc-edd3-4ec8-8f63-8c7b5284a331",
            "https://firebasestorage.googleapis.com/v0/b/kousei-site-6b348.appspot.com/o/product6.png?alt=media&token=b29c1f3f-16ed-4b6e-989e-1f678b2fd69e",
            "https://firebasestorage.googleapis.com/v0/b/kousei-site-6b348.appspot.com/o/product2.png?alt=media&token=c426da16-5f3a-4902-9509-e7d41ec760f3",
            "https://firebasestorage.googleapis.com/v0/b/kousei-site-6b348.appspot.com/o/product3.png?alt=media&token=e12e22e6-0fa8-4679-9756-43f1332cce43"
        ],
        url: "https://figare.web.app/"
    }
];

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
                            <h1 style={{ color: "white" }}>{product.title}</h1>
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
                        {product.url &&
                            <>
                                <h4>URL</h4>
                                <a href={product.url} target="_blank" rel="noopener noreferrer">こちらからappをお試しできます!!</a>
                            </>
                        }
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
