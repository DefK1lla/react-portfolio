import React from 'react';

import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';

import SectionTitle from '../components/SectionTitle';
import SkillsList from '../components/SkillsList';

import skills from '../content/skills.json';

const Wrapper = styled('section')(({ theme }) => ({
  position: 'relative',
  padding: '50px 0',
  '&::after': {
    content: '""',
    position: 'absolute',
    left: '0',
    top: '0',
    zIndex: -999,
    minWidth: '100%',
    minHeight: '100%',
    background: 'url(./assets/img/skills/bg.svg)',
    backgroundPosition: 'cetner',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    filter: 'blur(40px)',
    opacity: 0.3
  }
}));

const Skills = () => {
  return (
    <Wrapper
      id='skills'
    >
      <Container
        maxWidth='sm'
      >
        <SectionTitle
          component='h1'
        >
          Навыки
        </SectionTitle>

        <SkillsList
          skills={skills}
        />
      </Container>
    </Wrapper>
  );
};

export default Skills;