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
    var checkS = null;
  
    if (m < 10) {
     checkM = "0";
    }else {
     checkM = '';
    }
  
    if (h < 10) {
     checkH = "0";
    }else {
     checkH = '';
    }
      
   if (s < 10) {
     checkS = "0";
    }else {
     checkS = '';
    }

    document.getElementById('colorAllowed').innerHTML = checkH + h + ":" + checkM + m + ":" + checkS + s + "." + mi;
}
