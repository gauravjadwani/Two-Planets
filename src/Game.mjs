import BattleResource from './BattleResource.mjs';
import Falicornia from './Falicornia.mjs';

export default class Game{
    constructor(FArmy){
        this.BattleResourceFalcornia=(new Falicornia(FArmy)).getArmy();
        this.BattleResource=BattleResource;
        this.gameStatus=[];
        // this.gameStatus=[
        //     {
        //         category:'H',
        //         LDeployed:152,
        //         LTotal:100,
        //         FTotal:250,
        //         status:enabled
        
        //     },
        //     {
        //         category:'E',
        //         fDeployed:13,
        //         LDeployed:00
        //     },
        //     {
        //         category:'AT',
        //         fDeployed:30,
        //         LDeployed:00
        //     }
        // ]
    }
    initBattle(){
        const BattleResource=this.BattleResource;
        // for(let i in BattleResourceLengaburu){
        //     let obj={}
        //     obj['category']=i;
        //     obj['LTotal']=BattleResourceLengaburu[i]
        // }
        // this.gameStatus=[];
        for(let i=0;i<BattleResource.length;i++){
            const status={};
            status[BattleResource[i]['category']]=BattleResource[i];
            // status[BattleResource[i]['category']]['LTotal']=
            status[BattleResource[i]['category']]['FTotal'] =
                this.BattleResourceFalcornia[BattleResource[i]['category']];
            this.gameStatus.push(status);
        }
        return this.gameStatus;
    }
    reduceBattalion(FArmy,LArmy){
        let deployedLArmy=0;
        let reduced=false;
        // 300 100*2
        if(FArmy <= LArmy * 2){
            deployedLArmy=parseInt(FArmy/2);
            reduced=true;
        }else{
            deployedLArmy=LArmy;
        }
    }
}