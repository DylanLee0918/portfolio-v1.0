import React from 'react'
import { CardContainer, Title, Subtle } from './CardElements'

const Card = (props) => {
    return (
        <>
            <CardContainer>
                <Title>{ props.data.name }</Title>
                <span>Experience: <Subtle>{ props.data.experience }</Subtle></span>
                
            </CardContainer>
        </>
    )
}

export default Card
