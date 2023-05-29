declare module '*.scss' {
  type IClassNames = Record<string, string>
  const classnames: IClassNames;
  export = classnames
}

declare module '*.svg' {
  import type React from 'react';

  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare module '*.png';
declare module '*.gif';
declare module '*.jpg';
declare module '*.jpeg';

// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __IS_DEV__: boolean;
