Surfaces.prototype.parabolicheskiyCilindr = (count = 20) => {
    const points = [];
    const edges = [];
    const polygons = [];

    //рисуем точки

    const delta = Math.PI * 2 / count;
    const alpha = Math.PI / count;

    //рисуем точки
    for (let i = 0; i <=  Math.PI; i += delta) {
        for (let j = 0; j < Math.PI; j += alpha) {
            const x = i ** 2;
            const y = 2 * i;
            const z = j;
            points.push(new Point(x, y, z))
        }
    }

    //рисуем рёбра
    for (i = 0; i < points.length; i++) {
        if (i + 1 < points.length && (i + 1) % count !== 0) {
            edges.push(new Edge(i, i + 1))
        }
        if (i + count < points.length) {
            edges.push(new Edge(i, i + count))
        }
        //print polygons
        if (i + 1 + count < points.length && (i + 1) % count !== 0) {
            polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count]))

        }
    }




    return new Subject(points, edges, polygons);
}