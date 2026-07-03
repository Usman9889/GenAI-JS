import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function main() {
  try {
    const result = await client.chat.completions.create({
      model: "gpt-4.1",
      messages: [
        {
          role: "user",
          content: "Tell me a joke.",
        },
      ],
    });

    console.log(result.choices[0].message.content);
  } catch (error) {
    console.error(error);
  }
}

main();