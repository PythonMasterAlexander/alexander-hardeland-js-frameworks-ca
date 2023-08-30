function checkForReview(listOfReviews: Array<object>) {
  if (Array.isArray(listOfReviews) && listOfReviews.length !== 0) {
    return true;
  } else {
    return false;
  }
}
export default checkForReview;
