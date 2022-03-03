const React = require("react");
const Def = require("../layouts/default");

function show(data) {
  return (
    <Def>
      <main>
        <h1>{data.name}</h1>
        <a href={`/places/${data._id}/edit`} className="btn btn-warning">
          Edit
        </a>
        <form method="POST" action={`/places/${data._id}?_method=DELETE`}>
          <button type="submit" className="btn btn-danger">
            Delete
          </button>
        </form>
      </main>
    </Def>
  );
}

module.exports = show;
