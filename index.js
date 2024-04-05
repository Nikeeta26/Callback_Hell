
/***********callback hell*********** */
h1 = document.querySelector("h1");
function changeColor(color,delay,nextColor){
    setTimeout(function(){
             h1.style.color=color;
             if(nextColor) 
             nextColor();

    },delay);
}
changeColor("red",1000,()=>{
    changeColor("orange",1000,()=>{
        changeColor("pink",1000);
    });
})

// function savetoDb(data,success,failure){
//     let internSpeed = Math.floor(Math.random()*10)+1;
//     if(internSpeed > 4)
//     {
//        success();
//     }
//     else{
//         failure();
//     }
  
// }
savetoDb(
    "nikeea",()=>{console.log("success:your data1 saved");
          savetoDb("hello",()=>{
            console.log("succss2222 : your data2 save");
            savetoDb("hello",()=>{
                console.log("succss2222 : your data2 save");
            },
                ()=>{
                    console.log("failure2 :weak connection data not  saved");
                  
              });
          },()=>{
            console.log("failure2 :weak connection data not  saved");
          }
          );
    
},
()=>{
    console.log("failure:weak connection data not  saved");
}
);

/**********************promises*************/

function savetoDb(data){
    return new Promise((resolve,reject)=>{
        let internSpeed = Math.floor(Math.random()*10)+1;
        if(internSpeed > 4)
        {
           resolve("save data");
        }
        else{
            reject("reject data");
        }
    });
}
  savetoDb("nikkea")
.then(()=>{
    console.log("success");
   // console.log(request);
})
.catch(()=>{
    console.log("fail............");
   // console.log(request);
});
