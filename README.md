# SearchTube

Decided to try a small React project on my own. This just simply searches Youtube for videos as you type. Nothing super fancy, thanks to Stack Overflow for introducing me to lodash's `debounce` function.

### How to use
* Clone respository and run `yarn install`.
* Head over to [Developers @ Google](https://developers.google.com) to create a youtube API key.
* Create a constants.js file on main project level. Paste 
```module.exports = {
  youtubeKey: '<PASTE YOUR YOUTUBE KEY HERE>'
};
```
* Run `yarn run` at the command-line.