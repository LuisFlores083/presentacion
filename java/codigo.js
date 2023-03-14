function Abrir(){
    document.getElementById('windowform').style.display = "flex";
}

function CerrarButton(){
    let inNombre = document.getElementById('inputNombre').value;
    let inPuesto = document.getElementById('inputPuesto').value;
    document.getElementById('txtNombre').innerText = inNombre;
    document.getElementById('txtPuesto').innerText = inPuesto;
    document.getElementById('windowform').style.display = "none";

}
