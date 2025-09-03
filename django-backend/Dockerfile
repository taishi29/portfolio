FROM python:3.11-slim

# 標準出力をリアルタイムで出す（ログをバッファリングしない）
ENV PYTHONUNBUFFERED=1

WORKDIR /app

COPY requirements.txt .

# pip, setuptools, wheel をアップグレードしてからパッケージをインストール
RUN pip install --upgrade pip setuptools wheel && \
    pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["python", "portfolio_api/manage.py", "runserver", "0.0.0.0:8000"]
