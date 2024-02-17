

function housekeeper (name, yearsOfExperience, cleaningRepertoire){
    this.name = name
    this.yearsOfExperience = yearsOfExperience
    this.cleaningRepertoire = cleaningRepertoire
    this.clean = function(){
        console.log("cleaning in progress")
    }
}

var housekeeper1 = new housekeeper("jane",8,["lobby", "bedroom"]);

//console.log(housekeeper1);
housekeeper1.clean();