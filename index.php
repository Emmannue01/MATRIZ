<!DOCTYPE html>
<html>
    
<head>
    <title>MATRIX</title>
    <link rel="stylesheet" href="CUSJ030111.css">

</head>


<body>
    <!-- Elementos de interfaz de usuario (botones y entradas de texto -->
    <label for="rows">Filas:</label> 
    <input type="number" id="rows" min="1" max="10" value="10">
    <label for="cols">Columnas:</label>
    <input type="number" id="cols" min="1" max="10" value="10">
    <button onclick="createTable()">Crear Tabla</button>
    <div id="table-container"></div> <!-- div donde se muestra la matriz generada -->
    <button onclick="fillEmptyCells()">Rellenar Espacios Vacíos</button>
    <button onclick="clearAllCells()">Limpiar Todo</button>
    <button onclick="clearHashCells()">Limpiar '#'</button>
    <button onclick="addRandomValues()">Agregar Valores Aleatorios</button>
    <br>
    <button onclick="moveRowLeft()">Mover Fila a la Izquierda</button>
    <button onclick="moveRowRight()">Mover Fila a la Derecha</button>
    <button onclick="moveColumnUp()">Mover Columna hacia Arriba</button>
    <button onclick="moveColumnDown()">Mover Columna hacia Abajo</button>
    <button onclick="showMatrix()">Mostrar Matriz</button> 
    <textarea id="matrix-output" readonly></textarea> <!-- textarea donde se imprime la matriz -->
    
    <script src="JEVV000118.js"></script>
</body>

</html>
