var output = 0;

function shedOutput (fn){
    sheds =[1, 2, 3, 4]
    litres =[510, 308, 486, 572]
    
    for ( let i = 0; i < sheds.length; i++){
        let parentUl = document.getElementById("sheds")
        let list = document.createElement("li");
        list.innerHTML = "your production in shed number" + " " + sheds[i] + " " + "is" + " " +
        litres[i] + " " + "per day";
        parentUl.appendChild(list);
        
        output += litres[i] 
    }
    return(output);
}

function overTime () {

    var weekly = output * 7 * 45;
    var yearly = output * 365 * 45;
 
    for ( let i = 0; i < litres.length; i ++){
        let parentUl = document.getElementById("litres")
        let list = document.createElement("li");
        list.innerHTML = "your weekly income will be" + " " + "output" + " " + "weekly";
        list.innerHTML = "your yearly income will be" + " " + "output" + " " + "monthly";
        parentUl.appendChild(list);
}



}