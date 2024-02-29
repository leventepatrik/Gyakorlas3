/*fogjuk meg az azon elemet*/
const azonELEM=document.getElementById("azon")
const azonELEM2=document.querySelector("#azon")
console.log(typeof azonELEM);
console.log(azonELEM)
console.log(azonELEM2)


azonELEM.innerHTML="Alakul a JS!"

const kartyaELEM=document.getElementsByClassName("kartya")
console.log(kartyaELEM)
kartyaELEM[1].innerHTML="Beleírtunk a második kártyába!"

const kartyaELEM2=document.querySelector(".kartya")
console.log(kartyaELEM2)

const kartyaELEM3=document.querySelectorAll(".kartya")
console.log(kartyaELEM3)



kartyaELEM3[3].innerHTML+="Isti_k a királyunk"



const buttonELEM=document.querySelectorAll("button")[0]
console.log(buttonELEM)



buttonELEM.addEventListener("click",gombraKattint)

function gombraKattint(){
   // alert("Hurrá, rákattintottál a gombra")
    kartyaELEM3[0].innerHTML+=kartyaELEM3[3].innerHTML;

}