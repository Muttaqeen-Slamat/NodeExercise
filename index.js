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

// making use of http module

const http = require('http')
const port = +process.env.PORT || 4000
http.createServer((req,res)=>{
    res.writeHead(200 ,{
        'Context-type': 'text/plain'
    })
    res.end('Hello world')
}).listen(port, ()=>{
    console.log(`Server is running on: http://localhost:${port}`)
})



//xtra content


// fs is a core module also known as a build in module
// require is to import
let fs = require('fs')
let path = require('path')

// finding the path of the file 
const filename = path.join(__dirname, '')

// function to create a file using keywords as writefile
// other keywords to create a file are fs.appendFile() fs.open()
function writeToAFile(content){
        try{
            fs.writeFile(filename, content, err => {
                if(!err) console.log('Saved!')
    
            })
        }catch (e){
            console.log('Issue when writing to a file');
        }
    }


    
// function to read a file using fs module
//
function readFromAFile(){
    fs.readFile(filename, 'utf8', (err, data)=>{
        if(!err) console.log(data)
    }
    )
}


// a function for append to a file 
// to append means to add or update to a file
function appendToAFile(content){
    try{
        fs.appendFile(filename, content, err =>{
            if(!err) console.log('Your data has been modified')
        })
    }catch(e){
        console.log('Issue when appending data to a file')
    }
}

// another way to create a file is to make use of createwritestream
// the difference between createwritestream and appendfile

// let test = fs.createWriteStream("Test.txt");
// test.write("Hello World . ");
// test.write("Thank You.");
// test.end();

// delete file

// fs.unlink('Test.txt', function () {
//     console.log('File Deleted Successfully.');
// });


// fs.appendFile('Test.txt', ' Random text', function (err){
//     if (err) throw err
// })

//with writeFile you are overwriting everything, creating the file and adding content to it.

// fs.writeFile('Test.txt', ' Another One', err => {
//     if(!err) console.log('Saved!')
// })

// fs.appendFile('Test.txt', ' appending content/ adding', err => {
//     if(!err) console.log('Saved!')
// })

// fs.readFile('Test.txt', 'utf8', (err, data)=>{
//     if(!err) console.log(data)
// })


