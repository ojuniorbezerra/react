import axios from 'axios'

const URL = 'http://localhost:3003/api'

export const getList = () => {
    const request = axios.get(`${URL}/billingCycles`)
    request.then(({data}) => {
         console.log(data)
    }
    )
     return {
         type: 'BILLING_CYCLES_FETCHED',
         payload: request 
     }
}


export const create = (values) => {
    console.log(values)
    const request = axios.post(`${URL}/billingCycles`, values)
     return {
         type: 'TEMP',
         payload: request 
     }
}
