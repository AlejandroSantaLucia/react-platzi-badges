import React from 'react'

import md5 from 'md5' //*1

function Gravatar (props){ //*2
    const email =  props.email; //*3
    const hash = md5(email); //*4

    return (
        <img className={props.className} src={`https://es.gravatar.com/avatar/${hash}?d=identicon`} alt="Avatar"/> //*5
    )

}

export default Gravatar 