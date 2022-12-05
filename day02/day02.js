import {readFileSync} from "node:fs";

function part1(){
  const key = {
    AX : 4,
    AY : 8,
    AZ : 3,
    BX : 1,
    BY : 5,
    BZ : 9,
    CX : 7,
    CY : 2,
    CZ : 6
  }
  const games = readFileSync("day02.txt", {encoding: "UTF-8"}).trim().split("\n");
  return games.map(game => {
    const code = game.split(" ").join("")
    return key[code];
  }).reduce((prev,current) => current + prev,0);
}

function part2(){
  const key = {
    AX : 3,
    AY : 4,
    AZ : 8,
    BX : 1,
    BY : 5,
    BZ : 9,
    CX : 2,
    CY : 6,
    CZ : 7
  }
  const games = readFileSync("day02.txt", {encoding: "UTF-8"}).trim().split("\n");
  return games.map(game => {
    const code = game.split(" ").join("")
    return key[code];
  }).reduce((prev,current) => current + prev,0);
}

console.log(part1());
console.log(part2());