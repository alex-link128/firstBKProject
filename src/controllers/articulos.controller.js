import {getConnection, sql} from "../database/connection.js"

export const getArticulos = async (req, res) => {

    const pool = await getConnection();
    const result = await pool.request().query("Select * from articulos");
    console.log(result);

    res.json(result.recordset);
};

export const createNewArticulo = async (req, res) => {

    const { name, description} = req.body;
    let {quantity} = req.body;

    if(name == null || description == null){
        return res.status(400).json({msg: "Bad Request. Please Fill all fields"});
    }

    if(quantity == null){
        quantity = 0;
    }

    //console.log(name, description, quantity);

    const pool = await getConnection();

    await pool.request().input("name",sql.VarChar,"Articulo Test").query('Insert into');

    res.json("New Articulo");
}