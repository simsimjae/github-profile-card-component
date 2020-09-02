# github-profile-card-component

simple and pretty Github profile card. It is made of react and type script.

## Install

```bash
npm install -S github-profile-card-component
```

## Usage

Github Users Api responses are displayed and props are displayed as fallback when the api call fails.

![image](https://user-images.githubusercontent.com/29771088/91936270-7f65aa80-ed2a-11ea-8f12-a33a066b0359.png)

## Scripts

```js
<div id="github-profile-card"></div>
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
```

## License

[MIT](http://vjpr.mit-license.org)
