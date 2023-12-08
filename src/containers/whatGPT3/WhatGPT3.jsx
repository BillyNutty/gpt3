import React from 'react';
import './whatGPT3.css';
import { Feature } from '../../components';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
       <div className='gpt3__whatgpt3-feature'>
          <Feature title="What is GPT-3" text="OpenAI is committed to conducting cutting-edge research in artificial intelligence and strives to share its findings with the public. The organization collaborates with other research and policy institutions to address global challenges associated with AGI." />
       </div>
       <div className='gpt3__whatgpt3-heading'>
          <h1 className='gradient__text'>The possibilities are beyond your imaginiation.</h1>
          <p>Explore The Library</p>
       </div>
       <div className='gpt3__whatgpt3-container'>
          <Feature title="Chatbots" text="OpenAI's mission is to ensure that artificial general intelligence (AGI) benefits all of humanity. AGI refers to highly autonomous systems that have the capability to outperform humans at most economically valuable work." />
          <Feature title="Knowledgebase" text="GPT models are pre-trained on a large corpus of text data, learning to predict the next word in a sentence. This pre-training process helps the model capture grammar, context, and factual information from the data it is exposed to." />
          <Feature title="Education" text="GPT models use the transformer architecture, which has proven highly effective in natural language processing tasks. Transformers allow the model to process input data in parallel, making them efficient for training on large datasets." />
       </div>
    </div>
  )
}

export default WhatGPT3