/*const readXlsxFile = require('read-excel-file/node');
   
readXlsxFile('./BPA Process - Prematch.xlsx', { sheet: 2 }).then((data) => {
    console.log(data);
})*/



const child_process = require('child_process');

let comando = child_process.spawn('cmd', ['/c', 'C:\\Users\\Fran-Nico\\Desktop\\test\\nuevo2.bat']);

comando.stdout.on('data', function(datos){
    console.log('Salida:');
    console.log(datos.toString());
});

comando.stderr.on('data', function(datos){
    console.log('Error: ', datos);
})

comando.on('exit', function(codigo){
    console.log('El proceso ha finalizado con el códig:', codigo);
});