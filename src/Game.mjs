import BattleResource from './BattleResource.mjs';
import Falicornia from './Falicornia.mjs';

let p=BattleResource;
export default class Game{
    constructor(FArmy){
        // super();
        this.BattleResourceFalcornia=(new Falicornia(FArmy)).getArmy();
        // console.log('battle',p)
        this.BattleResource=p;
        this.gameStatus=[];
        this.status='Wins';
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
        }
    }
    getStatus(){
        return this.gameStatus;
    }
    displayOutput(){
        this.initBattle();
        const str=`lengaburu deploys H${this.gameStatus[0]['LDeployed']} E ${this.gameStatus[1]['LDeployed']} AT ${this.gameStatus[2]['LDeployed']} SG ${this.gameStatus[3]['LDeployed']} and ${this.status}`;
        return str;
    }
    initBattle(){
        const gameStatus=this.gameStatus;
        let status=this.status;
        for(let i=0;i<gameStatus.length;i++){
            const left=(i===0 ? {} :gameStatus[i-1])
            const right=(i==(gameStatus.length-1) ? {} :gameStatus[i+1])
            const middle=gameStatus[i];
            const reducedBattalions=this.reduceBattalionNew(left,middle,right);
            if(Object.keys(reducedBattalions['left'])>0){
                gameStatus[i-1]=reducedBattalions['left']
            }
            if(Object.keys(reducedBattalions['middle'])>0){
                gameStatus[i]=reducedBattalions['middle']
            }
            if(Object.keys(reducedBattalions['right'])>0){
                gameStatus[i+1]=reducedBattalions['right']
            }
        }
        for(let i=0;i<gameStatus.length;i++){
            // let staus
            if(gameStatus[i]['FRemaining']!==0){
                const left=(i===0 ? {} :gameStatus[i-1])
                const right=(i==(gameStatus.length-1) ? {} :gameStatus[i+1])
                const middle=gameStatus[i];
                const res=this.takeHelp(left,middle,right);
                if(gameStatus[i]['FRemaining']>0){
                    this.status='Losses';
                }
            }
        }
        return {gameStatus,staus:this.status};
    }
    takeHelp(left,middle,right){
        if(left['LRemaining'] > 1){
            let calculateDeploy=middle['FRemaining'] * 2;
            if(calculateDeploy > left['LRemaining']){
                
                //left-right both should be reduced
                //balance left
                const deployTrans=calculateDeploy/2
                const diff=calculateDeploy-left['LRemaining']
                
                left['LDeployed']=left['LTotal'];
                calculateDeploy=diff;
                console.log('if',calculateDeploy,diff)

                //balance middle
                middle['FRemaining']=middle['FRemaining']-left['LRemaining'];
                left['LRemaining']=0;
            }else{
                //only left should be reduced
                const LRemaining=left['LRemaining'];
                left['LRemaining']=LRemaining-calculateDeploy;
                left['LDeployed']=LRemaining+calculateDeploy;
                middle['FRemaining']=middle['FRemaining']-calculateDeploy/2;
            }
            if(middle['FRemaining'] > 0){
                if(left['LRemaining'] > 0 || right['LRemaining'] > 0){
                    // reccursion
                    this.takeHelp(left,middle,right)
                }else{
                    //falicornia won
                    middle['reduced']='loss';
                    return {left,middle,right}
                }

            }else{
                return {left,middle,right}
            }
            //balence middle
            //as 2L=R
        }else{
            if(Object.keys(right).length > 0){
                const calLDeployed=Math.ceil(middle['FRemaining']/4);
                middle['FRemaining']=middle['FRemaining']-calLDeployed * 4;
                right['LRemaining']=right['LTotal']-calLDeployed;
                right['LDeployed']=right['LDeployed']+calLDeployed;
            }

            return {left,middle,right}
        }
    }
    reduceBattalionNew(left,middle,right){
        //simple case without help
        const status='reduced';
        if(middle['FTotal'] <= middle['LTotal'] * 2){
            const calLDeployed=Math.ceil(middle['FTotal']/2);
            console.log('reduceBattalionNew',middle['category'],calLDeployed)
            middle['LRemaining']=middle['LTotal']-calLDeployed;
            middle['LDeployed']+=calLDeployed;
            middle['FRemaining'] = 0;
            middle['reduced']=true;
        }else{
            //need help from left/right
            //first settle the all battalion having with self
            //then ask for help
            middle['LRemaining']=0;
            middle['LDeployed']=middle['LTotal'];
            middle['FRemaining'] = middle['FTotal']-middle['LDeployed'] * 2;
            middle['reduced']=false;
        }
        return {left,middle,right,status}
    }

}