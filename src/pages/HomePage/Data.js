// homeObjOne
import Image from '../../images/undraw_react_y7wq.svg'
import Resume from '../../images/Dylan.pdf'
// homeObjTwo
import GraduationPic from '../../images/gradpic.jpg'

export const homeObjOne = {
    primary: true,
    lightBg: false,
    imgStart: false, 
    lightTopLine: true, 
    lightText: true,
    lightTextDesc: true,
    buttonLabel: 'CV/Resume',
    topLine: 'ReactJS Developer',
    headline: "Let's work your Project together.",
    description: 'Currently looking for new opportunities with less than 1 year of experience of being a Developer.',
    img: Image,
    alt: 'Image', 
    start: '',
    resume: Resume,
}

export const homeObjTwo = {
    primary: false,
    lightBg: true,
    imgStart: true, 
    lightTopLine: false, 
    lightText: false,
    lightTextDesc: false,
    buttonLabel: 'Hire Me!',
    topLine: 'Personal Information',
    headline: "Jed Dylan Lee",
    description: "Hi, I'm applying for ReactJS Frontend Developer in your company. With less than 1 year of experience as a developer, I'm confident that my professional expertise aligns closely with the responsibilities outlined in your job advertisement.",
    img: GraduationPic,
    alt: 'Graduation Picture', 
    start: '',
    resume: Resume,
}