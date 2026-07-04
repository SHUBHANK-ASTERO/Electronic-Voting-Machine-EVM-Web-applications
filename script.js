const candidates = [
"SHRESTH GUPTA",
"SHOURYA RASTOGI",
"SHAILESH PRAJAPATI",
"DIVYAM RASTOGI",
"AKHIL SONALKI"
];

let votes = [0,0,0,0,0];
let selectedCandidate = null;

function selectCandidate(index){

document.querySelectorAll(".candidate")
.forEach(item=>item.classList.remove("selected"));

document.querySelectorAll(".candidate")[index]
.classList.add("selected");

selectedCandidate=index;

document.getElementById("voteBtn").disabled=false;

}

function vote(){

const name=document.getElementById("name").value.trim();

const age=parseInt(
document.getElementById("age").value
);

if(name===""){
alert("Please enter your name");
return;
}

if(isNaN(age)){
alert("Please enter your age");
return;
}

if(age<18){
alert("Oops! Sorry "+name+
". You are not eligible for voting.");
return;
}

if(selectedCandidate===null){
alert("Please select a candidate");
return;
}

votes[selectedCandidate]++;

alert("Thank You "+name+
"! Your vote has been recorded.");

document.getElementById("name").value="";
document.getElementById("age").value="";

document.querySelectorAll(".candidate")
.forEach(item=>item.classList.remove("selected"));

selectedCandidate=null;

document.getElementById("voteBtn").disabled=true;

}

function countVotes(){

let total=votes.reduce((a,b)=>a+b,0);

let output="";

let maxVotes=Math.max(...votes);

let winnerIndex=votes.indexOf(maxVotes);

if(total>0){
document.getElementById("winner").innerHTML=
"🏆 Winner: "+candidates[winnerIndex];
}

for(let i=0;i<candidates.length;i++){

let percentage=0;

if(total>0){
percentage=((votes[i]/total)*100).toFixed(1);
}

output+=`
<div class="result-card">
<b>${candidates[i]}</b><br>
Votes: ${votes[i]} (${percentage}%)
<div class="bar" style="width:${percentage}%"></div>
</div>
`;
}

document.getElementById("resultArea").innerHTML=output;

}

function resetVotes(){

if(confirm("Reset all votes?")){

votes=[0,0,0,0,0];

document.getElementById("resultArea").innerHTML="";

document.getElementById("winner").innerHTML="";

alert("Election Reset Successfully");

}

}