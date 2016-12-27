var product_data = {
	"新品": ["新品1", "新品2", "新品3", "新品4"],
	"热卖": ["热卖1", "热卖2", "热卖3", "热卖4", "热卖5"]
}

//每个tab
var Product_list = React.createClass({	
	render: function () {
		return (
			<div>
				{
					this.props.data.map(function (ele, ind) {
				    	return <li key={ind}>{ele}</li>
				    } )
				}				    
			</div>			
		)
	}
})

//最外面的外套
var Tabs_wrap = React.createClass({		
	getInitialState: function () {
		var types = Object.keys(this.props.product_data);
		return {
			types: types,
			selected_type: types[0]
		}	
	},
	change_state: function (ind) {
		this.setState({
			selected_type: this.state.types[ind]
		})
	},
	render: function () {
		var selected_type = this.state.selected_type;
		var list_data = this.props.product_data[selected_type];
		console.log(list_data)
		return (
			<div>
				<ul>
					{
						this.state.types.map(function (ele, ind) {
					    	return <button onClick={this.change_state.bind(this, ind)} key={ind}>{ele}</button>
					    }.bind(this))
					}				    
				</ul>
				<Product_list data={list_data}/>
			</div>			
		)
	}
})

ReactDOM.render(
	<Tabs_wrap product_data={product_data}/>,
	document.getElementById("main")
)