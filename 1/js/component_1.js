var HelloWorld = React.createClass(
	{
		render: function () {
			return <h1>HellsdgdoWorld</h1>
		}
	}
)
var TestMe = React.createClass(
	{
		render: function () {
			return <h2>Tes11tMe</h2>
		}
	}
)
var TestModule = React.createClass({
	render: function () {
		return (
			<div>
			    <HelloWorld/>
                <TestMe/>
			</div>				
		)
	}
})

ReactDOM.render(
	<TestModule/>,
	document.getElementById("main")
)