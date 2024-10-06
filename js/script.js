// class constructor for points
function Point(x, y ,z) {
  this.x = x;
  this.y = y;
  this.z = z;
}
// user inputs
const a = new Point();
const b = new Point();
const c = new Point(); // this is empty as this is the result
const given = {
  Axis : null,
  Coord : null
}

function calculate3rdPoint() {
  setValues();
  // To find the coordinates of point C, which lies on the same line as points A and B, we can use the parametric equations of the line

  // Find the direction vector d (difference between two vectors)
  const d = new Point();
  d.x = b.x - a.x;
  d.y = b.y - a.y;
  d.z = b.z - a.z;
  
  // Find the parameter t using parametric equation
  const t = (given.Coord - a[given.Axis]) / d[given.Axis]

  c.x = a.x + (d.x * t);
  c.y = a.y + (d.y * t);
  c.z = a.z + (d.z * t);

  setHtmlOutput(`d = ${d.x},${d.y},${d.z} <br> t = ${t} <br> <strong>c = ${c.x}, ${c.y}, ${c.z}</strong>`);
}

// initializing values
const setValues = () => {
  a.x = Number.parseInt(document.getElementById('point-A-X-coordinate').value),
  a.y = Number.parseInt(document.getElementById('point-A-Y-coordinate').value),
  a.z = Number.parseInt(document.getElementById('point-A-Z-coordinate').value)
  b.x = Number.parseInt(document.getElementById('point-B-X-coordinate').value),
  b.y = Number.parseInt(document.getElementById('point-B-Y-coordinate').value),
  b.z = Number.parseInt(document.getElementById('point-B-Z-coordinate').value)
  given.Axis = document.getElementById('axis-list').value;
  given.Coord = document.getElementById('given-coord').value;
}

// output
const setHtmlOutput = (htmlStr) => {
  document.getElementById('output').innerHTML = htmlStr;
}

// test values. DON'T FORGET TO DELETE
// document.getElementById('point-A-X-coordinate').value = -198;
// document.getElementById('point-A-Y-coordinate').value = 56;
// document.getElementById('point-A-Z-coordinate').value = 315;
// document.getElementById('point-B-X-coordinate').value = -191;
// document.getElementById('point-B-Y-coordinate').value = 63;
// document.getElementById('point-B-Z-coordinate').value = 315;
// document.getElementById('given-coord').value = 24;