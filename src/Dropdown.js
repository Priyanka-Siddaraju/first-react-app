import React, { Component } from 'react';
import Button from './Button';

class Dropdown extends Component {

    constructor()
    {
        super();
        this.state = {
            show: false,
            caption: "select todos",
            todo: [
            ],
            addition: "",
            newjson: ""
            
        }
    }
    componentWillMount() {
        console.log("component mounting.......")
        fetch("http://localhost:3000/todo")
        .then(res=>res.json())
        .then((data)=>{
            console.log(data)
            this.state.todo = data
        })
    }
    clickparent()
    {
        console.log("parent")
        this.setState({show: !(this.state.show)})
        console.log(this.state.show)
    }
    selectoption(newname)
    {
        console.log("name changed")
        this.setState({caption:newname, show:false})
    }

    additiontodo(event)
    {
        console.log(event.target.value)
        this.setState({addition: event.target.value})
    }

    addtodo()
    {
        console.log(this.state.addition)
        const fetch = window.fetch.bind(window)
        fetch("http://localhost:3000/todo", {headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },method:'post', body:JSON.stringify({"text":this.state.addition})})
        
    }

    render() {
        var list = this.state.todo.map((todo,id)=><a className="dropdown-item" href="#" key={id} onClick={this.selectoption.bind(this,todo.text)}>{todo.text}</a>)
        return (
            <div>
            <input onChange={this.additiontodo.bind(this)} type="text" name="fname" placeholder="add todo"></input><br></br>
            <button type="button" class="btn btn-primary" onClick = {this.addtodo.bind(this)}>Add Todo</button><br></br>
            <Button caption = {this.state.caption} whenclick = {this.clickparent.bind(this)} ></Button>
            <div class="dropdown" >
                <div className={this.state.show?"dropdown-menu show": "dropdown-menu"} aria-labelledby="dropdownMenuButton">
                    {list}
                </div>
            </div>
            </div>
        );
    }
}

export default Dropdown;