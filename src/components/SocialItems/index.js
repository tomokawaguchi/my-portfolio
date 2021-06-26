import React from "react";

import { SocialWrapper } from "./style.js";
import { resources } from "../../resources";

const SocialItems = () => {
  return (
    <SocialWrapper className="social-wrapper">
      <ul className="social-list">
        {resources.socialMenu.map((socialItem, index) => {
          const { socialName, socialIcon, socialLink } = socialItem;

          return (
            <li key={index} className="social-item">
              <a className={`social-link link-${socialName}`} href={socialLink} target="_blank" rel="noreferrer">
                <i className={`custom-icon icon-${socialName}`} dangerouslySetInnerHTML={{ __html: socialIcon }} />
              </a>
            </li>
          );
        })}
      </ul>
    </SocialWrapper>
  );
};

export default SocialItems;
