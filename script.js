setInterval(() => {
    const time = document.querySelector("#time");

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    
    if(hours <12){
        ampm = " AM";
    }
    else{
        hours -= 12;
        ampm = " PM";
    }

    let hoursStr ="";
    let minStr ="";
    let secStr ="";

    if(hours <10){
        hoursStr = "0" + hours;
    }
    else{
        hoursStr = hours;
    }

    if(minutes <10){
        minStr = "0" + minutes;
    }
    else{
        minStr = minutes;
    }

    if(seconds <10){
        secStr = "0" + seconds;
    }
    else{
        secStr = seconds;
    }


    time.textContent = hoursStr +":" +minStr +":"+secStr + ampm;
}, 8);