function showHome() {
    var a = document.getElementById("Home");
    var b = document.getElementById('squad');
    var c = document.getElementById('tSquad');
    var d = document.getElementById('quiz');
    var e = document.getElementById('memories');

    if (a.style.display === "none") {
      a.style.display = "block"
    }
    if (b.style.display ==="block") {
      b.style.display ="none";
      a.style.display ="block";
    }
    if (c.style.display ==="block") {
      c.style.display ="none";
      a.style.display ="block";
    }
    if (d.style.display ==="block") {
      d.style.display ="none";
      a.style.display ="block";
    }
    if (e.style.display ==="block") {
      e.style.display ="none";
      a.style.display ="block";
    }
}

function showSquad() {
  var a = document.getElementById("Home");
  var b = document.getElementById('squad');
  var c = document.getElementById('tSquad');
  var d = document.getElementById('quiz');
  var e = document.getElementById('memories');

    if (b.style.display === "none") {
        b.style.display = "block";
    }
    if (a.style.display ==="block") {
       a.style.display ="none";
       b.style.display ="block";
    }
    if (c.style.display ==="block") {
      c.style.display ="none";
      b.style.display ="block";
    }
    if (d.style.display ==="block") {
      d.style.display ="none";
      b.style.display ="block";
    }
    if (e.style.display ==="block") {
      e.style.display ="none";
      b.style.display ="block";
    }
}

function showTSqaud() {
  var a = document.getElementById("Home");
  var b = document.getElementById('squad');
  var c = document.getElementById('tSquad');
  var d = document.getElementById('quiz');
  var e = document.getElementById('memories');

    if (c.style.display === "none") {
        c.style.display = "block";
    }
     if (a.style.display ==="block") {
       a.style.display ="none";
       c.style.display="block";
    }
    if (b.style.display=== "block") {
      b.style.display ="none"
      c.style.display ="block"
    }
    if (d.style.display=== "block") {
      d.style.display ="none"
      c.style.display ="block"
    }
    if (e.style.display=== "block") {
      e.style.display ="none"
      c.style.display ="block"
    }
}

function showQuiz() {
  var a = document.getElementById("Home");
  var b = document.getElementById('squad');
  var c = document.getElementById('tSquad');
  var d = document.getElementById('quiz');
  var e = document.getElementById('memories');

    if (d.style.display === "none") {
        d.style.display = "block";
    }
    if (e.style.display=== "block") {
      e.style.display ="none"
      d.style.display ="block"
    }
    if (a.style.display=== "block") {
      a.style.display ="none"
      d.style.display ="block"
    }
    if (b.style.display=== "block") {
      b.style.display ="none"
      d.style.display ="block"
    }
    if (c.style.display=== "block") {
      c.style.display ="none"
      d.style.display ="block"
    }

}

function showMemories() {
  var a = document.getElementById("Home");
  var b = document.getElementById('squad');
  var c = document.getElementById('tSquad');
  var d = document.getElementById('quiz');
  var e = document.getElementById('memories');

    if (e.style.display === "none") {
        e.style.display = "block";
    }
     if (a.style.display=== "block") {
          a.style.display ="none"
          e.style.display ="block"
        }
    if (b.style.display=== "block") {
          b.style.display ="none"
          e.style.display ="block"
        }
    if (c.style.display=== "block") {
          c.style.display ="none"
          e.style.display ="block"
        }
    if (d.style.display=== "block") {
          d.style.display ="none"
          e.style.display ="block"
        }
}

function showAlert(){
  alert("Wrong answer!");
}

function Q1(){
	var x = document.getElementById('ans1');
	var y = document.getElementById('Ene');
	var z = document.getElementById('q2');
	if(x.click){
		y.style.display="block";
		alert('Corect!');
		z.style.display="block";
	}
}

function Q2 (){
	var x = document.getElementById('ans3-2');
	var y = document.getElementById('everyboody');
	var z = document.getElementById('q3')
	if(x.click){
		y.style.display = "block";
		alert('Corect!');
		z.style.display = "block";
	}
}

function Q3 (){
	var x = document.getElementById('ans1-3');
	var y = document.getElementById('best');
	var z = document.getElementById('q4');
	if (x.click){
				y.style.display = "block";
		alert('Corect!');
		z.style.display = "block";
	}
}

