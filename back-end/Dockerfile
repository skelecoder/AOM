FROM node:16.13.0-alpine
WORKDIR /usr/share/app 

# Installing dependencies
# Copying source files
COPY . .
RUN yarn install --frozen-lockfile

# Building app
RUN npm run build
CMD npm run start