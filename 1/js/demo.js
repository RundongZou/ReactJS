var Header = React.createClass({
	render: function () {
		return <div className="header">header</div>
	}
});
var Content = React.createClass({
	render: function () {
		return (
			<div className="content">{this.props.children}</div>
		) 
	}
});
var Footer = React.createClass({
	render: function () {
		return <div className="footer">footer</div>
	}
});
var list_data = ["商品1", "商品2", "商品3"];
var ProductList = React.createClass({
	render: function () {
		return (
			<ul>{
				 list_data.map(function (ele, ind) {
			    	return <li key={ind}>{ele}</li>
			    })
			}			   
			</ul>
		)
	}
})
var IndexPage = React.createClass({
	render: function () {
		return (
			<div className="index_page" id="index_page">
			    <Header/>
			    <Content>
			        <ProductList/>
				</Content>
				<Footer/>
			</div>			
		)
	}
});

ReactDOM.render(
	<IndexPage/>,
	document.getElementById("app")
)