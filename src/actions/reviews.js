//* need form info here

export const addTrailtoReview = trail => {
  return {
    type: 'ADD_TRAIL_TO_REVIEW',
    trail
  }
}
//synchronous actions
export const setMyReviews = reviewsData => {
  //reviewsData is an array of review objects
  return {
    type: 'SET_MY_REVIEWS',
    reviewsData
  }
}

//async actions

export const getMyReviews = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/reviews", {
      credentials: "include",
      method: "GET",
      hearders: {
        "Content-Type": "application/json"
      },
    })
      .then(res => res.json())
      .then(reviewsObj => {
        if (reviewsObj.error) {
          alert(reviewsObj.error)
        } else {
          dispatch(setMyReviews(reviewsObj.data))
        }
      })
      .catch(console.logs)
  }
}
