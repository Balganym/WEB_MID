import React, { Component } from 'react';
import Action from './index.js';
import Styles from './index.css';

class Contact extends Component {

	constructor(){
		super();
		this.state={
			"contact": [],
			"name": "",
			"email": "",
			"phone": "",
			"search": ""
		};

		this.changeName = this.changeName.bind(this);
		this.changePhone = this.changePhone.bind(this);
		this.changeEmail = this.changeEmail.bind(this);
		this.getContact = this.getContact.bind(this);
		this.addContact = this.addContact.bind(this);
		this.filterIt = this.filterIt.bind(this);
	}

	changeName(e) {
		this.setState({
			"name": e.target.value,
		})
	}

	changePhone(e) {
		this.setState({
			"phone": e.target.value,
		})
	}
	
	changeEmail(e) {
		this.setState({
			"email": e.target.value,
		})
	}

	getContact(e){
		this.setState({
			"search": e.target.value,
		})
	}

	addContact(){
		var arr = this.state.contact;

		arr.push({
			"name": this.state.name,
			"phone": this.state.phone,
			"email": this.state.email,
		})

		this.setState({
			"contact": arr,
			"name": "",
			"phone": "",
			"email": "",
		})
	}

	filterIt(){
		let filteredContacts = this.state.contact.filter(
        (contact) => {
          return (contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
            || contact.phone.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
            || contact.email.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1	);
        }
      );
		this.setState({
			contact: filteredContacts
		})

		
	}

	render() {
		
		
		var arr = this.state.contact.map((contact, i) => (
			<div key={i} className = "contact">
				 
				<p><img style={{width: 140, height: 130}} src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-contact-outline-128.png"/> </p> 
				<p>{contact.name}</p> 
				<p>{contact.phone}</p> 
				<p>{contact.email}</p> 

				
			</div>
		));

		
		return(
			<div className="all">
				
				<div className="form">
				
					<div className="header">
						<h2>Contact List</h2>
						<img className="image" src="http://www.myiconfinder.com/uploads/iconsets/256-256-af37a7f12c2e3863e00051a99b6f86fa.png"/>
					</div>

					<div className="search">
						<input type="text" onChange={this.getContact} value = {this.state.search}/>
						 <button className="searchButton" type = "submit" onClick = {this.filterIt}>Search</button>
					</div>
					 
					<div className="addInfo">
						<div className="info">
							<input type="text" onChange={this.changeName} value = {this.state.name} className="inputs" placeholder="Enter name..."/>
						</div>
						
						<div className="info">
							<input type="text" onChange={this.changePhone} value = {this.state.phone} className="inputs" placeholder="Enter phone..."/>
						</div>
						
						<div className="info">
							<input type="text" onChange={this.changeEmail} className="inputs" value = {this.state.email} placeholder="Enter email..."/>
						</div>


						<div className="add">
							<button className="addButton" type="submit" onClick = {this.addContact} >Add</button>
						</div>

					</div>

					 
						<div className="tables"> 
							{arr}
						</div> 
					
				</div>
				
			</div>
		);
	
	}
}
export default Contact;