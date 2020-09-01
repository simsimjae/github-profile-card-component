import React from "react";
import { ProfileCardStyled } from "./ProfileCard.styles";
import GoogleFontLoader from "react-google-font-loader";

export interface ProfileCardProps {
	width: string;
	height: string;
	color: string;
	name?: string;
	id?: string;
	profileSrc?: string;
	shotCount?: number;
	followerCount?: number;
	followingCount?: number;
	introduce?: string;
}

const ProfileCard = (props: ProfileCardProps) => {
	const { width, height, color, name, id, profileSrc, shotCount, followerCount, followingCount, introduce } = props;

	// const handleClick = useCallback(() => {
	// 	console.log("click");
	// }, []);

	return (
		<ProfileCardStyled width={width} height={height} color={color}>
			<GoogleFontLoader
				fonts={[
					{ font: "Roboto", weights: [400, 700] },
					{ font: "Noto Sans KR", weights: [400, 700] }
				]}
			/>
			<div className="left">
				<img src={profileSrc} alt="profile image" />
			</div>
			<div className="right">
				<div className="naming">
					<h3 className="name">{name}</h3>
					<span className="id">@{id}</span>
				</div>
				<p className="introduce">{introduce}</p>
				<div className="infos">
					<div className="info">
						<span className="info_title">Shots</span>
						<span className="info_count">{shotCount}</span>
					</div>
					<div className="info">
						<span className="info_title">Following</span>
						<span className="info_count">{followingCount}</span>
					</div>
					<div className="info">
						<span className="info_title">Followers</span>
						<span className="info_count">{followerCount}</span>
					</div>
				</div>
			</div>
		</ProfileCardStyled>
	);
};

ProfileCard.defaultProps = {
	width: "600px",
	height: "300px",
	color: "#26273B",
	name: "Jae Cheol Sim",
	id: "simsimjae",
	profileSrc: "https://placehold.it/500x500",
	shotCount: 23,
	followingCount: 314,
	followerCount: 487,
	introduce: "이곳에는 자기소개를 입력해주세요 세줄이 넘어가면 자동으로 말줄임 처리 됩니다. 단 세줄로 자신을 표현해보세요. made by simsimjae"
};

export default ProfileCard;
