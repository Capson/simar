import { JSX } from 'solid-js';

export const KPMGLoadingAnimation = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
  <svg
    {...props}
    class={'animate-spin -ml-1 mr-3 h-5 w-5 ' + props.class}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    data-testid="loading-spinner"
  >
    <text x="12" y="15" text-anchor="middle" fill="currentColor" fontSize="14">
      KPMG
    </text>
  </svg>
);