FROM node:14-alpine3.10 
COPY package*.json ./
RUN npm install\
    npm run build
COPY . .
ENTRYPOINT [ "npm" ]
CMD ["start"]

