const axios = require("axios");
const { formatBirdFromApi } = require("./utils");
const OpenAI = require("openai");

const MY_KEY = process.env.OPEN_AI_API_KEY;
const openai = new OpenAI({
  apiKey: MY_KEY,
});

axios.defaults.headers["API-Key"] = "";

const fetchBirdFromApi = (birdName) => {
  return axios
    .get(`https://nuthatch.lastelm.software/v2/birds?name=${birdName}`)
    .then(({ data }) => {
      return formatBirdFromApi(data.entities[0]);
    });
};

const fetchBirdInfoChatGPT = (birdName) => {
  return openai.chat.completions
    .create({
      messages: [
        {
          role: "system",
          content: "Give me a few sentences about a magpie, thanks",
        },
      ],
      model: "gpt-3.5-turbo",
    })
    .then((completion) => {
      console.log(completion.choices[0]);
    });
};

fetchBirdInfoChatGPT();
module.exports = { fetchBirdFromApi };
