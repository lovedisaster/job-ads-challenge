const GlobalStyle = require("./src/globalStyles/GlobalStyles");
const path = require('path');

module.exports = {
  globals: {
    GS: GlobalStyle,
    CLIENT: true
  },
  transform: {
    "^.+\\.js$": "babel-jest",
    ".+\\.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub"
  }
};