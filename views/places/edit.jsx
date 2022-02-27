const React = require("react");
const Def = require("../layouts/default");

function edit_form(data) {
  return (
    <Def>
      <form method="POST" action={`/places/${data.id}?_method=PUT`}>
        <div className="row">
          <div className="form-group col-sm-6">
            <label htmlFor="name">Place Name</label>
            <input id="name" name="name" />
          </div>
          <div className="form-group col-sm-6">
            <label htmlFor="pic">Place Picture</label>
            <input id="pic" name="name" />
          </div>
        </div>
      </form>
    </Def>
  );
}

module.exports = edit_form;
