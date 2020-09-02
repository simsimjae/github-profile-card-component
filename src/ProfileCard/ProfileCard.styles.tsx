import styled from "styled-components";
import { ProfileCardProps } from "./ProfileCard";

type ProfileCardStyledProps = Pick<ProfileCardProps, "width" | "height" | "color">;

export const ProfileCardStyled = styled.div<ProfileCardStyledProps>`
	display: flex;
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	color: ${(props) => props.color};
	border-radius: 12px;
	font-family: Roboto, "Noto Sans KR", sans-serif;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
	overflow: hidden;
	box-sizing: border-box;
	margin: 0 auto;
	cursor: pointer;

	.left {
		width: 50%;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	.right {
		width: 50%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		padding: 0 40px;
	}

	.name {
		font-size: 24px;
		font-weight: bold;
		margin: 0;
	}

	.id {
		font-size: 16px;
		opacity: 0.5;
	}

	.naming {
		text-align: center;
	}

	.infos {
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.info {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.info_title {
		font-size: 16px;
		opacity: 0.5;
	}

	.info_count {
		font-size: 20px;
		margin-top: 5px;
	}

	.introduce {
		margin: 0;
		word-wrap: break-word;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-align: center;
		line-height: 1.3;
	}
`;
