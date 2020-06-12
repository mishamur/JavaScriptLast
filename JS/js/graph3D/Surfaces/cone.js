  
Surfaces.prototype.cone  =  ( a = 2, b = 2, c = 1.5, r = 10 , count = 20) => {
    const points = [];
    const edges = [];
    const polygons = [];

    function setEllipsoidOfPoints(count, R) {
        const da = 2 * Math.PI / count;
        for(let j = 0; j <= 2 * Math.PI; j += da){
            for (let i = 0; i <= 2 * Math.PI; i += da) {
                const x =   R * Math.sin(j) / c
                const y =   R * Math.sin(j) * Math.sin(i) / b;
                const z =   R * Math.sin(j) * Math.cos(i) / a;
                points.push(new Point(x, y, z));
            }
        }
    }

    setEllipsoidOfPoints(count, r);

    for (let i = 0; i < points.length; i++) {
        if (points[i + count]) {
            edges.push(new Edge(i, i + count));
        }
        if (points[i + 1] && (i != count - 1)) {
            edges.push(new Edge(i, i + 1));
        }
        //print polygons
        if(i + 1 + count < points.length &&  (i + 1) % count !== 0)  {
            polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count ]))

        }
    }
    
    return new Subject(points, edges, polygons);
}