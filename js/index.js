const validar=document.querySelector("#error");
const fallo=document.querySelector("#text");

validar.addEventListener("click",()=>{
    fallo.style.display="block";
    setTimeout(() => {
        fallo.style.display="none";
    }, 2000);
})

