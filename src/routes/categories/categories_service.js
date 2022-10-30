const db = require("../../database");

exports.getCategories = (req, res, next) => {
  db.query("SELECT * FROM category", function (error, result) {
    if (error) {
      return res.status(500).send("internal servor error");
    }
    return res.status(200).json(result);
  });
};
exports.createCategories = (req, res, next) => {
  if (req.body.name === null) {
    return res.status(400).send("missing field name");
  }
  db.query(
    "INSERT INTO category (name) VALUES (?)",
    [req.body.name],
    function (error, result) {
      if (error) {
        return res.status(500).send("internal servor error");
      }
      return res.status(201).send("category created");
    }
  );
};
exports.getCategoriesId = (req, res, next) => {
  //   res.send("Oui bonsoir");
  var id = req.params.id;
  db.query(
    `SELECT * FROM category WHERE id = ${id}`,
    function (error, result) {
      if (error) {
        console.log(error);
        return res.status(500).send("internal servor error");
      }
      return res.status(200).json(result);
    }
  );
};
exports.putCategoriesId = (req, res, next) => {
    //   res.send("Oui bonsoir");
    var id = req.params.id;
    db.query(
      `UPDATE category SET name = "${req.body.name}" WHERE id = ${id}`,
      function (error, result) {
        if (error) {
          console.log(error);
          return res.status(500).send("internal servor error");
        }
        return res.status(200).json(result);
      }
    );
  };
  exports.deleteCategoriesId = (req, res, next) => {
    //   res.send("Oui bonsoir");
    var id = req.params.id;
    db.query(
      `DELETE FROM category WHERE id = ${id}`,
      function (error, result) {
        if (error) {
          console.log(error);
          return res.status(500).send("internal servor error");
        }
        return res.status(200).json(result);
      }
    );
  };
  