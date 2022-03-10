import React from 'react';
import { Text, Image, View } from 'react-native';
import styled from 'styled-components/native';
import { Card } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import star from '../../../../assets/star';
import open from '../../../../assets/open';
import { Spacer } from '../../../components/spacer/spacer.component';

const RestaurantCard = styled(Card)`
  background: ${(props) => props.theme.colors.bg.primary};
`;
const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background: #fff;
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.ui.primary};
`;
const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Section = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

const SectionEnd = styled.View`
  flex-direction: row;
`;

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = 'https://images.unsplash.com/photo-1628520381718-220759f5fafe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    address = '100 some random street',
    isOpenNow = true,
    rating = 3.2,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover source={{ uri: photos }} key={name} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map((_, index) => (
              <SvgXml xml={star} width={20} height={20} key={index} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant='label'>CLOSED TEMPORARILY</Text>
            )}
            <Spacer position='left' size='large'>
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position='left' size='large'>
              <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;
