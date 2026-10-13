// =====================================================================================
// soil&co. サイト設定データ
// -------------------------------------------------------------------------------------
// 営業時間・メニュー・価格・SNS URL・連絡先など「後から変更されうる情報」をこのファイルに
// 集約しています。コンポーネント側はこのファイルを参照するだけにし、直接文言を書かないで
// ください。将来CMS(microCMS / Sanity / Contentfulなど)を導入する際は、このファイルの
// 型定義に沿ってAPIから値を取得する形に差し替えるだけで済むようにしています。
//
// 住所・電話番号・価格・営業時間・SNS URLなど、具体的な情報が未確定の項目は
// プレースホルダー文字列にしてあります。確定次第このファイルを書き換えてください。
// =====================================================================================

export const siteConfig = {
  name: 'soil&co.',
  domain: 'https://www.soilandco.example.com', // TODO: 本番ドメインが決まり次第差し替え
  tagline: 'Coffee, Green & Good Time.',
  brandMessage: {
    en: 'GROW TOGETHER.',
    ja: '自然と、人と、暮らしを育てる。',
  },
  description:
    '自然の中で、コーヒーを。植物に触れる。火を囲む。誰かと話す。soil&co.は、そんな「ちょっといい時間」をつくる場所です。',
};

// ---------------------------------------------------------------------------
// ナビゲーション(ユーザー導線の優先順位に合わせた並び順)
// ---------------------------------------------------------------------------
export const navigation = [
  { label: 'KITCHEN CAR', href: '/kitchen-car' },
  { label: 'RENTAL SPACE', href: '/space' },
  { label: 'GARDEN & GREEN', href: '/garden' },
  { label: 'PLANTS', href: '/plants' },
  { label: 'SHOP', href: '/shop' },
  { label: 'EVENT', href: '/event' },
  { label: 'ABOUT', href: '/about' },
  { label: 'CONTACT', href: '/contact' },
] as const;

// ---------------------------------------------------------------------------
// KITCHEN CAR(Priority 1)
// ---------------------------------------------------------------------------
export const kitchenCar = {
  lead: '一杯のコーヒーから、soil&co.を。',
  description:
    'soil&co.の敷地内には、常設のキッチンカーがあります。コーヒーやカフェラテ、ソフトドリンクを中心に、焼き菓子やケーキなど、その時々のおいしいものを。自然の中でゆっくり過ごしながら、soil&co.の時間を楽しんでください。',
  // KITCHEN CAR(HEK CAFE)専用のInstagramアカウント。soil&co.全体のアカウント(instagram.url)とは別。
  instagramUrl: 'https://www.instagram.com/hek_design_soilandco',
  // 営業日・営業時間はここを書き換えるだけで全ページに反映されます。
  hours: {
    note: '営業日・営業時間は季節や天候により変動する場合があります。最新情報はInstagramをご確認ください。',
    schedule: [
      { day: '月〜金', open: '定休日', close: '' },
      { day: '土・日・祝', open: '9:00', close: '17:00' },
    ],
  },
  menu: [
    {
      category: 'COFFEE',
      items: [
        { name: 'ドリップコーヒー', price: '¥400' },
        { name: 'エスプレッソ', price: '¥500' },
      ],
    },
    {
      category: 'CAFE LATTE',
      items: [
        { name: 'カフェラテ', price: '¥600' },
        { name: 'アイスカフェラテ', price: '¥600' },
      ],
    },
    {
      category: 'SOFT DRINK',
      items: [{ name: 'ソフトドリンク各種', price: '¥500〜' }],
    },
    {
      category: 'SWEETS',
      items: [{ name: '焼き菓子(日替わり)', price: '¥300〜' }],
    },
    {
      category: 'FOOD',
      items: [{ name: 'ホットサンド', price: '¥700' }],
    },
  ],
  futureMenu: ['ハンバーガー', 'その他フード'],
};

