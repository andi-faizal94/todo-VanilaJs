const output = document.getElementById('output');

function add() {

    // mengamnbil value dari input
    const input = document.getElementById('input-value');
    console.log(input.value)

    // menambahkan list baru kedalam ul 
    const li = document.createElement('li');
    const hasil = document.createTextNode(input.value);

    li.appendChild(hasil);
    output.appendChild(li);
}