import React, { Component } from "react";

class addMovie extends Component {
  state = {
    name: "",
    date: "",
    rating: "",
    image: ""
  };

  handlechange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          +
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Add Movies
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <label>Movie Title </label>
                <input
                  type="text"
                  name="name"
                  onChange={this.handlechange}
                ></input>
                <label>Movie link </label>
                <input
                  type="text"
                  name="image"
                  onChange={this.handlechange}
                ></input>
                <label>Movie Year </label>
                <input
                  type="date"
                  name="date"
                  onChange={this.handlechange}
                ></input>
                <label>Movie Rate </label>
                <input
                  type="number"
                  min="1"
                  max="5"
                  name="rating"
                  onChange={this.handlechange}
                ></input>
              </div>
              <div className="modal-footer">
                <button
                  className="Modal-btn"
                  onClick={this.closeModal}
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() =>
                    this.props.AddMovie({
                      id: Math.random(),
                      ...this.state
                    })
                  }
                >
                  Add Movie
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default addMovie;
