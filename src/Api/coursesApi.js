import fetch from "node-fetch";
import { hash } from '../helpers/hash';
const ENDPOINT_URL = "https://testapi.io/api/redealumni/scholarships";
import { 
  FILTER_CITY, 
  FILTER_CITY_ALL, 
  FILTER_COURSE, 
  FILTER_COURSE_ALL, 
  FILTER_TYPE, 
  FILTER_TYPE_ALL, 
  FILTER_MAX_PRICE, 
  FILTER_MAX_PRICE_ALL, 
  PRESENTIAL,
  DISTANCE
} from '../constants/Utils';


export async function getScholarships(actualFavorites, filterOptions) {
  try {
    
    let res = await fetch(ENDPOINT_URL, {
      mode: 'cors',
      method: 'GET',
    });

    let resJson = await res.json();
    let cities = [];
    let courses = [];
    let minPrice = resJson[0].price_with_discount;
    let maxPrice = resJson[0].price_with_discount;

    if(filterOptions) {
      filterOptions.map((eachFilter) => {
        let filterResult = resJson;

        if(eachFilter.type == FILTER_CITY) {
          filterResult = filterResult.filter(x => x.campus.city == eachFilter.value);
        }

        if(eachFilter.type == FILTER_COURSE) {
          filterResult = filterResult.filter(x => x.course.name == eachFilter.value);
        }

        if(eachFilter.type == FILTER_TYPE) {
          filterResult = filterResult.filter(x => x.course.kind == eachFilter.value);
        }

        if(eachFilter.type == FILTER_MAX_PRICE) {
          filterResult = filterResult.filter((item) => {
            if(item.price_with_discount <= eachFilter.value) {
              return item;
            }
          });
        }

        resJson = filterResult;
      });
    }

    resJson = resJson.filter((item) => {
      if(cities.indexOf(item.campus.city) == -1) {
        cities.push(item.campus.city);
      }

      if(courses.indexOf(item.course.name) == -1) {
        courses.push(item.course.name);
      }


      if(item.price_with_discount < minPrice) {
        minPrice = item.price_with_discount;
      }

      if(item.price_with_discount > maxPrice) {
        maxPrice = item.price_with_discount;
      }


      //Do not show on list courses already marked as favorite
      if(!actualFavorites.find(x => x.id == hash(item))) {
        return item;
      }
    });
    

    return {
      minPrice,
      maxPrice,
      cities,
      courses,
      scholarships: resJson
    };

  } catch(e) {
    throw(e);
  }
}