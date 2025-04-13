import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fetch from 'node-fetch';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(join(__dirname, 'public')));

// Serve HTML
app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'index.html'));
});

// POST route to get career suggestions
app.post('/api/career-suggestions', async (req, res) => {
  const { experience, education, skills, interests } = req.body;

  const prompt = `
  You are a career advisor AI.
  
  Given the following:
  - Experience: ${experience}
  - Education: ${education}
  - Skills: ${skills}
  - Interests: ${interests}
  
  Suggest exactly 3 suitable career options with a short explanation for each. Format your response as a bullet list.
  `;

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer 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',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'openai/gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }]
      })
    });

    const data = await response.json();
    console.log("OpenRouter raw response:", JSON.stringify(data, null, 2));

    if (!data.choices || !data.choices.length || !data.choices[0].message?.content) {
      throw new Error('No choices returned by the AI');
    }

    const suggestions = data.choices[0].message.content.trim();
    res.json({ suggestions });

  } catch (error) {
    console.error('OpenRouter error:', error.message, error.stack);
    res.status(500).json({ error: 'AI generation failed.', details: error.message });
  }
});

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
