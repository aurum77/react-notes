# Build
FROM node:16-alpine AS build

WORKDIR /build
COPY . .

RUN npm install backend/ --prefix backend/
RUN npm install frontend/ --prefix frontend/
RUN npm run build

# Serve
FROM node:16-alpine AS serve

WORKDIR /app

COPY --from=build /build/backend/package*.json /app/

# Copy Javascript transpiled from Typescript
COPY --from=build /build/backend/build /app/build

# Copy Static content
COPY --from=build /build/backend/dist /app/dist

# Install npm deps without dev deps
RUN npm install --omit=dev

CMD ["node", "build/index.js"]
EXPOSE 3001
