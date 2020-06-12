Surfaces.prototype.bublik = (count = 20, R = 10, point = new Point(0, 0, 0), color ='ff0000', animation = null) => {
    const points = [];
    const edges = [];
    const polygons = [];
    
    function setRoundOfPoints(count, R) {
        const da = 2 * Math.PI / count;
        for (let i = 0; i < 2 * Math.PI; i += da) {
            const x =point.x + R * Math.sin(i);
            const z =point.y + R * Math.cos(i);
            const y =point.z + 0;
            points.push(new Point(x, y, z));
        }
    }
    //print points
    setRoundOfPoints(count, R);
    setRoundOfPoints(count, R / 1.4);


    //print edges
    for (let i = 0; i < points.length; i++) {
        if (points[i + count]) {
            edges.push(new Edge(i, i + count));
        }
        if (points[i + 1] && i !== count - 1) {
            edges.push(new Edge(i, i + 1));
        }
        edges.push(new Edge(0, count - 1));
        edges.push(new Edge(count, 2*count - 1));
    }

    //print polygons
    for(i = 0; i < points.length; i++){
        if((i + count + 1) < points.length){
            polygons.push(new Polygon([i, i + 1, i + count + 1, i + count], color));   
        }
    }
    //Дырка
    polygons.push(new Polygon([0,  count, points.length  - 1 ,points.length - 1 - count ], color));


    return new Subject(points, edges, polygons, animation);
}
