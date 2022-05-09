import { outdent } from "outdent";

export default {
    title: 'Lighten Mix Mode',
    description: '',
    author: 'Gavin',
    svg: (topMatter:string) => `
    ${topMatter}

    <svg
    width="100%"
    height="100%"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <filter
        id="blur"
        x="-50%"
        y="-50%"
        width="200%"
        height="200%"
        color-interpolation-filters="sRGB"
      >
        <feGaussianBlur stdDeviation="2" result="out" />
      </filter>
    </defs>
    <rect width="100%" height="100%" fill="#ea580c" />

    <g filter="url(#blur)">
      <!-- Circles will not mix with background if there is no element with the background color within the filter group. -->
      <rect width="50%" height="100%" fill="#ea580c" />

      <circle
        style="mix-blend-mode:lighten;"
        cx="50"
        cy="40"
        r="30"
        fill="springgreen"
      />
      <circle
        style="mix-blend-mode:lighten;"
        cx="50"
        cy="60"
        r="30"
        fill="deepskyblue"
      />
    </g>
  </svg>
`
} 