// ---------------------------------------------------------------------------
// RENTAL SPACE(Priority 2)
// ---------------------------------------------------------------------------
export const rentalSpace = {
  lead: '休日を、遊び尽くそう。',
  description:
    '自然の中で自由な時間を楽しめる場所として、テントサウナ・BBQ・焚き火・DIY・コーヒー・アウトドア・イベントなど、思い思いの過ごし方でご利用いただけます。',
  features: [
    { icon: '🔥', label: 'FIRE', description: '焚き火を囲む時間' },
    { icon: '♨️', label: 'TENT SAUNA', description: '自然の中でととのう' },
    { icon: '🍖', label: 'BBQ', description: '仲間と食事を楽しむ' },
    { icon: '🔨', label: 'DIY', description: 'ものづくりを楽しむ' },
    { icon: '☕', label: 'COFFEE', description: 'キッチンカーのコーヒーと' },
    { icon: '🌿', label: 'NATURE', description: '自然に囲まれた時間' },
  ],
  usageNote:
    '料金・予約方法は準備中です。詳細が決まり次第このページに掲載します。お急ぎの方はお問い合わせフォームからご連絡ください。',
};

// ---------------------------------------------------------------------------
// GARDEN & GREEN(Priority 3)
// ---------------------------------------------------------------------------
export const garden = {
  lead: '庭を、もっと好きになる。',
  description:
    '「植木屋」としてではなく、暮らしと植物を楽しむためのサービスとして庭のお手入れをご提案します。剪定や草刈りといった実務から、植栽やお庭づくりのご相談まで幅広く対応します。',
  services: [
    { title: '庭のお手入れ', description: '日々のお手入れをまるごとサポート' },
    { title: '剪定', description: '木々の健康と見た目を整える' },
    { title: '草刈り・空き家管理', description: '気持ちのよい庭を保つ' },
    { title: '植物の植え替え', description: '鉢植え・地植えの植え替え' },
    { title: '植栽', description: '庭に彩りをプラス' },
    { title: 'ガーデニング相談', description: '育て方・レイアウトのご相談' },
    { title: '庭づくり', description: 'ゼロからのお庭づくり' },
    { title: 'グリーンに関する相談', description: '植物のことなら何でも' },
  ],
};

// ---------------------------------------------------------------------------
// PLANTS(Priority 4)
// ---------------------------------------------------------------------------
export const plants = {
  lead: '植物を、連れて帰る。',
  description:
    'soil&co.では植物・グリーンの販売も行っています。育てやすいものから少し個性的なものまで、暮らしに寄り添う一鉢を見つけてください。',
};

// ---------------------------------------------------------------------------
// GOODS / SHOP(Priority 5)
// ---------------------------------------------------------------------------
export const shop = {
  lead: 'soil&co.を、暮らしの中へ。',
  description:
    'soil&co.オリジナルグッズ、コーヒー関連商品、植物関連商品などを取り扱っています。お店に来た記念に、あるいは大切な人へのギフトに。',
  categories: ['オリジナルグッズ', 'コーヒー関連商品', '植物関連商品'],
  // オンラインショップ(STORES)への導線。
  externalShop: {
    platform: 'STORES',
    url: 'https://ENstudio.shopselect.net',
    label: 'オンラインショップ(STORES)で購入する',
    note: 'オリジナルグッズ・コーヒー関連商品・植物関連商品の一部は、外部ショップからオンラインでご購入いただけます。',
  },
};

// ---------------------------------------------------------------------------
// EVENT(Priority 6)
// ---------------------------------------------------------------------------
export const event = {
  lead: '人が集まると、もっと楽しい。',
  description:
    'DJ、ワークショップ、マルシェ、植物・コーヒー関連イベントなど、soil&co.では季節ごとにさまざまなイベントを開催します。',
  categories: ['DJ', 'ワークショップ', 'マルシェ', '植物イベント', 'コーヒーイベント'],
  // 開催が決まり次第、このリストに追加してください。
  upcoming: [] as { title: string; date: string; description: string }[],
};

