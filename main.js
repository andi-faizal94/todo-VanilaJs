const output = document.getElementById('output');

function add() {

    // cara pertama:

    // 1.mengamnbil value dari input
    // const input = document.getElementById('input-value');
    // console.log(input.value)

    // 2.menambahkan list baru kedalam ul 
    // const li = document.createElement('li');
    // const hasil = document.createTextNode(input.value);
    // 3.menggabungkan text kedalam li
    // li.appendChild(hasil);
    // 4.menggabungkan li kedalam output secara dinamis
    // output.appendChild(li);

    // cara yang kedua :

    let input = document.getElementById('input-value');

    let baru = "<li> <span onclick='toggle(this)'>" + input.value + "</span>" + "<span onclick='removeItems(this)'> [X] </span>" + "</li>";

    output.insertAdjacentHTML('afterbegin', baru);

    input.value = "";


};

function toggle(el) {
    el.classList.toggle('done');

};

function removeItems(el) {
    el.parentElement.remove();

}