import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeValue } from './fieldActions'
import { bindActionCreators } from 'redux'

class Field extends Component{

    render(){
        return (
            <div>
               <label>{this.props.value}</label><br/>
                <input onChange={this.props.changeValue} value={this.props.value}/>
            </div>
        )
    }
}

function mapStateToProps (state){
    return {
        value : state.field.value
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({ changeValue }, dispatch)
    
}
//Decorator
export default connect(mapStateToProps, mapDispatchToProps)(Field)