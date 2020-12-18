const con = require("../db_connection"); 

module.exports = {

    async registerTagAccount(req, res){
        const {concesion1,concesion2,concesion3,concesion4, nombre, apellido, cedula, telefono, correo, contratpcyv, placa, marca, modelo, color,ejes, numtag} = req.body;
        console.log(concesion1,concesion2,concesion3,concesion4, nombre, apellido, cedula, telefono, correo, contratpcyv, placa, marca, modelo, color, numtag);
        
        // console.log("req body: ", req.body);
        // en este esta la imagen 
        // console.log("req files" , req.files);
        const filefoto = req.files.fotocedula[0].filename;
        console.log("lo que trae req.files ", filefoto);
        const pathfotocedula = `localhost:8000/files/${filefoto}`;
        // const pathfotocedula = `localhost:8000/files/${fotocedula}`;
        // const fototag = req.files.fototag[0].filename;
        // const pathfototag = `localhost:8000/files/${fototag}`
        // console.log("fotos :" , fotocedula, fototag);
        console.log(pathfotocedula);

        try {
            taghomologado = {
                concesion1,
                concesion2,
                concesion3,
                concesion4,
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
                ejes,
                numtag,
                // fototag:pathfototag
            }
            await con.query("INSERT INTO homologacion_persona set ?", [taghomologado]);
           return res.json({taghomologado});

        } catch (error) {
            console.log(`Error = ${error}`);
        }
    }
}