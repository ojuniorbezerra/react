import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'
import {getList} from './billingCycleActions'
import { reduxForm, Field} from 'redux-form'
class BillingCycleForm extends Component {
    constructor(props){
        super(props)
    }
   
    render(){
        const { handleSubmit } = this.props
        return (
           <form role="form" onSubmit={handleSubmit}>
               <div className="box-body">
                <Field name="name" component="input"/>
                <Field name="month" component="input"/>
                <Field name="year" component="input"/>
               </div>
               <div className="box-footer">
                   <button type="submit" className="btn btn-primary">Submit</button>
               </div>
           </form>
        )
    }
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)
export default reduxForm({form: 'billingCycleForm'})(BillingCycleForm)
// export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)
 