---
title: "Hex Color to rgba"
tags: ["react"]
published: true
date: "2020-01-21"
---

<!-- <img src="./images/hello-world.png" /> -->

<br>

## Hex to RGBA color in JS

#### Let's create a function in JS to convert the Hex Color Code to RGBA with Opacity.

<br>

#### HexToRgba.js

```javascript
const hexToRgba = (hex, opacity) => {
  hex = hex.replace("#", "")
  r = parseInt(hex.substring(0, 2), 16)
  g = parseInt(hex.substring(2, 4), 16)
  b = parseInt(hex.substring(4, 6), 16)
  result = "rgba(" + r + "," + g + "," + b + "," + opacity / 100 + ")"
  return result
}

export default hexToRgba
```
