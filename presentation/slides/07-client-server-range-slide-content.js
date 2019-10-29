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
`;

const SubCaretText = styled(Text)`
  max-width: 170px;
`;

export const ClientServerRangeSlideContent = () => (
  <>
    <LayoutExpanded>
      {/* csr */}
      <Fill>
        {/* <HeadingWithEmphasis size={3}>csr</HeadingWithEmphasis> */}
        <Image src={images.client} height={200} width={200} style={{ marginBottom: 48, marginTop: 48 }} />
        <Text>single-page app</Text>
      </Fill>
      <Appear order={2} {...fadeInCustom(0.3)}>
        <SubCaretItem>
          <Image src={images.arrowCaretRight} />
          <SubCaretText>mini spa / app</SubCaretText>
        </SubCaretItem>
      </Appear>
      <Appear order={3} {...fadeInCustom(0.3)}>
        <SubCaretItem>
          <Image src={images.arrowCaretRight} />
          <SubCaretText>web components</SubCaretText>
        </SubCaretItem>
      </Appear>
      <Appear order={4} {...fadeInCustom(0.3)}>
        <SubCaretItem>
          <Image src={images.arrowCaretRight} />
          <SubCaretText>light interaction</SubCaretText>
        </SubCaretItem>
      </Appear>
      <Appear order={5} {...fadeInCustom(0.3)}>
        <Image src={images.arrowCaretRight} />
      </Appear>
      {/* ssr */}
      <Appear order={6} {...fadeInCustom(0.3)}>
        <Fill>
          {/* <HeadingWithEmphasis size={3}>ssr</HeadingWithEmphasis> */}
          <Image src={images.server} height={175} width={200} style={{ marginBottom: 60, marginTop: 60 }} />
          <Text>multi-page app</Text>
        </Fill>
      </Appear>
    </LayoutExpanded>
  </>
);
