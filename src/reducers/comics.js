import { FETCH_COMICS_SUCCESS, FETCH_COMICS_FAIL } from '../actions/comics';

const comics = (state = [], action) => {
  switch (action.type) {
    case FETCH_COMICS_SUCCESS:
      return action.payload;
    case FETCH_COMICS_FAIL:
      return [{}];
    default:
      return state;
  }
};

export default comics;
