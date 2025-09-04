FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

ENV NODE_ENV=development

RUN npm install

COPY . .

EXPOSE 3000

# Ensure deps exist in the mounted node_modules volume; install if autoprefixer is missing
CMD ["sh", "-c", "node -e \"require.resolve('autoprefixer')\" >/dev/null 2>&1 || npm ci; npm run dev"]
