import axios from 'axios'

const URL = 'http://localhost:3003/api'

export const getSummary = () => {
    const request = axios.put(`${URL}/billingCycles/summary`)
     return {
         type: 'BILLING_SUMMARY_FETCHED',
         payload: request 
     }
}
