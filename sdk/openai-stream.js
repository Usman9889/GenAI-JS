import OpenAI from "openai";
import dotenv from "dotenv";
import {z} from "zod";
import {zodTextFormat} from "openai/helpers/zod";

dotenv.config();
console.log(process.env.OPENAI_API_KEY);
const client = new OpenAI();


async function init (){
      const stream = await client.responses.create({
             model: "gpt-5.5",
      input: [
        {
            role: "user",
            content: "Tell a story about a brave knight who saves a village from a dragon in 100 words.",
        },
      ],
      stream: true,
      });

      for await(const event of stream) {
           if(event && event.delta) process.stdout.write(event.delta);
      }
}

init();