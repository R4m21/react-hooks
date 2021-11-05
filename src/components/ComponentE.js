import React, { useContext } from 'react'
import { LastContext, UserContext } from './ComponentC'
import ComponentF from './ComponentF'

function ComponentE() {
    const user = useContext(UserContext)
    const last = useContext(LastContext)
    return (
        <div>
            <ComponentF/>
            <div>
               full name is : {user+" "+last}
            </div>
        </div>
    )
}

export default ComponentE
