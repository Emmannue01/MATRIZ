/* 
 JAVA
 */

        // Declaración de la variable para almacenar los datos de la matriz
        var matrixData = [];

        // Función para crear la tabla de entrada de la matriz
        function createTable() {
            // Obtener el número de filas y columnas ingresado por el usuario
            var rows = parseInt(document.getElementById('rows').value);
            var cols = parseInt(document.getElementById('cols').value);

            // Crear elementos de la tabla y el cuerpo
            var table = document.createElement('table');
            var tbody = document.createElement('tbody');

            // Reiniciar la matriz de datos
            matrixData = [];

            // Iterar sobre las filas y columnas para crear las celdas de entrada
            for (var row = 1; row <= rows; row++) {
                var rowData = []; // Datos de la fila actual
                var tr = document.createElement('tr'); // Crear una nueva fila

                for (var col = 1; col <= cols; col++) {
                    var td = document.createElement('td'); // Crear una nueva celda
                    var input = document.createElement('input'); // Crear un campo de entrada
                    input.type = 'text';
                    input.id = 'cell' + row + col; // Asignar un identificador único a cada campo
                    td.appendChild(input);
                    tr.appendChild(td);
                    rowData.push(''); // Agregar un elemento vacío a los datos de la fila
                }

                tbody.appendChild(tr); // Agregar la fila al cuerpo de la tabla
                matrixData.push(rowData); // Agregar los datos de la fila a la matriz de datos
            }

            table.appendChild(tbody); // Agregar el cuerpo a la tabla
            
            // Reemplazar el contenido del contenedor de la tabla con la nueva tabla
            document.getElementById('table-container').innerHTML = '';
            document.getElementById('table-container').appendChild(table);
        }

        // Función para rellenar las celdas vacías con el carácter '#'
        function fillEmptyCells() {
            var rows = parseInt(document.getElementById('rows').value);
            var cols = parseInt(document.getElementById('cols').value);

            for (var row = 1; row <= rows; row++) {
                for (var col = 1; col <= cols; col++) {
                    var input = document.getElementById('cell' + row + col);
                    if (input.value === '') {
                        input.value = '#';
                    }
                }
            }
        }

        // Función para limpiar todas las celdas
        function clearAllCells() {
            var rows = parseInt(document.getElementById('rows').value);
            var cols = parseInt(document.getElementById('cols').value);

            for (var row = 1; row <= rows; row++) {
                for (var col = 1; col <= cols; col++) {
                    var input = document.getElementById('cell' + row + col);
                    input.value = '';
                }
            }
        }

        // Función para limpiar las celdas que contienen el carácter '#'
        function clearHashCells() {
            var rows = parseInt(document.getElementById('rows').value);
            var cols = parseInt(document.getElementById('cols').value);

            for (var row = 1; row <= rows; row++) {
                for (var col = 1; col <= cols; col++) {
                    var input = document.getElementById('cell' + row + col);
                    if (input.value === '#') {
                        input.value = '';
                    }
                }
            }
        }

        // Función para agregar valores aleatorios a las celdas vacías
        function addRandomValues() {
            var rows = parseInt(document.getElementById('rows').value);
            var cols = parseInt(document.getElementById('cols').value);

            for (var row = 1; row <= rows; row++) {
                for (var col = 1; col <= cols; col++) {
                    var input = document.getElementById('cell' + row + col);
                    if (input.value === '') {
                        var randomNumber = getRandomNumber(); // Obtener un número aleatorio
                        input.value = randomNumber;
                        matrixData[row - 1][col - 1] = randomNumber; // Actualizar los datos de la matriz
                    }
                }
            }
        }

        // Función para obtener un número aleatorio entre 10 y 99
        function getRandomNumber() {
            return Math.floor(Math.random()*100);
        }

        // Función para mostrar la matriz en el área de salida de texto
        function showMatrix() {
            var matrixText = '';
            for (var i = 0; i < matrixData.length; i++) {
                matrixText += matrixData[i].join(' ') + '\n';
            }
            document.getElementById('matrix-output').value = matrixText;
        }

        // Función para mover la fila hacia la izquierda
        function moveRowLeft() {
            var rows = matrixData.length;
            var cols = matrixData[0].length;

            for (var row = 0; row < rows; row++) {
                var temp = matrixData[row][0];
                for (var col = 0; col < cols - 1; col++) {
                    matrixData[row][col] = matrixData[row][col + 1];
                }
                matrixData[row][cols - 1] = temp;
            }

            updateTable(); // Actualizar la tabla con los nuevos valores de la matriz
        }

        // Función para mover la fila hacia la derecha
        function moveRowRight() {
            var rows = matrixData.length;
            var cols = matrixData[0].length;

            for (var row = 0; row < rows; row++) {
                var temp = matrixData[row][cols - 1];
                for (var col = cols - 1; col > 0; col--) {
                    matrixData[row][col] = matrixData[row][col - 1];
                }
                matrixData[row][0] = temp;
            }

            updateTable(); // Actualizar la tabla con los nuevos valores de la matriz
        }

        // Función para mover la columna hacia arriba
        function moveColumnUp() {
            var rows = matrixData.length;
            var cols = matrixData[0].length;

            for (var col = 0; col < cols; col++) {
                var temp = matrixData[0][col];
                for (var row = 0; row < rows - 1; row++) {
                    matrixData[row][col] = matrixData[row + 1][col];
                }
                matrixData[rows - 1][col] = temp;
            }

            updateTable(); // Actualizar la tabla con los nuevos valores de la matriz
        }

        // Función para mover la columna hacia abajo
        function moveColumnDown() {
            var rows = matrixData.length;
            var cols = matrixData[0].length;

            for (var col = 0; col < cols; col++) {
                var temp = matrixData[rows - 1][col];
                for (var row = rows - 1; row > 0; row--) {
                    matrixData[row][col] = matrixData[row - 1][col];
                }
                matrixData[0][col] = temp;
            }

            updateTable(); // Actualizar la tabla con los nuevos valores de la matriz
        }

        // Función para actualizar la tabla con los valores de la matriz
        function updateTable() {
            var rows = matrixData.length;
            var cols = matrixData[0].length;

            for (var row = 1; row <= rows; row++) {
                for (var col = 1; col <= cols; col++) {
                    var input = document.getElementById('cell' + row + col);
                    input.value = matrixData[row - 1][col - 1];
                }
            }
        }
