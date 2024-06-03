const q = [
    {
        question : "1) How many Ballond'or do Messi have?" ,
        option : ["0" , "5" , "CR7 Ballond'ors + 3" , "Leave it"],
        correct : 2 

    }
    ,
    {
        question : "2) How many UCL Trophies do Messi have" ,
        option : ["1" , "2" , "CR7 UCLs - 2" , "Don't want to answer being Messi fan"],
        correct : 2

    }
    ,
    {
        question : "3) How many FIFA World Cup/Cups do Messi have" ,
        option : ["2" , "Same as Sergio Ramos" ,"0" , "Leave it"],
        correct : 1

    },
    {
        question : "4) Messi's Current Club" ,
        option : ["Barca" , "Real Madrid" , "Inter Miami" , "Don't want to answer being a Barca Fan"],
        correct : 2

    },
    {
        question : "5) Messi Current Goals" ,
        option : ["Less than Ronaldo" , "Same as Ronaldo" , "More than Ronaldo" , "Leave it"],
        correct : 0

    },
    {
        question : "6) Total European Golden Boot Messi has won?" ,
        option : ["CR7's + 3" , "Neyamr's + 4" , "Benzema's + 5" , "Suarez's + 4"],
        correct : 3

    },
    {
        question : "7) How many World Club Championship do Messi have" ,
        option : ["3" , "1" , "0" , "2"],
        correct : 0 

    },
    {
        question : "8) How many Laliga Trophies do Messi have" ,
        option : ["10" , "0" , "20" , "1"],
        correct : 0 

    },
    {
        question : "9) How many Copa del Rey do Messi have" ,
        option : ["5" , "6" , "Thala For a Reason" , "Leave it"],
        correct : 2

    },
    {
        question : "10) Messi's entire career trophies" ,
        option : ["0" , "10" , "20" , "More than any footballer"],
        correct : 3

    }
];

const answer_ele = document.querySelectorAll(".answer");
const question_ele = document.querySelector("#question_name");
const option_1 = document.querySelector("#option1");
const option_2 = document.querySelector("#option2");
const option_3 = document.querySelector("#option3");
const option_4 = document.querySelector("#option4");
const btn_ele = document.querySelector("#btn");

let total_question = 0 ;
let score = 0 ; 

const question_load = () => {
    const {question , option} = q[total_question];
    question_ele.innerText = question ;
    option_1.innerText = option[0];
    option_2.innerText = option[1];
    option_3.innerText = option[2];
    option_4.innerText = option[3];

}

question_load();

function index_getter(){
  let selected_index = Array.from(answer_ele);
  return selected_index.findIndex((cur_ele) => cur_ele.checked);

};
const deselect = () => {
    answer_ele.forEach((cur_ele) => {
        cur_ele.checked = false;
    });
};

btn_ele.addEventListener("click" , function(){
    let selected_index = index_getter();

    if(selected_index === q[total_question].correct){
        score++ ;
    }

    total_question++ ;

    if(total_question < q.length){
        deselect();
        question_load();
    }
    else{
        if(score <= 5){
        document.querySelector("#quiz-question").innerHTML =
        `<div class = "result">
        <div>
            <h2 class = "finally">Your Score : ${score}/${q.length} </h2>
            <button id = "error" class = "reload-button" onclick = "location.reload()">Play Again</button>
            <div class = "angry"></div>
            </div>
        </div> 
        `}
        else{
            document.querySelector("#quiz-question").innerHTML =
        `<div class = "result">
        <div>
            <h2 class = "finally">Your Score : ${score}/${q.length} </h2>
            <button id ="error" class = "reload-button" onclick = "location.reload()">Play Again</button>
            <div class = "happy"></div>
            </div>
        </div> `
        }
        ;
    }
});