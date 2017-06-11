import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'
import {getList, init} from './billingCycleActions'
import { reduxForm, Field } from 'redux-form'
import Input from '../common/form/labelInput'


class BillingCycleForm extends Component {
    constructor(props){
        super(props)
    }
   
    render(){
        const { handleSubmit, readOnly } = this.props
        return (
           <form role="form" onSubmit={handleSubmit}>
               <div className="box-body">
                <Field name="name" component={Input} readOnly={readOnly}
                label="Nome" cols="12 4" placeholder="Informe o nome" />
                <Field name="month" component={Input} type="number" readOnly={readOnly}
                label="Mês" cols="12 4" placeholder="Informe o mês" />
                <Field name="year" component={Input} type="number" readOnly={readOnly}
                label="Ano" cols="12 4" placeholder="Informe o ano" />
               </div>
               <div className="box-footer">
                   <button type="submit" className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
                   <button type="button"  className="btn btn-default"
                   onClick={() => this.props.init()}>Cancelar</button>
               </div>
           </form>
        )
    }
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)
 export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)
 