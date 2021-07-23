const con = require("../db_connection"); 

module.exports = {

    async uploadImage(req, res){
        const {name, email} = req.body;
        console.log(name, email);
        
        // console.log("req body: ", req.body);

         //all img are found
        console.log("req files" , req.files);
        // In here is where the img of cedula is
        const fileFirstImg= req.files.firstImg[0].filename;
        console.log("lo que trae req.files ", fileFirstImg);
        const pathFirstImage = `localhost:8000/files/${fileFirstImg}`;
        // In here is where the img of TAG is
        const fileSecondImage = req.files.secondImg[0].filename;
        console.log("lo que trae req.files ", fileSecondImage);
        const pathSecondImage = `localhost:8000/files/${fileSecondImage}`

        console.log(fileSecondImage);
        console.log(pathSecondImage);

        try {
            taghomologado = {
                name, 
                email, 
                firstImg:pathFirstImage,
                secondImg:pathSecondImage
            }
            await con.query("INSERT INTO secondimg set ?", [taghomologado]);
           return res.json({data:taghomologado});

        } catch (error) {
            console.log(`Error = ${error}`);
        }
    }
}