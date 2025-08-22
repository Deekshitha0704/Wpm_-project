/* GET 'Home' page */
const home = (req, res) => {
  res.render('home', { title: 'Home' });
};

/* GET 'Search' page */
const search = (req, res) => {
  res.render('search', { title: 'Search' });
};

/* GET 'Booking' page */
const booking = (req, res) => {
  res.render('booking', { title: 'Booking' });
};

/* GET 'Dashboard' page */
const dashboard = (req, res) => {
  res.render('dashboard', { title: 'Dashboard' });
};

/* GET 'Payment' page */
const payment = (req, res) => {
  res.render('payment', { title: 'Payment' });
};

module.exports = {
  home,
  search,
  booking,
  dashboard,
  payment
};


