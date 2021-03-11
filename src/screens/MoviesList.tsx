import React from 'react';
import { Dimensions, ImageBackground, StyleSheet, View, ListRenderItemInfo } from 'react-native';
import { List } from '@ui-kitten/components';
import { MovieCard } from '../components/MovieCard';

import moviesData from '../assets/movies.json';


export const MoviesList:React.FC = () => {
    const render = ({item}: ListRenderItemInfo<any>) => (
        <MovieCard item={item}/>
    );

    return (
        <>
            <List contentContainerStyle={styles.productList} data={moviesData} numColumns={2} renderItem={render} />
        </>
    );
}

const styles = StyleSheet.create({
    itemHeader: {
        maxHeight: 200,
        height: 200,
    },
    productList: {
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    productItem: {
        flex: 1,
        margin: 8,
        maxWidth: Dimensions.get('window').width / 2 - 24,
        backgroundColor: 'white',
        borderColor: 'grey',
    },
});