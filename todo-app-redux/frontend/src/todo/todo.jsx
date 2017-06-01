
import React, {Component} from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'
export default class Todo extends Component {
    constructor(props){
        super(props)
        this.state = {description : '', list: []}
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.refresh()
        
    }
    handleAdd(){
        const description = this.state.description;
        axios.post(URL, {description})
        .then((resp) => this.refresh())
    }
    handleChange(e){
        this.setState({...this.state, description: e.target.value})
    }
    refresh(description = ''){
        const search = description ? `&description__regex=/${description}/` : ''
         console.log(search)
        axios.get(`${URL}?sort=-createdAt${search}`)
        .then(resp => {this.setState({...this.state, description, list:resp.data})})
    }
    handleRemove(todo){
        axios.delete(`${URL}/${todo._id}`)
         .then((resp) => this.refresh())
    }
    handleMarkAsDone(todo){
        axios.put(`${URL}/${todo._id}`, {...todo, done: true})
         .then((resp) => this.refresh(this.state.description))
    }
    handleMarkAsPending(todo){
         axios.put(`${URL}/${todo._id}`, {...todo, done: false})
            .then((resp) => this.refresh(this.state.description))
    }
    handleSearch(){
        this.refresh(this.state.description)
    }
    handleClear(){
        this.refresh()
    }
    render(){
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
                <TodoForm 
                    handleClear={this.handleClear}
                    handleSearch={this.handleSearch}
                     handleChange={this.handleChange}
                    description={this.state.description}
                    handleAdd={this.handleAdd}/>
                <TodoList list={this.state.list}
                handleRemove={this.handleRemove}
                handleMarkAsDone={this.handleMarkAsDone}
                handleMarkAsPending={this.handleMarkAsPending}/>
            </div>
        )
    }
}