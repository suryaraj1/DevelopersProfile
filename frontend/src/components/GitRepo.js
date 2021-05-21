import React from "react";
import "./GitRepo.css";

class GitRepo extends React.Component {
  render() {
    const { name, description, updated_at, html_url } = this.props;
    return (
      <div className="git-repo">
        <p className="git-repo-name">
          {name} <span className="git-repo-updated-at">{updated_at}</span>
        </p>
        {description !== null ? (
          <p className="git-repo-description">{description}</p>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default GitRepo;
