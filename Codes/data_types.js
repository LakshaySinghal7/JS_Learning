// alert("ok") Can't use alert in node only on browser

let score = '33'
score= Number(score)
console.log(typeof score);

let scoring = "33abc"
scoring= Number(scoring)
console.log(typeof scoring);
console.log(scoring);

let scored= null
// scored=Number(null)
// scored= String(scored)
scored= Boolean(scored)
console.log(typeof scored);
console.log(scored);

let scoret = undefined
scoret=Number(scoret)
console.log(typeof scoret);
console.log(scoret);

// let scorebool= 1
// let scorebool= -6
let scorebool= 6
scorebool= Boolean(scorebool)
console.log(scorebool);

// let scorestr= ""
let scorestr= "false"
scorestr=Boolean(scorestr)
console.log(scorestr);

let scorenum= 33
scorenum= String(33)
console.log(typeof scorenum);


// We are using 'S'tring, 'N'umber, 'B'oolean as we are using global constructor function of the data types.