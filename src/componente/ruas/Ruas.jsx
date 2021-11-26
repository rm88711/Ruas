import React from 'react'
import styled from 'styled-components'
import Predio from '../predio/Predio'

const DivRuas = styled.ul`
display: flex;
flex-direction: row;
justify-content: center;
margin : 3px;
color: #006400;
border-style: solid;
border-color: #00f;
`

const DivRua = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
margin : 3px;
border-color: #8A2BE2;
border-style: solid;
`

export default function Ruas() {
    return (
        <DivRuas>
            <DivRua>
                <p>Rua1</p>
                <Predio/>
            </DivRua>
            <DivRua>
                <p>Rua2</p>
            </DivRua>
        </DivRuas>
    )
}
