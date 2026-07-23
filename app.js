let userScore=0;
let compScore=0;

let choices=document.querySelectorAll(".choice");

choices.forEach(choice => {//user choice
    // console.log(choice);
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("Id")
       playGame(userChoice);
    })
    });

const genCompChoice=()=>{//comp choice
    let choice=["rock","paper","scissors"];
    let genIdx=Math.floor(Math.random()*3);//num betn 0,1,2 without decimal
   return choice[genIdx];
}


    

const playGame=(userChoice)=>{
    
    console.log("User choice is =",userChoice);
    const compChoice=genCompChoice();
console.log("computer choice is =",compChoice);

let message=document.querySelector(".msg");
let uScore=document.querySelector(".user_score");
let cScore=document.querySelector(".comp_score");






if(userChoice==compChoice){    
message.innerText="Match draw 🤝";
message.style.backgroundColor="#78A4CB";
}


//user selects rock
else if(userChoice=="rock" && compChoice=="scissors"){
message.innerText="You won 🎉.Your Rock beats scissors";
message.style.backgroundColor="#73976A";
userScore++;
uScore.innerText=userScore;
}
else if(userChoice=="rock" && compChoice=="paper"){
message.innerText="You lost 😔.Paper beats your Rock.";
message.style.backgroundColor="#BD4444";
compScore++;
cScore.innerText=compScore;
}




//user selects paper
else if(userChoice=="paper" && compChoice=="scissors"){
message.innerText="You lost 😔.Scissors beats your Paper.";
message.style.backgroundColor="#BD4444";
compScore++;
cScore.innerText=compScore;
}
else if(userChoice=="paper" && compChoice=="rock"){
message.innerText="You won 🎉.Your Paper beats Rock";
message.style.backgroundColor="#73976A";
userScore++;
uScore.innerText=userScore;
}





//user selects scissors
else if(userChoice=="scissors" && compChoice=="paper"){
message.innerText="You won 🎉.Your Scissors beats Paper";
message.style.backgroundColor="#73976A";
userScore++;
uScore.innerText=userScore;
}
else if(userChoice=="scissors" && compChoice=="rock"){
 message.innerText="You lost 😔.Rock beats your Scissors.";
 message.style.backgroundColor="#BD4444";
compScore++;
cScore.innerText=compScore;
};




}
;



