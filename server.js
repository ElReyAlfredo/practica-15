const express = require("express"); //Inyeccion de dependencia
let app = express();
let PORT = process.env.PORT || 3000; //Definicion del puerto de escucha
app.use("/assets", express.static(__dirname + "/public")); //Contenido estatico

app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs"); //Definimos el contenido del motor de ejs

app.get("/", (req, res) => {
  res.send(`<!DOCTYPE html> <html lang="en"> <head><link rel "stylesheet" href="/assets/style.css">
    <title>Document</title> </head>
    <body> <h1>Hola Mundo </h1>
    </body> </hmtl>`);
});

//Devenis teber esta ruta para el puerto de student con el ejs ya renderizado
app.get("/student", (req, res) => {
  res.render("student");
});

/* SOLAMENTE PUEDE HABER UNA SOLAR RUTA DE ADDSTUDENT A LA VEZ
app.post("/addStudent", (req, res) => {
  res.send(`
      Nombre: ${req.body.nombre}
      Edad: ${req.body.edad}
      NSS: ${req.body.nss}
      Tipo de Sangre: ${req.body.tipoSangre}
    `);
});
*/
//Podemos renderizar nuestra vista en displaData.ejs con el metodo render poniendo 4 keys con los valores de nombre, edad, nss, tipo de sangre
app.post("/addStudent", (req, res) => {
  res.render("displayData", {
    nombre: req.body.nombre,
    edad: req.body.edad,
    nss: req.body.nss,
    tipoSangre: req.body.tipoSangre,
  });
});
app.listen(PORT);

//Ya para finalizar lo probamos en la ruta student el formulario y lo enviamos y nos mandara a la ruta de displayData
// En esa ruta mostrara el resultado escirto en el forms
