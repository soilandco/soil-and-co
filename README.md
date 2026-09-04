# soil&co. 公式ホームページ

Next.js (App Router) + TypeScript + Tailwind CSS で構築した soil&co. の公式サイトです。

## セットアップ

```bash
npm install
npm run dev
```

`http://localhost:3000` で確認できます。

## ビルド

```bash
npm run build
npm run start
```

> **Note:** この一式は開発サンドボックス内で npm レジストリへのネットワークアクセスが制限された環境で作成したため、`npm install` / `npm run build` をこちらの環境では実行できていません。お手元(またはVercel)で最初に `npm install && npm run build` を実行し、型エラー等がないかご確認ください。コードは手動で入念にレビューしていますが、実行確認は未実施です。

## ディレクトリ構成

```
app/                 各ページ(App Router)
  page.tsx           トップページ
  kitchen-car/       KITCHEN CAR
  space/             RENTAL SPACE
  plants/            PLANTS
  garden/            GARDEN & GREEN
  shop/              SHOP / GOODS
  event/             EVENT
  about/             ABOUT
  contact/           CONTACT
  sitemap.ts         sitemap.xml を自動生成
  robots.ts          robots.txt を自動生成
  icon.tsx           favicon を自動生成
  opengraph-image.tsx  OGP画像を自動生成
components/          再利用可能なコンポーネント
  ui/                Button, Container, PlaceholderImage, MenuList, PageHero など
lib/
  site-config.ts     営業時間・メニュー・価格・SNS URL・連絡先などのデータ
  metadata.ts        ページごとのSEOメタデータ生成ヘルパー
```

## 今後、内容を更新する際は

コンテンツに関わる情報(営業時間・メニュー・価格・Instagram URL・Google Maps・連絡先・オンラインショップURLなど)は、
**`lib/site-config.ts` を編集するだけ**で全ページに反映されます。コンポーネント側のコードを直接触る必要はありません。

現時点で未確定の情報は `[準備中]` や `#`、`¥---` などのプレースホルダーになっています。特に以下は運用開始前に必ず設定してください。

- `access` オブジェクト: 住所・営業時間・駐車場・Google MapsのURL / 埋め込みURL
- `kitchenCar.hours`: 営業日・営業時間
- `kitchenCar.menu`: メニュー・価格
- `instagram.url` / `instagram.handle`: 実際のInstagramアカウント
- `shop.externalShop.url`: BASEなど外部ショップの実際のURL(プラットフォーム名も`platform`で変更可能)
- `contactInfo`: メールアドレス・電話番号
- `siteConfig.domain`: 本番ドメインが決まり次第(SEOのcanonical URL・OGPに使用されます)

## 写真素材について

現在、写真が必要な箇所はすべて `components/ui/PlaceholderImage.tsx` によるプレースホルダー(グラデーション+アイコン)で仮組みしています。実際の撮影素材が揃ったら、該当箇所を `next/image` の `<Image src="/images/xxx.jpg" ... />` に置き換えてください。画像ファイルは `public/images/` 配下に配置する想定です。

## お問い合わせフォームについて

`components/ContactSection.tsx` はカテゴリー選択・入力項目までを実装していますが、送信先のバックエンドは未接続です(現時点でメール送信サービスが未決定のため)。実際に送信できるようにするには、`app/api/contact/route.ts` のようなRoute Handlerを追加してメール送信サービス(Resendなど)と連携するか、Formspree等のフォームSaaSのendpointをformのactionに指定してください。ファイル内にTODOコメントを記載しています。

## Git運用

`main` ブランチを本流とし、本番反映用に `production` ブランチを用意する構成を想定しています。開発中は `feature/xxx` ブランチを切って作業し、`main` にマージ後、`production` にプロモートしてVercelへデプロイする流れを想定しています。

```bash
git init
git checkout -b main
git add .
git commit -m "Initial commit: soil&co. website scaffold"
git branch production
# GitHubにリポジトリを作成後
git remote add origin <your-repo-url>
git push -u origin main
git push -u origin production
```

## Vercelへのデプロイ

1. GitHubにpushしたリポジトリをVercelにインポート
2. Framework Presetは自動的に "Next.js" が検出されます
3. 環境変数が必要になった場合(フォーム送信サービスのAPIキーなど)は、Vercelの Project Settings → Environment Variables で設定してください
4. `production` ブランチを本番用のデプロイ対象ブランチとして設定することを推奨します(Vercelの Git設定 → Production Branch)

## SEO / パフォーマンスについて実装済みの内容

- 各ページごとの title / meta description / OGP / Twitter Card(`lib/metadata.ts` 経由)
- `sitemap.xml`, `robots.txt` の自動生成(`app/sitemap.ts`, `app/robots.ts`)
- favicon・OGP画像の自動生成(`app/icon.tsx`, `app/opengraph-image.tsx`)
- セマンティックな見出し階層(h1は各ページ1つ)
- 画像プレースホルダーにも `alt` 相当の説明(`aria-label`)を設定済み。実写真に差し替える際は `next/image` の `alt` 属性を必ず設定してください
- 地域名を含めたSEO(例:「◯◯市 レンタルスペース」)は、`lib/metadata.ts` の呼び出し側でtitle/descriptionに地域名を足すだけで反映できる構造にしています

## 未実装・今後の拡張ポイント(意図的に今回は見送った範囲)

- お問い合わせフォームの実送信(バックエンド未接続)
- EC・予約システムそのもの(現状はBASEなど外部ショップへのリンクのみ)
- LocalBusiness構造化データ(JSON-LD): 住所・営業時間確定後に追加を推奨
- FAQページ
- ブログ/ジャーナル的なコンテンツ
