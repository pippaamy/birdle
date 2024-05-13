import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import { decode } from "base64-arraybuffer";

dotenv.config({});

const MY_SUPABASE_KEY = process.env.SUPABASE_API;
// Create Supabase client

const supabase = createClient(
  "https://avxdtyzhgcopxeceojov.supabase.co",
  MY_SUPABASE_KEY
);

async function uploadFile() {
  const { data, error } = await supabase.storage
    .from("bird_pics")
    .upload("./pictures/magpie.png", "./pictures/magpie.png");
  if (error) {
    console.log(error);
    // Handle error
  } else {
    console.log(data);
  }

  //   const { data, error } = await supabase.storage
  //     .from("bird_pics")
  //     .upload("./pictures/magpie.png", decode("base64FileData"), {
  //       contentType: "image/png",
  //     });
  //   console.log(data);
}

uploadFile();

// const insertBird = () => {
//   return supabase
//     .from("birds")
//     .insert({
//       bird_name: "magpiehhhh",
//       description: "pretty",
//       sci_name: "maguspieys",
//       family: "marge",
//       region: "home",
//     })
//     .then((result) => {
//       console.log(result);
//     });
// };
// insertBird();
