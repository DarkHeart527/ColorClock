function submit() {
  document.getElementById('colorAllowed').style = "color: " + document.getElementById('textColor').value;
  document.getElementById('backGround').style = "background-color: " + document.getElementById('backgroundColor').value;
  setTimeout( function() { alert('Styling Has Been Changed To: | Text Color - ' + document.getElementById('textColor').value + ' | Background Color - ' + document.getElementById('backgroundColor').value + ' |'); }, 500);
}

function clock() {
  
    var d = new Date();
    var mi = d.getMilliseconds();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours() - 12;
    var checkM = null;
    var checkH = null;
  
    if (m < 10) {
     checkM = null;
    }else {
     checkM = "0";
    }
  
    if (h < 10) {
     checkH = null;
    }else {
     checkH = "0";
    }

    document.getElementById('colorAllowed').innerHTML = checkH + h + ":" + checkM + m + ":" + s + "." + mi;
}
