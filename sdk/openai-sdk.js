import OpenAI from "openai";
import dotenv from "dotenv";
import {z} from "zod";
import {zodTextFormat} from "openai/helpers/zod";

dotenv.config({path: "../.env"});
console.log(process.env.OPENAI_API_KEY);
const client = new OpenAI();

const riskSchema = z.object({
      title: z.string().describe("The actual title of the identified risk."),
      tag: z.array(z.string()).describe("A list of tags associated with the risk."),
      score : z.number().min(0).max(5).describe("0 is low risk and 5 is high risk.")
})
const outputSchema = z.object({
      risks: z.array(riskSchema).describe("A list of identified risks with their titles, tags, and scores.")});
async function init (){
      const result = await client.responses.parse({
            model: "gpt-4.1-mini",
            text: {
                  format: zodTextFormat(outputSchema, "risksSchema"),
            },
            input: `
            The software may experience unexpected technical issues during development, including integration failures between third-party services, database inconsistencies, and compatibility problems across different operating systems and web browsers. Such issues can increase development time and require additional testing before release.
            Security remains a significant concern, as vulnerabilities such as weak authentication, insecure APIs, or outdated dependencies could expose sensitive user information. Regular security audits, dependency updates, and penetration testing are recommended to reduce the likelihood of security incidents.
            `
      });

      console.log(result.output_parsed);
}

init();