var Event_click = React.createClass({
	fn_click: function (e) {
		console.log(e);
		alert("hi");
	},
	render: function () {
		return (
			<div>
			    <p>click event</p>
			    <button onClick={this.fn_click}>click me</button>
			</div>
		)
	}
});

var name_list = ["zhai", "wei", "chen", "feng"];
var Event_click_li = React.createClass({
	getDefaultProps: function () {
		return { name_list:[] }
	},
	getInitialState: function () {
		return {
			if_show: false
		}
	},
	change_state: function () {
		this.setState({
			if_show: !this.state.if_show
		})
	},
	fn_click: function (e) {
		console.log(name_list[e] + " " + e);
	},
	render: function (ind) {
		var list_style = { display: this.state.if_show ? "block" : "none" }
		var btn_html = this.state.if_show ? "隐藏" : "显示"
		return (
			<div>
			    <button onClick={this.change_state}>{btn_html}</button>
			    <ul style={list_style}>
				{		
					this.props.name_list.map(function (ele, ind) {
						return <li onClick={this.fn_click.bind(this, ind)} key={ind}>{ele}</li>
					}.bind(this))
				}
			</ul>
			</div>
			
		)
	}
});

ReactDOM.render(
	<Event_click_li name_list = {name_list}/>,
	document.getElementById("main")
)
