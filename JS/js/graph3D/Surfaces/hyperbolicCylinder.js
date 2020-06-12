Surfaces.prototype.hyperbolicCylinder = (count = 20) =>{

    const points = [];
    const edges = [];
    const polygons = [];
    const a = 0.2;
    const b = 0.2;
    const delta = Math.PI * 2 / count;
    const alpha = Math.PI / count;

    //рисуем точки
    for (let i = 0; i <  Math.PI; i += delta) {
        for (let j = 0; j < Math.PI; j += alpha) {

            const x =  Math.cosh(i);
            const y =  Math.sin(i);
            const z = j;

            points.push(new Point(x, y, z))
            points.push(new Point(-x, -y, z))
        }
    }

     //рисуем рёбра
     for (i = 0; i < points.length; i++) {

        //правая часть
        if(i % 2 === 0 && i + 2 < points.length && (i + 2) % count !== 0){
            edges.push(new Edge(i, i + 2))
        }
        if(i % 2 === 0 && i + count * 2 < points.length){
            edges.push(new Edge(i, i + count * 2))
        }
        //левая часть

        if(i % 2 !== 0 && i + 2 < points.length && (i + 2) % count !== 1){
            edges.push(new Edge(i, i + 2))
        }

        if(i % 2 !== 0 && i + count * 2 < points.length){
            edges.push(new Edge(i, i + count * 2))
        }
    }

     // рисуем полигоны

     for(let i = 0; i < points.length; i++) {
        if(i % 2 === 0 && i + 2 < points.length && (i + 2) % (count * 2) !== 0 && i + count * 2 < points.length ) {
            polygons.push(new Polygon([i, i + count *2, i + count *2 + 2, i + 2]))
        }
        if(i % 2 !== 0 && i + 2 < points.length && (i + 2) % (count * 2) !== 1 && i + count * 2 < points.length ) {
            polygons.push(new Polygon([i, i + count *2, i + count *2 + 2, i + 2]));
        }
    }

    return new Subject(points, edges, polygons);
}