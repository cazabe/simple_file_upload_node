const con = require("../db_connection"); 

module.exports = {

    async registerTagAccount(req, res){
        const {concesion, nombre, apellido, cedula, telefono, correo, contratpcyv, placa, marca, modelo, color, numtag} = req.body;
        const fotocedula = req.files.fotocedula[0].filename;
        const pathfotocedula = `localhost:8000/files/${fotocedula}`;
        const fototag = req.files.fototag[0].filename;
        const pathfototag = `localhost:8000/files/${fototag}`

        try {
            taghomologado = {
                concesion,
                nombre, 
                apellido, 
                cedula,
                telefono,
                correo,
                fotocedula:pathfotocedula,
                contratpcyv,
                placa,
                marca,
                modelo,
                color,
                numtag,
                fototag:pathfototag
            }
            await con.query("INSERT INTO homologacion_persona set ?", [taghomologado]);

           return res.json({taghomologado});

        } catch (error) {
            console.log(`Error = ${error}`);
        }
    }
}