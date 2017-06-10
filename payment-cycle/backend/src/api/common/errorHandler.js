const _ = require('lodash')

module.exports = (req, res, next) => {
    const bundle = res.locals.bundle

    if(bundle.errors){
        const erros = parseErros(bundle.erros)
        res.status(500).json(erros)
    }else{
        next()
    }
}

const parseErros = (nodeRestfulErros) => {
    const errors = []
    _.forIn(nodeRestfulErros, error => errors.push(error.message))
    return errors
}