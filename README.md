# github-profile-card-component

Simple Github Profile Card. It is made of React and Typescript

## Install

```bash
npm install -S github-profile-card-component
```

## Usage

Github Users Api responses are displayed and props are displayed as fallback when the api call fails.

## Scripts

### General Case

![image](https://user-images.githubusercontent.com/29771088/91936270-7f65aa80-ed2a-11ea-8f12-a33a066b0359.png)

```js
<div id="github-profile-card" data-id="simsimjae" />
<script src="https://unpkg.com/github-profile-card-component@latest/lib/scripts/index.js"></script>
```

### if data-id is not found, then fallback data attributes applied

![image](https://user-images.githubusercontent.com/29771088/91940508-82649900-ed32-11ea-902b-21730e70075b.png)

```js
<div id="github-profile-card" data-id="if it is undefined" data-color="blue" data-profile-src="https://placehold.it/50x50" data-name="nickname" data-introduce="introduce yourself" data-repository-count="111" data-following-count="222" data-follower-count="333" />
<script src="https://unpkg.com/github-profile-card-component@latest/lib/scripts/index.js"></script>
```

## Components

[![Edit github-profile-card-component](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github-profile-card-component-12ybr?fontsize=14&hidenavigation=1&theme=dark)

### Props

```js
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
isSSR?: boolean; // (default) false, should component render in server
isCircleImage?: boolean; // (default) false
```

## License

[MIT](http://vjpr.mit-license.org)
