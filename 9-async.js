const {readFile, writeFile} = require('fs');


//to utf-8 proste znamena ze to bude text
readFile('./content/first.txt','utf-8' ,(error, result) => {
if(error){
    console.log(error);
    
}
const first = result;
readFile('./content/second.txt','utf-8' ,(error, result) => {
    if(error){
        console.log(error);
        
    }
    const second = result;
    writeFile('./content/result-sync.txt', `The combination of these strings is ${first + ' ' +second}`,
        (error, result) => {

        }
    );
    
    });
});
