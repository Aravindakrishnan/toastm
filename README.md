# What is Toastm ? 🤔

    It's Just a Package for Popup Toast / Notification Message 📜

# Installation ⚙️

```cmd
  npm install toastm
```

# How to Use toastm 🤔

### index.html

```html
<head>
  <link rel="stylesheet" href="./style.css" />
</head>
<body>
  <script type="module" src="yourfilename.js"></script>
</body>
```

### yourfilename.js

```javascript
import { addToastm } from "./node_modules/toastm/toastm.js";

addToastm({
  color: "primary",
  position: "center",
  text: "Toastm notification box 😄",
});
```

### style.css

```css
@import "./node_modules/toastm/style.css";
```

## Options 📜

```txt
    * color - primary | secondary | success | danger | warning | dark | special
    * text - anything
    * positon - left | center | right
```
