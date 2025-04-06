# customer-management-app

シンプルでユーザーフレンドリーな顧客管理システムのフロントエンド実装です。このアプリケーションは、ログイン機能と顧客情報の管理機能を提供します。

## 目次

- [機能概要](#機能概要)
- [セットアップ手順](#セットアップ手順)
- [使用した技術・ライブラリ](#使用した技術ライブラリ)
- [実装した機能の説明](#実装した機能の説明)
- [動作確認方法](#動作確認方法)

## 機能概要

このアプリケーションは以下の主要機能を提供します：

- シンプルなログイン画面
- 顧客情報の一覧表示
- 顧客情報の検索機能
- 顧客データの並び替え機能
- レスポンシブデザイン対応

## セットアップ手順

以下の手順でアプリケーションをローカル環境で実行できます。

### 前提条件

- Node.js (v14.0.0 以上)
- npm (v6.0.0 以上)

### インストール

1. リポジトリをクローンします

```bash
git clone https://github.com/yourusername/customer-management-app
cd customer-management-app
```

2. 依存パッケージをインストールします

```bash
npm install
```

3. アプリケーションを起動します

```bash
npm start
```

4. ブラウザで以下のURLにアクセスします

```
http://localhost:3000
```

## 使用した技術・ライブラリ

- **フレームワーク**: React (Create React App)
- **UI ライブラリ**: Material-UI
- **スタイリング**: Emotion（CSS-in-JS）
- **開発ツール**:
  - テスト関連：@testing-library/react、@testing-library/jest-dom、@testing-library/user-event、@testing-library/dom
  - パフォーマンス測定：web-vitals
  - ESLint 設定：eslintConfig（react-app, react-app/jest）

## 実装した機能の説明

### 1. ログイン機能

- ユーザーID・パスワード入力フォーム
- 入力バリデーション（空欄チェック）
- エラーメッセージ表示

### 2. 顧客一覧画面

- 顧客情報の表形式での表示
  - 顧客名
  - メールアドレス
  - 電話番号
  - 登録日
- **検索機能**
  - 顧客名による絞り込み検索
  - リアルタイム検索結果表示
- **並び替え機能**
  - 名前順（昇順・降順）
  - 登録日順（昇順・降順）
- **レスポンシブ対応**
  - スマートフォン向けの最適化表示

### 3. デザイン

- Material-UIを使用した一貫性のあるデザイン
- アクセシビリティに配慮したUI設計

## 動作確認方法

### ログイン画面

1. アプリケーションを起動すると、最初にログイン画面が表示されます
2. テスト用アカウントかゲストとしてログインできます：
   - ユーザーID: `user123`
   - パスワード: `password123`
3. 入力欄を空にしてログインボタンを押すと、エラーメッセージが表示されます

### 顧客一覧画面

1. ログイン後は、自動的に顧客一覧画面が表示されます。
2. 画面上部にある検索バーから、顧客名を入力して目的の顧客を素早く絞り込むことができます。
3. 各カラムのヘッダーをクリックすれば、該当する項目でリストの並び順を変更できます。
5. 画面サイズに応じてレイアウトが柔軟に調整されるため、スマートフォンやタブレットでも快適に閲覧可能です。

## フォルダ構成

```
src/
├── components/         # 再利用可能なUIコンポーネント
│   ├── CustomerForm/  # 顧客登録コンポーネント
│   ├── CustomerList/  # 顧客一覧関連コンポーネント
│   ├── Header/        # ヘッダー関連コンポーネント
│   ├── Login/         # ログイン関連コンポーネント
│   ├── LoginForm/     # ログイン関連コンポーネント
│   └── RegisterForm/  # 新規登録コンポーネント
├── App.js              # アプリケーションのルート
├── index.css/          # スタイル定義
├── index.js/           # エントリーポイントの定義
├── reportWebVitals/    # パフォーマンス指標の測定
```

## 今後の改善点

- 顧客詳細画面の実装
- フィルタリング機能の拡張
- 顧客データの追加・編集・削除機能
- バックエンドとの連携（API実装）
