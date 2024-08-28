const updateGameState = (state, diffArr) => {
  for (const diff of diffArr) {
    state.board[diff.y][diff.x].color = diff.color;
  }
  return state;
};

// example diff array

const diffArr = [
  {
    x: 10,
    y: 10,
    color: "orange",
  },
  {
    x: 10,
    y: 11,
    color: "orange",
  },
  {
    x: 10,
    y: 12,
    color: "orange",
  },
  {
    x: 10,
    y: 13,
    color: "orange",
  },
];
