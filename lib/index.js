"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ProfileCard_1 = __importDefault(require("./ProfileCard/ProfileCard"));
var react_dom_1 = __importDefault(require("react-dom"));
var react_1 = __importDefault(require("react"));
react_dom_1.default.render(react_1.default.createElement(ProfileCard_1.default, null), document.getElementById("github-profile-card"));
