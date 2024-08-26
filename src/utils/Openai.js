import OpenAI from 'openai';
import {OPENAI_Key}  from './constant';

const client = new OpenAI({ 
  apiKey: OPENAI_Key, // This is the default and can be omitted
  dangerouslyAllowBrowser: true
});


export default client;