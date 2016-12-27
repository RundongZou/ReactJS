//es5

//var content_list = ["aaa", "bbb", "ccc", "aaa", "bbb", "ccc"];
//var Menu_wrap = React.createClass({
//	getInitialState: function () {
//		return {
//			if_show: true
//		}
//	},
//	fn_change: function () {
//		this.setState ({
//			if_show: !this.state.if_show
//		})		
//	},
//	render: function () {
//		var menu_style = {display:this.state.if_show ? "block" : "none"}
//		var btn_html = this.state.if_show ? "收起" : "显示"
//		return (
//			<div>		
//			    <p onClick={this.fn_change}>{btn_html}</p>
//				<ul style={menu_style}>				
//					{
//						this.props.content_list.map(function (ele, ind) {
//							return <li key={ind}>{ele}</li>
//						})
//					}
//				</ul>
//			</div>
//		)
//	}
//})
//ReactDOM.render(
//	<Menu_wrap content_list={content_list}/>,
//	document.getElementById("main")
//)

//es6+
var content_list = ["aaa", "bbb", "ccc", "ddd", "eee", "fff"];
class Menu_wrap extends React.Component{
	constructor(...args) {
		super(...args); 	
		this.state = {
			if_show: false,
			check:0
		}
	}
	fn_change(index) {
		this.setState ({
			if_show: !this.state.if_show
		})		
	}
	fn_index(index){
		this.setState ({
			check:index,
			if_show: false
		})	
	}
	render() {
		var menu_style = {display:this.state.if_show ? "block" : "none"}
		var btn_html = this.props.content_list[this.state.check]
		return (
			<div className="box">		
			    <p id="pid" onClick={this.fn_change.bind(this)}>{btn_html}</p>
				<ul id="uid" style={menu_style}>				
					{
						this.props.content_list.map((ele, ind) => {
							return <li key={ind} onClick={this.fn_index.bind(this,ind)}>{ele}</li>
						})
					}
				</ul>
			</div>
		)
	}
}
ReactDOM.render(
	<Menu_wrap content_list={content_list}/>,
	document.getElementById("main")
)