// document.querySelector("select[name='estado']")
// .addEventListener('change', function(){
//     alert('Mudou o alert')
// });


document.querySelector("select[name='estado']")
.addEventListener('change', function(event){
    console.log(event.target.value);    
})

