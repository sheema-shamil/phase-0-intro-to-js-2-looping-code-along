// Code your solutions in this file
function writeCards(names,event){ 
    const messages = []; 
    for(let i = 0; i < names.length;i++) { 
 
           const thankYouMessage = `Thank you, ${names[i]}, for the wonderful ${event} gift!` 
           messages.push(thankYouMessage) 
 
    } 
 
    return messages; 
} 
console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")) 
 
function countDown() { 
    let i = 10; 
    while(i >= 0){ 
        console.log(i); 
        i--; 
    } 
}    
countDown();  
console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")) 
 
let i = 4; 
while(i >= 0){ 
    console.log(i); 
    i--; 
} 
  
countDown(); 
