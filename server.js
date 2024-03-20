import express from 'https://esm.sh/express?target=denonext';

const app = express();
const port = 3000;

app.get('/hello', (req, res) => {
  console.log("Well hellog there");

  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
