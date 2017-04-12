import React from 'react'
import { connect } from 'react-redux'
import { inc, dec, stepChanged } from './counterAction'
import { bindActionCreators } from 'redux'

const Counter = (props) => {
    return <div>
            <h1>{props.counter.number}</h1>
            <input onChange={props.stepChanged}
            value={props.counter.step} type="number"></input>
            <button onClick={props.dec}>Dec</button>
            <button onClick={props.inc}>Inc</button>
        </div>
}

const mapStateToProps = state => ({counter: state.counter})
const mapDispatchProps = dispatch => bindActionCreators({ inc, dec, stepChanged}, dispatch)

export default connect(mapStateToProps, mapDispatchProps)(Counter);

