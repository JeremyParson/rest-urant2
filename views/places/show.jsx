const React = require("react");
const Def = require("../layouts/default");

function show({ place }) {
  let comments = <h3 className="inactive">No comments yet!</h3>;
  let rating = <h3>No ratings yet.</h3>

  if (place.comments.length) {
    let sumRatings = place.comments.reduce((tot, c) => {
      return tot + c.stars
    }, 0)
    let averageRating = Math.round(sumRatings / place.comments.length)
    let stars = ''
    for (let i = 0; i < averageRating; i++) {
      stars += '⭐️'
    }
    rating = (
      <h3>
        {stars} stars
      </h3>
    )

    comments = place.comments.map((c) => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? "Rant! 😡" : "Rave! 😻"}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      );
    });
  }
  return (
    <Def>
      <main>
        <h1>{place.name}</h1>
        {rating}
        <h3>
          Located in {place.city}, {place.state}
        </h3>
        <h3>{place.showEstablished()}</h3>
        <h4>Serving {place.cuisines}</h4>
        <a href={`/places/${place._id}/edit`} className="btn btn-warning">
          Edit
        </a>
        <h2>Comments</h2>
        {comments}
        <form method="POST" action={`/places/${place._id}?_method=DELETE`}>
          <button type="submit" className="btn btn-danger">
            Delete
          </button>
        </form>
        <form
          method="POST"
          action={(`/places/${place._id}/comment`)}
        >
          <label htmlFor="author">Author</label>
          <input id="author" name="author" />
          <label htmlFor="rant">Author</label>
          <input id="rant" name="rant" type='checkbox'/>
          <label htmlFor="author">stars</label>
          <input id="stars" name="stars" />
          <label htmlFor="content">Content</label>
          <input id="content" name="content" />
          <button type="submit" className="btn">
            Comment
          </button>
        </form>
      </main>
    </Def>
  );
}

module.exports = show;
