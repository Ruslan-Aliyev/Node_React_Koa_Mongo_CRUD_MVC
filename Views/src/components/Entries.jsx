var React = require('react');

var Entries = React.createClass({

	update: function(e){
		$.ajax({
			type: 'PUT',
			url: 'http://localhost:3000/',
			dataType: 'json',
			data: {"destination":e.target.parentElement.parentElement.childNodes[0].innerText,"rating":e.target.parentElement.childNodes[0].value},
			success: function(res) {
				window.location.replace("/");
			}.bind(this),
			error: function(xhr, status, err) {
				console.dir("Update Error");
				console.dir(xhr);
				console.dir(status);
				console.dir(err);
			}.bind(this)
		});					
	},
	
	del: function(e){
		$.ajax({
			type: 'DELETE',
			url: 'http://localhost:3000/',
			dataType: 'json',
			data: {"destination":e.target.parentElement.parentElement.childNodes[0].innerText},
			success: function(res) {
				window.location.replace("/");
			}.bind(this),
			error: function(xhr, status, err) {
				console.dir("Delete Error");
				console.dir(xhr);
				console.dir(status);
				console.dir(err);
			}.bind(this)
		});					
	},
	
	render: function(){
	
		return (
			<tr>
				<td>{this.props.item.destination}</td>
				<td>{this.props.item.country}</td>
				<td>
					<input type='text' name='rating' defaultValue={this.props.item.rating} /> 
					<button type='button' onClick={this.update}>Edit</button>
					<button type='button' onClick={this.del}>Delete</button>
				</td>
			</tr>
		);
		
	}
	
});

module.exports = Entries;