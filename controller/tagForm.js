const con = require("../db_connection"); 

module.exports = {

    async registerTagAccount(req, res){
        const {concesion, nombre, apellido, cedula, telefono, correo, contratpcyv, placa, marca, modelo, color, numtag, fototag } = req.body;
        const {filename} = req.file
        try {
            taghomologado = {
                concesion,
                nombre, 
                apellido, 
                cedula,
                telefono,
                correo,
                fotocedula:filename,
                contratpcyv,
                placa,
                marca,
                modelo,
                color,
                numtag,
                fototag
            }
            await con.query("INSERT INTO homologacion_persona set ?", [taghomologado]);

           return res.json({taghomologado});

        } catch (error) {
            console.log(`Error = ${error}`);
        }
    }
}