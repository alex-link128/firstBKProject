import { Bit, NVarChar } from "mssql";
import { getConnection, sql, queries } from "../database";


export const getBancos = async(req,res) => { //se crea una funcion asincrona llamada getBancos
    try{
        const pool = await getConnection(); //Crea la conexion con la BD en la variable pool
        const result = await pool.request().query(queries.getAllBancos);//Guarda en result el resultado de la peticion a la BD
        //console.log(result);//Muestra en consola result
        res.json(result.recordset);
    } catch (error){
        res.status(500);
        res.send(error.message);
    }
}

export const createNewBanco = async(req,res) => {

    const {banco} = req.body;
    let {clave ,estatus} = req.body;

    if(banco == null){
        return res.status(400).json({msg: "Bad Request. Please Fill all fields"});
    };

    if(clave == null){
        clave = banco;
    };

    if(estatus == null){
        estatus = true;
    };
    //console.log(clave, banco, estatus);

    try {
        const pool = await getConnection();

        await pool
        .request()
        .input("Clave",sql.NVarChar, clave)
        .input("banco",sql.NVarChar, banco)
        .input("estatus",sql.Bit, estatus)
        .query(queries.addNewBanco);
    
        res.json("New Banco");
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getBancoById = async(req, res) => {
    const {id} = req.params;

    const pool = await getConnection();
    const result = await pool
    .request()
    .input("clave", id)
    .query(queries.getBancoById);
    
    //res.json(result);
    console.log(result);
};

export const deleteBancoById = async(req, res) => {
    const {id} = req.params;

    const pool = await getConnection();
    const result = await pool
    .request()
    .input("clave", id)
    .query(queries.deleteBanco);

    res.send(result);
};

export const getTotalBancos = async(req, res) => {
    const pool = await getConnection();
    const result = await pool
    .request()
    .query(queries.getTotalBancos);

    res.json(result.recordset[0][''])
}

export const updateProductByID = async (req, res) => {
    const {banco, estatus} = req.body;
    const {clave} = req.params;
    
    if(banco == null || estatus == null){
        return res.status(400).json({msg: "Bad Request. Please Fill all fields"});
    };

    const pool = await getConnection();
    await pool
        .request()
        .input("clave", NVarChar, clave)
        .input("banco", NVarChar, banco)
        .input("estatus", Bit, estatus)
        .query(queries.updateBancoByID);

    res.json({clave, banco, estatus});
    res.json("Banco Updated");
}