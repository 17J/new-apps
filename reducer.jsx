export const reducer = (state, action) => {
  if (action.type === "GET_NEWS") {
    return {
      ...state,
      isLoading:false,
      data: action.payload.data,
    };
  }
  if (action.type === "Search_Post") {
    return {
      ...state,
      isLoading:false,
      query: action.payload,
    };
  }
  if(action.type === "SET_LOADING"){
    return{
      ...state,
      isLoading:false
    }
  }
};
