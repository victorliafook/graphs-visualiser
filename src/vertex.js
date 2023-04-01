function Vertex (drawer) {
  const vertexWeight = 5;
  const coordinates = {x: 1, y: 2};

  this.setCoordinates = (x, y) => {
    coordinates.x = x;
    coordinates.y = y;
  };

  this.getCoordinates = () => {
    const { x, y } = coordinates;
    return [x, y];
  };

  this.draw = () => {
    drawer.strokeWeight(vertexWeight);
    drawer.point(coordinates.x, coordinates.y);
  };
}

module.exports = Vertex;