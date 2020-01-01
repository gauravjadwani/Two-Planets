export default class Falicornia{
    constructor(armyString){
        // this.totalArmy=makeBattalion(armyString)
        const cat=armyString.trim().split(',');
        this.totalArmy={};
        for(let i=0;i<cat.length;i++){
            const secondaryCat=cat[i].trimStart().split(' ');
            this.totalArmy[secondaryCat[1]]=parseInt(secondaryCat[0]);
        }
    }
    getArmy(){
        return this.totalArmy;
    }
}