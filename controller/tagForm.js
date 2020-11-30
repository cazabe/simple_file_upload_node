const con = require("../db_connection"); 

module.exports = {

    async registerTagAccount(req, res){
        const {concesion, nombre, apellido, cedula, telefono, correo, contratpcyv, placa, marca, modelo, color, numtag} = req.body;
        console.log(req.files[0]);
        const fotocedula = req.files.fotocedula[0].filename;
        const fototag = req.files.fototag[0].filename;
        try {
            taghomologado = {
                concesion,
                nombre, 
                apellido, 
                cedula,
                telefono,
                correo,
                fotocedula:fotocedula,
                contratpcyv,
                placa,
                marca,
                modelo,
                color,
                numtag,
                fototag:fototag
            }
            await con.query("INSERT INTO homologacion_persona set ?", [taghomologado]);

           return res.json({taghomologado});

        } catch (error) {
            console.log(`Error = ${error}`);
        }
    }
}