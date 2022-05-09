import outdent from 'outdent';
export default {
    title: 'Overlay Mix Mode',
    description: 'There is an element with the same background color taking of 50% of the total width. Its placed inside the same group that has the blur filter applied. Without it, the filter thinks the background is 50% gray. Does not work on Safari.',
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
  <rect width="100%" height="100%" fill="springgreen" />

  <g filter="url(#blur)">
    <!-- Circles will not mix with background if there is no element with the background color within the filter group. -->
    <rect width="50%" height="100%" fill="springgreen" />
    <circle
      style="mix-blend-mode:overlay"
      cx="50"
      cy="40"
      r="30"
      fill="#f472b6"
    />
    <circle
      style="mix-blend-mode:overlay"
      cx="50"
      cy="60"
      r="30"
      fill="#ea580c"
    />
  </g>
</svg>
    `
} 