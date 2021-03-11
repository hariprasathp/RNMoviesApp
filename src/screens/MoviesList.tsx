import React, { useCallback, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { MovieCard } from '../components/MovieCard';
import DraggableFlatList, {
    RenderItemParams,
  } from 'react-native-draggable-flatlist';
import moviesData from '../assets/movies.json';
import { Spinner, Text } from '@ui-kitten/components';

export const MoviesList:React.FC = () => {
    // Initialize range and length
    const range = 10;
    const [length, setLength] = useState(range+1);
    const [data, setData] = useState(moviesData.slice(0, range));
    const [loading, setLoading] = useState(false);

    const dataReachedEnd = ()=>{
      setLoading(true);
      setTimeout(()=>{
        
        setData(data.concat(moviesData.slice(length, length+range)))
        setLoading(false);
      }, 1000);

      setLength(length + range);

      if (length >= moviesData.length) {
        setLength(0);
      }
    }
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

    return (
        <View style={{ flex: 1, backgroundColor: 'rgba(20,20,20,0.1)' }}>
          <Text status='control' style={{width: '100%', textAlign: 'center', backgroundColor: 'orangered', padding: 5 }} category='s1'>Long press the item to drag.</Text>
            <DraggableFlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => {
                    return `draggable-item-${index}-${item.id}`
                  }
                }
                onDragEnd={({ data }) => setData(data)}
                onEndReached={dataReachedEnd}
                onEndReachedThreshold={0.5}
            />
            { loading? 
            <View style={{ alignContent: 'center', alignItems: 'center'}}>
              <Spinner />
            </View> 
            : null }

      </View>
    );
}
