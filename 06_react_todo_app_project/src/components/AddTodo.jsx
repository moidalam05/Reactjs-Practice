function AddTodo() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter TODO Here"
            className="form-control"
          />
        </div>
        <div className="col-4">
          <input type="date" name="date" id="date" className="form-control" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
