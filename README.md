# KaiOS Toolbox

[![CircleCI](https://circleci.com/gh/garredow/kaios-toolbox/tree/main.svg?style=svg)](https://circleci.com/gh/garredow/kaios-toolbox/tree/main)

## Examples

### QR code to text

```js
const activity = new window.MozActivity({
  name: 'toolbox/qr-to-text',
});

activity.onsuccess = function () {
  console.log('success', this.result);
};

activity.onerror = function () {
  console.log('error', this.error);
};
```
