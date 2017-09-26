// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  console.log('hello world :o');
  
  $.get('/dreams', function(dreams) {
    dreams.forEach(function(dream) {
      $('<li></li>').text(dream).appendTo('ul#dreams');
    });
  });

  $('form').submit(function(event) {
    event.preventDefault();
    var dream = $('input').val();
    $.post('/dreams?' + $.param({dream: dream}), function() {
      $('<li></li>').text(dream).appendTo('ul#dreams');
      $('input').val('');
      $('input').focus();
    });
  });


});


  window.onload = function() {
		// Get a reference to the canvas object
		var canvas = document.getElementById('venny');
		// Create an empty project and a view for the canvas:
		paper.setup(canvas);

    var opacity = 0.6;
    var fontSize = 18;
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
    text.content = 'Gases';
    text.fontSize = 18;
    
    var text = new paper.PointText(new paper.Point(300, 200));
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontSize = 18;
    text.content = 'Farts';
    
    var text = new paper.PointText(new paper.Point(450, 200));
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontSize = 18;
    text.content = 'Poops';
	}