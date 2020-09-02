"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var ProfileCard_styles_1 = require("./ProfileCard.styles");
var react_google_font_loader_1 = __importDefault(require("react-google-font-loader"));
var axios_1 = __importDefault(require("axios"));
var ProfileCard = function (props) {
    var width = props.width, height = props.height, color = props.color, name = props.name, id = props.id, profileSrc = props.profileSrc, repositoryCount = props.repositoryCount, followerCount = props.followerCount, followingCount = props.followingCount, introduce = props.introduce;
    var _a = react_1.useState(null), profile = _a[0], setProfile = _a[1];
    var _b = react_1.useState(false), isMount = _b[0], setIsMount = _b[1];
    react_1.useEffect(function () {
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            var Axios, profile;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Axios = axios_1.default.create({
                            baseURL: "https://api.github.com/users",
                            auth: { username: "d93bbed6abb05249b568", password: "d29ba5732f3672cd20a16f4f16900666c29a09b0" }
                        });
                        return [4 /*yield*/, Axios.get("/" + id)];
                    case 1:
                        profile = (_a.sent()).data;
                        setProfile(profile);
                        setIsMount(true);
                        return [2 /*return*/];
                }
            });
        }); })();
    }, []);
    var onClickCard = react_1.useCallback(function () {
        if (!profile)
            return;
        window.location = profile.html_url;
    }, [profile]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_google_font_loader_1.default, { fonts: [
                { font: "Roboto", weights: [400, 700] },
                { font: "Noto Sans KR", weights: [400, 700] }
            ] }),
        isMount && (react_1.default.createElement(ProfileCard_styles_1.ProfileCardStyled, { width: width, height: height, color: color, onClick: props.onClickCard || onClickCard },
            react_1.default.createElement("div", { className: "left" },
                react_1.default.createElement("img", { src: (profile && profile.avatar_url) || profileSrc, alt: "profile image" })),
            react_1.default.createElement("div", { className: "right" },
                react_1.default.createElement("div", { className: "naming" },
                    react_1.default.createElement("h3", { className: "name" }, (profile && profile.name) || name),
                    react_1.default.createElement("span", { className: "id" },
                        "@",
                        (profile && profile.login) || id)),
                react_1.default.createElement("p", { className: "introduce" }, (profile && profile.bio) || introduce),
                react_1.default.createElement("div", { className: "infos" },
                    react_1.default.createElement("div", { className: "info" },
                        react_1.default.createElement("span", { className: "info_title" }, "Repository"),
                        react_1.default.createElement("span", { className: "info_count" }, (profile && profile.public_repos) || repositoryCount)),
                    react_1.default.createElement("div", { className: "info" },
                        react_1.default.createElement("span", { className: "info_title" }, "Following"),
                        react_1.default.createElement("span", { className: "info_count" }, (profile && profile.following) || followingCount)),
                    react_1.default.createElement("div", { className: "info" },
                        react_1.default.createElement("span", { className: "info_title" }, "Followers"),
                        react_1.default.createElement("span", { className: "info_count" }, (profile && profile.followers) || followerCount))))))));
};
ProfileCard.defaultProps = {
    width: "600px",
    height: "300px",
    color: "#26273B",
    name: "Jae Cheol Sim",
    id: "simsimjae",
    profileSrc: "https://placehold.it/500x500",
    repositoryCount: 23,
    followingCount: 314,
    followerCount: 487,
    introduce: "이곳에는 자기소개를 입력해주세요 세줄이 넘어가면 자동으로 말줄임 처리 됩니다. 단 세줄로 자신을 표현해보세요. made by simsimjae"
};
exports.default = ProfileCard;
