class Child extends React.Component {
	fn_click(val) {
		this.props.child_change_value(val)
	}
	render() {
		return <button onClick = { (val) => this.fn_click(333) }>子组件の按钮</button>
	}
}

class App extends React.Component {
	constructor(...args) {
		super(...args);
		this.state = {
			value: 1
		}
	}
	change_value(val) {
		this.setState({
			value: val
		})
	}
	render() {
		return (
			<div>
				<p>{this.state.value}</p>
				<button onClick = {(val) => this.change_value(22)}>父组件の按钮</button>
				<Child child_change_value={(val) => this.change_value(val)} />
			</div>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById("main")
)
