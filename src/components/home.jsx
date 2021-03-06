import React from "react";
import "../css/home.scss";

export default class Home extends React.Component {
  render() {
    return (
      <div id="home">
        <div id="homeContent">
          <div id="homeTitle">
            <span>{this.props.data.content.title}</span>
          </div>
          <br />
          <br />
          <div id="homePara">
            <p>{this.props.data.content.para}</p>
          </div>
        </div>
        <div id="homeUrlsBox">
          {Object.keys(this.props.data.urls).map((key) => (
            <div key={key}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="homeUrls"
                href={this.props.data.urls[key]}
              >
                {key}
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
