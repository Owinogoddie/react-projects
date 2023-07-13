import { useState, useEffect } from 'react';
import { Configuration, OpenAIApi } from 'openai';

const WeatherSummary = () => {
    const [summary, setSummary] = useState('');
  
    useEffect(() => {
      const fetchWeatherSummary = async () => {
        const configuration = new Configuration({
          apiKey: "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",
        });
        const openai = new OpenAIApi(configuration);
  
        const completion = await openai.createChatCompletion({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: 'Hello world' },
          ],
        });
  
        const generatedMessage = completion.data.choices[0].message;
        // setSummary(generatedMessage);
        console.log(generatedMessage)
      };
  
      fetchWeatherSummary();
    }, []); // Empty dependency array ensures useEffect runs only once
  
    return <div>{summary}</div>;
  };
  export default WeatherSummary
  