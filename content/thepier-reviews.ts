// content/thepier-reviews.ts — The Pier Coliving の Google クチコミ（手動転載・自動反映なし）
// ============================================================================
// 出典: Google ビジネスプロフィール管理画面（business.google.com/reviews）
//       2026-07-20 取得 — 全12件・全文（総合 5.0 ★）
// - 12件すべて第三者のクチコミ（オーナー自身のものは含まれない）
// - 原文がENのものはJPページで日本語訳、原文JAのものはENページで英語訳を表示（訳注つき）
// - EN→JP 訳は Google 公式翻訳をベースに固有名詞のみ調整（桟橋→The Pier 等）。JA→EN 訳は遊行にて作成
// - Mayuko さん(2020)のクチコミ末尾「HafH会員は1泊から」の一文は、現在は提供のない
//   旧サービスの記載のため掲載から除外（誤解防止）
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
    when_ja: "2週間前",
    when_en: "2 weeks ago",
    original: "en",
    text_en:
      "Stayed for a month wish it was longer! Goto is a wonderful island. Calm and relaxing, filled with lovely people, nature and activities. The team at pier go out of their way to help you have a fantastic experience.\n\nThe place is clean & has all you need for a comfortable stay. WiFi was fast, was able to work and do calls. Downstairs there's a cafe with a large coworking space too if needed.\n\nAbsolutely planning to come back!",
    text_ja:
      "1ヶ月滞在しましたが、もっと長く滞在したかったです！五島は素晴らしい島です。穏やかでリラックスでき、素敵な人々、豊かな自然、そして様々なアクティビティが楽しめます。The Pier のスタッフは、最高の滞在になるよう、あらゆる面でサポートしてくれます。\n\n施設は清潔で、快適な滞在に必要なものはすべて揃っています。Wi-Fiも高速で、仕事や電話も問題なくできました。階下にはカフェがあり、必要に応じて広いコワーキングスペースも利用できます。\n\n絶対にまた来たいと思っています！",
  },
  {
    author: "Sophie Huang",
    stars: 5,
    when_ja: "1ヶ月前",
    when_en: "a month ago",
    original: "en",
    text_en:
      "Stayed at the pier for a bit over a month. Fukue island is such a peaceful and relaxing place to be.\n\nThe house itself was great - it's on the first floor of a hotel. Clean, spacious, modern. Kitchen is really well stocked, laundry is easy to access, 2 showers for the house. Each room has its own desk. There's a projector for movie time.\n\nWorkspace wise you can either book the conference rooms for free via the hotel reception, work at the cafe downstairs (many people stay for a very long time there with 1 drink), or work from your room.\n\nThe place was walkable distance to the grocery store, drug store, conbini, and a few restaurants.\n\nThe highlight for me were joining events with the wide community. There's quite a community of Japanese who have moved into Fukue, creating a lovely community. If you speak Japanese, it's a great opportunity to practice. And if you don't, there's also enough community managers & other coliving residents who are English speaking as well.\n\nFukue is also a beautiful place in itself. If you're a Ghibli fan, highly recommend visiting the Nizo Yamamoto museum and then exploring the island. You can really see the influence of the place in his work.",
    text_ja:
      "The Pier に1ヶ月ちょっと滞在しました。福江島は本当に静かでリラックスできる場所です。\n\n家自体は素晴らしかったです。ホテルの一角にあり、清潔で広々としていて、モダンな造りでした。キッチンには必要なものが揃っていて、洗濯も簡単にでき、シャワーは2つありました。各部屋にデスクがあり、映画鑑賞用のプロジェクターもありました。\n\nワークスペースとしては、ホテルのフロントで会議室を無料で予約するか、階下のカフェで作業するか（多くの人がそこで飲み物を1杯飲んで長時間過ごしています）、あるいは自分の部屋で作業することができます。\n\n施設は徒歩圏内で、スーパー、ドラッグストア、コンビニ、そしていくつかのレストランがありました。\n\n私にとって一番の思い出は、幅広いコミュニティのイベントに参加できたことです。福江には多くの日本人が移住しており、素敵なコミュニティが形成されています。日本語が話せる方にとっては、練習する絶好の機会です。日本語が話せなくても、コミュニティマネージャーや他のコリビング居住者の中には英語を話せる人もたくさんいます。\n\n福江島自体も美しい場所です。ジブリファンなら、山本二三美術館を訪れてから島を散策することを強くお勧めします。彼の作品に、この場所が与えた影響をはっきりと感じ取ることができるでしょう。",
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
      "最高のロケーションです。階下には仕事をするのに最適なカフェがあり、コンビニエンスストアまで徒歩わずか5分、スーパーマーケットとドラッグストアまで約7分、桟橋までは徒歩10分です。\n\n共用エリアは居心地が良く設備も充実しており、プロジェクターとスピーカーがあるので映画鑑賞も楽しめます。客室には自然光がたっぷり差し込みます。\n\n空間そのものだけでなく、この場所を本当に特別なものにしているのは、そこにいる人々です。地元のコミュニティマネージャーは温かく親切で、いつでも地元の人々との交流や隠れた名所の発見、滞在を最大限に楽しむためのサポートをしてくれます。\n\n要するに、ここは心身をリフレッシュし、ゆったりとした時間を過ごし、日本の真の魅力を体験できる、静かで穏やかな場所です。",
  },
  {
    author: "Adrien Groleas",
    stars: 5,
    when_ja: "1ヶ月前",
    when_en: "a month ago",
    original: "en",
    text_en:
      "Had an amazing experience when I stayed there the whole month of September 2025, great organization, met super nice local people, intimate and cosy place to stay, beautiful hikes and little restaurants. 100% recommend to discover a more rural and authentic Japan 🥰🥰🥰",
    text_ja:
      "2025年9月に1ヶ月間滞在しましたが、素晴らしい体験でした。運営も素晴らしく、とても親切な地元の人々と出会え、居心地の良いアットホームな滞在先で、美しいハイキングコースや小さなレストランもたくさんありました。より田舎らしく、本物の日本を発見したい方には100％お勧めです🥰🥰🥰",
  },
  {
    author: "Fabienne Stenzhorn",
    stars: 5,
    when_ja: "6ヶ月前",
    when_en: "6 months ago",
    original: "en",
    text_en:
      "We stayed at The Pier for a month, and it was an outstanding experience from start to finish. What truly makes this place special is the local community. People are incredibly welcoming, always ready to help, and genuinely invested in creating a strong, supportive environment. Digital nomads are warmly embraced, and that sense of care is felt from day one. We even had a large Discord group that included both residents and locals, so whenever a question or issue came up, there was always someone willing to help. We shared karaoke nights, delicious barbecues, chinese bao making, beach sunsets, lots of food experiences, foot onsen, aroma therapy, lots of fishiiiing and coworking days in different cafés and workspaces around the island. One of the highlights was the Christmas party we organized together. It was simple, warm, and full of genuine connection, perfectly reflecting the spirit of the community. December is an especially lovely time to visit, as the island is quiet, peaceful, and beautifully calm.\n\nThe coliving space itself is thoughtfully designed and beautifully styled, inspired by the idea of a pier. The interior is clean, modern, and very comfortable. The rooms are spacious, with extremely comfortable beds, a large mirror, a clothes rack, and a desk with a chair, making it ideal for remote work. The shared living area is cozy and spacious, and the common area even includes a projector, creating a fantastic atmosphere for group activities.\n\nThe kitchen is very well equipped and makes cooking easy. It includes a microwave, kettle, and toaster, all matching in a stylish white Balmuda design, as well as plenty of dishes, kitchen cloths, and basic supplies. There are two shared showers, which worked well during the stay. Cooking dinner together was amazing and we made it a lot.\n\nThe coworking space is located in the same building and is set up more like meeting rooms. While it does not have much natural light, working from the café downstairs is completely acceptable, even if you only order one coffee, which many locals do as well. The Wi-Fi was excellent throughout all buildings, with no issues during video calls or remote work.\n\nThe location is extremely convenient. It is within walking distance from Fukue Port and close to a Matsumoto Kiyoshi, a supermarket, a Lawson convenience store, and another drugstore. Historic streets, museums, and the Goto History Museum are all nearby and can be easily explored on foot. The ferry terminal is only a five-minute walk away, and the space is located in the center of the island's main town. While having a car or motorbike is helpful for exploring further, the community is always willing to help with rides when needed.\n\nThe owner and the residents are incredibly kind, and it truly felt like a place you would want to stay long term. Overall, The Pier offers a rare combination of comfort, thoughtful design, excellent facilities, and a genuinely warm community.\n\nThank you so much 🥰🥰🥰",
    text_ja:
      "The Pier に1ヶ月滞在しましたが、最初から最後まで素晴らしい経験でした。この場所を本当に特別なものにしているのは、地元のコミュニティです。人々はとても温かく迎えてくれ、いつでも助けてくれ、力強く支え合う環境づくりに真剣に取り組んでくれました。デジタルノマドも温かく迎え入れられ、その温かさは初日から感じられました。住人と地元の人の両方が参加する大規模なDiscordグループもあったので、質問や問題が起きれば、いつでも誰かが助けてくれました。カラオケナイト、美味しいバーベキュー、中華まん作り、ビーチでの夕日、様々なグルメ体験、足湯、アロマセラピー、釣り、そして島中の様々なカフェやワークスペースでのコワーキングなど、様々な体験をしました。中でも特に印象深かったのは、みんなで企画したクリスマスパーティーです。シンプルで温かく、真の繋がりが溢れ、コミュニティの精神を完璧に反映していました。12月は特に訪れるのに最適な時期です。島は静かで平和で、美しく穏やかです。\n\nコリビングスペース自体は、桟橋をイメージした、思慮深くデザインされ、美しくまとめられた空間です。インテリアは清潔でモダン、そしてとても快適です。部屋は広々としており、非常に快適なベッド、大きな鏡、洋服ラック、そして椅子付きのデスクが備わっており、リモートワークに最適です。共有リビングエリアは居心地が良く広々としており、プロジェクターまで設置されていて、グループでの活動に最適な雰囲気です。\n\nキッチンは設備が充実しており、料理が簡単にできます。電子レンジ、ケトル、トースターはすべてスタイリッシュな白のBALMUDAで統一されており、食器、キッチンクロス、基本的な調理器具も豊富に揃っています。共用シャワーは2つあり、滞在中は快適に過ごせました。一緒に夕食を作るのは最高で、何度も作りました。\n\nコワーキングスペースは同じ建物内にあり、会議室のような作りになっています。自然光はあまり入りませんが、階下のカフェで仕事をするのは全く問題ありません。コーヒーを一杯だけ注文する場合でも、地元の人の多くがそうしています。Wi-Fiは全館で良好で、ビデオ通話やリモートワークでも問題ありませんでした。\n\n立地は非常に便利です。福江港から徒歩圏内で、マツモトキヨシ、スーパーマーケット、ローソン、ドラッグストアも近くにあります。歴史的な街並みや博物館、五島歴史資料館も近くにあり、徒歩で簡単に探索できます。フェリーターミナルまでは徒歩わずか5分で、島の中心街の中心部に位置しています。車やバイクがあればさらに探索するのに便利ですが、コミュニティの人が必要に応じていつでも送迎をしてくれます。\n\nオーナーと住民の方々はとても親切で、本当に長期滞在したくなる場所だと感じました。全体的に見て、The Pier は快適さ、考え抜かれたデザイン、優れた設備、そして心から温かいコミュニティが融合した、他に類を見ない場所です。\n\n本当にありがとうございます🥰🥰🥰",
  },
  {
    author: "Taeko T",
    stars: 5,
    when_ja: "1年前",
    when_en: "a year ago",
    original: "ja",
    text_ja:
      "福江港から徒歩圏内で近くにマツモトキヨシ、スーパー、ローソン、もう一件ドラッグストアもあり利便性が高いです。\n\n近くに武家屋敷通り、美術館、五島歴史資料館もあり全て徒歩で観光できます。\n\n拠点の内装はとても綺麗でオシャレ。部屋も十分な広さでした。ベッドの寝心地も最高です。部屋の中に大きな鏡、ハンガーラック、デスクと椅子もありリモートワークにも良かったです。\n\n電子レンジ、ケトル、トースターも白のバルミューダで統一されており食器や布巾、サランラップ等も充実していて自炊もしやすいです。\n\n共用部にはプロジェクターもあり最高な空間でした。オーナーさん、シェアハウスの住人さんもとても優しく長期滞在したい素敵な拠点でした。",
    text_en:
      "Within walking distance from Fukue Port, with a Matsumoto Kiyoshi, a supermarket, a Lawson, and another drugstore nearby — very convenient.\n\nThe samurai residence street, the art museum, and the Goto History Museum are all close by, and you can explore everything on foot.\n\nThe interior is beautiful and stylish, the room was plenty spacious, and the bed was wonderfully comfortable. With a large mirror, a hanger rack, and a desk and chair in the room, it was great for remote work too.\n\nThe microwave, kettle, and toaster are all matching white BALMUDA, and with plenty of tableware, dish cloths, plastic wrap and so on, cooking for yourself is easy.\n\nThe common area even has a projector — a fantastic space. The owner and the housemates were all very kind. A wonderful base I would love to stay at long term.",
  },
  {
    author: "Sole García Fernández",
    stars: 5,
    when_ja: "1年前",
    when_en: "a year ago",
    original: "en",
    text_en:
      "I stayed in The Pier for a month and it was a wonderful experience!\n\nTbh I never thought staying in a island could be that cool, being surrounded by a local community always looking to help you and show you the island. They love nomads and they really care about keeping a strong supportive community.\n\nWe had a whatsapp group with all the people of the community (included people that didn't live in the space), so every time we had any issue or doubt there were a lot of people able to help us. We went karaoke, had delicious bbq in a farm, enjoyed cooking (friendly) competitions, went stargazing, sunset by the beach and coworking sessions in different coffee shops/coworkings in the area.\n\nThe coliving space is beautifully design, simulating a pier. The living room is comfortable and fits a lot of people, the kitchen has everything you need, oven, rice cooker, etc. and the rooms are comfortable. There are two showers.\n\nAbout the coworking it is located in the same building and it is more like meeting rooms. It is a bit dark (doesn't have natural light) but you can work from the coffee shop downstairs, they are used to it and there will be no pressure if you just order one coffee (a lot of locals do it too). Wifi was great in all the buildings, we had no problems with calls or anything.\n\nLocation is great, 5 min walking from the ferry and in the center of the main city of the island. To move around you'll need a car or motorbike, but the community can drive you to specific places if needed. 5 min walk from the supermarket.",
    text_ja:
      "The Pier に1ヶ月滞在しましたが、本当に素晴らしい体験でした！\n\n正直、島に滞在することがこんなに素晴らしいなんて思ってもいませんでした。地元のコミュニティに囲まれ、いつも助けてくれたり、島を案内してくれたり。彼らはノマドを愛していて、支え合うコミュニティを強く維持することに本当に力を入れています。\n\nコミュニティの全員（スペースに住んでいない人も含む）とWhatsAppグループを作っていたので、何か問題や疑問があるたびに、たくさんの人が助けてくれました。カラオケに行ったり、農場で美味しいバーベキューを楽しんだり、料理コンテストを楽しんだり、星空観察に行ったり、ビーチで夕日を眺めたり、周辺の様々なコーヒーショップやコワーキングスペースでコワーキングセッションに参加したりしました。\n\nコリビングスペースは桟橋を模した美しいデザインです。リビングルームは快適で、たくさんの人が入れます。キッチンにはオーブンや炊飯器など必要なものがすべて揃っており、部屋も快適です。シャワーは2つあります。\n\nコワーキングスペースは同じ建物内にあり、どちらかというと会議室のような感じです。少し暗め（自然光は入りません）ですが、階下のコーヒーショップで仕事ができます。スタッフは慣れているので、コーヒーを一杯注文するだけでもプレッシャーは感じません（地元の人もよくそうしています）。どの建物でもWi-Fiは問題なく使え、通話などにも問題はありませんでした。\n\n立地は最高で、フェリー乗り場から徒歩5分、島の中心部に位置しています。移動には車かバイクが必要ですが、必要に応じてコミュニティが特定の場所まで送迎してくれます。スーパーマーケットも徒歩5分です。",
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
    author: "y t",
    stars: 5,
    when_ja: "2年前",
    when_en: "2 years ago",
    original: "ja",
    text_ja:
      "住んでみても、ときめく空間でした！\n①家電が豪華。（特に乾燥機付き洗濯機最高）\n②1人部屋が快適。（コンセントが豊富、布団が軽くて気持ちいい）\n③カフェがある。（1階の別ホテルやってるカフェがまた心地いい！）",
    text_en:
      "Even after living here, it was a space that kept making my heart flutter!\n1. The appliances are top-class (the washer-dryer is the best).\n2. The private rooms are comfortable (plenty of outlets, and the duvet is light and cozy).\n3. There's a café (the café run by the hotel downstairs is just as delightful!).",
  },
  {
    author: "Mayuko Moriyama",
    stars: 5,
    when_ja: "6年前",
    when_en: "6 years ago",
    original: "ja",
    text_ja:
      "五島列島へのおためし移住にぴったりな、月極のシェアハウスです。とにかく内装がおしゃれ！！！立地も便利で、スーパーや港が近いし、すぐ下にカフェもあります。",
    text_en:
      "A monthly sharehouse that's perfect for a trial move to the Goto Islands. The interior is just so stylish!!! The location is convenient too — the supermarket and port are close, and there's a café right downstairs.",
  },
];
