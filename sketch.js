
var start = 4;
var iterations = 0;
var values = [];

function setup() {
        createCanvas(600, 400);
        background(0);
        frameRate(600);
}

function draw() {
        background(0);
    // put drawing code here
  var den = 2 * iterations + 3;
  if (iterations % 2 == 0) {
      start -= 4/den;
  } else {
      start += 4/den;
  }
  values.push(start);
  var spacing = width/values.length;
  beginShape();
  for (var i = 0; i < values.length; i++) {
          stroke(255);
          noFill();
          var x = i * spacing;
          var y = map(values[i], 2, 4, height, 0);
          vertex(x, y);
  }
  endShape();
  var piY = map(PI, 2, 4, height, 0);
  push();
  stroke(0, 0, 255);
  noFill();
  line(0, piY, width, piY);
  pop();
  iterations++;
  var value = select('#ans');
  value.html(start);
}
