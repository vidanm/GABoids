$(document).ready(() => {
	
	Algebra(3,1, () => { //Conformal 2D Space
		this.describe();

		var ei = 1e4-1e3, //e-infinite
			  eo = 0.5*(1e4+1e3); //e-origin 

		var point = (x,y) => eo + x *1e1 +y*1e2+0.5*(x*x+y*y)*ei,
			  line = (a,b,c) => !(a*1e1 + b*1e2 + c*ei),
				circle = (x,y,r) => !(point(x,y) - r**2/2*ei);

		var dist=(x,y)=>(2*(x<<y).Length)**0.5,
				angle=(x,y)=>Math.acos(!x.Normalized<<!y.Normalized);

  	var translate = (v)=>(1-.5*v^ei),
      	rotate    = (P,a)=>Math.cos(a/2) + Math.sin(a/2)*(1e12+1e12<<P^ei);

		// To demonstrate graphing, we create some points and lines.
    // Users can drag points in the graph, lambda expressions can be
    // used to create dynamic updating items.
    var A = point(-1,-1), B = point(1,-1), C = point(-1,1), l = circle(-1,1,0.5);

		let x = -1
		let y = -1
		let timeout = setInterval(()=>{ x += 0.01; y+= 0.01;},100);
    // Ganja.js can directly graph 2D PGA elements. Pass in an array of
    // items to render. (numbers are colors, strings are labels, PGA points
    // and lines are rendered automatically and arrays can be used for line
    // segments and polygons). The graph function returns a HTML SVG element.
    document.body.appendChild(this.graph(()=>{
			A = point(x,y);

			return [
      // use numbers to set the current color.
        0x444444,
      // strings label the items they follow, first string is a title.
        "Boids",
      // render points (user can drag these)
        A, "A",
				B, "B", 
				C, "C",
      // render lines
        l, "Circle",
      // line segments
        ()=>[A,B], "Label for segment",
      // polygons
				()=>A^B^C, "Circle by wedge ABC",
       // 0xffeeee,
			//()=>[A,B,C], 0xff7777, "Label for polygon"
    ]},{grid:false, animate:true,conformal:true}));

	});
}); 


