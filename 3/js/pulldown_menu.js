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
var content_list = {
	title:["aaa", "bbb", "ccc", "ddd", "eee", "fff"],
	con:["水电费加多少积分","arrest","埃尔文若撒", "胜多负少及佛教", "面佛我们反而今年", "妈我会飞"]
}
	


class Menu_wrap extends React.Component{
	constructor(...args) {
		super(...args); 	
		this.state = {
			if_show: false,
			page:0,
			triangle: true
		}
	}

	componentDidMount() {
		$("p").click(function () {
			$("ul").slideToggle(500);
		})
		$("ul").click(function () {
			$("ul").slideUp(500);
		})
	}
	
	fn_index(index){
		this.setState ({
			page:index,
			triangle: !this.state.triangle
		})	
	}
	
	fn_change() {
		this.setState ({
			triangle: !this.state.triangle
		})
	}
	
	render() {
		var menu_style = {display:this.state.if_show ? "block" : "none"}
		var btn_html = this.props.content_list.title[this.state.page];
		var div_html = this.props.content_list.con[this.state.page];
		var p_class = this.state.triangle ? "select_show" : ""
		return (
			<div className="box">		
			    <p id="pid" className={p_class} onClick={() => this.fn_change()} >{btn_html}</p>
				<ul id="uid" style={menu_style}>				
					{
						this.props.content_list.title.map((ele, ind) => {
							return <li key={ind} onClick={(index) => this.fn_index(ind)}>{ele}</li>
						})
					}
				</ul>
				<div className="con">{div_html}</div>
			</div>
		)
	}
}

ReactDOM.render(
	<Menu_wrap content_list={content_list}/>,
	document.getElementById("main")
)