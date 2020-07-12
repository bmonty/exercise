# Build Image
FROM node:14.5.0 as builder

COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build

# Run Image
FROM nginx:1.19-alpine

LABEL mainainer="Ben Montgomery <bmontgom@montynet.org>"

COPY --from=builder /build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
