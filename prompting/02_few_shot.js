import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function main() {
    const result = await client.chat.completions.create({
      model: "gpt-4.1",
      messages: [
        {
          role: "user",
          content: `What is 2 + 2 equals?
          Do not add anything else to the answer,  take the sample form the examples.
          Examples: 
          What is 5 + 4?
          Expected Output: 9(Nine)
          `,
        },
      ],
    });

    console.log(result.choices[0].message.content);
  }


main();
