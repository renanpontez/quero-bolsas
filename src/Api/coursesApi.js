import fetch from "node-fetch";
import { hash } from '../helpers/hash';
const ENDPOINT_URL = "https://testapi.io/api/redealumni/scholarships";


export async function getScholarships(actualFavorites) {
  try {
    
    let res = await fetch(ENDPOINT_URL, {
      mode: 'cors',
      method: 'GET',
    });

    let resJson = await res.json();
    let cities = [];
    let courses = [];

    resJson = resJson.filter((item) => {
      if(cities.indexOf(item.campus.city) == -1) {
        cities.push(item.campus.city);
      }

      if(courses.indexOf(item.course.name) == -1) {
        courses.push(item.course.name);
      }

      //Do not show on list courses already favorited
      if(!actualFavorites.find(x => x.id == hash(item))) {
        return item;
      }
    });

    return {
      cities,
      courses,
      scholarships: resJson
    };

  } catch(e) {
    throw(e);
  }
}