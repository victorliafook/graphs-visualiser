const Edge = require('../src/edge');

describe('edge tests', () => {
  it('draws edge using vertices coordinates', () => {
    const drawerMock = getDrawerMock();
    spyOn(drawerMock, 'line');
    const fromMock = {
      getCoordinates: () => [1, 2],
    };
    const toMock = {
      getCoordinates: () => [3, 4],
    };

    const edge = new Edge(drawerMock);
    edge.setFrom(fromMock);
    edge.setTo(toMock);

    edge.draw();
    expect(drawerMock.line).toHaveBeenCalledWith(1, 2, 3, 4);
  });

  it('draws edge with right width', () => {
    const drawerMock = getDrawerMock();
    spyOn(drawerMock, 'line');
    spyOn(drawerMock, 'strokeWeight');

    const fromMock = {
      getCoordinates: () => [],
    };
    const toMock = {
      getCoordinates: () => [],
    };

    const edge = new Edge(drawerMock);
    edge.setFrom(fromMock);
    edge.setTo(toMock);

    edge.draw();
    const expectedLineWidth = 3;

    expect(drawerMock.line).toHaveBeenCalled();
    expect(drawerMock.strokeWeight).toHaveBeenCalledWith(expectedLineWidth);
  });

  function getDrawerMock() {
    return {
      line: () => {},
      strokeWeight: () => {},
    };
  }
});