const Vertex = require('../src/vertex');

describe('vertex tests', () => {
  it('returns right coordinates as a list', () => {
    const drawerMock = getDrawerMock();
    const coordinates = {
      x: 1,
      y: 2,
    };
    const vertex = new Vertex(drawerMock);
    vertex.setCoordinates(coordinates.x, coordinates.y);

    expect(vertex.getCoordinates()).toEqual([coordinates.x, coordinates.y]);
  });

  it('draws a point with right coordinates', () => {
    const drawerMock = getDrawerMock();
    spyOn(drawerMock, 'point');

    const coordinates = {
      x: 10,
      y: 11,
    };
    const vertex = new Vertex(drawerMock);
    vertex.setCoordinates(coordinates.x, coordinates.y);
    vertex.draw();

    expect(drawerMock.point).toHaveBeenCalledWith(coordinates.x, coordinates.y);
  });

  it('draws point with right size', () => {
    const drawerMock = getDrawerMock();
    spyOn(drawerMock, 'point');
    spyOn(drawerMock, 'strokeWeight');

    const coordinates = {
      x: 10,
      y: 11,
    };
    const vertex = new Vertex(drawerMock);
    vertex.setCoordinates(coordinates.x, coordinates.y);
    vertex.draw();

    const expectedSize = 5;
    expect(drawerMock.point).toHaveBeenCalled();
    expect(drawerMock.strokeWeight).toHaveBeenCalledWith(expectedSize);
  });

  function getDrawerMock() {
    return {
      point: () => {},
      strokeWeight: () => {},
    };
  }
});