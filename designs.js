// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const form = document.querySelector('#sizePicker');
const table = document.querySelector('#pixelCanvas');


// Event listener for when Submit is clicked
form.addEventListener('submit', function makeGrid() {

        console.log('Submitted test'); // Testing the listener
        event.preventDefault();
        const height = document.querySelector('#inputHeight').value;
        const width = document.querySelector('#inputWidth').value;


        // This clears the table grids when form is submitted
        table.innerHTML = '';
        // loops around elements and created table cells
        for (var r = 0; r < height; r++){
          const row = document.createElement('tr');
          table.appendChild(row);
          for (var c = 0; c < width; c++){
            const cell = document.createElement('td');

            row.appendChild(cell);

          }
        }
       // this will change the color of grid cell when clicked
        table.addEventListener('click',e => {
          if (e.target.matches('td')){
            const color = document.querySelector('#colorPicker').value;
            e.target.style.backgroundColor = color;

          }

        });

        // this will erase a grid when double clicking it
        table.addEventListener('dblclick',e => {
          if (e.target.matches('td')){

            e.target.style.backgroundColor = 'white';

          }

        });


});
