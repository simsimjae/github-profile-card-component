# github-profile-card-component

simple and pretty Github profile card. It is made of react and type script.

## Install

```bash
npm install -S github-profile-card-component
```

## Usage

Github Users Api responses are displayed and props are displayed as fallback when the api call fails.

![image](https://user-images.githubusercontent.com/29771088/91936270-7f65aa80-ed2a-11ea-8f12-a33a066b0359.png)
<script src="http://gist-it.appspot.com/https://codesandbox.io/embed/github-profile-card-component-12ybr?fontsize=14&hidenavigation=1&theme=dark"></script>
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
