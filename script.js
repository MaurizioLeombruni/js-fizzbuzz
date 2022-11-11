let squareContainer = document.querySelector(".square-container");

for(let i=0; i<=100; i++){

//Controlliamo che il numero sia divisibile per 5. Se lo è, si controlla se è anche divisibile per 3, scrivendo FizzBuzz nel caso, scrivendo Buzz altrimenti.
//Se il numero non è divisibile per 5, controlliamo se sia almeno divisibile per 3. Se lo è, scriviamo Fizz, altrimenti scriviamo semplicemente il numero.

    if(i%5===0){

        if(i%3===0){
            squareContainer.innerHTML += '<div class="square-both"><p> ' + i + '<br>FizzBuzz</p></div>';
        } else {
            squareContainer.innerHTML += '<div class="square-buzz"><p> ' + i + '<br>Buzz</p></div>';
        }

    } else if(i%3===0){
        squareContainer.innerHTML += '<div class="square-fizz"><p> ' + i + '<br>Fizz</p></div>'
    } else {
        squareContainer.innerHTML += '<div class="square-regular"><p> ' + i + '</p></div>';
    }

}