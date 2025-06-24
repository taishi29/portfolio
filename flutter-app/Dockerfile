# ① Dart SDK だけ入った公式イメージをベースにする
FROM dart:3.4-sdk

# ② Flutter を git clone で取得
RUN git clone https://github.com/flutter/flutter.git /flutter \
 && /flutter/bin/flutter doctor -v

# ③ 環境変数に Flutter のパスを追加
ENV PATH="/flutter/bin:/flutter/bin/cache/dart-sdk/bin:${PATH}"

# ④ 作業ディレクトリ
WORKDIR /app

# ⑤ プロジェクトをコピーして依存解決
COPY . .
RUN flutter pub get

# ⑥ Web サーバーを公開
EXPOSE 8080
CMD ["flutter", "run", "-d", "web-server", "--web-port", "8080", "--web-hostname", "0.0.0.0"]
