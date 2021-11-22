// 1
let clique = document.querySelector("h1");
clique.addEventListener("dblclick", ()=>{
    document.body.style.background="red";
    clique.style.color="white";
})

// 2

let h3 = document.querySelector("h3");
h3.addEventListener("mouseover",()=>{
    diminue = window.getComputedStyle(h3, null).getPropertyValue('font-size');
    tailleActuel = parseFloat(diminue);
    h3.style.fontSize= (tailleActuel-1) + "px";
})

// 3
let p = document.querySelector("p");
p.addEventListener("click",()=>{
   
    if (p.style.backgroundColor=="blue"&&p.style.color=="gold") {
    p.style.backgroundColor="white";
    p.style.color="black";
    }else {
        p.style.backgroundColor="blue";
        p.style.color="gold";
    }
})