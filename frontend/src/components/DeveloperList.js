import React from "react";
import DeveloperLink from "./DeveloperLink";
import "./DeveloperList.css";

class DeveloperList extends React.Component {
  render() {
    const { developers } = this.props;
    return (
      <div className="developer-list">
        {developers.map(developer => {
          const { id, avatar_url } = developer;
          return <DeveloperLink image={avatar_url} handle={id} key={id} />;
        })}
      </div>
    );
  }
}

export default DeveloperList;
