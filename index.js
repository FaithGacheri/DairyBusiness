var output = 0;

function shedOutput (fn){
    sheds =[1, 2, 3, 4]
    litres =[510, 308, 486, 572]
    
    for ( let i = 0; i < sheds.length; i++){
        let parentUl = document.getElementById("sheds")
        let list = document.createElement("li")
        list.innerHTML = "your production in shed number" + " " + sheds[i] + " " + "is" + " " +
        litres[i] + " " + "per day";
        parentUl.appendChild(list);
        let totalparagraph = document.getElementById("totalproduction")
        
        output += litres[i] 
    }
    return(output);
}

function overTime () {
  
    weekly = output * 7 * 45;
    yearly = output * 365 * 45;
    let weeklyparagraph = document.getElementById("weeklyincome") 
    weeklyparagraph.innerHTML = "your weekly income is" + " " + weekly
    let yearlyparagraph = document.getElementById("yearlyincome")
    yearlyparagraph.innerHTML = "your yearly income is" + " " + yearly
    
}




function monthlyIncome () {
  days =[31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    for ( let i = 0; i < days.length; i++){
        let parentUl = document.getElementById("monthly")
        let list = document.createElement("li");
        month = i + 1;

        monthlytotal = days[i] * output * 45
        list.innerHTML = "your income for month " + " " + month  + " " + "is" + " " + monthlytotal
        parentUl.appendChild(list);

} 
}