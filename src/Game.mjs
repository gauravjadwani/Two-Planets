import BattleResource from './BattleResource.mjs';
import Falicornia from './Falicornia.mjs';

class Game{
    constructor(FArmy){
        this.BattleResourceFalcornia=(new Falicornia(FArmy)).getArmy();
        this.BattleResourceLengaburu=BattleResource;
    }
    initBattle(){
        
    }
    reduceBattalion(){

    }
}