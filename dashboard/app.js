let switchButton =  document.querySelector(".switch")


// let modeConfig = {
//     isClicked: true,

//     lightmode: {
//         config:{
//             color: "black",
//             background: "rgb(255, 255, 255)",
//         }
//     },
//     darkmode: {
//         config: {
//             color: "white",
//             background: "rgb(31, 31, 31)"
//         }

//     }
// }


    


function callback(){

    document.body.classList.toggle("darkmode")
// if(modeConfig.isClicked === false){
//     document.body.style.backgroundColor = modeConfig.lightmode.config.background;
//     document.body.style.color = modeConfig.lightmode.config.color;

//     modeConfig.isClicked = true;
//     console.log("isClicked")
// }
// else{
//     document.body.style.backgroundColor = modeConfig.darkmode.config.background;
//     document.body.style.color = modeConfig.darkmode.config.color;
//     modeConfig.isClicked = false;
//     console.log("isClicked")
// }
}
switchButton.addEventListener("click", callback)

