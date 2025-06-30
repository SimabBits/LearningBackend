import express from "express";
const app = express();
const port = process.env.PORT || 3000;


app.get("/api/joke", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A joke",
      content: "This is a joke",
    },
    {
      id: 2,
      title: "A joke",
      content: "This is a joke 2",
    },
    {
      id: 3,
      title: "A joke",
      content: "This is a joke 3",
    },
    {
      id: 4,
      title: "A joke",
      content: "This is a joke 4",
    },
    {
      id: 5,
      title: "A joke",
      content: "This is a joke 5",
    },
  ];

  res.send(jokes)
});

app.listen(port, () => {
  console.log("Listening at port " + port);
});

console.log("hello");
