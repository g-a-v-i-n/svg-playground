import { outdent } from "outdent";

export default {
    title: 'Text on Path',
    description: 'Animating continuous text along a path',
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
    <path
      id="text-on-path-example"
      d="M38.6 12.5H62.4C66.8887 12.5 70.2251 12.5004 72.8681 12.7163C75.5052 12.9318 77.4078 13.3594 79.0368 14.1894C81.9534 15.6754 84.3246 18.0466 85.8106 20.9631C86.6406 22.5922 87.0682 24.4948 87.2837 27.1319C87.4996 29.7749 87.5 33.1113 87.5 37.6V61.4C87.5 65.8887 87.4996 69.2251 87.2837 71.8681C87.0682 74.5052 86.6406 76.4078 85.8106 78.0368C84.3246 80.9534 81.9534 83.3246 79.0368 84.8106C77.4078 85.6406 75.5052 86.0682 72.8681 86.2837C70.2251 86.4996 66.8887 86.5 62.4 86.5H38.6C34.1113 86.5 30.7749 86.4996 28.1319 86.2837C25.4948 86.0682 23.5922 85.6406 21.9631 84.8106C19.0466 83.3246 16.6754 80.9534 15.1894 78.0368C14.3594 76.4078 13.9318 74.5052 13.7163 71.8681C13.5004 69.2251 13.5 65.8887 13.5 61.4V37.6C13.5 33.1113 13.5004 29.7749 13.7163 27.1319C13.9318 24.4948 14.3594 22.5922 15.1894 20.9631C16.6754 18.0466 19.0466 15.6754 21.9631 14.1894C23.5922 13.3594 25.4948 12.9318 28.1319 12.7163C30.7749 12.5004 34.1113 12.5 38.6 12.5Z"
      stroke="none"
    />
  </defs>

  <text text-rendering="optimizeSpeed">
    <textPath
      startOffset="-100%"
      fill="white"
      font-family="Source Code Pro"
      font-size="3px"
      xlink:href="#text-on-path-example"
    >
      Hello • Hello • Hello • Hello • Hello • Hello • Hello • Hello • Hello • •
      <animate
        additive="sum"
        attributeName="startOffset"
        from="0%"
        to="100%"
        begin="0s"
        dur="30s"
        repeatCount="indefinite"
      />
    </textPath>
    <textPath
      startOffset="0%"
      fill="white"
      font-family="Source Code Pro"
      font-size="3px"
      xlink:href="#text-on-path-example"
    >
      Hello • Hello • Hello • Hello • Hello • Hello • Hello • Hello • Hello • •
      <animate
        additive="sum"
        attributeName="startOffset"
        from="0%"
        to="100%"
        begin="0s"
        dur="30s"
        repeatCount="indefinite"
      />
    </textPath>
    <textPath
      startOffset="50%"
      fill="white"
      font-family="Source Code Pro"
      font-size="3px"
      xlink:href="#text-on-path-example"
    >
      Hello • Hello • Hello • Hello • Hello • Hello • Hello • Hello • Hello • •
      <animate
        additive="sum"
        attributeName="startOffset"
        from="0%"
        to="100%"
        begin="0s"
        dur="30s"
        repeatCount="indefinite"
      />
    </textPath>
    <textPath
      startOffset="-50%"
      fill="white"
      font-family="Source Code Pro"
      font-size="3px"
      xlink:href="#text-on-path-example"
    >
      Hello • Hello • Hello • Hello • Hello • Hello • Hello • Hello • Hello • •
      <animate
        additive="sum"
        attributeName="startOffset"
        from="0%"
        to="100%"
        begin="0s"
        dur="30s"
        repeatCount="indefinite"
      />
    </textPath>
  </text>
</svg>
`
} 