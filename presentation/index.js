import React from 'react';
import { Appear, Deck, Fill, Fit, Heading, Image, Layout, Slide, Text } from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';
import { fadeInCustom } from './components/default-attrs/appear-defaults';
import { defaultBG, highlightBG } from './components/default-attrs/slide-defaults';
import { HeaderWithSub } from './components/header-with-sub';
import { HeadingWithEmphasis } from './components/heading-with-emphasis';
import { ListWithEmphasis } from './components/list';
import { ListItemWithEmphasis } from './components/list-item';
import { PlaceholderSlideNotes } from './components/placeholder-slide-notes';
import { SubHeading } from './components/sub-heading';
import { images } from './images';
import SlideNotes01 from './slide-notes/01.md';
import SlideNotes04 from './slide-notes/04.md';
import SlideNotes05 from './slide-notes/05.md';
import SlideNotes06 from './slide-notes/06.md';
import SlideNotes07 from './slide-notes/07.md';
import SlideNotes08 from './slide-notes/08.md';
import { ClientServerRangeSlideContent } from './slides/07-client-server-range-slide-content';
import { MicroPageArchitectureSlideContent } from './slides/08-micro-page-architecture-slide-content';
import './styles/globals.css';
import './styles/prism-theme.css';
import { createCustomTheme } from './styles/theme-custom';
import { ProfileLinksSlideContent } from './templates/profile-links-slide-content';

/**
 * create custom theme
 */
const customTheme = createCustomTheme();

preloader(images);

/**
 * reset CSS
 */
