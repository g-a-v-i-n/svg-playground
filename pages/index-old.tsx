import type { NextPage } from 'next'
import Head from 'next/head'
import { Container } from '../components/Container'
import { Section } from '../components/Section'
import { Specimen } from '../components/Specimen'

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>.SVG Lab</title>
      </Head>

      <Section>
        <h1>.SVG Lab</h1>
        <p>Tests and experiments with in-browser SVG.</p>
      </Section>

      <Section className="gap-y-16">
        <Specimen
          title="Overlay Mix Mode on Each Element"
          description="A simple SVG"
          sample={`
            <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="100%" height="100%" fill="darkslategray"/>
              <rect width="50%" height="100%" fill="red"/>

              <circle style="mix-blend-mode:overlay" cx="45" cy="45" r="30" fill="springgreen" />
              <circle style="mix-blend-mode:overlay" cx="55" cy="55" r="30" fill="deepskyblue" />
            </svg>
            `}
        />

        <Specimen
          title="Overlay Mix Mode on Each Element"
          description="Looks wierd? There is an element with the same background color taking of 50% of the total width. Its placed inside the same group that has the blur filter applied. Without it, the filter thinks the background is 50% gray. Does not work on Safari."
          sample={`
            <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="blur" x="-50%" y="-50%" width="200%" height="200%" color-interpolation-filters="sRGB">
                    <feGaussianBlur stdDeviation="4" result="out" />
                </filter>
              </defs>
              <rect width="100%" height="100%" fill="darkslategray"/>
              <rect width="100%" height="50%" fill="red"/>

              <g filter="url(#blur)">
                <rect width="50%" height="100%" fill="darkslategray"/>
                <circle style="mix-blend-mode:overlay" cx="45" cy="45" r="30" fill="springgreen" />
                <circle style="mix-blend-mode:overlay" cx="55" cy="55" r="30" fill="deepskyblue" />
              </g>
            </svg>
            `}
        />

        <Specimen
          title="CSS blur filter"
          description="CSS filter:blur(5px) on the <g> tag doesn't work on safari. It also will not scale with the size of the SVG. Blurring each element does, but doesn't have an identical reult to an SVG blur filter."
          sample={`
            <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="100%" height="100%" fill="darkslategray"/>
              <g>
                <circle style="mix-blend-mode:overlay;filter: blur(5px);" cx="45" cy="45" r="30" fill="springgreen" />
                <circle style="mix-blend-mode:overlay;filter: blur(5px);" cx="55" cy="55" r="30" fill="deepskyblue" />
              </g>
            </svg>
            `}
        />

        <Specimen
          title="Working Cross-Browser Mix-modes Plus Blur"
          description="CSS filter:blur(5px) on the <g> tag doesn't work. Blurring each element does, but doesn't have an identical reult to an SVG blur filter."
          sample={`
            <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="blur" x="-50%" y="-50%" width="200%" height="200%" color-interpolation-filters="sRGB">
                  <feGaussianBlur stdDeviation="4" result="out" />
                </filter>
              </defs>
              
              <rect width="100%" height="100%" fill="red"/>

              <g filter="url(#blur)">
                <!-- Circles will not mix with background if there is no element with the background color within the filter. -->
                <rect width="100%" height="100%" fill="red"/>
                <circle style="mix-blend-mode:lighten;" cx="45" cy="45" r="30" fill="springgreen" />
                <circle style="mix-blend-mode:lighten;" cx="55" cy="55" r="30" fill="deepskyblue" />
              </g>
            </svg>
            `}
        />

        <Specimen
          title="CSS backdrop-filter"
          description="No effect on any browser. Yabadabadoobop."
          sample={`
            <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="blur" x="-50%" y="-50%" width="200%" height="200%" color-interpolation-filters="sRGB">
                  <feGaussianBlur stdDeviation="4" result="out" />
                </filter>
              </defs>

              <g>
                <circle style="mix-blend-mode:lighten;" cx="45" cy="45" r="30" fill="springgreen" />
                <circle style="mix-blend-mode:lighten;" cx="55" cy="55" r="30" fill="deepskyblue" />
              </g>

              <rect style="backdrop-filter:blur(200px);" width="50%" height="100%" fill="white" fill-opacity="0.25"/>
            </svg>
            `}
        />

        <Specimen
          title="Figma's BackgroundImageFix"
          description="Kind of unclear what this does."
          sample={`
            <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="blur" x="-50%" y="-50%" width="200%" height="200%" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feGaussianBlur stdDeviation="4" result="out" />
                </filter>
              </defs>

              <rect width="50%" height="100%" fill="red"/>

              <g filter="url(#blur)">
                <rect width="50%" height="100%" fill="red"/>
                <circle style="mix-blend-mode:lighten;" cx="45" cy="45" r="30" fill="springgreen" />
                <circle style="mix-blend-mode:lighten;" cx="55" cy="55" r="30" fill="deepskyblue" />
              </g>

            </svg>
          `}
        />
        <Specimen
          title="Figma's BackgroundImageFix"
          description="Kind of unclear what this does."
          sample={`
            <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="blur" x="-50%" y="-50%" width="200%" height="200%" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feGaussianBlur stdDeviation="4" result="out" />
                </filter>
              </defs>

              <rect width="50%" height="100%" fill="red"/>

              <g shape-rendering="optimizeSpeed">
                <rect width="50%" height="100%" fill="red"/>
                <circle style="mix-blend-mode:lighten;" cx="45" cy="45" r="30" fill="springgreen" />
                <circle style="mix-blend-mode:lighten;" cx="55" cy="55" r="30" fill="deepskyblue" />
              </g>

            </svg>
          `}
        />
         <Specimen
          title="Figma's BackgroundImageFix"
          description="Kind of unclear what this does."
          sample={`
            <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="blur" x="-50%" y="-50%" width="200%" height="200%" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feGaussianBlur stdDeviation="4" result="out" />
                </filter>
              </defs>



              <g shape-rendering="optimizeSpeed" stroke-width='10' stroke-linecap='round'>
              

                <circle style="mix-blend-mode:lighten;" cx="45" cy="45" r="30" fill="springgreen" />
                <line x1="0" y1="20" x2="50" y2="20" stroke="black" />
                </g>

            </svg>
          `}
        />
      </Section>
    </Container>
  )
}

export default Home
