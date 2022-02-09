function calcPrice(){
    var numHours = document.getElementById('hours');
    var dayOfWeek = document.getElementById('date').getDate();
    console.log(numHours, dayOfWeek);
}

export default calcPrice;