# Pencil-Talk
Pencil Talk is a web app for pencil enthusiasts to share links, rate them, and earn points. It features user sign-up, secure authentication, link sharing, ratings, and favorites. Built with a RESTful API and a relational database, it ensures secure data handling, smooth interactions, and a user-friendly design for a vibrant pencil-loving community.
Features

Core Features:

User Registration and Authentication:Visitors can sign up by providing a username and password. Members must authenticate to access personalized features.

Post Links:Members can add links with a title and description to share with the community.

Global Link List:A public front page displays all links submitted, including titles, descriptions, and ratings.

Ratings:Members can rate links positively or negatively, with only one rating allowed per user per link.

Aggregate Ratings:Links display an overall rating based on user input and can be sorted by Most Recent or Highest Rated.

Favourites:Members can view a personalized list of links they’ve rated positively.

Earning Points:Members gain or lose Pencil Points based on how other users rate their shared links.

Hide Links:Members can hide specific links from their view without affecting the link’s ratings.

Non-Functional Requirements

RESTful API:A secure API is used for posting links, rating links, and hiding links. These actions do not require a full page reload.

Authentication & Security:The API is protected from unauthorized use, ensuring that users cannot perform actions on behalf of others. Passwords are securely stored using Argon2 or bcrypt.

Database Integration:The back-end uses a relational database (PostgreSQL or SQLite) to store all user data, links, and ratings.

Basic Visual Design:A clean and theme-appropriate interface designed to appeal to pencil enthusiasts.

