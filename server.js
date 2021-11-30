const express = require('express');
const session = require('express-session');
// const routes = require('./controllers');

const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

// app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(routes);

sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});