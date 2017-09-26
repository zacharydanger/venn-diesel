// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

var vennIt = function(canvas, a, intersection, b) {
  paper.setup(canvas);
  
  var opacity = 0.6;
  var fontSize = 24;
  var textcolor = 'white';
    
  var myCircle = new paper.Path.Circle(new paper.Point(200, 200), 180);
  myCircle.strokeColor = 'blue';
  myCircle.fillColor = 'blue';
  myCircle.opacity = opacity;
    
  var otherCircle = new paper.Path.Circle(new paper.Point(400, 200), 180);
  otherCircle.strokeColor = 'red';
  otherCircle.fillColor = 'red';
  otherCircle.opacity = opacity;
    
  var text = new paper.PointText(new paper.Point(150, 200));
  text.justification = 'center';
  text.fillColor = 'white';
  text.content = a;
  text.fontSize = fontSize;
    
  var text = new paper.PointText(new paper.Point(300, 200));
  text.justification = 'center';
  text.fillColor = 'white';
  text.fontSize = fontSize;
  text.content = intersection;
    
  var text = new paper.PointText(new paper.Point(450, 200));
  text.justification = 'center';
  text.fillColor = 'white';
  text.fontSize = fontSize;
  text.content = b;
}

$(function() {
  console.log('hello world :o');
  
  // Get a reference to the canvas object
	var canvas = document.getElementById('venny');
    
	// Create an empty project and a view for the canvas:
	paper.setup(canvas);
    
  //vennIt(canvas, "Gases", "Farts", "Butts");
  
  $('#and-the-jets').submit(function(event) {
    event.preventDefault();
    
    var A = $('input[name="A"]').val();
    var B = $('input[name="B"]').val();
    var C = $('input[name="intersection"]').val();
    
    vennIt(canvas, A, C, B);
  });
  
  $("#and-the-jets").submit();
});