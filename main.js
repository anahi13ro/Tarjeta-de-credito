let nombreImg = document.getElementById('nombre');
let numImg = document.getElementById('numTarj');
let vencImg = document.getElementById('venc');
let cvcImg = document.getElementById('cvcNum');

let nombreForm = document.getElementById('name');
let numForm = document.getElementById('cardNumber');
let mesForm = document.getElementById('month');
let yearForm = document.getElementById('year');
let cvcForm = document.getElementById('cvc');
let form = document.querySelector('#form');
let bloqueForm = document.querySelector('#bloqueForm');
let botonSubmit = document.getElementById('btnSubmit');
let muestraFinal = document.querySelector('#muestra-final');
let botonContinue = document.getElementById('continuee');

// Funciones para hacer los cambios en las imagenes!

form.addEventListener('input', (event)=> {
   
  var cleave = new Cleave('#cardNumber', {
    creditCard: true,
  });
  
  changeName();
    changeNumb();
    changeCvc();
    changeDate();
  

});

function changeNumb(){
   if (numForm.value.length === 0){
    numImg.textContent = "0000 0000 0000 0000"
   } else{
    numImg.textContent =  numForm.value;
}
}

function changeName(){
    if (nombreForm.value.length === 0){
        nombreImg.textContent = "JANE APPLESEED"
       } else{
    nombreImg.textContent = nombreForm.value.toUpperCase() ;
       }
}

function changeCvc(){
   if (cvcForm.value.length === 0){
    cvcImg.textContent = "000"
   }else {
    cvcImg.textContent = cvcForm.value;
   }
}

function changeDate() {
    let htmlMonth = "";
    let htmlYear = "";

   if(mesForm.value.length === 0) {
    htmlMonth = "00";
   } else {
    htmlMonth = mesForm.value;
   }
   if(yearForm.value.length === 0) {
    htmlYear = "00";
   } else {
    htmlYear = yearForm.value;
   }

    vencImg.textContent = htmlMonth + "/" + htmlYear;
}


botonContinue.addEventListener("click", (e) => {
  e.preventDefault();
  bloqueForm.classList.remove("disabled");
  muestraFinal.classList.add("disabled");
  form.reset();
})

// botonSubmit.addEventListener("click", (e) => {
//   e.preventDefault();
//   bloqueForm.classList.add("disabled");
//   muestraFinal.classList.remove("disabled");
// })



  
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
        bloqueForm.classList.add("disabled");
        muestraFinal.classList.remove("disabled");
      }
      
      form.classList.add('was-validated')
      
    }, false)
 