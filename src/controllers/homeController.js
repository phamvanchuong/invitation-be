const home = (req, res) => {
  try {
    res.render("home");
  } catch (error) {
    console.log(error);
  }
};

const postHome = (req, res) => {
  try {
    console.log(req.body);
    return res.json({ status: "OKKKKKKKK" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { home, postHome };
