let numberOfSquares = 16;


console.log(numberOfSquares);
addSquares(numberOfSquares);


addHoverEffect();


document.querySelector('#submit').onclick = function() {
  let numberOfColumns = document.querySelectorAll('.column')
  for (i of numberOfColumns) {
  i.remove()
  }
  if (document.querySelector('#numberOfSquares').value >= 100) {
    let numberOfSquares = 100
    addSquares(numberOfSquares)
    addHoverEffect();
  } else { 
      let numberOfSquares = document.querySelector('#numberOfSquares').value;
      addSquares(numberOfSquares);
      addHoverEffect();
  }}



function addSquares (numberOfSquares) {
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
}




function addHoverEffect () {
  let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
      square.addEventListener("mouseover", (e) => {
        square.classList.add('mouseOver');
        });
      });
}

 
document.querySelector('#reset').onclick = function() {
  let squares = document.querySelectorAll('.square');
  for (let square of squares) {
    square.classList.remove('mouseOver');
  }
}







