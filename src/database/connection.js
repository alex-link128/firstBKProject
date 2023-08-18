import sql from 'mssql';
import config from '../config'

const dbSettings = {
    user: config.dbUser,
    password: config.dbPassword,
    server: config.dbServer,
    database: config.dbDatabase,
    options: {
        encrypt: true,
        trustServerCertificate: true, //Change to true for local dev,
    },
};

export async function getConnection(){
    try {
        const pool = await sql.connect(dbSettings);
        //const result = await pool.request().query("Select 1"); //Para prueba de conexion al servidor de la BD
        //console.log(result);
        return pool;
    } catch(error) {
        console.error(error)
    }
}

export {sql};