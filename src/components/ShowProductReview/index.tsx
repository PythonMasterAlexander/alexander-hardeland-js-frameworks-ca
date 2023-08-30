interface reviewData {
  id: string;
  username: string;
  rating: number;
  description: string;
}

function ShowProductReview() {
  return (
    <div>
      Hello World
      {/* Got stuck here

      {data.map((review) => (
        <ul>
          <li key={review.id}>
            <h5>Username: {review.username}</h5>
            <p>Rating: {review.rating}</p>
            <p>Description: {review.description}</p>
          </li>
        </ul>
            ))}
            */}
    </div>
  );
}
export default ShowProductReview;
