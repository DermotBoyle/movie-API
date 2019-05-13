import React from "react";

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      poster: "",
      comment: ""
    };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitForm = e => {
    e.preventDefault();

    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    };
    const url = "http://campus-bordeaux.ovh:3001/api/quests/movies/";

    if (
      this.state.name === "" ||
      this.state.poster === "" ||
      this.state.comment === ""
    ) {
      alert("Please fill all the fields :)!");
    } else {
      fetch(url, config)
        .then(res => res.json())
        .then(res => {
          if (res.error) {
            alert(res.error);
          } else {
            alert(`Added movie with the ID ${res}!`);
          }
        })
        .catch(e => {
          console.error(e);
          alert("Error during movie addition");
        });
      this.setState({
        name: "",
        poster: "",
        comment: ""
      });
    }
  };

  render() {
    return (
      <div className="FormEmployee">
        <h1>Movie API - POST </h1>

        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Information</legend>
            <div className="form-data">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={this.onChange}
                value={this.state.name}
                required
              />
            </div>

            <div className="form-data">
              <label htmlFor="firstname">Poster</label>
              <input
                type="text"
                id="poster"
                name="poster"
                onChange={this.onChange}
                value={this.state.poster}
                required
              />
            </div>

            <div className="form-data">
              <label htmlFor="comment">comment</label>
              <input
                type="comment"
                id="comment"
                name="comment"
                onChange={this.onChange}
                value={this.state.email}
              />
            </div>
            <hr />
            <div className="form-data">
              <input type="submit" value="Send" />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Movie;
