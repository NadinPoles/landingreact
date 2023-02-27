import { SET_WIDTH_FILTER, GET_SECTION_PRODUCTS } from "./actionTypes";
import { setWidthFilter } from "./actions";
import { FiltersState } from "./types";

const initialState: FiltersState = {
  filterProducts: [],
};

type FilterAction = ReturnType<typeof setWidthFilter>;

export default function filterReducer(
  state = initialState,
  action: FilterAction
) {
  switch (action.type) {
    case GET_SECTION_PRODUCTS:
      return {
        ...state,
        filterProducts: action.payload,
      };
    case SET_WIDTH_FILTER:
      return {
        ...state,
        filterProducts: state.filterProducts.filter(
          (item) => item.width === Number(action.payload.currentTarget.value)
        ),
      };
    default:
      return state;
  }
}
