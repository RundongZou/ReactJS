//ReactDOM.render(
//	<h1>hello react!</h1>,
//	document.getElementById("main")
//)

var names = ["zhai", "yue", "feng", "zou"];
ReactDOM.render(
	<div id="jsx_nameList">
	    {
	    	names.map(function (ele, ind) {
	    		return <p key={ind}>hello {ele} {ind}</p>
	    	})
	    }
	</div>,
	document.getElementById("main") //如果在这里加一个分号，会报错
)

for (let i = 0; i < 2; i ++) {
//	   	    <p>{{i}}</p>
            console.log(i);
	   }
//ReactDOM.render(
//	   for (let i = 0; i < 2; i ++) {
////	   	    <p>{{i}}</p>
//          console.log(i);
//	   }
//	//document.getElementById("main") //如果在这里加一个分号，会报错
//)
