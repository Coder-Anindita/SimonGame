let userseq=[];
let gameseq=[];

let highest=0;




//-----------------------------------------------------------------------
//START THE GAME
let levels=0;
let started=false;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        
        started=true;
        levelup();
    }

})
//-----------------------------------------------------------------------



//-------------------------------------------------------------------------------
let btnset=["red","yellow","blue","green"];
//FUNCTION TO FLASH ANY BUTTON
function flash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);

}
//-----------------------------------------------------------------------


//-------------------------------------------------------------------------
//FUNCTION USED BY GAME TO FLASH RANDOM BUTTONS
function levelup(){
    userseq=[];
    levels++;
    h2.innerText=`Level ${levels}`;
    let randidx=Math.floor(Math.random()*4);
    let randcolor=btnset[randidx];
    let btn=document.querySelector(`#${randcolor}`);
    flash(btn);

    gameseq.push(randcolor);
}
//-----------------------------------------------------------------------------

function checkAns(idx){
    
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }

    }
    else{
        if(highest<levels){
            highest=levels;
        }
        h2.innerHTML=`Game is over, your score is <b>${levels}</b> <br> Press any key to start.<br>Highest score is ${highest}`;
        
        let body=document.querySelector("body");
        body.classList.add("redbg");
        setTimeout(function(){
            body.classList.remove("redbg");
        },200);

        

        reset();
        
    }
}

//---------------------------------------------------------------------------
//FUNCTION USED WHEN USER CLICK A BUTTON
function btnpress(){
    let btn=this;
    flash(btn);
    let userColor=btn.getAttribute("id");
    userseq.push(userColor);
    checkAns(userseq.length-1)
    

}

let btns=document.querySelectorAll(".btn");
for(b of btns){
    b.addEventListener("click",btnpress)
}
//------------------------------------------------------------------------------------

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    levels=0;
}


