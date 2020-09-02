import React, { useEffect, useState, useCallback } from "react";
import { ProfileCardStyled } from "./ProfileCard.styles";
import GoogleFontLoader from "react-google-font-loader";
import axios from "axios";

export interface ProfileCardProps {
	width: string;
	height: string;
	color: string; // card theme color
	name?: string; // (fallback) github name
	id: string; // (required) github id
	profileSrc?: string; // fallback github profile url
	repositoryCount?: number; // fallback github repository count
	followerCount?: number; // fallback follower count
	followingCount?: number; // fallback following count
	introduce?: string; // fallback introduce yourself
	onClickCard?: (...p: any[]) => any; // (default) go to github
}

const ProfileCard = (props: ProfileCardProps) => {
	const { width, height, color, name, id, profileSrc, repositoryCount, followerCount, followingCount, introduce } = props;
	const [profile, setProfile] = useState<any>(null);
	const [isMount, setIsMount] = useState(false);

	useEffect(() => {
		(async () => {
			try {
				const Axios = axios.create({
					baseURL: "https://api.github.com/users",
					auth: { username: "d93bbed6abb05249b568", password: "d29ba5732f3672cd20a16f4f16900666c29a09b0" }
				});
				const profile = (await Axios.get(`/${id}`)).data;
				setProfile(profile);
			} catch (e) {
				console.error(e);
			}
			setIsMount(true);
		})();
	}, []);

	const onClickCard = useCallback(() => {
		if (!profile) return;

		window.location = profile.html_url;
	}, [profile]);

	return (
		<>
			{window && window.document && (
				<GoogleFontLoader
					fonts={[
						{ font: "Roboto", weights: [400, 700] },
						{ font: "Noto Sans KR", weights: [400, 700] }
					]}
				/>
			)}
			{isMount && (
				<ProfileCardStyled width={width} height={height} color={color} onClick={props.onClickCard || onClickCard}>
					<div className="left">
						<img src={(profile && profile.avatar_url) || profileSrc} alt="profile image" />
					</div>
					<div className="right">
						<div className="naming">
							<h3 className="name">{(profile && profile.name) || name}</h3>
							<span className="id">@{(profile && profile.login) || id}</span>
						</div>
						<p className="introduce">{(profile && profile.bio) || introduce}</p>
						<div className="infos">
							<div className="info">
								<span className="info_title">Repository</span>
								<span className="info_count">{(profile && profile.public_repos) || repositoryCount}</span>
							</div>
							<div className="info">
								<span className="info_title">Following</span>
								<span className="info_count">{(profile && profile.following) || followingCount}</span>
							</div>
							<div className="info">
								<span className="info_title">Followers</span>
								<span className="info_count">{(profile && profile.followers) || followerCount}</span>
							</div>
						</div>
					</div>
				</ProfileCardStyled>
			)}
		</>
	);
};

ProfileCard.defaultProps = {
	width: "600px",
	height: "280px",
	color: "#26273B",
	name: "Jae Cheol Sim",
	id: "simsimjae",
	profileSrc: "https://placehold.it/500x500",
	repositoryCount: 23,
	followingCount: 314,
	followerCount: 487,
	introduce: "이곳에는 자기소개를 입력해주세요 세줄이 넘어가면 자동으로 말줄임 처리 됩니다. 단 세줄로 자신을 표현해보세요. made by simsimjae"
};

export default ProfileCard;
