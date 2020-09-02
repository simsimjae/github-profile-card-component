/// <reference types="react" />
export interface ProfileCardProps {
    width: string;
    height: string;
    color: string;
    name?: string;
    id: string;
    profileSrc?: string;
    repositoryCount?: number;
    followerCount?: number;
    followingCount?: number;
    introduce?: string;
    onClickCard?: (...p: any[]) => any;
}
declare const ProfileCard: {
    (props: ProfileCardProps): JSX.Element;
    defaultProps: {
        width: string;
        height: string;
        color: string;
        name: string;
        id: string;
        profileSrc: string;
        repositoryCount: number;
        followingCount: number;
        followerCount: number;
        introduce: string;
    };
};
export default ProfileCard;
