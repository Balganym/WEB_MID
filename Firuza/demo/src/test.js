import React from 'react'; 
//import logo from './bakk.png'; 
import photo from './contact.jpg' 
import './bootstrap.css' 
import './App.css'; 

class Person extends React.Component{ 
constructor(props){ 
super(props); 
this.state = { 
contacts: [{ 
im:photo, l:"Umirkalykova",n: "Zhazira", p: "87755658598" 
} 
], 
img: '', 
srch: '', 
gender: '' 
} 
this.addContact = this.addContact.bind(this); 
this.fuctionSearch = this.fuctionSearch.bind(this); 
// this.handleChange = this.handleChange.bind(this); 
}; 

addContact(event){ 
event.preventDefault(); 
let name = this.refs.name.value 
let lname = this.refs.surname.value 
let phone = this.refs.phoneNum.value 
let cphoto = this.fileInput.files[0] 

if(name.length>0 && lname.length>0 && phone.length>0){ 
this.setState({ 
contacts: [...this.state.contacts, { im:photo, l: lname, n: name, p: phone}] 
}) 
} 
this.refs.name.value = ''; 
this.refs.surname.value = ''; 
this.refs.phoneNum.value = ''; 


} 

fuctionSearch(event){ 
event.preventDefault(); 

this.setState({ 
srch: event.target.value.substr(0,15) 
}); 
} 

// handleChange(event){ 
// this.setState({ 
// gender: event.target.value 
// }); 
// } 

render(){ 

let fil = this.state.contacts.filter( 
(item)=>{ 
return item.n.toLowerCase().indexOf(this.state.srch.toLowerCase())!==-1;
} 
); 

return( 
<div className="container"> 
<form className="form-inline"> 
<input className = "form-control" type="text" value={this.state.srch} placeholder="search..." ref="search" onChange={this.fuctionSearch}/> 

<input className="form-control" placeholder="fistname" type="text" ref="name"/> 
<input type="text" className="form-control" placeholder="lastname" ref="surname"/> 
<input type="text" className="form-control" placeholder="phone" ref="phoneNum"/> 

<label> 
<input type="file" className="form-control-file" ref={input=>{this.fileInput = input}}/> 
</label> 
<button type ="submit" className="btn" onClick={this.addContact}> Add </button> 
</form> 

<div className="List"> 
<table className="tables"> 

{fil.map((j, i)=>{ 
return( 
<tr> 
<td><img style={{width: 100, height: 130}} src={j.im}/> </td> 
<td className="tdd">{j.n}</td> 
<td>{j.l}</td> 
<td>{j.p}</td> 

</tr> 
)})} 
</table> 
</div> 
</div> 
); 
} 
} 

class App extends React.Component { 
render(){ 
return( 
<div className="ContactList"> 
<Person/> 
</div> 
); 
} 
} 

export default App;