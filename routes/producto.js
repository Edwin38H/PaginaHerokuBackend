const express = require("express");
const connection = require("../conection");

const router = express.Router();


router.get("/get",  (req, res, next) => {
  let query = "select * from producto";
  connection.query(query, (err, results) => {
    if (!err) {
      return res.status(200).json({ data: results });
    } else {
      return res.status(500).json({ err });
    }
  });
});

router.get("/stock",  (req, res, next) => {
  let query = "select * from stock";
  connection.query(query, (err, results) => {
    if (!err) {
      return res.status(200).json({ data: results });
    } else {
      return res.status(500).json({ err });
    }
  });
});

router.patch("/update", (req, res, next) => {
  let stock = req.body;
  let query =
    "UPDATE stock SET unidades = unidades + ?  WHERE producto=? and tienda= ?;";
  connection.query(
    query,
    [
      stock.unidades,
      stock.producto,
      stock.tienda
    ],
    (err, results) => {
      if (!err) {
        if (results.affectedRows == 0) {
          return res.status(404).json({ message: "Producto no encontrado" });
        }
        return res
          .status(200)
          .json({ message: "Prducto actualizado" });
      } else {
        return res.status(500).json({ err });
      }
    }
  );
});

module.exports = router;