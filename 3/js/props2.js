class Child extends React.Component {
	fn_click() {
		//this.props.child_change_value(val)
		Action.emit("change_app_value", 2432)
	}
	render() {
		return <button onClick = {() => this.fn_click()}>子组件の按钮</button>
	}
}

class Text extends React.Component {
	render() {
		return (
			<p>{this.props.value}</p>
		)
	}
}

class App extends React.Component {
	constructor(...args) {
		super(...args);
		this.state = {
			value: 1
		}
	}`
	componentWillMount() {
		Action.on("change_app_value", (val) => this.setState({ value: val }))
	} 
	render() {
		return (
			<div>
				<Text value={this.state.value} />
				<Child child_change_value={(val) => this.change_value(val)} />
			</div>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById("main")
)

































//		Action.on("change_app_value", function (val) {
//			this.setState({
//				value: val
//			})
//		}.bind(this))


//	change_value(val) {
//		this.setState({
//			value: val
//		})
//	}

