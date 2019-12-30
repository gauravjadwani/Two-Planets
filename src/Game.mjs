import BattleResource from './BattleResource.mjs';
import Falicornia from './Falicornia.mjs';

export default class Game{
    constructor(FArmy){
        this.BattleResourceFalcornia=(new Falicornia(FArmy)).getArmy();
        this.BattleResource=BattleResource;
        this.gameStatus=[];
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
            individualBatallion['LRemaining']=individualBatallion['LTotal']-calLDeployed;
            individualBatallion['LDeployed']=calLDeployed;
            individualBatallion['FRemaining'] = 0;
            individualBatallion['reduced']=true;
        }else{
            // const calLNeeded=Math.ceil(individualBatallion['FTotal']/2);
            let calLNeeded=(individualBatallion['FTotal']) - 
                            (individualBatallion['LTotal'] * 2)
            //check calLNeeded should be always in the multiple of 2
            if((calLNeeded%2) !== 0){
                calLNeeded++;
            }
            // const aid=calLNeeded-individualBatallion['LTotal'];
            let i=0;
            for(;i<this.gameStatus.length;i++){
                if(this.gameStatus[i]['category'] === individualBatallion['category']){
                    // this.gameStatus[i]=individualBatallion;
                    break;
                }
            }
            if(calLNeeded <= this.gameStatus[i-1]['LRemaining']){
                // aid=aid*2;
                //weight
                // calLNeeded*=2;
                console.log('aid',calLNeeded,this.gameStatus[i-1]['LDeployed']);
                this.gameStatus[i-1]['LDeployed']+=calLNeeded;
                this.gameStatus[i-1]['LRemaining']-=calLNeeded;
                this.gameStatus[i]['FRemaining']=this.gameStatus[i]['FTotal'] - calLNeeded;

            }else if(aid <= this.gameStatus[i+1]['LRemaining']){

            }else{
                individualBatallion['reduced']='failed';
            }
            individualBatallion['LRemaining']=0;
            individualBatallion['LDeployed']=individualBatallion['LTotal'];
            individualBatallion['reduced']=true;
            individualBatallion['FRemaining']-=(individualBatallion['LTotal'] * 2);
        }
        for(let i=0;i<this.gameStatus.length;i++){
            if(this.gameStatus[i]['category'] === individualBatallion['category']){
                // this.gameStatus[i]=individualBatallion;
                break;
            }
        }
        // console.log('reduceBattalion',individualBatallion);
    }
}