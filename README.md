# Shared shopping list
This web application is a shared shopping list into which one can add shopping list. In individual shopping list page one can add items to the list and then mark those collected. When list is ready, it can me deactivated so it does not show on lists page.

## About the application
The aplication uses a three-tier archirecture (client, server, database) and a layered architecture with four layers (views, controllers, sercices, database).

## Launching the application
To launch this application locally, open up the terminal in the root folder. Type 'docker compose up' and navigate to http://localhost:7777. Application starts on port 7777.
Local database can be emptied by using command 'docker compose rm -sf'.

## Shutting down the application
To shut down the application use command ctrl+C at the same terminal where the application was launced by using 'docker compose up' command.

## Local tests
There is five local tests created to test the main functionalities of the application. Tests can be run by command 'docker compose run --entrypoint=npx e2e-playwright playwright test' at the terminal opened up from root folder. Local database can be emptied by using command 'docker compose rm -sf'.