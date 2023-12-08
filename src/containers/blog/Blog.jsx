import React from 'react';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id="blog">
        <div className='gpt3__blog-heading'>
           <h1 className='gradient__text'>A lot is happening, <br /> We are blogging about it.</h1>
        </div>
        <div className='gpt3__blog-container'>
           <div className='gpt3__blog-container_groupA'>
              <Article imgUrl={blog01} date="Sep 26 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
           </div>
           <div className='gpt3__blog-container_groupB'>
              <Article imgUrl={blog02} date="Oct 3 2021" text="The Ethical Dimensions of OpenAI's Advanced AI Models"/>
              <Article imgUrl={blog03} date="Jan 15 2021" text="Revolutionizing Natural Language Processing: The Story of OpenAI"/>
              <Article imgUrl={blog04} date="Mar 28 2021" text="Education and AI: Exploring OpenAI's Role in Transforming Learning"/>
              <Article imgUrl={blog05} date="May 12 2021" text="The Business Implications of GPT-3: Opportunities and Challenges"/>
            </div>
        </div>
    </div>
  )
}

export default Blog