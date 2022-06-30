import fetch from "node-fetch";

const getNation = async (name) => {
  try {
    const data = await (
      await fetch(`https://api.nationalize.io?name=${name}`)
    ).json();
    for (let i = 0; i < data.country.length; i++) {
      console.log(
        `Country: ${data.country[i].country_id}, Probability: ${data.country[i].probability} \n`
      );
    }
  } catch (err) {
    console.log(`unspecified "name" arg`);
  }
};

getNation(process.argv[2]);
