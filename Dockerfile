FROM node:16

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 8081
ENV HOST=0.0.0.0
CMD ["npm", "start"]