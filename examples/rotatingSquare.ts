import { outdent } from "outdent";

export default {
    title: 'Rotation',
    description: 'Draw a rotating orange rectangle',
    author: 'Gavin',
    svg: (topMatter:string) => `
    ${topMatter}
    
    <svg
  width="100%"
  height="100%"
  viewBox="0 0 100 100"
  xmlns="http://www.w3.org/2000/svg"
>
  <g>
    <circle cx="70%" cy="50%" r="4" fill="orange" />
    <circle cx="30%" cy="50%" r="4" fill="orange" />
    <rect rx="5px" x="40%" y="40%" width="20%" height="20%" fill="green" />
    <animateTransform
      attributeName="transform"
      type="rotate"
      to="360 50 50"
      from="0 50 50"
      dur="12s"
      repeatCount="indefinite"
    />
  </g>
  <g>

    <rect x="25%" y="47.5%" width="50%" height="5%" fill="#ea580c" />
        <circle cx="80%" cy="50%" r="7.1" fill="#f472b6" />
    <circle cx="20%" cy="50%" r="7.1" fill="#f472b6" />
    <animateTransform
      attributeName="transform"
      type="rotate"
      to="0 50 50"
      from="360 50 50"
      dur="20s"
      repeatCount="indefinite"
    />
  </g>
  <circle cx="50%" cy="50%" r="1.5" fill="#111" />
</svg>
`
} 