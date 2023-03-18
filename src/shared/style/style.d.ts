import 'styled-components';

declare module 'styled-components' {
  export interface ThemeType {
    [key: string]: string;
  }
}
