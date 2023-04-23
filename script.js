let numberOfSquares = 16
console.log(numberOfSquares)

document.querySelector('#submit').onclick = function() {
  let numberOfSquares = document.querySelector('#numberOfSquares').value;
  console.log(numberOfSquares);
}




function addSquares
for (i = 1; i <= numberOfSquares; i++) {
    const container = document.querySelector('#container');
    let newColumn = document.createElement('div');
    newColumn.classList.add('column');
    container.appendChild(newColumn);
}



for (i = 1; i <= numberOfSquares; i++) {
const columns = document.querySelectorAll('.column');
for (let column of columns) {
    let square = document.createElement('div');
    square.classList.add('square');
    column.appendChild(square)
}
}


  

// for (const column in columns) {
//     columns.appendChild(square)
// }







