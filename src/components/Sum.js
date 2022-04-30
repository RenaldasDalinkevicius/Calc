import React from "react"
import styled from "styled-components"

    const Wrapper = styled.div`
    width: 100%;
    margin: 1em 0;
    display: flex;
    justify-content: space-between;
    border-radius: 10px;
    background: ${props => props.theme.screen};
    padding: 1em;
    `
    const Total = styled.h1`
    color: ${props => props.theme.text};
    margin: 0;
    `
    const Current = styled(Total)`
    ` 

export default function Sum(props) {
    return (
        <Wrapper>
            <Total>{props.sum?props.sum:null}</Total>
            <Current>{props.currentNum?props.currentNum:0}</Current>
        </Wrapper>
    )
}