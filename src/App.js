import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  state ={
    title:"",
    url: "",
    image:[]
  }

  addTitle = (e) => {  
    this.setState({
      title:e.target.value
    })
  }

  addURL =(e) =>{
    
   let url = this.state.url;
    this.setState({

      url: e.target.value,
    })
  }

  

  addImage = () => {
    let arr1 = this.state.image;

    if(!this.state.url.match(/.(jpg|jpeg|png|gif)$/i)){

      alert("Not a Valid URL");

    } else if(this.state.title.length <1){

      alert("Enter a Image Title")
    }
    
    else
    arr1.push({url:this.state.url, title:this.state.title})
    this.setState({
      image:arr1,
      url:"",
      title: "",
    })
  

  }


  

  render() {
    return (
      <div className="App">
      <div>
        <label className="title">URL</label><br/>
         <input className="titleField" onChange={this.addURL} value={this.state.url}></input><br/>
         <lable className="title">TITLE</lable><br/>
         <input className="titleField" onChange={this.addTitle} value={this.state.title} ></input><br/>
         <button className="button" onClick={this.addImage}>POST</button>
         
      </div>
        
        {
          this.state.image.map((ele)=>{
              return <div className="card">
                <img className="image" src ={ele.url} alt="image1" key ={Math.random()}/>
                <h1 className="container">{ele.title}</h1>
              </div>
              
          })
        }



      </div>
    )

    }  
}

export default App;
