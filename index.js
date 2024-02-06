let fs = require('fs')
console.log(fs);

fs.appendFile('data.txt', 'Hello world', function (err){
    if (err) throw err
})

fs.appendFile('data.txt', ' this is 2nd content', function (err){
    if (err) throw err
})

// created the first line again but with the second one

//3rd content

fs.appendFile('data.txt', ' and this is 3rd content', function (err){
    if (err) throw err
})


let test = fs.createWriteStream("dataTest.txt");
test.write("Hello World . ");
test.write("Thank You.");
test.end();


