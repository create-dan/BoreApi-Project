

const activity = document.getElementById('activity');
const btn = document.getElementById('btn');
const imgRandom = document.querySelector("imgRandom");



const getNewContent = async  () =>{


    try{
       
        const res = await fetch('https://www.boredapi.com/api/activity');
        const finalRes = await res.json();

        activity.innerHTML = finalRes.activity;
    }
    catch(e){
        console.log(e);
    }


}







btn.addEventListener('click' , getNewContent);

getNewContent();

