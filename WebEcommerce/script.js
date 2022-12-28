const bar = document.getElementById('bar')
const close = document.getElementById('close')
const nav = document.getElementById('navbar')
let popup =document.getElementById("popup");

if (bar) {
    bar.addEventListener('click',()=>{
        nav.classList.add('active')
    })
}

if (close) {
    close.addEventListener('click',()=>{
        nav.classList.remove('active')
    })
}

    function openPopup(){
      popup.classList.add("open-popup")
    }
    function closePopup(){
      popup.classList.remove("open-popup")
    }
/*document.getElementById('btn')
.addEventListener('click',function(){
    alert("Thank YOU! Your form successfully submitted");
})*/

