const home = (req, res) => {
  res.render('index', { title: 'Home ' });
};
const Searching = (req, res) => {
  res.render('index', { title: 'searching ' });
};

const booking = (req, res) => {
  res.render('index', { title: 'Booking' });
};

const dashboard = (req, res) => {
  res.render('index', { title: 'Dashboard' });
};

const payment = (req, res) => {
  res.render('index', { title: 'Payment' });
};

module.exports = {
  home,
  Searching,
  booking,
  dashboard,
  payment
};
