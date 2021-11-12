import React from 'react'
import Cards from '../SkillSection/Cards/Card'
import { Container } from '../../globalStyles'
import { SkillSec, WrapperGrid} from './SkillSectionElements'
import { Tech } from '../../pages/SkillPage/Skills'

const SkillSection = ({lightBg}) => {
    return (
        <>
            <SkillSec lightBg={lightBg}>
                <Container>
                    <WrapperGrid>
                       {
                           Tech.map((tech, index) => <Cards data={tech} key={index} />)
                       }
                    </WrapperGrid>
                </Container>
            </SkillSec>
        </>
    )
}

export default SkillSection
