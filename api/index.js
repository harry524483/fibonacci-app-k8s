const app = require("./express");
const pgClient = require("./database");
const redisClient = require("./redis");

const redisPublisher = redisClient.duplicate();

app.get("/", (request, response) => {
  response.send("Hello");
});

app.get("/values/all", async (request, response) => {
  const values = await pgClient.query("SELECT * FROM values");

  response.send(values.rows);
});

app.get("/values/current", async (request, response) => {
  redisClient.hgetall("values", (error, values) => {
    response.send(values);
  });
});

app.post("/values", async (request, response) => {
  console.log("request.body", request.body);
  const index = request.body.index;
  if (index > 40) {
    return response.status(422).send("Index too high");
  }

  redisClient.hset("values", index, "Nothing yet!");
  redisPublisher.publish("insert", index);
  pgClient.query("INSERT INTO values(number) VALUES($1)", [index]);

  response.send({
    working: true,
  });
});
