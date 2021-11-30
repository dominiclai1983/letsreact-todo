const checkStatus = (response) => {
    if (response.ok) {
      // .ok returns true if response status is 200-299
      return response;
    }
    throw new Error('Request was either a 404 or 500');
  }
  
  const json = (response) => response.json()
  
  class ToDoList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        new_task: '',
        tasks: [],
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({ new_task: event.target.value });
    }
  
    handleSubmit(event) {
      event.preventDefault();
      // do nothing for now
    }
  
    render() {
      const { new_task, tasks } = this.state;
  
      return (
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="mb-3">To Do List</h2>
              {tasks.length > 0 ? tasks.map((task) => {
                return null; // return nothing for now
              }) : <p>no tasks here</p>}
              <form onSubmit={this.handleSubmit} className="form-inline my-4">
                <input
                  type="text"
                  className="form-control mr-sm-2 mb-2"
                  placeholder="new task"
                  value={new_task}
                  onChange={this.handleChange}
                />
                <button type="submit" className="btn btn-primary mb-2">Submit</button>
              </form>
            </div>
          </div>
        </div>
      )
    }
  }

  class ToDoList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        new_task: '',
        tasks: [],
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
      fetch("https://altcademy-to-do-list-api.herokuapp.com/tasks?api_key=48")
        .then(checkStatus)
        .then(json)
        .then((response) => {
          console.log(response);
          this.setState({tasks: response.tasks});
        })
        .catch(error => {
          console.error(error.message);
        })
    }
  
  ReactDOM.render(
    <ToDoList />,
    document.getElementById('root')
  );