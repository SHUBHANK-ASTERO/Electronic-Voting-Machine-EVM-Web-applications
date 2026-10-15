
// // Vote Count Object
// let votes = {
//     Lotus: 0,
//     Hand: 0,
//     Bicycle: 0,
//     Bow: 0,
//     Tree: 0,
//     Star: 0
// };

// // Load Previous Votes
// if(localStorage.getItem("votes")){
//     votes = JSON.parse(localStorage.getItem("votes"));
// }

// updateTable();


// // ================= CAST VOTE =================

// function castVote(){

//     let name = document.getElementById("name").value.trim();

//     let age = Number(document.getElementById("age").value);

//     let candidate = document.querySelector('input[name="candidate"]:checked');

//     let message = document.getElementById("message");

//     if(name===""){

//         message.style.color="yellow";
//         message.innerHTML="⚠ Please enter your name.";
//         return;

//     }

//     if(age < 18){

//         message.style.color="red";
//         message.innerHTML="❌ Sorry! Only 18+ citizens can vote.";
//         return;

//     }

//     if(candidate==null){

//         message.style.color="orange";
//         message.innerHTML="⚠ Please select a candidate.";
//         return;

//     }

//     votes[candidate.value]++;

//     localStorage.setItem("votes",JSON.stringify(votes));

//     updateTable();

//     message.style.color="lightgreen";
//     message.innerHTML="✅ Vote Cast Successfully!";

//     document.getElementById("name").value="";
//     document.getElementById("age").value="";

//     candidate.checked=false;

// }



// // ================= UPDATE TABLE =================

// function updateTable(){

//     document.getElementById("lotus").innerHTML=votes.Lotus;

//     document.getElementById("hand").innerHTML=votes.Hand;

//     document.getElementById("bicycle").innerHTML=votes.Bicycle;

//     document.getElementById("bow").innerHTML=votes.Bow;

//     document.getElementById("tree").innerHTML=votes.Tree;

//     document.getElementById("star").innerHTML=votes.Star;

//     let total =
//     votes.Lotus+
//     votes.Hand+
//     votes.Bicycle+
//     votes.Bow+
//     votes.Tree+
//     votes.Star;

//     document.getElementById("totalVotes").innerHTML=total;

// }



// // ================= SHOW WINNER =================

// function showWinner(){

//     let winner="";

//     let max=-1;

//     for(let key in votes){

//         if(votes[key]>max){

//             max=votes[key];

//             winner=key;

//         }

//     }

//     if(max===0){

//         document.getElementById("winnerText").innerHTML="No Votes Cast Yet";

//         return;

//     }

//     document.getElementById("winnerText").innerHTML=
//     "🏆 Winner : "+winner+" ("+max+" Votes)";

// }



// ================= RESET =================

function resetElection(){

    let ok = confirm("Reset all votes?");

    if(!ok){

        return;

    }

    votes={

        Lotus:0,

        Hand:0,

        Bicycle:0,

        Bow:0,

        Tree:0,

        Star:0

    };

    localStorage.removeItem("votes");

    updateTable();

    document.getElementById("winnerText").innerHTML="";

    document.getElementById("message").innerHTML="Election Reset Successfully";

}
function toggleResult() {

    let panel = document.getElementById("resultPanel");

    if (panel.style.display === "none") {
        panel.style.display = "block";
    } else {
        panel.style.display = "none";
    }
}

// ENTER KEY

document.addEventListener("keypress",function(e){

    if(e.key==="Enter"){

        castVote();

    }

});