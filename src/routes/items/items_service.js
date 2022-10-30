const db = require("../../database");

exports.getItems = (req, res, next) => {
  db.query('SELECT * FROM item', function(error, result){
      if(error) {
          return res.status(500).send("internal servor error")
      }
      return res.status(200).json(result)
  })
};
exports.createItems = (req, res ,next) => {
  if(req.body.name === null) {
      return res.status(400).send("missing field name")
  }
  db.query('INSERT INTO item (name, description, price, category_id) VALUES (?,?,?,?)', [req.body.name, req.body.description, req.body.price, req.body.category_id], function(error, result){
    if(error) {
      console.log(error);
          return res.status(500).send("internal servor error")
      }
      return res.status(201).send("items created")
  })
}
exports.getItemsId = (req, res, next) => {
  //   res.send("Oui bonsoir");
  var id = req.params.id;
  db.query(
    `SELECT * FROM item WHERE id = ${id}`,
    function (error, result) {
      if (error) {
        console.log(error);
        return res.status(500).send("internal servor error");
      }
      return res.status(200).json(result);
    }
  );
};
exports.putItemsId = (req, res, next) => {
  //   res.send("Oui bonsoir");
  var id = req.params.id;
  db.query(
    `UPDATE item SET name = "${req.body.name}", price = "${req.body.price}", description = "${req.body.description}" WHERE id = ${id}`,
    function (error, result) {
      if (error) {
        console.log(error);
        return res.status(500).send("internal servor error");
      }
      return res.status(200).json(result);
    }
  );
};
exports.deleteItemsId = (req, res, next) => {
  //   res.send("Oui bonsoir");
  var id = req.params.id;
  db.query(
    `DELETE FROM item WHERE id = ${id}`,
    function (error, result) {
      if (error) {
        console.log(error);
        return res.status(500).send("internal servor error");
      }
      return res.status(200).json(result);
    }
  );
};