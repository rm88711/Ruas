import React from 'react'
import styled from 'styled-components'
import Ruas   from '../ruas/Ruas'

const DivRuas = styled.ul`
display: flex;
flex-direction: row;
justify-content: center;
background-color:#008000;
margin : 3px;
color: #FFFAFA;
`

const DivRua = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
margin : 3px;
color: #FFFAFA;
border-color: #8A2BE2;
border-style: solid;
`

export default function Main() {
    return (
        <div>
            <h1>Mapa</h1>
            <div>
                <Ruas/>
            </div>
        </div>
    )
}
