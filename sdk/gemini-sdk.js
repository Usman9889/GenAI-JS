import {GoogleGenAI} from '@google/genai'
import dotenv from 'dotenv'
dotenv.config();
const client = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
});

async function main() {
      const response = await client.models.generateContent({
            model: 'gemini-3.5-flash',
            contents: 'why is sky blue?',
      });
      console.log(response.text);
}
main();