import React,{Component} from "react";
import { CardList } from "../Components/CardList";
import { Heading } from "../Components/Heading";
import { SearchBar } from "../Components/SearchBar";
import {Scroll} from "../Components/Scroll";
// import { robots } from "./robots";
  
class App extends Component{
    constructor(){
        super()
        this.state={
            robots:[],
            searchfield: ''
        };
    };
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(user=>{this.setState({robots:user})})
    }
    onStateChange=(event)=>{
        console.log(event.target.value);
       this.setState({searchfield:event.target.value})
    }
    render(){
        const filterrobots = this.state.robots.filter(robots=>{
         return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())})
         if(this.state.robots.length===0)
         return(<h1 className="georgia tc">LOADING...</h1>)
        return(
        <>
        <Heading/>
        <div className='flexy'><SearchBar onSearch={this.onStateChange}/></div>
        <Scroll>
        <div className='gridy'>
        <CardList robots={filterrobots}/>
        </div>
        </Scroll>
        </>
    )
}
}
export default App;