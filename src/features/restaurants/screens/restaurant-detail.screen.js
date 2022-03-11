import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { List } from 'react-native-paper';

import RestaurantInfoCard from '../components/restaurant-info-card-component';
import { SafeArea } from '../../../components/utility/safe-area.component';

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;

  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  console.log(restaurant);
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title='Breakfast'
          left={(props) => <List.Icon {...props} icon='bread-slice' />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title='First item' />
          <List.Item title='Second item' />
        </List.Accordion>

        <List.Accordion
          title='Lunch'
          left={(props) => <List.Icon {...props} icon='hamburger' />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title='First item' />
          <List.Item title='Second item' />
          <List.Item title='Thrid item' />
          <List.Item title='Fourth item' />
        </List.Accordion>

        <List.Accordion
          title='Dinner'
          left={(props) => <List.Icon {...props} icon='food-variant' />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title='First item' />
          <List.Item title='Second item' />
          <List.Item title='Thrid item' />
        </List.Accordion>

        <List.Accordion
          title='Drinks'
          left={(props) => <List.Icon {...props} icon='cup' />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title='First item' />
          <List.Item title='Second item' />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
