FROM node:20.11.0 AS builder
WORKDIR angular
COPY package.json package.json
RUN npm install
COPY . .
RUN npm run build -- --configuration=production

FROM nginx:stable-perl AS runner
EXPOSE 80
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /angular/dist/fc-management-frontend/* /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
