import ProfileCard from "./ProfileCard/ProfileCard";
import ReactDOM from "react-dom";
import React from "react";

const profileElement = document.getElementById("github-profile-card");
ReactDOM.render(<ProfileCard {...profileElement.dataset} />, profileElement);
