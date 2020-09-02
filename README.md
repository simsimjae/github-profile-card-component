# github-profile-card-component

simple and pretty Github profile card. It is made of react and type script.

## Install

```bash
npm install -S github-profile-card-component
```

## Usage

Github Users Api responses are displayed and props are displayed as fallback when the api call fails.

![image](https://user-images.githubusercontent.com/29771088/91936270-7f65aa80-ed2a-11ea-8f12-a33a066b0359.png)
<iframe src="https://codesandbox.io/embed/github-profile-card-component-12ybr?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="github-profile-card-component"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
   
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
