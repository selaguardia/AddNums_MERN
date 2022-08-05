const express = require("express");
const app = express();
const port = process.env.PORT || 5000; 
const cors = require('cors');

// Middleware
app.use(cors({origin: '*'}));
app.use(express.urlencoded({ extended: false })); // Body parser
app.use(express.json());

// POST method
app.post('/addNums', (req, res) => {
  try {
    const input1 = req.body.num1;
    const input2 = req.body.num2;
    const answer = input1 + input2;
    return res.status(200).send({answer});
  } catch (error) {
    req.error = error;
    res.status(404).json({ message: error.message });
  }
})

app.listen(port, () => {
  console.log(`✅ Listening for client requests on Port ${port} ✅`);
});

module.exports = app;