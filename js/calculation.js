document.getElementById('btn-calculate').addEventListener('click', function (){
    const PerPlayerCost = getInputFieldValueById('per-player-cost');
    const totalPlayerCost = PlayercartArray.length * PerPlayerCost;
    setTextElementValueById('player-price',totalPlayerCost);
})

document.getElementById('btn-total').addEventListener('click',function(){
    const managerPrice = getInputFieldValueById('manager-price');
    const coachPrice = getInputFieldValueById('coach-price');
    const PerPlayerCost = getInputFieldValueById('per-player-cost');
    const totalPlayerCost = PlayercartArray.length * PerPlayerCost;
    const totalPrice =totalPlayerCost + managerPrice + coachPrice;
    setTextElementValueById('total-output',totalPrice);
})