// ---------------------------------------------------------------------------
// ABOUT
// ---------------------------------------------------------------------------
export const about = {
  lead: 'soil&co.とは。',
  story: [
    '土に触れる。',
    '緑を眺める。',
    'コーヒーを飲む。',
    '火を囲む。',
    '音楽を聴く。',
    '誰かと話す。',
  ],
  paragraphs: [
    'soil&co.は、そんな何気ない時間を楽しむための場所です。',
    'コーヒーを飲みに来た人が植物に興味を持ったり、植物を見に来た人がレンタルスペースを知ったり。ひとつのきっかけから、新しい「好き」が見つかる。',
    'そんな場所を、少しずつ育てていきたいと思っています。',
  ],
};

// ---------------------------------------------------------------------------
// INSTAGRAM
// ---------------------------------------------------------------------------
export const instagram = {
  url: 'https://www.instagram.com/soil_and_co',
  handle: '@soil_and_co',
  topics: ['コーヒー', 'キッチンカー', '植物', 'レンタルスペース', 'DIY', 'イベント', '日常'],
};

// ---------------------------------------------------------------------------
// ACCESS
// ---------------------------------------------------------------------------
const fullAddress = '京都府亀岡市畑野町千ヶ畑高橋3-56';

export const access = {
  address: fullAddress,
  openingHours: '土・日・祝 AM9:00〜PM17:00',
  parking: '8台',
  // APIキー不要の検索埋め込み形式(住所から自動生成)。
  googleMapsEmbedUrl: `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`,
  googleMapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`,
  note: 'キッチンカーのご利用とレンタルスペースのご利用では入口が異なる場合があります。詳細は各ページをご確認ください。',
};

// ---------------------------------------------------------------------------
// CONTACT
// ---------------------------------------------------------------------------
export const contactCategories = [
  'キッチンカーについて',
  'レンタルスペースについて',
  '庭・ガーデニングについて',
  '植物について',
  'イベントについて',
  'その他',
] as const;

export const contactInfo = {
  email: 'hello@soilandco.jp',
  phone: '090-5676-9354',
};

// ---------------------------------------------------------------------------
// CROSS LINK(下層ページ末尾の「他サービスへの導線」)
// キッチンカー利用者・レンタルスペース利用者などを他サービスへ自然に誘導するための
// ページごとの文言。ここを編集すれば全ページに反映されます。
// ---------------------------------------------------------------------------
export const crossLinks: Record<
  string,
  { lead: string; items: { href: string; label: string; description: string }[] }
> = {
  'kitchen-car': {
    lead: 'コーヒーを待つ間に。',
    items: [
      { href: '/plants', label: 'PLANTS', description: '隣の植物コーナーも覗いてみてください' },
      { href: '/space', label: 'RENTAL SPACE', description: '自然の中でゆっくり過ごすのも' },
    ],
  },
  space: {
    lead: 'BBQや焚き火の合間に。',
    items: [
      { href: '/kitchen-car', label: 'KITCHEN CAR', description: 'コーヒーを飲みながら' },
      { href: '/garden', label: 'GARDEN & GREEN', description: '庭のことも気軽にご相談ください' },
    ],
  },
  plants: {
    lead: '連れて帰った植物のお手入れに迷ったら。',
    items: [
      { href: '/garden', label: 'GARDEN & GREEN', description: '植物・庭のご相談も受け付けています' },
      { href: '/kitchen-car', label: 'KITCHEN CAR', description: 'コーヒーを飲みながらゆっくり選べます' },
    ],
  },
  garden: {
    lead: 'お庭のご相談ついでに。',
    items: [
      { href: '/plants', label: 'PLANTS', description: '植物そのものを見てみる' },
      { href: '/space', label: 'RENTAL SPACE', description: '自然の中で過ごす時間も' },
    ],
  },
  shop: {
    lead: 'グッズと一緒に。',
    items: [
      { href: '/kitchen-car', label: 'KITCHEN CAR', description: 'コーヒーもぜひ' },
      { href: '/plants', label: 'PLANTS', description: '植物関連グッズと合わせて' },
    ],
  },
  event: {
    lead: 'イベントに来たら。',
    items: [
      { href: '/kitchen-car', label: 'KITCHEN CAR', description: 'コーヒーを片手にイベントを' },
      { href: '/space', label: 'RENTAL SPACE', description: 'イベント後はレンタルスペースで' },
    ],
  },
};
