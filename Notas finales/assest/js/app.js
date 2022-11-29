var nombre = prompt("Ingrese nombre completo");
var nota1html = parseInt(prompt("Ingrese nota 1 del ramo HTML"));
var nota2html = parseInt(prompt("Ingrese nota 2 del ramo HTML"));
var nota3html = parseInt(prompt("Ingrese nota 3 del ramo HTML"));
var nota1css = parseInt(prompt("Ingrese nota 1 del ramo CSS"));
var nota2css = parseInt(prompt("Ingrese nota 2 del ramo CSS"));
var nota3css = parseInt(prompt("Ingrese nota 3 del ramo CSS"));
var nota1js = parseInt(prompt("Ingrese nota 1 del ramo JavaScript"));
var nota2js = parseInt(prompt("Ingrese nota 2 del ramo JavaScript"));
var nota3js = parseInt(prompt("Ingrese nota 3 del ramo JavaScript"));

var sumahtml = nota1html + nota2html + nota3html;
var promediohtml = sumahtml / 3;

var sumacss = nota1css + nota2css + nota3css;
var promediocss = sumacss / 3;

var sumajs = nota1js + nota2js + nota3js;
var promediojs = sumajs / 3;


document.write(
    `
      <h1>Notas finales</h1>
      <div class= "info">
        <p>Nombre:<span>${nombre}</span></p>
        <p>Carrera: <span>Desarrollo Web</span></p>
      </div>
      <table class="table table-hover">
            <thead class="table-dark">
                <tr>
                <th>Ramo</th>
                <th>Nota 1</th>
                <th>Nota 2</th>
                <th>Nota 3</th>
                <th>Promedio</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>HTML</th>
                    <td>${nota1html}</th>
                    <td>${nota2html}</th>
                    <td>${nota3html}</th>
                    <td>${promediohtml}</th>
                    </tr>
                    <tr>
                    <td>CSS</th>
                    <td>${nota1css}</th>
                    <td>${nota2css}</th>
                    <td>${nota3css}</th>
                    <td>${promediocss}</th>
                    </tr>
                    <tr>
                    <td>JavaScript</th>
                    <td>${nota1js}</th>
                    <td>${nota2js}</th>
                    <td>${nota3js}</th>
                    <td>${promediojs}</th>
                    </tr>
                    </tbody>
        </table>
    `
  )