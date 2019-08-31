const fetch = require("node-fetch");
const ENDPOINT_URL = "https://testapi.io/api/redealumni/scholarships";

export async function getScholarships() {
  try {
    
    const res = await fetch(ENDPOINT_URL, {
      mode: 'cors',
      method: 'GET',
    });

    return await res.json();

  } catch(e) {
    throw(e);
  }
}