// @ts-ignore
require('normalize.css');

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['fade', 'slide']} transitionDuration={500} progress="pacman" controls={false} theme={customTheme}>
        {/*
         * ======================
         * INTRO
         * ======================
         */}

        {/* SLIDE 1 */}
        <Slide {...defaultBG} notes={SlideNotes01}>
          <Heading size={1}>micro page</Heading>
          <SubHeading size={3}>architecture</SubHeading>
        </Slide>

        {/* SLIDE 2 */}
        {/* <Slide {...highlightBG} notes={SlideNotes2}>
          <ProfileSlideContent />
        </Slide> */}

        {/* SLIDE 3 */}
        {/* <Slide {...defaultBG} notes={SlideNotes3}>
          <ProfileLinksSlideContent />
        </Slide> */}

        {/*
         * ======================
         * DISCLAIMER
         * ======================
         */}

        {/* SLIDE 4 */}
        <Slide {...defaultBG} notes={SlideNotes04}>
          <HeaderWithSub>Disclaimer</HeaderWithSub>
        </Slide>

        {/*
         * ======================
         * OVERVIEW
         * ======================
         */}

        {/* SLIDE 5 */}
        <Slide {...highlightBG} notes={SlideNotes05}>
          <Layout style={{ padding: '0 8rem' }}>
            <Appear {...fadeInCustom(0.3)}>
              <Fill>
                <Image src={images.architecture} />
                <Text>architecture</Text>
              </Fill>
            </Appear>
            <Appear {...fadeInCustom(0.3)}>
              <Fit style={{ display: 'flex', alignItems: 'center', paddingBottom: '2.5rem' }}>
                <HeadingWithEmphasis size={4}>+</HeadingWithEmphasis>
              </Fit>
            </Appear>
            <Appear {...fadeInCustom(0.3)}>
              <Fill>
                <Image src={images.implementation} />
                <Text>implementation</Text>
              </Fill>
            </Appear>
          </Layout>
        </Slide>

        {/*
         * ======================
         * ARCHITECTURE
         * ======================
         */}

        {/* SLIDE 6 */}
        <Slide {...highlightBG} notes={SlideNotes06}>
          <HeaderWithSub subheading="rendering">Thinking about</HeaderWithSub>
        </Slide>

        {/* SLIDE 7 */}
        <Slide {...defaultBG} notes={SlideNotes07}>
          <ClientServerRangeSlideContent />
        </Slide>

        {/* SLIDE 8 */}
        <Slide {...defaultBG} notes={SlideNotes08}>
          <MicroPageArchitectureSlideContent />
        </Slide>

        {/*
         * ======================
         * BENEFITS (WHY & WHATS TO GAIN)
         * ======================
         */}

        {/* SLIDE 9 */}
        <Slide {...defaultBG} notes={SlideNotes01}>
          <>
            <HeaderWithSub>benefits</HeaderWithSub>
            <Layout style={{ justifyContent: 'space-evenly' }}>
              <ListWithEmphasis>
                <ListItemWithEmphasis>
                  <Heading size={4}>try using</Heading>
                  <Text>&#123; opacity / transform &#125;</Text>
                </ListItemWithEmphasis>
                <ListItemWithEmphasis>
                  <Heading size={4}>avoid layout</Heading>
                  <Text>&#123; querying properties &#125;</Text>
                </ListItemWithEmphasis>
              </ListWithEmphasis>
              <ListWithEmphasis>
                <ListItemWithEmphasis>
                  <Heading size={4}>raf</Heading>
                  <Text>&#123; use where appropriate &#125;</Text>
                </ListItemWithEmphasis>
                <ListItemWithEmphasis>
                  <Heading size={4}>Don't go overboard</Heading>
                  <Text>&#123; there are overheads &#125;</Text>
                </ListItemWithEmphasis>
              </ListWithEmphasis>
            </Layout>
          </>
        </Slide>

        {/*
         * ======================
         * IMPLEMENTATION (HOW)
         * ======================
         */}

        {/* SLIDE 10 */}
        <Slide {...highlightBG} notes={SlideNotes06}>
          <HeaderWithSub>implementation</HeaderWithSub>
        </Slide>

        {/* SLIDE 11 */}
        <Slide {...defaultBG} notes={SlideNotes01}>
            <Image src={images.razorTSArch} style={{ width: '1000px' }}/>
        </Slide>


        {/* SLIDE 11 */}
        <Slide {...defaultBG} notes={SlideNotes01}>
            <Image src={images.pizzaShop} style={{ border: '6px black solid', width: '600px' }}/>
        </Slide>

        {/*
         * ======================
         * TRADEOFFS (& CONS)
         * ======================
         */}

        {/* SLIDE 12 */}
        <Slide {...defaultBG} notes={SlideNotes01}>
          <>
            <HeaderWithSub>downsides</HeaderWithSub>
            <Layout style={{ justifyContent: 'space-evenly' }}>
              <ListWithEmphasis>
                <ListItemWithEmphasis>
                  <Heading size={4}>try using</Heading>
                  <Text>&#123; opacity / transform &#125;</Text>
                </ListItemWithEmphasis>
                <ListItemWithEmphasis>
                  <Heading size={4}>avoid layout</Heading>
                  <Text>&#123; querying properties &#125;</Text>
                </ListItemWithEmphasis>
              </ListWithEmphasis>
              <ListWithEmphasis>
                <ListItemWithEmphasis>
                  <Heading size={4}>raf</Heading>
                  <Text>&#123; use where appropriate &#125;</Text>
                </ListItemWithEmphasis>
                <ListItemWithEmphasis>
                  <Heading size={4}>Don't go overboard</Heading>
                  <Text>&#123; there are overheads &#125;</Text>
                </ListItemWithEmphasis>
              </ListWithEmphasis>
            </Layout>
          </>
        </Slide>

        {/*
         * ======================
         * THANKS & GOODBYE
         * ======================
         */}

        {/* SLIDE 13 */}
        <Slide {...defaultBG} notes={PlaceholderSlideNotes}>
          <HeaderWithSub>thoughts</HeaderWithSub>
        </Slide>

        {/* SLIDE 14 */}
        <Slide {...defaultBG}>
          <ProfileLinksSlideContent />
        </Slide>
      </Deck>
      // <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
      // <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
    );
  }
}
