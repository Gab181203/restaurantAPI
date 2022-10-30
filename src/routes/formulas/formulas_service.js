const db = require("../../database");

exports.getFormulas = (req, res, next) => {
  db.query("SELECT * FROM formula", function (error, result) {
    if (error) {
      return res.status(500).send("internal servor error");
    }
    return res.status(200).json(result);
  });
};
exports.createFormulas = (req, res, next) => {
  if (req.body.name === null) {
    return res.status(400).send("missing field name");
  }
  var description = "";
  req.body.categories.forEach((element) => {
    description += " " + element.name;
  });
  db.query(
    "INSERT INTO formula (name, price, description) VALUES (?,?,?)",
    [req.body.name, req.body.price, description],
    function (error, result) {
      if (error) {
        console.log(error);
        return res.status(500).send("internal servor error");
      }
      return res.status(201).send("formulas created");
    }
  );
};
exports.getFormulasId = (req, res, next) => {
  //   res.send("Oui bonsoir");
  var id = req.params.id;
  db.query(`SELECT * FROM formula WHERE id = ${id}`, function (error, result) {
    if (error) {
      console.log(error);
      return res.status(500).send("internal servor error");
    }
    return res.status(200).json(result);
  });
};
exports.putFormulasId = (req, res, next) => {
  //   res.send("Oui bonsoir");
  var id = req.params.id;
  var description = "";
  req.body.categories.forEach((element) => {
    description += " " + element.name;
  });
  db.query(
    `UPDATE formula SET name = "${req.body.name}", price = "${req.body.price}", description = "${req.body.description}" WHERE id = ${id}`,
    function (error, result) {
      if (error) {
        console.log(error);
        return res.status(500).send("internal servor error");
      }
      return res.status(200).json(result);
    }
  );
};
exports.deleteFormulasId = (req, res, next) => {
    //   res.send("Oui bonsoir");
    var id = req.params.id;
    db.query(`DELETE FROM formula WHERE id = ${id}`, function (error, result) {
      if (error) {
        console.log(error);
        return res.status(500).send("internal servor error");
      }
      return res.status(200).json(result);
    });
  };
