import Game from './src/Game.mjs';

let str='250 H, 50 E, 20 AT, 15 SG ';
const g = new Game(str);

console.log(g.displayOutput())