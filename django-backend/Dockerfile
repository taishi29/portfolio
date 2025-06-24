FROM python:3.11-slim

# 標準出力をリアルタイムで出す（ログをバッファリングしない）
ENV PYTHONUNBUFFERED=1

# 作業ディレクトリを指定
WORKDIR /app

# 先に依存関係ファイルだけコピー（キャッシュ効率アップ）
COPY requirements.txt .

# pip, setuptools, wheel をアップグレードしてからパッケージをインストール
RUN pip install --upgrade pip setuptools wheel && \
    pip install --no-cache-dir -r requirements.txt

# ソースコードを全コピー
COPY . .

# ポート8000を公開（Djangoの開発サーバー用）
EXPOSE 8000

# デフォルトはbashに（docker-composeでcommandを上書きしてもOK）
CMD ["bash"]
