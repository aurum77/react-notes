# react-notes

## What is this ?

- It's a Google Keep clone written using MongoDB, Express, React and Node

## What does it look like ?

[Here's a railway app](https://react-notes-production.up.railway.app/) (If it's offline, blame railway.app for non-sleeping apps)

## How do I run this ?

1. Install npm modules

```bash
npm install
npm install backend/ --prefix backend/
npm install frontend/ --prefix frontend/
```

2. Populate file `backend/.env` with `MONGODB_URI` or set `MONGODB_URI` environment variable
3. Run `npm run dev` or `yarn dev` at the root folder

## How do I deploy this ?

1. Run `docker compose up` in the root folder of the repo
2. Profit

## TODO

- [ ] Migrate to Typescript
  - [x] Backend
  - [ ] Frontend
- [x] Create a dockerfile
- [ ] Tests
- [ ] Set up CI/CD
- [x] Set up ESLint
- [ ] JWT based authentication
- [ ] Responsive design

## Test
- ci cd test
