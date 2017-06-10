const BilligCycle = require('./billingCycle')
const errorHandle = require('../common/errorHandler')

BilligCycle.methods(['get','post', 'put', 'delete'])
BilligCycle.updateOptions({new: true, runValidators: true})
BilligCycle.after('post', errorHandle).after('put', errorHandle)

BilligCycle.route('count', (req, res, next) => {

    BilligCycle.count((error, count) => {
        if(error){
            res.status(500).json({errors: [error]})
        }else{
            res.json({value})
        }
    })
})


BilligCycle.route('summary', (req, res, next) => {
    BilligCycle.aggregate({
        $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}}
    }, {
        $group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}} 
    }, {
        $project: {_id: 0, credit: 1, debt: 1}
    }, (error, result) => {
        if(error){
            res.status(500).json({erros: [error]})
        }else{
            res.json(result[0] || {credit: 0, debt: 0})
        }
    }
    )
})

module.exports = BilligCycle
