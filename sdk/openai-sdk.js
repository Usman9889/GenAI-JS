import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const client = new OpenAI();
// console.log(process.env.OPENAI_API_KEY);
async function init (){
      const result = await client.responses.create({
            model: "gpt-4.1-mini",
            input: "Hey, My name is mohammad usman."
      });

      console.log(result.output_text);
}

init();