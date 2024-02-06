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

// Joels Solution

// let fs = require('fs')
// let path = require('path')

// const filename = path.join(__dirname, './data.txt')
// function writeToAFile(content){
//     try{
//         fs.writeFile(filename, content, err => {
//             if(!err) console.log('Saved!')

//         })
//     }catch (e){
//         console.log('Issue when writing to a file');
//     }
// }

// function readFromAFile(){
//     fs.readFile(filename, 'utf8', (err, data)=>{
//         if(!err) console.log(data)
//     }
//     )
// }

// function appendToAFile(content){
//     try{
//         fs.appendFile(filename, content, err =>{
//             if(!err) console.log('Your data has been modified')
//         })
//     }catch(e){
//         console.log('Issue when appending data to a file')
//     }
// }