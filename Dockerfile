# 第一阶段：构建
FROM node:20-alpine AS builder

WORKDIR /app

# 复制依赖文件
COPY package.json ./

# 安装依赖（使用 npm，兼容 peerDependencies）
RUN npm install --legacy-peer-deps

# 复制源码
COPY . .

# 构建生产包
RUN npm run build

# 第二阶段：运行（nginx 静态服务）
FROM nginx:alpine AS runner

# 复制构建产物
COPY --from=builder /app/dist /usr/share/nginx/html

# 复制 nginx 配置（支持 React Router 客户端路由）
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
