// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const form = document.querySelector('#sizePicker');
const table = document.querySelector('#pixelCanvas');



form.addEventListener('submit', function makeGrid() {

        console.log('Submitted test');
        event.preventDefault();
        const height = document.querySelector('#inputHeight').value;
        const width = document.querySelector('#inputWidth').value;
        const color = document.querySelector('#colorPicker').value;


        table.innerHTML = '';

        for (var r = 0; r < height; r++){
          const row = document.createElement('tr');
          table.appendChild(row);
          for (var c = 0; c < width; c++){
            const cell = document.createElement('td');

            row.appendChild(cell);

          }
        }

        table.addEventListener('click',e => {
          if (e.target.matches('td')){
            const color = document.querySelector('#colorPicker').value;
            e.target.style.backgroundColor = color;

          }

        });


});
