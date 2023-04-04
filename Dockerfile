FROM node:14-alpine3.10 
LABEL maintainer="wasup-yash"
COPY package*.json ./
RUN npm install\
    npm run build
COPY . .
ENTRYPOINT [ "npm" ]
CMD ["start"]

