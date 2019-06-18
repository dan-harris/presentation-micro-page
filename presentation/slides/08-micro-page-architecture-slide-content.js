import styled from '@emotion/styled';
import React from 'react';
import { Appear, Fill, Image, Text } from 'spectacle';
import { fadeInCustom } from '../components/default-attrs/appear-defaults';
import { LayoutExpanded } from '../components/layout-expanded';
import { images } from '../images';

const SubCaretItem = styled(Fill)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SubCaretItemSpacer = styled(SubCaretItem)`
  padding-bottom: 3rem;
  max-width: 30px;
`;

const SubCaretText = styled(Text)`
  padding-top: 1.5rem;
  max-width: 170px;
`;

/**
 * feel the (architecture) flow 🌊
 */
export const MicroPageArchitectureSlideContent = () => (
  <>
    <LayoutExpanded>
      {/* app */}
      <Appear order={2} {...fadeInCustom(0.3)}>
        <SubCaretItem>
          <Image src={images.archApp} />
          <SubCaretText>app</SubCaretText>
        </SubCaretItem>
      </Appear>
      {/* mini-app */}
      <Appear order={2} {...fadeInCustom(0.3)}>
        <SubCaretItemSpacer>
          <Image src={images.arrowCaretRight} />
        </SubCaretItemSpacer>
      </Appear>
      <Appear order={2} {...fadeInCustom(0.3)}>
        <SubCaretItem>
          <Image src={images.archMiniApp} />
          <SubCaretText>mini-app</SubCaretText>
        </SubCaretItem>
      </Appear>
      {/* 'sprinkles' */}
      <Appear order={3} {...fadeInCustom(0.3)}>
        <SubCaretItemSpacer>
          <Image src={images.arrowCaretRight} />
        </SubCaretItemSpacer>
      </Appear>
      <Appear order={3} {...fadeInCustom(0.3)}>
        <SubCaretItem>
          <Image src={images.archSprinkles} />
          <SubCaretText>'sprinkles'</SubCaretText>
        </SubCaretItem>
      </Appear>
      {/* static */}
      <Appear order={4} {...fadeInCustom(0.3)}>
        <SubCaretItemSpacer>
          <Image src={images.arrowCaretRight} />
        </SubCaretItemSpacer>
      </Appear>
      <Appear order={4} {...fadeInCustom(0.3)}>
        <SubCaretItem>
          <Image src={images.archStatic} />
          <SubCaretText>static</SubCaretText>
        </SubCaretItem>
      </Appear>
    </LayoutExpanded>
  </>
);
