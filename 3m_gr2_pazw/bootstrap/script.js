
function pokaz(range){
    rangeValue = range.value;
    document.querySelector(".showRange").innerHTML = rangeValue;

}

function wypisz() {

    if(document.querySelector('#imie').value == null || document.querySelector('#nazwisko').value == null || document.querySelector('input[name="plec"]:checked').value == null || document.querySelector('#age').value == null || document.querySelector('#staz').value == null || document.querySelector('#email').value == null){
        document.querySelector('.imie').innerHTML = "BŁĄD! Źle podane dane!";
        return;
    }
    
    let imie = document.querySelector('#imie').value;
    let nazwisko = document.querySelector('#nazwisko').value;
    let plec = document.querySelector('input[name="plec"]:checked').value;
    let wiek = document.querySelector('#age').value;
    let staz = document.querySelector('#staz').value;
    let email = document.querySelector('#email').value;
    
    

    document.querySelector('.imie').innerHTML = imie;
    document.querySelector('.nazwisko').innerHTML = nazwisko;
    document.querySelector('.email').innerHTML = email;
    document.querySelector('.plec').innerHTML = plec;
    document.querySelector('.wiek').innerHTML = wiek;
    document.querySelector('.staz').innerHTML = staz;
}