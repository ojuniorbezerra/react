const BilligCycle = require('./billingCycle')

BilligCycle.methods(['get','post', 'put', 'delete'])
BilligCycle.updateOptions({new: true, runValidators: true})

BilligCycle.route('count', (req, res, next) => {

    BilligCycle.count((error, count) => {
        if(error){
            res.status(500).json({errors: [error]})
        }else{
            res.json({value})
        }
    })

})

module.exports = BilligCycle
