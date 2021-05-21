import React from "react";
import GitRepo from "./GitRepo";
import "./GitRepoList.css";

class GitRepoList extends React.Component {
  render() {
    const { repositories } = this.props;
    return (
      <div className="git-repo-list-wrapper">
        <p className="git-repo-heading">Github repositories</p>
        {repositories.map(repository => {
          const { name, description, updated_at, html_url } = repository;
          return (
            <GitRepo
              name={name}
              description={description}
              updated_at={updated_at}
              html_url={html_url}
            />
          );
        })}
      </div>
    );
  }
}

export default GitRepoList;
