import {readFileSync} from "node:fs";

function part1(){
  const elves = readFileSync("day01.txt", {encoding: "UTF-8"}).trim().split("\n\n");
  const calories = elves.map(calories => {
    return calories.split("\n").map(Number).reduce((previous, current) => previous + current,0)
  })
  return Math.max(...calories);
}

function part2(){
  const elves = readFileSync("day01.txt", {encoding: "UTF-8"}).trim().split("\n\n");
  const calories = elves.map(calories => {
    return calories.split("\n").map(Number).reduce((previous, current) => previous + current,0)
  }).sort((a,b)=> b-a)
  return calories[0] + calories[1] + calories[2]
}

part1();
part2();
