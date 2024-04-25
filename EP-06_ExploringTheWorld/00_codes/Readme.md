### Monolith Architecture:-

- Earlier we use to have a huge big project application which has API's, UI and all the functionalities in one place, authentication code inside in same project, Database, notification(sending messages).

### Two approaches How web apps or ui application fetch the data form backend

- (1). When our app load, we can make a api call to fetch the data and render it.

---- Loads => API => Render

- (2). As soon as the page loads, what will happens is, we will just render our ui.

---- Loads => Render => API => Render the new data from API.

In react, (2) approach is better! and this gives better UX.
