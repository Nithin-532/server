const express = require('express');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.status(200).send("Welcome to root URL of Server");
})

app.listen(port, (error) => {
  if (!error) {
    console.log(`Server is Successfully Running, and App is listening on port ${port}`)
  } else {
    console.log("Error occured, server can't start", error);
  }
})
