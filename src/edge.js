function Edge(drawer) {
  const lineWeight = 3;
  let from;
  let to;

  this.setFrom = (vertex) => {
    from = vertex;
  };

  this.setTo = (vertex) => {
    to = vertex;
  };

  this.draw = () => {
    const fromCoords = from.getCoordinates();
    const toCoords = to.getCoordinates();
    drawer.strokeWeight(lineWeight);
    drawer.line(
      ...fromCoords, ...toCoords
    );
  };
}

module.exports = Edge;