import axios from "axios";
import OpenAI from "openai";
import { formatBirdFromApi } from "./utils.js";
import dotenv from "dotenv";

dotenv.config({});
const MY_KEY = process.env.OPEN_AI_API_KEY;

const openai = new OpenAI({
  apiKey: MY_KEY,
});

axios.defaults.headers["API-Key"] = "";

const fetchBirdFromApi = (birdName = "magpie") => {
  return axios
    .get(`https://nuthatch.lastelm.software/v2/birds?name=${birdName}`)
    .then(({ data }) => {
      return formatBirdFromApi(data.entities[0]);
    });
};

const fetchBirdInfoChatGPT = (birdName = "magpie") => {
  return openai.chat.completions
    .create({
      messages: [
        {
          role: "system",
          content: `Give me a few sentences about a ${birdName}, thanks`,
        },
      ],
      model: "gpt-3.5-turbo",
    })
    .then((completion) => {
      console.log(completion.choices[0]);
      return completion.choices[0];
    });
};

const postBird = () => {
  Promise.all([fetchBirdFromApi, fetchBirdInfoChatGPT]).then((result) => {});
};
