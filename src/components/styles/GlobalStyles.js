import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  outline: 0;
}

.m {
    &__top {
      &-20 {
        margin-top: 20px;
      }
      &-40 {
        margin-top: 40px;
      }
    }
  }

.float {
  &__start {
    float: left;
  }

  &__end {
    float: right;
  }
}
`;

export default GlobalStyle;
