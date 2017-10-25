# Actively
Actively Travel App


This is a simple React app with an Express back-end

Found this tutorial on Dave Ceddia's website: https://daveceddia.com/create-react-app-express-backend/

Basically I use express generator to create a react-backend app and create-react-app for the front-end. I made sure to run the server on a different port and I made some changes to the source files.

For the react part I set the proxy under package.json and ran it. On the react side it fetches from users, which goes to the dev server to get the data. It is important to initialize with an empty array. On render it sets the state of the map of data.

Express: npm install-g express-generator<br> express react-backend<br> 
  In react-backend: npm install <br>To run server: PORT=3001 node bin/www<br>

React: npm install -g create-react-app <br> create-react-app client<br> To run react: npm start
