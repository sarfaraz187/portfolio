import React from "react";
import FDinfobip from "../images/Freshchat-infobip.png";
import quickbooksLogo from "../images/Freshdesk-Quickbooks.png";
import freshserviceLogo from "../images/Freshservice-logo.png";
import FreshteamCvLibrary from "../images/Freshteam-CvLibrary.png";
import FreshdeskJellyfish from "../images/Freshdesk-Jellyfish.png";
import FreshdeskLogo from "../images/Freshdesk.png";

const MyWork = () => {
  let cardDetails = [
    {
      image: quickbooksLogo,
      link_url: "https://www.freshworks.com/apps/freshdesk/quickbooks_-_mint",
      description:
        "The QuickBooks app lets you handle time-tracking & invoicing from the comfort of your helpdesk.",
      isPublished: "Active",
      buttonText: "View App",
    },
    {
      image: freshserviceLogo,
      link_url:
        "https://www.freshworks.com/apps/freshservice/dynamic_ticket_fields",
      description:
        "Dynamically set your ticket property behavior (show/hide/disable) based on your business rules.",
      isPublished: "Active",
      buttonText: "View App",
    },
    {
      image: FreshteamCvLibrary,
      link_url: "/",
      description:
        "The Cv-Library App let's you manage Job posting, Receive applications and ROI tracking in one place.",
      isPublished: "",
      buttonText: "Development",
    },
    {
      image: FDinfobip,
      link_url: "/",
      description:
        "A custom App developed for Freshchat agents to interact with customers through WhatsApp and Freshchat messaging.",
      isPublished: "",
      buttonText: "Custom App",
    },
    {
      image: FreshdeskLogo,
      link_url: "https://www.freshworks.com/apps/freshdesk/auto_ticket_merger",
      description:
        "This app automatically merges tickets created by the same customer during a certain time span.",
      isPublished: "Active",
      buttonText: "View App",
    },
    {
      image: FreshdeskJellyfish,
      link_url: "/",
      description:
        "A Ruby on Rails application for admins to monitor agents performns and ability to export agent data.",
      isPublished: "",
      buttonText: "Custom App",
    },
  ];
  return (
    <div className="container grid">
      <h3 className="title">My Recent Work</h3>
      <p className="subtitle mb-5">
        Here are a few projects with Freshworks I've worked on recently.
      </p>
      <div className="row">
        {cardDetails.map((item) => {
          return (
            <div className="col-lg-4 col-md-12 p-0">
              <figure className="my-work-box card-bg shadow-sm">
                <img
                  className="project-thumb "
                  alt="test"
                  src={item.image}
                ></img>
                <figcaption className="overlay">
                  <div className="mb-4">
                    <h3 className="text">{item.description}</h3>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      className={`button app-link ${
                        item.isPublished === "Active" ? " " : "disabled"
                      }`}
                      rel="noreferrer"
                      href={item.link_url}
                    >
                      {item.buttonText}
                      <span>
                        <i className="fas fa-greater-than"></i>
                      </span>
                    </a>
                  </div>
                </figcaption>
              </figure>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyWork;
