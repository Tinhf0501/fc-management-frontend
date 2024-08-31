FROM node:20.11.0 AS builder
WORKDIR fcManagement
COPY package.json package-lock.json ./
RUN npm install
COPY angular.json tsconfig.app.json tsconfig.json /fcManagement
COPY src src
RUN npm run build -- --configuration=production

FROM nginx:stable-perl AS runner
EXPOSE 80
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /fcManagement/dist/fc-management-frontend/. /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
