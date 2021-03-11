import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { Text } from '@ui-kitten/components';

interface IProps{
    item: any;
}

export const MovieCard: React.FC<IProps> = ({item}: IProps) => {
    return(
        <View style={{ ...styles.productItem }}>
            <Image resizeMode='contain' style={{ ...styles.itemHeader }} source={{uri:item.poster}} />
            <View style={{flexDirection:'column', flex:1}}>
                <Text category='h6'>{item.title}</Text>
                <Text category='s2'>Released on {new Date(item.release_date * 1000).toLocaleString()}</Text>
                <Text category='s1'>{item.overview}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    itemHeader: {
        width: 150,
        height: 200,
    },
    productItem: {
        flex: 1,
        paddingVertical: 10,
        maxWidth: Dimensions.get('window').width- 24,
        backgroundColor: 'white',
        borderColor: 'grey',
        flexDirection:'row',
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 4,
    },
});