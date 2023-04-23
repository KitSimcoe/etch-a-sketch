let numberOfSquares = 16
console.log(numberOfSquares)

document.querySelector('#submit').onclick = function() {
  let numberOfSquares = document.querySelector('#numberOfSquares').value;
  console.log(numberOfSquares);
}






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
    column.appendChild(square);
}
}

let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener("mouseover", (e) => {
            square.classList.add('mouseOver');
        });
    });

document.querySelector('#reset').onclick = function() {
  for (let square of squares) {
    square.classList.remove('mouseOver')
  }
}
      

// for (const column in columns) {
//     columns.appendChild(square)
// }







