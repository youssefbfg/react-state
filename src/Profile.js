import {useState} from "react";
import React from "react"
class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      Name:"Youssef",
      bio:"j'apprends toujours des erreurs des autres qui suivent mes conseils"
      ,
      profession:"Homme d'affaire",
      image:"./ysf.jpg",
      timer: 0,
    };
  }

componentDidMount(){
  setInterval (()=>{this.setState({timer:this.state.timer +1})}, 1000)};



  render(){
  return (
    <div>
    
      <h1>{this.state.Name}</h1>
      <h3>{this.state.bio}</h3>
      <h2>{this.state.profession}</h2>
      <img src={this.state.image} />
      <p>{this.state.timer}</p>
      
    </div>
  );
};
}
export default Profile;
