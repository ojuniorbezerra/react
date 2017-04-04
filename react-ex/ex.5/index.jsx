import React from 'react'
import ReactDOM from 'react-dom'

import ShowFamily from './showFamily'
import Member from './menber'

ReactDOM.render( 
        <ShowFamily lastName="Deves">
            <Member name="Junior"  />
            <Member name="Joel"/>
            <Member name="Daniel"/>
        </ShowFamily>
    , document.getElementById('app'))