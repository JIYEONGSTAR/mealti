//전역스타일 지정

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap');
* {
  padding:0;
  margin:0;
  box-sizing:border-box;
  color : ${(props) => props.theme.color.textColor};
  background-color:"transparent";
  font-family: 'Noto Sans KR', sans-serif;
  /* font-size: 62.5%; */
}

.firebaseui-button {
  background-color: #ffbc58 !important;
  color: white !important;
}

.firebaseui-textfield.mdl-textfield .firebaseui-label:after {
  background-color: #ffbc58 !important;
}

.firebaseui-form-links > a {
  color: #ffbc58;
}
.mdl-progress > .progressbar {
  background-color: #ffbc58 !important;
}

.mdl-progress > .bufferbar {
  background-image: linear-gradient(
      90deg,
      hsla(0, 0%, 100%, 0.7),
      hsla(0, 0%, 100%, 0.7)
    ),
    linear-gradient(90deg, #ffbc58, #ffbc58) !important;
  z-index: 0;
  left: 0;
}

.mdl-progress:not(.mdl-progress--indeterminate) > .auxbar,
.mdl-progress:not(.mdl-progress__indeterminate) > .auxbar {
  background-image: linear-gradient(
      90deg,
      hsla(0, 0%, 100%, 0.9),
      hsla(0, 0%, 100%, 0.9)
    ),
    linear-gradient(90deg, #ffbc58, #ffbc58) !important;
}



`;

export default GlobalStyle;
