// content/thepier-reviews.ts — The Pier Coliving の Google クチコミ（手動転載・自動反映なし）
// ============================================================================
// 出典: Google マップ「The pier | Goto Nagasaki」クチコミ（総合 5.0 ★・12件 / 2026-07-19 取得）
// - オーナー（大瀬良）自身のクチコミは掲載対象外
// - 原文がENのものはJPページで日本語訳、原文JAのものはENページで英語訳を表示（訳注つき）
// - Fabienne のJP訳は Google 公式翻訳を使用。その他の訳は遊行にて作成
// - ※ y t / Taeko T / Peter Söderbaum の3件は取得時に全文展開が
//   できなかったため前半のみ掲載。全文入手後に差し替えること
// ============================================================================

export interface PierReview {
  author: string;
  stars: number;
  when_ja: string;
  when_en: string;
  original: "ja" | "en";
  text_ja: string;
  text_en: string;
}

export const PIER_RATING = { score: "5.0", count: 12 };
export const PIER_MAPS_URL =
  "https://maps.google.com/?q=The+Pier+Goto+Nagasaki";

export const PIER_REVIEWS: PierReview[] = [
  {
    author: "Peter Söderbaum",
    stars: 5,
    when_ja: "1週間前",
    when_en: "a week ago",
    original: "en",
    text_en:
      "Stayed for a month wish it was longer! Goto is a wonderful island. Calm and relaxing, filled with lovely people, nature and activities. The team at pier go out of their way to help you have a fantastic experience.",
    text_ja:
      "1ヶ月滞在しましたが、もっと長くいたかったです。五島は素晴らしい島。穏やかでリラックスできて、素敵な人々と自然とアクティビティにあふれています。The Pier のチームは、最高の体験ができるよう親身にサポートしてくれます。",
  },
  {
    author: "Chia-Yu Hsu",
    stars: 5,
    when_ja: "1ヶ月前",
    when_en: "a month ago",
    original: "en",
    text_en:
      "Great location, with a café downstairs that's perfect for getting some work done, a convenience store just a 5-minute walk away, a supermarket and drugstore about 7 minutes away, and the pier only a 10-minute walk from the house.\n\nThe common area is cozy and well-equipped, with a projector and speaker that make movie nights enjoyable. The rooms have plenty of natural light.\n\nBeyond the space itself, what truly makes this place special are the people. The local community managers are warm, welcoming, and always ready to help you connect with locals, discover hidden gems, and make the most of your stay.\n\nAll in all, it's a peaceful and quiet place to recharge, slow down, and experience the authentic charm of Japan.",
    text_ja:
      "最高のロケーションです。階下には仕事をするのに最適なカフェがあり、コンビニまで徒歩5分、スーパーとドラッグストアまで約7分、桟橋までは徒歩10分です。\n\n共用エリアは居心地が良く設備も充実していて、プロジェクターとスピーカーで映画の夜も楽しめます。部屋には自然光がたっぷり入ります。\n\n空間そのもの以上にこの場所を特別にしているのは、人です。地元のコミュニティマネージャーは温かく、いつでも地元の人とのつながりや隠れた名所探しを手伝ってくれて、滞在を最大限に楽しませてくれます。\n\n総じて、充電して、ゆっくりして、日本の本物の魅力を味わえる、平和で静かな場所です。",
  },
  {
    author: "Fabienne Stenzhorn",
    stars: 5,
    when_ja: "6ヶ月前",
    when_en: "6 months ago",
    original: "en",
    text_en:
      "We stayed at The Pier for a month, and it was an outstanding experience from start to finish. What truly makes this place special is the local community. People are incredibly welcoming, always ready to help, and genuinely invested in creating a strong, supportive environment. Digital nomads are warmly embraced, and that sense of care is felt from day one. We even had a large Discord group that included both residents and locals, so whenever a question or issue came up, there was always someone willing to help. We shared karaoke nights, delicious barbecues, chinese bao making, beach sunsets, lots of food experiences, foot onsen, aroma therapy, lots of fishiiiing and coworking days in different cafés and workspaces around the island. One of the highlights was the Christmas party we organized together.\n\nThe coliving space itself is thoughtfully designed and beautifully styled, inspired by the idea of a pier. The rooms are spacious, with extremely comfortable beds and a desk with a chair, making it ideal for remote work. The kitchen is very well equipped, in a stylish white Balmuda design. The Wi-Fi was excellent throughout, with no issues during video calls or remote work.\n\nThe location is extremely convenient — within walking distance from Fukue Port, with supermarkets and drugstores nearby. The owner and the residents are incredibly kind, and it truly felt like a place you would want to stay long term. Overall, The Pier offers a rare combination of comfort, thoughtful design, excellent facilities, and a genuinely warm community.\n\nThank you so much 🥰",
    text_ja:
      "The Pier に1ヶ月滞在しましたが、最初から最後まで素晴らしい体験でした。この場所を本当に特別なものにしているのは、地域コミュニティです。人々は驚くほど温かく、いつでも助けてくれて、支え合う環境づくりに心から取り組んでいます。デジタルノマドは温かく迎え入れられ、その思いやりは初日から感じられます。住人と地元の人が参加する大きなグループもあり、質問や困りごとがあればいつも誰かが助けてくれました。カラオケの夜、美味しいバーベキュー、中華まん作り、ビーチの夕日、足湯、アロマテラピー、たくさんの釣り、島のカフェを巡るコワーキングの日々。ハイライトのひとつは、みんなで企画したクリスマスパーティーでした。\n\nコリビングスペース自体は桟橋をイメージして丁寧にデザインされ、美しく設えられています。部屋は広く、とても快適なベッドとデスク・椅子があり、リモートワークに理想的です。キッチンはスタイリッシュな白のBALMUDAで統一され、設備も充実。Wi-Fiは全館で良好で、ビデオ通話やリモートワークでも問題ありませんでした。\n\n立地は非常に便利で、福江港から徒歩圏内。スーパーやドラッグストアも近くにあります。オーナーと住民の方々はとても親切で、本当に長期滞在したくなる場所だと感じました。The Pier は快適さ、考え抜かれたデザイン、優れた設備、そして心から温かいコミュニティが融合した、他に類を見ない場所です。\n\n本当にありがとうございます🥰",
  },
  {
    author: "Sole García Fernández",
    stars: 5,
    when_ja: "1年前",
    when_en: "a year ago",
    original: "en",
    text_en:
      "I stayed in The Pier for a month and it was a wonderful experience!\n\nTbh I never thought staying in a island could be that cool, being surrounded by a local community always looking to help you and show you the island. They love nomads and they really care about keeping a strong supportive community.\n\nWe had a whatsapp group with all the people of the community (included people that didn't live in the space), so every time we had any issue or doubt there were a lot of people able to help us. We went karaoke, had delicious bbq in a farm, enjoyed cooking (friendly) competitions, went stargazing, sunset by the beach and coworking sessions in different coffee shops/coworkings in the area.\n\nThe coliving space is beautifully designed, simulating a pier. The living room is comfortable and fits a lot of people, the kitchen has everything you need, oven, rice cooker, etc. and the rooms are comfortable.\n\nLocation is great, 5 min walking from the ferry and in the center of the main city of the island. To move around you'll need a car or motorbike, but the community can drive you to specific places if needed. 5 min walk from the supermarket.",
    text_ja:
      "The Pier に1ヶ月滞在しましたが、素晴らしい体験でした！\n\n正直、島での滞在がこんなに楽しいとは思っていませんでした。いつでも助けてくれて島を案内してくれる地域コミュニティに囲まれて。みんなノマドが大好きで、支え合うコミュニティを守ることを本当に大切にしています。\n\nコミュニティ全員（スペースに住んでいない人も含む）のWhatsAppグループがあり、困りごとや疑問があればいつも多くの人が助けてくれました。カラオケに行ったり、農場で美味しいBBQをしたり、料理対決を楽しんだり、星空観察、ビーチの夕日、島のカフェやコワーキングを巡るコワーキングセッションも。\n\nコリビングスペースは桟橋をモチーフに美しくデザインされています。リビングは快適で大人数でも過ごせて、キッチンにはオーブンや炊飯器など必要なものがすべて揃い、部屋も快適です。\n\n立地も最高で、フェリーから徒歩5分、島の中心街のど真ん中。遠出には車やバイクが必要ですが、必要ならコミュニティの人が車を出してくれます。スーパーまで徒歩5分です。",
  },
  {
    author: "H H",
    stars: 5,
    when_ja: "2年前",
    when_en: "2 years ago",
    original: "ja",
    text_ja:
      "約1ヶ月滞在させていただきましたが、とても素敵な体験になりました！\nこの場所を通じて色々な島民の方と繋がり、美味しいお店や面白いスナックに連れて行ってもらいました。\nまた他の滞在者の方とも仲良くなれ、一緒に車を借りて旅行したり、とても楽しかったです。\n今度は夏に来たいと思います。",
    text_en:
      "I stayed for about a month and it was a wonderful experience!\nThrough this place I connected with many islanders, who took me to delicious restaurants and fun local bars.\nI also became friends with other residents — we rented a car and traveled together. It was so much fun.\nNext time I want to come in summer.",
  },
  {
    author: "Gaku Hara",
    stars: 5,
    when_ja: "2年前",
    when_en: "2 years ago",
    original: "ja",
    text_ja:
      "アクセス・清潔さ・快適さ・設備どれをとっても★5つのシェアハウスです。名前を出すと、地元の方でも知っている方が多く、とてもよくしていただきました。短い間でしたが、おかげで五島が第二のふるさとのような気持ちです！\n\nお世話になりました、また来ます！",
    text_en:
      "Five stars in every way — access, cleanliness, comfort, and facilities. Many locals know this place by name, and everyone treated me so kindly. It was a short stay, but Goto now feels like a second hometown!\n\nThank you for everything — I'll be back!",
  },
  {
    author: "Taeko T",
    stars: 5,
    when_ja: "1年前",
    when_en: "a year ago",
    original: "ja",
    text_ja:
      "福江港から徒歩圏内で近くにマツモトキヨシ、スーパー、ローソン、もう一件ドラッグストアもあり利便性が高いです。\n\n近くに武家屋敷通り、美術館、五島歴史資料館もあり全て徒歩で観光できます。",
    text_en:
      "Within walking distance from Fukue Port, with a Matsumoto Kiyoshi, a supermarket, a Lawson, and another drugstore nearby — very convenient.\n\nThe samurai residence street, the art museum, and the Goto History Museum are all close by, and you can explore everything on foot.",
  },
  {
    author: "落合牧人",
    stars: 5,
    when_ja: "2年前",
    when_en: "2 years ago",
    original: "ja",
    text_ja:
      "おしゃれで快適で生活しやすい！\n住人のみなさまがほんとうに気持ちのいい方ばかりで短い滞在でしたがすばらしい時間になりました。たこパもどうもありがとうございました！！",
    text_en:
      "Stylish, comfortable, and easy to live in!\nThe residents were all genuinely lovely people, and even though my stay was short, it was a wonderful time. Thank you for the takoyaki party!!",
  },
  {
    author: "y t",
    stars: 5,
    when_ja: "2年前",
    when_en: "2 years ago",
    original: "ja",
    text_ja: "住んでみても、ときめく空間でした！家電が豪華で、暮らしの設備が整っています。",
    text_en:
      "Even after living here, it remained a space that made my heart flutter! The appliances are top-class and everything you need for daily life is in place.",
  },
  {
    author: "Mayuko Moriyama",
    stars: 5,
    when_ja: "6年前",
    when_en: "6 years ago",
    original: "ja",
    text_ja:
      "五島列島へのおためし移住にぴったりな、月極のシェアハウスです。とにかく内装がおしゃれ！！立地も便利で、スーパーや港が近いし、すぐ下にカフェもあります。",
    text_en:
      "A monthly sharehouse that's perfect for a trial move to the Goto Islands. The interior is just so stylish!! The location is convenient too — the supermarket and port are close, and there's a café right downstairs.",
  },
];
