let userScore=0;
let compScore=0;
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const choices=document.querySelectorAll(".choice");
// console.log(choices);

const msg=document.querySelector("#msg");
const showWinner=(userWin,userChoice,compChoice)=>
{
  
  if(userWin)
  {
userScore++;
userScorePara.innerText=userScore;
    // console.log("you win");
    msg.innerText=`You win, ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
  }
  else{
    compScore++;
compScorePara.innerText=compScore;
    // console.log("you lose");
    msg.innerText=`You lose, ${compChoice} beats ${userChoice}`;;
    msg.style.backgroundColor="red";
  }
}
const playGame=(userChoice)=>
{
  //  console.log("userChoice=",userChoice);
  //generate computer choice
  const compChoice=genCompChoice();
  // console.log("comp choice=",compChoice);

  if(userChoice===compChoice)
  //draw game
  {
drawGame();
  }
  else{
    let userWin=true;
    if(userChoice==="rock")
    {
      userWin=compChoice==="paper"?false:true;
    }
    else if(userChoice==="paper")
    {
      userWin=compChoice==="scissor"?false:true;
    }
    else{
      userWin=compChoice==="rock"?false:true;
    }
  
showWinner(userWin,userChoice,compChoice);
}};
const genCompChoice=()=>
{
  const options=["rock","paper","scissors"];
  const randomIdx=Math.floor(Math.random()*3);
  // console.log(randomIdx);
  return options[randomIdx];
}
const drawGame=()=>
{
  // console.log("game  was draw");
  msg.innerText="Game was draw.Play Again.";
}




choices.forEach((choice)=>
{
      // console.log(choice);
      choice.addEventListener("click",()=>
    {

      const userChoice=choice.getAttribute("id");
      // console.log("choice was clicked",userChoice);
    
    playGame(userChoice);
    })
  })

