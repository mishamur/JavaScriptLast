Surfaces.prototype.odnopolosniyHyperboloid = (count = 20) => {
    const points = [];
    const edges = [];
    const polygons = [];

    //рисуем точки
    let counter = 0;
    const a = 0.5;
    const b = 0.5;
    const c = 0.5;

   
    const delta = Math.PI * 2 / count;

    //рисуем точки
    for (let i = 0; i < 2 * Math.PI; i += delta) {
        for (let j = -Math.PI; j <= Math.PI; j += delta) {

            const x = a * Math.cos(i) * Math.cosh(j);
            const y = b * Math.sin(i) * Math.sinh(j);
            const z = c * Math.sinh(j);
            points.push(new Point(x, y, z));
        }
    }

    //рисуем рёбра 

    for (i = 0; i < points.length - count; i++) {
        //вдоль
        if (i / count === counter + 1) {
            counter++
        }

        console.log(counter)
        edges.push(new Edge(i + counter, i + 1 + counter))

        if (i + counter + 1 < points.length) {
            edges.push(new Edge(i + counter, i + 1 + counter));
        }

        if (i + counter + 1 + count < points.length) {
            edges.push(new Edge(i + counter, i + 1 + count + counter));
        }
    }


    return new Subject(points, edges, polygons);
}