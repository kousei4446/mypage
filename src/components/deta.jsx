export const productList = [
    "https://firebasestorage.googleapis.com/v0/b/kousei-site-6b348.appspot.com/o/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%20(354).png?alt=media&token=7cf2253d-080c-4c26-bfa3-91770a0f40cc",
    "https://firebasestorage.googleapis.com/v0/b/kousei-site-6b348.appspot.com/o/img6.png?alt=media&token=202f69cd-12e9-4d78-a76a-6a5d45280d3e",
    "https://firebasestorage.googleapis.com/v0/b/kousei-site-6b348.appspot.com/o/producthome.png?alt=media&token=26dfc7d9-257d-4e67-a3c9-287b0ea6fd63",
    "https://firebasestorage.googleapis.com/v0/b/kousei-site-6b348.appspot.com/o/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%20(580).png?alt=media&token=e036dd8c-a7e4-4b1b-8eef-dbf37c4c66d1",
    "https://firebasestorage.googleapis.com/v0/b/kousei-site-6b348.appspot.com/o/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%20(635).png?alt=media&token=133b6de9-6184-45ad-9558-af5b43e4b40e",

]
export const discription = ["英単語学習webアプリです。", "連立方程式を加減法で解くwebアプリです。", "迷子、落とし物を見つけるwebアプリです。", "部のシフト管理アプリです", "DjangoとAiの勉強をかねて勉強しました。"]

export const products = [
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
        url: ["https://github.com/kousei4446/mytango.git", "https://mytango-66aa6.web.app/"],
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
        url: ["https://github.com/kousei4446/simultaneous_equation.git", "https://simultaneousequation-2e472.web.app/"]
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
        url: ["https://github.com/kousei4446/figare.git", "https://figare.web.app/"]
    },
    {
        id: 4,
        title: "部活シフトアプリ",
        when: "2024年10月~2025年1月",
        content: "大学でのボランティア部でシフト制での活動があり、それにともなうシフト表の作成を簡単にするために作った。しかし、開発環境のOSのUbuntuが急遽動かなくなりなくなく断念。機能は完成しており残すはユーザーテストとデプロイのみだったのでとても悔しい。",
        func: ["ログイン", "カレンダーのタップした日付でシフト登録", "シフト表作成", "シフト表Pdfダウンロード機能", "管理者追加機能"],
        tools: ["React", "ReactFullCallender", "Laravel", "MySQL", "inertia.js", "vite"],
        img: [
            "https://firebasestorage.googleapis.com/v0/b/kousei-site-6b348.appspot.com/o/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%20(580).png?alt=media&token=e036dd8c-a7e4-4b1b-8eef-dbf37c4c66d1",
            "https://firebasestorage.googleapis.com/v0/b/kousei-site-6b348.appspot.com/o/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%20(579).png?alt=media&token=702f9304-5881-4f1e-924e-737362082aad",
        ],
        url: ["https://github.com/kousei4446/shift-app.git"]
    },
    {
        id: 5,
        title: "犬猫判別アプリ",
        when: "2025年1月",
        content: "Djangoとニューラルネットワークをもちいて犬か猫判別するアプリです。学習サイトを参考に作りました。この技術をもちいてなにかアプリを考えたい",
        func: ["犬か猫か判別できる"],
        tools: ["Django"],
        img: [
            "https://firebasestorage.googleapis.com/v0/b/kousei-site-6b348.appspot.com/o/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%20(64).png?alt=media&token=23cd48f8-aae6-4e8c-b860-9c8ac24af33b",
            "https://firebasestorage.googleapis.com/v0/b/kousei-site-6b348.appspot.com/o/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%20(635).png?alt=media&token=133b6de9-6184-45ad-9558-af5b43e4b40e",
            "https://firebasestorage.googleapis.com/v0/b/kousei-site-6b348.appspot.com/o/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%20(636).png?alt=media&token=ebec3518-8d94-4d58-bff5-5b2ab5cb8ffa",
        ],
        url: ["https://github.com/kousei4446/cat_or_dog-app.git"]

    },
];

