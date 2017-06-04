import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { add, changeDescription, search, clear } from './todoActions'

class TodoForm extends Component {
    constructor(props){
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }
    keyHandler(e){
        const {add, seach, description} = this.props
        if(e.key === 'Enter'){
            e.shiftKey ? this.props.search() : this.props.add(description)
        }else if(e.key === 'Escape'){
            this.props.clear()
        }
    }
    componentWillMount(){
        this.props.search()
    }
    render(){
         const {add, search, description} = this.props
        return (
        <div role="form" className="todoForm">
            <Grid cols='12 9 10'>
                    <input id="description" className='form-control'
                    value={this.props.description}
                    onKeyUp={this.keyHandler}
                    onChange={this.props.changeDescription}
                    placeholder='Add'/>
            </Grid>
            <Grid cols='12 3 2'>
            <IconButton style='primary' icon='plus'
            onClick={() =>add(description)} ></IconButton>
                <IconButton style='info' icon='search'
            onClick={search} ></IconButton>
                <IconButton style='default' icon='close'
            onClick={() => clear} ></IconButton>
            </Grid>
        </div>
        )
    }
}

const mapStateToProps = state => ({description: state.todo.description})

const mapDispatchToProps = dispatch => bindActionCreators({changeDescription, search, add, clear}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)