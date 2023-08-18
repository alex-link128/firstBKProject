import { createNewBanco, getBancoById } from "../controllers/bancos.controller";

export const queries = {
    getAllBancos: 'Select * from CatBancos',
    addNewBanco: 'Insert into catbancos (clave, banco, estatus) values (@clave, @banco, @estatus)',
    getBancoById: 'Select * from catbancos where clave = @clave',
    deleteBanco: 'Delete from catbancos where clave = @clave',
    getTotalBancos: 'Select count(*) from catbancos',
    updateBancoByID: 'Update catbancos set banco = @banco, estatus = @estatus where clave = @clave',
}