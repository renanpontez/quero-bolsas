import { ADD_SCHOLARSHIP, REMOVE_SCHOLARSHIP } from '../constants/ActionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';
import { sortByCollegeName } from '../helpers/sort';

export default function scholarshipReducer(state = initialState.scholarships, action) {
  let newState;

  switch (action.type) {
    case ADD_SCHOLARSHIP:
      newState = [...state]
      newState = newState.concat(action.items);
      newState.sort(sortByCollegeName);
    
      return newState;

    case REMOVE_SCHOLARSHIP:
      newState = [...state];
      newState = newState.filter((eachItem) => {
        return eachItem.id != action.item.id ? eachItem : null;
      });

      newState.sort(sortByCollegeName);

      return newState;
    
    
    default: return state;
  }
}