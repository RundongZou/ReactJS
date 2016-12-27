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
	componentWillMount: function () {
		// 可以渲染之前修改属性值
		this.setState({
			if_show: false
		})
		console.log("组件即将被渲染  componentWillMount");
	},
	componentDidMount: function () {
		//可以获取到真实DOM节点
		console.log(document.getElementById("wrap"));
		//console.log(this.refs);
		// refs 当前组件里面所有设置了ref属性的元素的结合
		console.log("组件渲染完成  componentWillMount");
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
		console.log("渲染: render")
		var list_style = { display: this.state.if_show ? "block" : "none" }
		var btn_html = this.state.if_show ? "隐藏" : "显示"
		return (
			<div ref="wrap" id="wrap">
			    <button onClick={this.change_state}>{btn_html}</button>
			    <ul style={list_style} ref="list">
				{		
					this.props.name_list.map(function (ele, ind) {
						return <li onClick={this.fn_click.bind(this, ind)} key={ind}>{ele}</li>
					}.bind(this))
				}
			</ul>
			</div>
			
		)
	},
	componentWillReceiveProps: function (new_props) {
		console.log(new_props, "组件即将收到新的数据  componentWillReceiveProps");
	},
	shouldComponentUpdate: function () {
		// 是否允许组件更新  return true 表示允许，retrun false 表示不允许
		console.log("允许组件更新吗 （一般不用自己设置）");
		return true;
	},
	componentWillUpdate: function () {
		console.log("组件即将更新  componentWillUpdate");
	},
	componentDidUpdate: function () {
		console.log("组件更新完毕  componentDidUpdate");
	}
});

ReactDOM.render(
	<Event_click_li name_list = {name_list}/>,
	document.getElementById("main")
)
