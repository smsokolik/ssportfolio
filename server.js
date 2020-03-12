const express = require("express")
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/dist/"));

// Allows for angular routing to take precedent
app.get('*',  (req, res) => 
      res.sendFile('/dist/index.html', {root: __dirname + "/"}) 
);


app.listen(port, ()=> console.log(`Listening on port: ${port}`))