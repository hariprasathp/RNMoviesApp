import React, { useCallback, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { MovieCard } from '../components/MovieCard';
import DraggableFlatList, {
    RenderItemParams,
  } from 'react-native-draggable-flatlist';
import moviesData from '../assets/movies.json';

export const MoviesList:React.FC = () => {
    const renderItem = useCallback(
        ({ item, drag, isActive }: RenderItemParams<any>) => {
          return (
            <TouchableOpacity
              style={{
                backgroundColor: isActive ? 'darkgrey' : item.backgroundColor,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onLongPress={drag}>
              <MovieCard item={item}/>
            </TouchableOpacity>
          );
        },
        []
      );
    const [data, setData] = useState(moviesData);

    return (
        <View style={{ flex: 1 }}>
            <DraggableFlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => `draggable-item-${item.id}`}
                onDragEnd={({ data }) => setData(data)}
            />
      </View>
    );
}
