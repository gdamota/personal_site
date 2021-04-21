import React from "react";
import MediaCard from "./Card.js";

class ListRender extends React.Component {
  render() {
    return (
      <div className="skills-page">
        {this.props.data.data.map(el => (
          <div>
            <MediaCard data={el} />
          </div>
        ))}
      </div>
    );
  }
}

export default ListRender;
