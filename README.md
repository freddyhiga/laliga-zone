# La Liga Zone

Full-Stack application for a team player management.

## Overview
La Liga Zone is a full-stack web application for exploring and managing La Liga football players. The application provides dedicated pages for teams, nations, and positions, allowing users to easily browse and find players based on different categories.
Users can explore all La Liga teams and select a team to view its players. The Nation page allows users to select a nation and view all players from that nation, while the Position page allows users to select a position, such as goalkeeper (GK), and view all players in that position. Each of these pages includes a search bar to help users quickly find the information they are looking for.
The application also includes a homepage and an admin login system. Authenticated administrators can create, update, and delete player information through the application.
The project was built using React for the frontend, Spring Boot for the backend, and PostgreSQL as the database. It demonstrates the integration of a REST API with a React frontend and provides functionality for browsing, searching, filtering, and managing player data.

## Features
- **Homepage** — Provides an introduction and navigation to the main sections of the application.
- **Team Browser** — Browse all La Liga teams and select a team to see its players.
- **Nation Browser** — Browse available nations and select a nation to see all players from that nation.
- **Position Browser** — Browse players by position category: GK (Goalkeeper), DF (Defender), MF (Midfielder), and FW (Forward).
- **Search** — Search and filter players within the Team, Nation, and Position pages.
- **Player Management** — View detailed player information.
- **Admin Authentication** — Admin users can log in through a login page.
- **Admin Player Management** — Authenticated admins can create, update, and delete player information. 

## Technologies
- Java 21
- Spring Boot
- React
- JavaScript
- PostgreSQL
- HTML5
- CSS3

## Project Structure
- `backend/src/main/java/com/ll/laliga_zone/controller` — MVC controllers (Player).
- `backend/src/main/java/com/ll/laliga_zone/service` — Business logic and service layer.
- `backend/src/main/java/com/ll/laliga_zone/repository` — Spring Data JPA repositories.
- `backend/src/main/java/com/ll/laliga_zone/model` — JPA entities: `Player`, `Admin`.
- `backend/src/main/java/com/ll/laliga_zone/security` — Security configuration.
- `backend/src/main/java/com/ll/laliga_zone/exception` — Exception handling.

- `frontend/src/api` — API functions for communicating with the Spring Boot backend, including retrieving, filtering, creating, updating, and deleting player data.
- `frontend/src/components` — Reusable React components for displaying teams, nations, positions, and player information, as well as navigation, authentication, and player management.
- `frontend/src/hooks` — Custom React hooks for fetching player data and managing loading and error states, including players filtered by team, nation, or position.
- `frontend/src/pages` — Main application pages, such as Home, Team, Nation, Position, and Login pages.
- `frontend/src/utils` — Shared data and utility functions for nation and position names, player form validation, team colors, and team logos.



