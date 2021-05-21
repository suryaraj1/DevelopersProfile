import React from "react";
import "./GitRepo.css";
import { ReactComponent as LinkLogo } from "../static/north_east-24px.svg";

class GitRepo extends React.Component {
  render() {
    const { name, description, updated_at, html_url } = this.props;
    console.log(html_url);
    return (
      <div className="git-repo">
        <p className="git-repo-name">
          {name}
          <a target="__blank" href={html_url}>
            <LinkLogo className="git-repo-link" src={LinkLogo} />
          </a>
          <span className="git-repo-updated-at">
            Updated on {new Date(updated_at).toDateString()}
          </span>
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
