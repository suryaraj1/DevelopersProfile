import React from "react";
import "./Hero.css";
import SocialLink from "./SocialLink";
import GithubLogo from "../static/iconfinder_github_317712.png";
import CodechefLogo from "../static/codechef-1324440139527402917_32.png";
import HackerrankLogo from "../static/iconfinder_160_Hackerrank_logo_logos_4373234.png";
import LinkedinLogo from "../static/iconfinder_2018_social_media_popular_app_logo_linkedin_3225190.png";
import TwitterLogo from "../static/iconfinder_2018_social_media_popular_app_logo_twitter_3225183.png";
import MediumLogo from "../static/iconfinder_Circled_Medium_svg5_5279113.png";
import CompanyLogo from "../static/business-24px.svg";
import LocationLogo from "../static/location_on-24px.svg";
import BlogLogo from "../static/insert_link-24px (1).svg";
import OtherLinks from "./OtherLinks";
import GitHubCalender from "react-github-calendar";

class Hero extends React.Component {
  render() {
    const { developer } = this.props;
    const {
      name,
      bio,
      avatar_url,
      github_id,
      hackerrank_id,
      codechef_id,
      medium_id,
      twitter_id,
      linkedin_id,
      company,
      blog,
      location,
    } = developer;
    return (
      <div className="hero-section">
        <img className="hero-section-img" src={avatar_url} alt="hero-avatar" />
        <div className="hero-section-information">
          <p className="hero-section-name">{name}</p>
          <p className="hero-section-bio">{bio}</p>
          <div className="hero-section-profile-links">
            <SocialLink
              url={`https://github.com/${github_id}`}
              img={GithubLogo}
              alternateText="github-logo"
            />
            <SocialLink
              url={
                codechef_id !== ""
                  ? `https://codechef.com/users/${codechef_id}`
                  : ""
              }
              img={CodechefLogo}
              alternateText="codechef-logo"
            />
            <SocialLink
              url={
                hackerrank_id !== ""
                  ? `https://hackerrank.com/${hackerrank_id}`
                  : ""
              }
              img={HackerrankLogo}
              alternateText="hackerrank-logo"
            />
            <SocialLink
              url={
                linkedin_id !== ""
                  ? `https://linkedin.com/in/${linkedin_id}`
                  : ""
              }
              img={LinkedinLogo}
              alternateText="linkedin-logo"
            />
            <SocialLink
              url={
                twitter_id !== "" ? `https://codechef.com/${twitter_id}` : ""
              }
              img={TwitterLogo}
              alternateText="twitter-logo"
            />
          </div>
          <div className="hero-section-other-links">
            <OtherLinks img={LocationLogo} info={location} />
            <OtherLinks img={CompanyLogo} info={company} />
            <OtherLinks img={BlogLogo} info={blog} />
          </div>
          <GitHubCalender
            className="hero-section-calender"
            username={developer.id}
          />
        </div>
      </div>
    );
  }
}

export default Hero;
