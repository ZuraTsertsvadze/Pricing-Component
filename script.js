const zaza = document.querySelector('.body-h1')
const but = document.querySelector(".arrow-circle")
const line = document.querySelector(".circle-line")
const viewers= document.querySelector(".viewers")
const money=document.querySelector(".money")
const switcher=document.querySelector(".switcher")
const circle=document.querySelector(".circle")


let status = false




const view=(x)=>{


if(x<=0 && x<2*60){


 viewers.innerHTML="10K PAGEVIEWS";


}else if(x>0 && x<=(60*2)){

    viewers.innerHTML="50K PAGEVIEWS";


} 

if(x>(60*2) && x<(60*3)){

    viewers.innerHTML=`100K PAGEVIEWS`;


}

if(x>(60*3)){

    viewers.innerHTML=`500K PAGEVIEWS`;


} 

if(x>(60*4)){

    viewers.innerHTML=`1M PAGEVIEWS`;

}

};



switcher.addEventListener("click",()=>{

    switcher.classList.toggle("switcher-active")
    switcher.classList.toggle("switcher")

    priceSwitch();

})





const priceSwitch=function (){

    if(switcher.classList.contains("switcher-active")){

    if( viewers.innerHTML==="10K PAGEVIEWS"){

        money.innerHTML="$6.00"
        

    };
    
 if(viewers.innerHTML==="50K PAGEVIEWS"){


    money.innerHTML="$9.00"

 };

 if(viewers.innerHTML==="100K PAGEVIEWS"){


    money.innerHTML="$12.00"

 };

 if( viewers.innerHTML==="500K PAGEVIEWS"){


    money.innerHTML="$18.00"

 };

 if( viewers.innerHTML==="1M PAGEVIEWS"){


    money.innerHTML="$27.00"

 };




}else{
    
if( viewers.innerHTML==="10K PAGEVIEWS"){


        money.innerHTML="$8.00";

    };
    
 if(viewers.innerHTML==="50K PAGEVIEWS"){


    money.innerHTML="$12.00"

 };

 if(viewers.innerHTML==="100K PAGEVIEWS"){


    money.innerHTML="$16.00"

 };

 if( viewers.innerHTML==="500K PAGEVIEWS"){


    money.innerHTML="$24.00"

 };

 if( viewers.innerHTML==="1M PAGEVIEWS"){


    money.innerHTML="$36.00"

 };




}

}














const move = (e)=>{
    
    if(!status){
    return
    };
       
    e.preventDefault();



const rect = line.getBoundingClientRect();

 
const x = Math.min(Math.max(0,e.pageX - rect.left),rect.width)-20;



but.style.position = `absolute`;

but.style.left = `${x}px`;

but.style.backgroundColor ="rgb(36, 174, 161)";

line.style.background=`linear-gradient(90deg,  rgba(164, 243, 235, 1) ${x}px, rgb(236, 240, 251) ${x}px)`;
 


view(x);
priceSwitch();
console.log(switcher.classList.contains("swicher-active") )

}

line.addEventListener("mousedown",(e)=>{
    if(e.button!==0){
        return
    }
    status=true
 
    
    move(e)


})

window.addEventListener("mousemove",move)

window.addEventListener("mouseup", (e) => {
    status=false;

    but.style.backgroundColor ="#10D8C4";
}) 




