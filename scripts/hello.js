module.exports = (robot) => {
  robot.hear(/hello/, (res) => {
    res.send('hi!');
  });
}
