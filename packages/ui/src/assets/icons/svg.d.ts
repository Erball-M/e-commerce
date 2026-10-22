declare module '*.svg' {
  import type { FunctionComponent, SVGProps } from 'react';

  const Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  export default Icon;
}
