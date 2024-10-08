const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const { Client } = require("socket.io-client");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

io.on("connection", (socket) => {
  socket.emit("Room", { name: "Lucy" }, { name: "Tom" }, { name: "Gin" });
});

io.on("connection", (socket) => {
  socket.join("Room");
  io.to("Room").emit("user", "A");
});

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
});

let gameState = [];
for (let i = 0; i < 50; i++) {
  const row = Array.from({ length: 20 }, () => {
    return {
      color: "blue",
      user: "someguy",
    };
  });
  gameState.push(row);
}

const board = gameState.concat(gameState).concat(gameState).concat(gameState);

const state = {
  board: board,
  username: "someguy",
};

io.on("connection", (socket) => {
  socket.on("echo", (msg) => {
    io.emit("echo", state);
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
