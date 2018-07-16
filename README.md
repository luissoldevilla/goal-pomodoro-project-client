
# Goal Tracker Client Side

  Client-side repo for full stack web application. The application purpose is
  to allow users to keep track of their goals.

## The Idea

The reason I decided to make this application was that I use the Pomodoro
technique often, but most of the tools out there for there use the  Pomodoro
technique only based on a  timer set on 4 intervals of 25 minutes each with 5
minutes between each interval. What I want to do for this project was ultimately
make a goal tracking system based on the Pomodoro technique, meaning the user is
able to take action on their goal using the Pomodoro technique within the
application.

## User Stories

1. As a user, I want to be able to create a new goal
1. As a user, I want to be able to create a update a goal
1. As a user, I want to be able to create a delete a goal
1. As a user, I want to be able to share my goal(V2 or later versions)
1. As a user, I want to have 25 min intervals(V2 or later versions)
1. As a user, I want to be able to get response back from other user
1. As a user, I want to be accomplish my goal

## Wireframes:
![alt text](https://i.imgur.com/Ziau8I1.png)

## Planning

The way I approached my project was to focus on the backend first, once that was
done,  I started with the Client side.  I built the front end first based on MVP.
These meant that I focus on Auth and the main MVP events (CRUD), such as
`create goal form`, show, deleted and update function based on handlebars.
After that, I started to focus on the appearance, I utilize Bootstrap for this,
I customized a top/ sign-in bar as well as modals.

## Technology Used:

The main front-end framework is built on Javascript, HTML5, and CSS. Utilizing
Bootstrap also takes part in building the client side, this can include the
Sign-In navigation bar, as well as the effects on the buttons when hovering over.
Bootstrap also allow me to use modals in different sections of the client, such
as the Sign-up and Change Password. Another big part of my client side is
utilizing Handlebars, these, are used for displaying the user goals once
created, they are also attached to my API.

## Future iterations

- One Future iteration will be implementing a timer, as you can see on my
wire-fame it is included, this part I would consider to be a version 2, which
that what ultimately want for this application.

## API

[For Backend Repo click here](https://github.com/luissoldevilla/goal-pomodoro-project-api)

## Deployed Links:

- [Client](https://luissoldevilla.github.io/goal-pomodoro-project-client/)
- [Backend](https://sleepy-tor-47880.herokuapp.com/)

## Additional Resources

- [The Pomodoro Technique](https://lifehacker.com/productivity-101-a-primer-to-the-pomodoro-technique-1598992730)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
