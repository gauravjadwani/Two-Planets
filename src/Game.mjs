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
        for(let i=0;i<BattleResource.length;i++){
            const status=BattleResource[i];
            // status=;
            // status[BattleResource[i]['category']]['LTotal']=
            status['FTotal'] =
                this.BattleResourceFalcornia[BattleResource[i]['category']];
            status['FRemaining'] = 0;
            status['LRemaining'] = 0;
            status['LDeployed'] = 0;
            this.gameStatus.push(status);
            if(true || BattleResource[i]['category'] === 'H'){
                this.reduceBattalion(BattleResource[i])
            }
        }
        return this.gameStatus;
    }
    reduceBattalion(individualBatallion){
        let deployedLArmy=0;
        let reduced=false;
        // 300 100*2
        // if(FArmy <= LArmy * 2){
        //     deployedLArmy=parseInt(FArmy/2);
        //     reduced=true;
        // }else{
        //     deployedLArmy=LArmy;
        // }
        if(individualBatallion['FTotal'] <= individualBatallion['LTotal'] * 2){
            const calLDeployed=Math.ceil(individualBatallion['FTotal']/2);
            //checking the edge condition Deploy should not be more than resource
            if(calLDeployed > individualBatallion){

            }
            individualBatallion['LRemaining']=individualBatallion['LTotal']-calLDeployed;
            individualBatallion['LDeployed']=calLDeployed;
            individualBatallion['reduced']=true;
        }else{

        }
        for(let i=0;i<this.gameStatus.length;i++){
            if(this.gameStatus[i]['category'] === individualBatallion['category']){
                this.gameStatus[i]=individualBatallion;
                break;
            }
        }
        // console.log('reduceBattalion',individualBatallion);
    }
}