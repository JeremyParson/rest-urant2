const React = require("react");
const Def = require("../layouts/default");

function edit_form(data) {
  return (
    <Def>
      <form method="POST" action={`/places/${data._id}?_method=PUT`}>
        <div className="row">
          <div className="form-group col-sm-6">
            <label htmlFor="name">Place Name</label>
            <input id="name" name="name" value={data.name}/>
          </div>
          <div className="form-group col-sm-6">
            <label htmlFor="pic">Place Picture</label>
            <input id="pic" name="pic" value={data.pic}/>
          </div>
          <div className="form-group col-sm-6">
            <label htmlFor="name">City</label>
            <input id="city" name="city" value={data.city}/>
          </div>
          <div className="form-group col-sm-6">
            <label htmlFor="pic">State</label>
            <input id="state" name="state" value={data.state}/>
          </div>
          <div className="form-group col-sm-6">
            <label htmlFor="pic">Cuisines</label>
            <input id="cuisines" name="cuisines" value={data.cuisines}/>
          </div>
          <div className="form-group col-sm-6">
            <label htmlFor="founded">Date Founded</label>
            <input id="founded" name='founded' type="date" value={data.founded}/>
          </div>
          <input className="btn btn-primary" type="submit" value="Edit Place" />
        </div>
      </form>
    </Def>
  );
}

module.exports = edit_form;
