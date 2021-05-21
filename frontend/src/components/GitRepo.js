import React from "react";
import "./GitRepo.css";
import LinkLogo from "../static/north_east-24px.svg";

class GitRepo extends React.Component {
  render() {
    const { name, description, updated_at, html_url } = this.props;
    return (
      <div className="git-repo">
        <hr className="git-repo-divider" />
        <p className="git-repo-name">
          {name} <img className="git-repo-link" src={LinkLogo} />
          <span className="git-repo-updated-at">Updated on {updated_at}</span>
        </p>
        {description !== null ? (
          <p className="git-repo-description">{description}</p>
        ) : (
          ""
        )}
        <hr className="git-repo-divider" />
      </div>
    );
  }
}

export default GitRepo;
