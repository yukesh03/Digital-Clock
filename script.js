function currentTime() {
    let date = new Date(); 
    let mmm = date.toLocaleString('default', { month: 'short' });
    let yyy = date.getFullYear();
    let ddd = date.getDate();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getUTCSeconds();
    let session = "AM";
  
    if(hh == 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;
    
    let time = hh + ":" + mm + ":" + ss + " " + session;
    let mdy = mmm + "-" + ddd + "-" + yyy 
    document.getElementById("mmddyy").innerText = mdy;
    document.getElementById("clock").innerText = time; 
    
    let t = setTimeout(function(){ currentTime() }, 1000);
}
// https://ip-geolocation.whoisxmlapi.com/api/v1?apiKey=at_TojccGC2daISqkVUhBOHdI74g5sIE&ipAddress=8.8.8.8
currentTime()
