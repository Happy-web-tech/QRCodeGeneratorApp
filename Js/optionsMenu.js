const uniqueQRCodes = document.getElementsByClassName("uniqueQRCodes")[0];
const pQRCodes = document.getElementsByClassName("pQRCodes")[0];
var nextBtn = document.getElementsByClassName("nextBtn")[0];
const downloadBtn = document.getElementsByClassName("downloadBtn")[0];
const leftContainer1 = document.getElementsByClassName("leftContainer1")[0];

// downloadBtn.disabled = true;
nextBtn.onclick = function(){
    console.log('check state :'+uniqueQRCodes.checked);
    if(uniqueQRCodes.checked){
        //proceed
        // leftContainer1.style.display = "none";
        window.location.href = "uniqueQRGeneration.html";
    }
    else if(pQRCodes.checked){
        window.location.href = "personalizedQRGeneration.html";
    }
    else{
        alert("Please make the selection!");//change with inline error later
    }
}

