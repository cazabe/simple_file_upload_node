const con = require("../db_connection"); 

module.exports = {

    async registerTagAccountEmp(req, res){
        const {concesion1,concesion2,concesion3,concesion4, nomrazonsocial, nomreplegal, ruc, telefono, correo, placa, marca, modelo, color,ejes, numtag} = req.body;
        console.log(concesion1,concesion2,concesion3,concesion4,nomrazonsocial, nomreplegal, ruc, telefono, correo, placa, marca, modelo, color, numtag);
        
        // console.log("req body: ", req.body);

         //all img are found
        console.log("req files" , req.files);
        // In here is where the img of cedula is
        const fileFotoCedu = req.files.fotocedula[0].filename;
        console.log("lo que trae req.files ", fileFotoCedu);
        const pathFotoCedula = `localhost:8000/files/${fileFotoCedu}`;
        // In here is where the img of TAG is
        const fileFotoTag = req.files.fototag[0].filename;
        console.log("lo que trae req.files ", fileFotoTag);
        const pathFotoTag = `localhost:8000/files/${fileFotoTag}`
        // const pathfotocedula = `localhost:8000/files/${fotocedula}`;
        // const fototag = req.files.fototag[0].filename;
        // const pathfototag = `localhost:8000/files/${fototag}`
        // console.log("fotos :" , fotocedula, fototag);
        console.log(pathFotoCedula);
        console.log(pathFotoTag);

        try {
            taghomologado = {
                concesion1,
                concesion2,
                concesion3,
                concesion4,
                nomrazonsocial, 
                nomreplegal, 
                ruc,
                telefono,
                correo,
                fotocedula:pathFotoCedula,
                placa,
                marca,
                modelo,
                color,
                ejes,
                numtag,
                fototag:pathFotoTag
            }
            await con.query("INSERT INTO homologacion_empresa set ?", [taghomologado]);
           return res.json({taghomologado});

        } catch (error) {
            console.log(`Error = ${error}`);
        }
    }
}