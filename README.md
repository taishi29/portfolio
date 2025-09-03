# My Portfolio Project
このリポジトリは、Next.js（フロントエンド）、Django（バックエンドAPI）、Nginx、Dockerを用いたポートフォリオ構築プロジェクトです。

## ディレクトリ構成
```
my-portfolio-project/
├── next-frontend/      # Next.js（ReactベースのUI）
├── django-backend/     # Django REST API
├── nginx/              # Nginx設定（任意）
└── docker-compose.yml  # 全体構成ファイル
```

## 使用技術
- Next.js 14
- Django 4
- Docker / docker-compose
- AWS ECS on EC2（予定）

---

## 環境構築手順

1. リポジトリをクローン  
   ```bash
   git clone https://github.com/taishi29/my-portfolio-project.git
   cd my-portfolio-project
   ```

2. 環境変数ファイルを作成  
   ```bash
   cp .env.example .env
   ```
   - `.env.example` にはサンプル値が定義されています。  
   - 開発者ごとに必要な値を編集してください。  
   - `.env` ファイルは `.gitignore` に追加済みで、リポジトリには含めません。  

3. 依存関係をインストール（初回のみ）  
   ```bash
   docker compose build
   ```

4. コンテナを起動  
   ```bash
   docker compose up
   ```

5. 動作確認  
   - フロントエンド: http://localhost:3000  
   - バックエンド: http://localhost:8000  

---

## .env 管理ルール

- **コミットしないこと**  
  `.env` は個人ごとに異なる値を持つため、`.gitignore` に追加しています。  

- **雛形の管理**  
  必要な環境変数は `.env.example` に記載してください。  

- **更新フロー**  
  新しい環境変数を追加した場合は、必ず `.env.example` も更新してください。  
