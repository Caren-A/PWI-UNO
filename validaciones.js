document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); 
    guardarDatos(); 
  });


const dolarPrice = 450;
const euroPrice = 550;

function guardarDatos(){

    let nomEmpresa = document.getElementById("empresa").value;
    let monto = document.getElementById("sueldo").value;
    let convDolar = Math.round( monto / dolarPrice );
    let convEuro = Math.round( monto / euroPrice );

    let fila="</td><td>"+nomEmpresa+"</td><td>"+"$"+monto+"</td><td>"+convDolar+"</td><td>"+convEuro;

    let btnEnvio = document.createElement("TR");
   	btnEnvio.innerHTML=fila;
    document.getElementById("tablita").appendChild(btnEnvio);

}

function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("tablita");
    switching = true;
  
    dir = "asc";
  
    while (switching) {
  
      switching = false;
      rows = table.rows;
     
      for (i = 1; i < (rows.length - 1); i++) {
        
        shouldSwitch = false;
        
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
       
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
       
        switchcount ++;
      } else {
       
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }