

function App() {
  return (
    <div id="container">
      <div id="toDoWindow">
          <div id="toDoLists">
              <div id="toDoTitle">
                  To-Do Lists
                  <button id="newProject">Create Project</button>
              </div>
              <div id="toDoSubmit">
                  <form id="formBox">
                      <input type="text" id="submitBox" placeholder="Add a task to your To-Do list..."></input>
                  </form>
              </div>
              <div id="toDoDisplay">

                  <label for="check" class="projectButton">Misc</label>
                  <input type="checkbox" class="projectCheck" id="check" />
                  <div class="projectContent" id="miscProject">

                  </div>

              </div>
          </div>

          <div id="toDoNotes">

          </div>
      </div>
    </div>
  );
}

export default App;
