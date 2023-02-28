document.getElementById('btn-ilkay').addEventListener('click',function(){
    document.getElementById('btn-ilkay').disabled = true;
});
document.getElementById('btn-jamal').addEventListener('click',function(){
    document.getElementById('btn-jamal').disabled = true;
});
document.getElementById('btn-messi').addEventListener('click',function(){
    document.getElementById('btn-messi').disabled = true;
});
document.getElementById('btn-neymar').addEventListener('click',function(){
    document.getElementById('btn-neymar').disabled = true;
});
document.getElementById('btn-ronaldo').addEventListener('click',function(){
    document.getElementById('btn-ronaldo').disabled = true;
});
document.getElementById('btn-rudiger').addEventListener('click',function(){
    document.getElementById('btn-rudiger').disabled = true;
});

const PlayercartArray =[];

function display(playercart){
const tableBody=document.getElementById('player-selection');
tableBody.innerHTML ='';
 for(let i = 0; i < 5; i++){
    const name = playercart[i]. playerName;
    const tr =document.createElement('tr');
    tr.innerHTML = `
              <td>${i+1}. </td>
            <td>${name}</td>
        ` 
        tableBody.appendChild(tr);
    }
}

function addToCart(element){
const playerName = element.parentNode.parentNode.children[1].innerText;
const playerobj ={
        playerName: playerName,
    }
if (PlayercartArray.length>4){
        alert("You Can't Select More Than Five Players");
        return;
    } 
else{
        PlayercartArray.push(playerobj);
    }
    display(PlayercartArray);
}