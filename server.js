// These are our required libraries to make the server work.
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.route('/api')
  .get((req, res) => {
    console.log('GET request detected');
    req.status(200).json({message: 'hello world!'})
  })
  .post((req, res) => {
    console.log('POST request detected');
    console.log('Form data in res.body', req.body);
    res.send('hello world!')
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
