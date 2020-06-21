var Twitter = require("twitter");
var client = new Twitter({
  consumer_key: "XqA0sAFyM4j3MRtkW5p9UwANK",
  consumer_secret: "qxoCwOAfK6IzBWDCqsEgKiO9Kr74UaSCxPjhE2n5O5erInIbnb",
  bearer_token:
    "AAAAAAAAAAAAAAAAAAAAAP160AAAAAAAYfmkXUBpLjcdAl2eXQGO4x2gjaU%3D2WDiR5cOCHrr37qKgzMb71U9XRXukpLPJaCCEM3XdOPFnC1eCw",
});

const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
// var cors = require("cors");

const app = express();
const server = require("http").Server(app);
path = require("path");

const io = require("socket.io")(server);
const port = 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + "/../dist")));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname + "/../dist/index.html"))
);

server.listen(port);
app.use(function(req, res, next) {
  //console.log(req);
  res.header("Access-Control-Allow-Origin", "http://localhost:8080"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/search", (request, response) => {
  //console.log(request.body);
  response.send("hi");
});

io.on("connection", (socket) => {
  console.log("socket connected");
  io.emit("oops", { hello: "world" });
  socket.on("testEvent", (data) => {
    var qString = data.keyWords.join(" ");
    var geoCode = data.geoCode.lat + "," + data.geoCode.lng + ",100km";
    console.log(geoCode);
    params = { q: qString, geocode: geoCode, count: 100, max_id: 1 };
    rF(params);
    console.log(qString);
  });
});
var firstLessTweetes = false;

// var start = async function () {
//   tweetsCount = 0;
//   tweetsList = [];
//   await client.get(
//     "search/tweets",
//     { q: "i", geocode: "-22.912214,-43.230182,1km", count: 3 },
//     function (error, tweets, response) {
//       searchmetadata = tweets.search_metadata;
//       tweetsList = tweets.statuses;
//       tweetsCount = tweetsList.length;
//       console.log(11);
//     }
//   );
//   for (i = 0; i < 10; i++) {
//     await client.get(
//       "search/tweets",
//       { q: "i", geocode: "-22.912214,-43.230182,1km", count: 3 },
//       function (error, tweets, response) {
//         if (error) {
//           console.log(error);
//           return;
//         }
//         searchmetadata = tweets.search_metadata;
//         tweetsList = tweets.statuses;
//         tweetsCount = tweetsCount + tweetsList.length;
//         console.log(i);
//       }
//     );
//   }
//   console.log(332);
// };

// start();
tweetsCount = 0;
var rF = function(params) {
  console.log("function start");
  // socket.emit("test2", { hello: "world" });

  // client.get(
  //   "search/tweets",
  //   {
  //     q: "i",
  //     geocode: "40.815555555555  ,-74.0080555555555555  ,100km",
  //     count: 100,
  //   },
  //   function (error, tweets, response) {
  //     if (error) {
  //       console.log(error);
  //       return;
  //     }
  //     searchmetadata = tweets.search_metadata;
  //     tweetsList = tweets.statuses;
  //     tweetsCount = tweetsCount + tweetsList.length;
  //     console.log(i);
  //   }
  // );

  client.get("search/tweets", params, function(error, tweets, response) {
    if (error) {
      console.log(error);
      return;
    }
    searchmetadata = tweets.search_metadata;
    tweetsList = tweets.statuses;
    tweetsCount = tweetsCount + tweetsList.length;
    if (!firstLessTweetes) {
      io.emit("firstLessTweetes", { tweets: tweetsList });
      firstLessTweetes = true;
    }
    io.emit("tweetsCount", { tweetsCount: tweetsCount });

    if (tweetsList.length == 100) {
      params.max_id = tweetsList[tweetsList.length - 1].id - 1;
      rF(params);
      console.log(tweetsCount);
    } else {
      firstLessTweetes = false;
      tweetsCount = 0;
      console.log("research done");

      return;
    }
    console.log(145);
  });
};
//console.log(rF(1));
