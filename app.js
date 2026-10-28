let user = 0;
let comp = 0;
const choices = document.querySelectorAll(".choise");
const msg = document.querySelector("#msg");
const scorecard = document.querySelector(".score");
const userscore = document.querySelector("#user");
const compscore = document.querySelector("#comp");

const compchoice = ()=>{
  const options = ["rock","paper","scissor"];
  const randomindx= Math.floor(Math.random()*3);
  return options[randomindx];
}

const drawgame = (userchoice, computerch)=>{
  if (userchoice===computerch){
    console.log("game was drawn");
    msg.innerHTML="Game Draw!";
    msg.style.backgroundColor = "#6200EA";
  }
}

const showwinner = (userwin)=>{
  if (userwin){
    console.log("userwin");
    user +=1;
    userscore.innerText = user;
    msg.innerHTML = "Congratualations! You Won";
    msg.style.backgroundColor = "#4CAF50";
  }else{
    console.log("user lose");
    comp +=1;
    compscore.innerText = comp;
    msg.innerHTML = "Offo You Lose! Play Again";
    msg.style.backgroundColor = "#F44336";
  }
}

const playgame = (userchoice)=>{
  console.log("user choice",userchoice);
  const computerch = compchoice();
  console.log("comp choice",computerch);
  if (userchoice===computerch){
    drawgame(userchoice, computerch);
  }else{
    let userwin = true;
    if (userchoice==="rock"){
      userwin = computerch==="paper" ? false:true;

    }else if(userchoice==="paper"){
      userwin = computerch==="scissor"?false:true;
    }else{
      userwin = computerch==="rock"?false:true;
    }
    showwinner(userwin);
  }
}
choices.forEach((choise)=>{
  choise.addEventListener("click",()=>{
    const userchoice = choise.getAttribute("id");
    playgame(userchoice);

  })
})