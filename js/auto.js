function getDate() {
    var dateObj = new Date();
    var monthno = dateObj.getUTCMonth(); //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    
    var monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    var month = monthNames[monthno];
    
    var d = month + " " + day + ", " + year;
    document.getElementById("datetext").innerHTML = d;
}

function auto() {
    getDate();
}