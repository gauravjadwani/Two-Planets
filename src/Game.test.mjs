import BattleResource from './BattleResource.mjs';
import Game from './Game.mjs';

let str='100 H, 101 E, 20 AT, 5 SG ';
const g = new Game(str);

console.log(g.initBattle())