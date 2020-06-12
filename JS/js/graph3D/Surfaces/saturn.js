Surfaces.prototype.saturn = (count = 20, R = 6,Rbublik = 10, point = new Point(0, 0, 0), color ='996600', animation = null) => {
    const points = [];
    const edges = [];
    const polygons = [];

 /////сфера------------------------------//////////////////////////////
    //print points
    const delta = Math.PI * 2 / count;
    for (let i = 0; i <= Math.PI; i += delta) {
        for (let j = 0; j < Math.PI * 2; j += delta) {
            const x = point.x + R * Math.sin(i) * Math.cos(j)
            const y = point.y + R * Math.sin(i) * Math.sin(j)
            const z = point.z + R * Math.cos(i);

            points.push(new Point(x, y, z))

        }
    }

    //print edges

    for (let i = 0; i < points.length; i++) {
        //vdol'
        if (i + 1 < points.length && (i + 1) % count !== 0) {
            edges.push(new Edge(i, i + 1));
        } else if ((i + 1) % count === 0) {
            edges.push(new Edge(i, i + 1 - count));
        }
        //poperek
        if (i + count < points.length) {
            edges.push(new Edge(i, i + count));
        }

    }

    //print polygons

    for (let i = 0; i < points.length; i++) {
        if (i + 1 + count < points.length && (i + 1) % count !== 0) {
            polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], color));
        } else if ((i + 1) % count === 0 && i + count < points.length) {
            polygons.push(new Polygon([i, i + 1 - count, i  + 1, i + count], color));

        }
    }
    
    ///-------------------------------------------------------------------------------------------------------------//////
    //БУБЛИК

    
    function setRoundOfPoints(count, Rbublik) {
        const da = 2 * Math.PI / count;
        for (let i = 0; i < 2 * Math.PI; i += da) {
            const x =point.x + Rbublik * Math.sin(i);
            const z =point.y + Rbublik * Math.cos(i);
            const y =point.z + 0;
            points.push(new Point(x, y, z));
        }
    }
    //print points
    setRoundOfPoints(count, Rbublik);
    setRoundOfPoints(count, Rbublik / 1.4);


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