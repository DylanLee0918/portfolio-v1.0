import React from 'react'
import { skillObjOne } from './SkillData'
import SkillSection from '../../components/SkillSection/SkillSection'

const Skill = () => {
    return (
        <>
           <SkillSection  {...skillObjOne}/>
        </>
    )
}

export default Skill
