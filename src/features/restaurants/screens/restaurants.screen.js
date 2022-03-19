import React, { useContext, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { ActivityIndicator, Colors } from 'react-native-paper';

import RestaurantInfoCard from '../components/restaurant-info-card-component';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { Search } from '../components/search.component';
import { FavouritesBar } from '../../../components/favourites/favourites-bar.component';

import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { FavouriteContext } from '../../../services/favourites/favourites.context';

export const RestaurantList = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25%;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const RestaurantScreen = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouriteContext);
  const [isToggled, setIsToggle] = useState(false);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggle(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('RestaurantDetail', {
                  restaurant: item,
                })
              }
            >
              <Spacer position='bottom' size='large'>
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};

export default RestaurantScreen;
