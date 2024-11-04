let userScore=0;
let compScore=0;
let userscorepara =document.querySelector("#user-score");
let compscorepara =document.querySelector("#comp-score");
let resetbtn=document.querySelector("#reset");

const choices=document.querySelectorAll(".choice");

const compchoice=()=>{
    const options=["rock","paper","scissors"];
    const random= Math.floor(Math.random()*3);
    return options[random];
};
const playgame=(Userchoice)=>{

    console.log("user choice is: ",Userchoice);
    const Compchoice=compchoice();
    console.log("comp choice is: ",Compchoice);

    if(Userchoice===Compchoice){
        
        msg.innerText="YOU DRAW";
        msg.style.backgroundColor='pink';
    }
    else{
        let userWin=true;
        if(Userchoice==="rock"){
           userWin= Compchoice==="paper"?false:true;
        } else if(Userchoice==="paper"){
            userWin=Compchoice==="scissors"?false:true;
        } else if(Userchoice==="scissors"){
            userWin=Compchoice==="rock"?false:true;
        }
        showwinner(userWin);
    }
    console.log(choices)
};
 const showwinner=(userWin)=>{
    if(userWin){
        userScore++;
        userscorepara.innerText=userScore;
        
        msg.innerText="YOU WIN";
        msg.style.backgroundColor='green';
    }
    else{
        compScore++;
        compscorepara.innerText=compScore;
        msg.innerText="YOU LOSE";
        msg.style.backgroundColor='red';
    }
 };

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const Userchoice=choice.getAttribute("id");
        playgame(Userchoice);
    });
});
const reset =()=>{
    userscorepara.innerText=0;
    compscorepara.innerText=0;
};
resetbtn.addEventListener("click",reset);
