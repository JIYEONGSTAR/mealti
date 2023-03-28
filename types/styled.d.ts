import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      textColor: string;
      backgroundColor: string;
      mainColor: string;
      subColor: string;
      pointColor: string;
    };
  }
}
