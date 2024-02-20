/*********************************/
/Examen Diplomatura Web 2020 - UTN/
/ Fecha de entrega: 29/09/2020   /
/ Ochoa, Erika Cecilia         /
/********************************

Software utilizado:
- Visual Code v1.49.4
- MongoDB v4.4
- Robo 3T v1.3.1
- Angular

Versiones consultadas en clases:
>node --version
v12.18.3
>npm --version
6.14.6
>express --version
4.16.1
>nodemon --version
2.0.4
---------------------------
¿Cómo iniciar el proyecto?
---------------------------
1) Al ingresar al Visual Code seleccionar la carpeta "Examen" ubicada dentro de mi nombre.

2) Abrir una nueva terminal y ubicarnos en la carpeta "server" y ejecutar el comando: "npm install":
	cd server
	server> npm install

3) Abrir una nueva terminal posicionarnos en la carpeta "data" y ejecutar el archivo "startmongo.bat":
	cd data
	data> startmongo

4) Abrir una nueva teminal(JavaScript Debug Terminal) ubicarnos en la carpeta "server" e iniciar el proyecto:
	cd server
	server> npm start ó server> node bin/www ó server> node ./bin/www ó server>nodemon

5) La base de datos ya esta incluida pero se añade las colecciones en formato json. 

6) Para acceder a la página principal ir al browser escribir la URL localhost:3000

___________________________________________________________________________________
Usuarios guardados en Base de Datos

DNI      /NOMBRE         /GÉNERO/VOTO
12345678 Mariano Moreno   M        NO
87654321 Alejandra Moreno F	   NO
37123456 Carolina Diaz    F        SI
40000000 Verónica Gala    F        SI
32739852 Eduardo Soria    M        SI
