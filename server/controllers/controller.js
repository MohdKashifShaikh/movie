exports.getRoutes = async (req, res) => {
  console.log("GET ROUTE");
};

exports.getCards = async (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: "Success", data: req.body });
};

exports.cardDetails = async (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: "Success", data: req.body });
};
