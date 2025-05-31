/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/components/bottombar`; params?: Router.UnknownInputParams; } | { pathname: `/screens/homepage`; params?: Router.UnknownInputParams; } | { pathname: `/screens/ajustes/ajustes`; params?: Router.UnknownInputParams; } | { pathname: `/screens/anotaciones/anotaciones`; params?: Router.UnknownInputParams; } | { pathname: `/screens/notas/notas`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `/components/bottombar`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/homepage`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/ajustes/ajustes`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/anotaciones/anotaciones`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/notas/notas`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `/components/bottombar${`?${string}` | `#${string}` | ''}` | `/screens/homepage${`?${string}` | `#${string}` | ''}` | `/screens/ajustes/ajustes${`?${string}` | `#${string}` | ''}` | `/screens/anotaciones/anotaciones${`?${string}` | `#${string}` | ''}` | `/screens/notas/notas${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/components/bottombar`; params?: Router.UnknownInputParams; } | { pathname: `/screens/homepage`; params?: Router.UnknownInputParams; } | { pathname: `/screens/ajustes/ajustes`; params?: Router.UnknownInputParams; } | { pathname: `/screens/anotaciones/anotaciones`; params?: Router.UnknownInputParams; } | { pathname: `/screens/notas/notas`; params?: Router.UnknownInputParams; };
    }
  }
}
