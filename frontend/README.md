# Frontend challenge | K42
- https://cofit.k42.dev

## Tech stack
- React + Vite


## Business logic
The app displays and visualizes users and their companies from external data source. It should allow the user to search by name and let them sort the results by fields. It also aggregates "Počet příbuzných" count, which shows how many of the visible users have the same last name. There is a very basic limit functionality for testing, which limits how many users are returned from the external API.


## Challenge objective
The app contains some performance problems and bugs. Some functionality is not completely implemented. Note that you don't have to fix all of the problems, you can only choose a few and only acknowledge the rest, we don't want to steal your time. Your task is to tackle the bugs and finish the missing business logic. Your can submit your solution in following ways:
- Discuss with developers at Koala42 booth, which things are wrong, why and how would you fix them
- You can write down the problems and potential improvements in human readable form and submit your result to our contact info, staff at the booth or david.stranava@koala42.com
- Fork the repo and implement your fixes and improvements. Then share the repo back with us either to our contact info or you can use david.stranava@koala42.com

When submitting your solution online, we'd like to know how much time you've spent on it. If you got help from AI, we'll be glad if you share where and what did it help you with.

If you choose the do your own solution by forking the repo or even creating a new one, you can include the live site URL in your submission, we've used Vercel to deploy this site in minutes, but you can choose whichever provider you want.

The main challenge lies in logical javascript files, however nothing is stopping your from showing off your css skills as well, as the current styling is basically non existent ;). For this you can bring in tailwind or use your prefered method of styling web apps and surprise us!

## Running frontend locally
1. Run `npm install` to install dependencies
2. Run `npm run dev` to start the app at http://localhost:5173


## Notes
There is a fixed authorization header in the external API calls, that's just a dummy for the backend challenge, it's not in the challenge's objective to fix that in any way or to implement any authentication, however, sky is the limit!
