# Backend challenge | K42
- https://be.cofit.k42.dev

## Tech stack
- NestJS (Express engine)
- PostgreSQL (Neon)

## Business logic
Backend exposes simple GET endpoint on / which returns users with their companies. The endpoint supports sending `search` and `limit` query parameters which are used as filters on the resulting data


## Challenge objective
The app contains various problems, including bugs, security issues and potential performance problems. Your task is to discover them and find a better solution. You can solve this by one of the following ways:
- Fork the repo, fix the problems and share the repo back with us. We'll be glad if you include your problem solving steps in a human readable text. You can text us back with your repo at our contact info or david.stranava@koala42.com
- Writing down the problems and your suggested solutions in a human readable form as sending it to us. You can use either our contact info or david.stranava@koala42.com
- Discussing the problems and solutions with one of the developers at Koala42 booth.

Note that you don't have to tackle all the problems, we don't want to steal your time. You can fix the problems you think are the most serious and only acknowledge the rest in a text or a readme with or without potential solutions or how would you approach them.

When submitting your solution online, we'd like to know how much time you've spent on it. If you got help from AI, we'll be glad if you share where and what did it help you with.

Some files are marked as not part of the challenge, problems in those files are not the main objective of the challenge, however nothing is stopping you from suggesting changes in them as well.


## Running backend locally
You can run the backend locally to test out your solutions. In order to do that, you have to have access to a postgres database. We're using Neon for this example and it's easy and fast to setup for you as well. You can skip steps containing neon instructions if you have your own database, however note, that when using different database, you'll be required to change the types and drizzle initialization in `db.module.ts`, `db.types.ts` and `schema.ts` and install adapter for you database. Note that we've been testing it out using Node 22, using older versions may bring in some issues.

1. Clone the repository
2. Go into the backend repository `cd backend`
3. Follow registration process here https://neon.com/
4. Create a database, the closest region is Frankfurt. Get the authorization credential which should look something like this `postgresql://neondb_owner:PASS@xxx.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require`
5. Create `.env` in the backend subfolder and paste the credential in as DATABASE_URL=""
6. Run `npm install`
7. Run `npx drizzle-kit push` to sync `schema.ts` database config with your database
8. Uncomment `SeederModule` as import in `app.module.ts`
9. Set your seed params in `seeder.service.ts`
10. Run the app `npm run start:dev` which will start the app on port 300
11. Trigger `seed` endpoint at `http://localhost:3000/seed`, which will seed your database with dummy data
12. Play around



## JWT Auth token
- You can use https://www.jwt.io/ to generate dummy auth tokens which are sent as authorization header
