const sayWelcome = (req, res) => {
  console.info(req.query);
  res.send(`Welcome to WildSeries, ${req.query.name} !`);
};

module.exports = { sayWelcome };
