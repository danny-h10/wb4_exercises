"use strict"

let students = [
    {name: "Zephaniah", scores: [100, 96, 99, 92]},
    {name: "Pursalane", scores: [92, 89, 96, 100, 94]},
    {name: "Siddalee", scores: [86, 72, 92]},
    {name: "Ian", scores: [98, 84, 89, 100, 100, 76]},
    {name: "Elisha", scores: [89, 100]},
    {name: "Ezra", scores: [100, 99, 100, 87]}
   ];


   function getAverageScores(potato) {
   let fullpotato = potato.length

   for(let i = 0; i< fullpotato; i++){
    let student = potato[i].name
    let studentScoreAverage = 0

    for (let j =0; j< potato[i].scores.length; j++ ){
        studentScoreAverage += potato[i].scores[j];

    }

let averageScore = studentScoreAverage / potato[i].scores.length;

    console.log(`the student ${student} has an average score of ${averageScore}`)
   }

   }

   getAverageScores(students)