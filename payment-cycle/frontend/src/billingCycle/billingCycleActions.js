import axios from 'axios'
import {toastr} from 'react-redux-toastr'
import {reset as resetForm, initialize} from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'
const INITIAL_VALUES = {}
const URL = 'http://localhost:3003/api'

export const getList = () => {
    const request = axios.get(`${URL}/billingCycles`)
    
     return {
         type: 'BILLING_CYCLES_FETCHED',
         payload: request 
     }
}
export const update = (values) => {
    return dispatch => {
        axios.put(`${URL}/billingCycles/${values._id}`, values)
        .then(rep => {
            toastr.success('Sucesso', 'Operação realizada com sucesso')
            dispatch(init())
        }).catch(e =>{
            e.response.data.errors.forEach( e =>{
                toastr.error('Error', e)
            })
        })
        return {
            type: 'TEMP'
        }
    }
}

export const create = (values) => {
    return dispatch => {
        axios.post(`${URL}/billingCycles`, values)
        .then(rep => {
            toastr.success('Sucesso', 'Operação realizada com sucesso')
            dispatch(init())
        }).catch(e =>{
            e.response.data.errors.forEach( e =>{
                toastr.error('Error', e)
            })
        })
        return {
            type: 'TEMP'
        }
    }
}

export const remove = (values) => {
    return dispatch => {
        axios.delete(`${URL}/billingCycles`, values)
        .then(rep => {
            toastr.success('Sucesso', 'Operação realizada com sucesso')
            dispatch(init())
        }).catch(e =>{
            e.response.data.errors.forEach( e =>{
                toastr.error('Error', e)
            })
        })
        return {
            type: 'TEMP'
        }
    }
}


export const showUpdate = (billingUpdate) =>{
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm',billingUpdate)
    ]
}

export const showDelete = (billingUpdate) =>{
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('billingCycleForm',billingUpdate)
    ]
}



export const init = () =>{
    return [
       showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm',INITIAL_VALUES)
    ]
}