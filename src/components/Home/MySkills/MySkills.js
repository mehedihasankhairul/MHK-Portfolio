import { Container, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './MySkills.css';

const allSkill = [
    { name: 'Javascript', width: 80, type: 'programming'},
    { name: 'React Js', width: 65, type: 'web' },
    { name: 'Express Js', width: 60, type: 'web' },
    { name: 'Node Js', width: 75, type: 'web' },
    { name: 'MongoDB', width: 85, type: 'web' },
    { name: 'Material UI', width: 90, type: 'web' },
    { name: 'Bootstrap', width: 90, type: 'web' },
    { name: 'Python', width: 50, type: 'programming' },
    { name: 'Redux', width: 30, type: 'others' },
    { name: 'React Native', width: 30, type: 'others' },
    { name: 'Git', width: 60, type: 'tools' },
    { name: 'PhotoShop', width: 85, type: 'tools' },
    { name: 'Firebase', width: 65, type: 'tools' },
    { name: 'Netlify', width: 85, type: 'tools' },
    { name: 'Heroku', width: 90, type: 'tools' },
    { name: 'SCSS', width: 45, type: 'web' },
// All skills

{ name: 'Javascript', width: 80, type: 'allSkills'},
{ name: 'React Js', width: 65, type: 'allSkills' },
{ name: 'Express Js', width: 60, type: 'allSkills' },
{ name: 'Node Js', width: 75, type: 'allSkills' },
{ name: 'MongoDB', width: 85, type: 'allSkills' },
{ name: 'Material UI', width: 90, type: 'allSkills' },
{ name: 'Bootstrap', width: 90, type: 'allSkills' },
{ name: 'Python', width: 50, type: 'allSkills' },
{ name: 'Redux', width: 30, type: 'allSkills' },
{ name: 'React Native', width: 30, type: 'allSkills' },
{ name: 'Git', width: 60, type: 'allSkills' },
{ name: 'PhotoShop', width: 85, type: 'allSkills' },
{ name: 'Firebase', width: 65, type: 'allSkills' },
{ name: 'Netlify', width: 85, type: 'allSkills' },
{ name: 'Heroku', width: 90, type: 'allSkills' },
{ name: 'SCSS', width: 45, type: 'allSkills' }

]

const active = {backgroundColor:  'rgb(59, 61, 73)', border: '1px solid #fff'}

const MySkills = () => {
    const [skills, setSkills] = useState([])
    useEffect(() => {
        const selectSkill = allSkill.filter(skill => {
            return skill.type === 'allSkills'
        })
        setSkills(selectSkill)
    }, [])
    
    const changeShowSkills = type => {
        const selectSkill = allSkill.filter(skill => skill.type === type)
        setSkills(selectSkill)
    }
    return (
        <section className="skill-section" id="skills">
            <Container>
                <h2 className="text-center">My Skills</h2>
                <div className='button-container'>

                   
                    <NavLink activeStyle={active} exact to="/allSkills" className="skills-button" onClick={() => changeShowSkills('allSkills')}>All Skills</NavLink>
                    <NavLink activeStyle={active} exact to="/web" className="skills-button" onClick={() => changeShowSkills('web')}>Web Development</NavLink>
                    <NavLink activeStyle={active} to="/programming" className="skills-button" onClick={() => changeShowSkills('programming')}>Programming</NavLink>
                    <NavLink activeStyle={active} to="/tools" className="skills-button" onClick={() => changeShowSkills('tools')}>Tools</NavLink>
                    <NavLink activeStyle={active} to="/others" className="skills-button" onClick={() => changeShowSkills('others')}>Others</NavLink>
                </div>
                <Grid container>
                    {
                        skills.map(skill => (
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <div className="skill">
                                    <h2>{skill.name}</h2>
                                    <p>{skill.width}%</p>
                                    <span className="progress" style={{ width: `${skill.width}%` }}></span>
                                </div>
                            </Grid>
                        ))
                    }

                </Grid>
            </Container>
        </section>
    );
};

export default MySkills;