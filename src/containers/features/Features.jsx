import React from 'react';
import './features.css';
import { Feature } from '../../components';

const featuresData = [
  {
    title: 'Improving the Industry',
    text: 'Encourage a culture of continuous improvement within the organization. Regularly assess and refine processes for efficiency and effectiveness.',
  },
  {
    title: 'Giving Back to Society',
    text: 'Explore and adopt new technologies that can streamline operations, improve productivity, and enhance customer experiences.',
  },
  {
    title: 'Merging With our Community',
    text: 'Invest in training programs to develop the skills of your employees. This not only enhances their capabilities but also contributes to employee satisfaction.',
  },
  {
    title: 'Creating a Better Future',
    text: 'Foster open communication channels to ensure that employees feel heard and valued. Engaged employees are more likely to contribute positively to the business.',
  },
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id="features">
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
         <p>Request Early Access to Get Started</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item, index) => (
         <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features