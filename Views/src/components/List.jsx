var React = require('react');
var Entries = require('./Entries.jsx');

var List = React.createClass({

	getInitialState:function(){
		return {entries: ''}
	},

	componentWillMount:function(){
		$.ajax({
			type: 'GET',
			url: 'http://localhost:3000/read',
			success: function(res) {
				this.setState( JSON.parse(res) );
			}.bind(this),
			error: function(xhr, status, err) {
				console.dir("Read Error");							
				console.dir(xhr);
				console.dir(status);
				console.dir(err);
			}.bind(this)
		});
	},
					
	create: function(e){
		$.ajax({
			type: 'POST',
			url: 'http://localhost:3000/',
			dataType: 'json',
			data: {"destination":e.target.parentElement.childNodes[0].value,"country":e.target.parentElement.childNodes[1].value,"rating":e.target.parentElement.childNodes[2].value},
			success: function(res) {
				window.location = "http://localhost:3000/";
			}.bind(this),
			error: function(xhr, status, err) {
				console.dir("Create Error");
				console.dir(xhr);
				console.dir(status);
				console.dir(err);
			}.bind(this)
		});					
	},
	
	render: function(){
	
		var entries;
		if(this.state.entries !== null && this.state.entries.length > 0){
			entries = this.state.entries.map(function(item){
				return <Entries item={item} />
			});
		}

		return (
			<div className='container'>
			
				<h1>Trip Advisor</h1>
				
				<div className='row'>
					<table className='table'>
						<thead>
							<tr><td>Destination</td><td>Country</td><td>Rating</td></tr>
						</thead>
						<tbody>
							{entries}
						</tbody>										
					</table>
				</div>
				
				<div className='row'>
					<input type='text' name='destination' /> 
					<input type='text' name='country' /> 
					<input type='text' name='rating' /> 
					<button type='button' onClick={this.create}>New</button>
				</div>

			</div>
		);
		
	}
	
});

module.exports = List;