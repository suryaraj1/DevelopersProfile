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
  render() {
    const { showModal } = this.props;
    return (
      <ReactModal isOpen={showModal} onRequestClose className="signup-modal">
        <form type="submit">
          <div className="signup-section">
            <div className="signup-section-upper">
              <p className="signup-section-text">Add developer profile</p>
              <hr className="signup-divider" />
            </div>
            <div className="form-entry-wrapper">
              <FormEntry icon={GithubLogo} name="Github" mandatory={true} />
              <FormEntry icon={LinkedinLogo} name="Linkedin" />
              <FormEntry icon={CodechefLogo} name="Codechef" />
              <FormEntry icon={HackerrankLogo} name="Hackerrank" />
              <FormEntry icon={TwitterLogo} name="Twitter" />
              <FormEntry icon={MediumLogo} name="Medium" />
            </div>
            <hr className="signup-divider" />
            <div className="signup-btn-container">
              <button className="signup-btn close">Close</button>
              <button className="signup-btn submit">Submit</button>
            </div>
          </div>
        </form>
      </ReactModal>
    );
  }
}

export default DeveloperInfo;
