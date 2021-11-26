FROM node:16.13.0-alpine
WORKDIR /usr/share/app 

# Installing dependencies
# Copying source files
COPY . .
RUN npm ci

# Building app
RUN npm run build
CMD npm run start