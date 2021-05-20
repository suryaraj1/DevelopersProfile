import React from "react";
import "./DeveloperInfo.css";
import ReactModal from "react-modal";
import FormEntry from "./FormEntry";
import GithubLogo from "../static/iconfinder_github_317712.png";
import CodechefLogo from "../static/codechef-1324440139527402917_32.png";
import HackerrankLogo from "../static/iconfinder_160_Hackerrank_logo_logos_4373234.png";
import LinkedinLogo from "../static/iconfinder_2018_social_media_popular_app_logo_linkedin_3225190.png";
import TwitterLogo from "../static/iconfinder_2018_social_media_popular_app_logo_twitter_3225183.png";
import MediumLogo from "../static/iconfinder_Circled_Medium_svg5_5279113.png";

class DeveloperInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      githubHandle: "",
      codechefHandle: "",
      hackerrankHandle: "",
      linkedinHandle: "",
      twitterHandle: "",
      mediumHandle: "",
    };
  }

  onInputGithub = e => {
    this.setState({
      githubHandle: e.target.value,
    });
  };

  onInputCodechef = e => {
    this.setState({
      codechefHandle: e.target.value,
    });
  };

  onInputHackerrank = e => {
    this.setState({
      hackerrankHandle: e.target.value,
    });
  };

  onInputCodechef = e => {
    this.setState({
      codechefHandle: e.target.value,
    });
  };

  onInputLinkedin = e => {
    this.setState({
      linkedinHandle: e.target.value,
    });
  };

  onInputTwitter = e => {
    this.setState({
      twitterHandle: e.target.value,
    });
  };

  onInputMedium = e => {
    this.setState({
      mediumHandle: e.target.value,
    });
  };

  render() {
    const { showModal } = this.props;
    const {
      githubHandle,
      codechefHandle,
      linkedinHandle,
      twitterHandle,
      hackerrankHandle,
      mediumHandle,
    } = this.state;
    return (
      <ReactModal isOpen={showModal} onRequestClose className="signup-modal">
        <form type="submit">
          <div className="signup-section">
            <div className="signup-section-upper">
              <p className="signup-section-text">Add developer profile</p>
              <hr className="signup-divider" />
            </div>
            <div className="form-entry-wrapper">
              <FormEntry
                icon={GithubLogo}
                name="Github"
                value={githubHandle}
                mandatory={true}
                onInput={this.onInputGithub}
              />
              <FormEntry
                icon={LinkedinLogo}
                name="Linkedin"
                value={linkedinHandle}
                onInput={this.onInputLinkedin}
              />
              <FormEntry
                icon={CodechefLogo}
                name="Codechef"
                value={codechefHandle}
                onInput={this.onInputCodechef}
              />
              <FormEntry
                icon={HackerrankLogo}
                name="Hackerrank"
                value={hackerrankHandle}
                onInput={this.onInputHackerrank}
              />
              <FormEntry
                icon={TwitterLogo}
                name="Twitter"
                value={twitterHandle}
                onInput={this.onInputTwitter}
              />
              <FormEntry
                icon={MediumLogo}
                name="Medium"
                value={mediumHandle}
                onInput={this.onInputMedium}
              />
            </div>
            <hr className="signup-divider" />
            <div className="signup-btn-container">
              <button className="signup-btn close">Close</button>
              <button className="signup-btn submit" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </ReactModal>
    );
  }
}

export default DeveloperInfo;
