function TodoItem2() {
  let TodoName = "Go to College";
  let todoDate = "2/10/2023";

  return (
    <div class="container">
      <div class="row kg-row">
        <div class="col-6">{TodoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;
