import React from 'react';
import { Dimensions, ImageBackground, StyleSheet, View } from 'react-native';
import { Card, Text } from '@ui-kitten/components';


interface IProps{
    item: any;
}

export const MovieCard: React.FC<IProps> = ({item}: IProps) => {

    const cardHeader = (item:any) => <ImageBackground resizeMode='stretch' style={{ ...styles.itemHeader }} source={{uri:item.poster}} />;

    const cardFooter = (item:any) => <Text style={{padding:5}}>{item.overview}</Text>;

    return(
        <Card style={{ ...styles.productItem, borderColor: '#b3b3b3' }} header={() => cardHeader(item)} footer={() => cardFooter(item)}>
            <View>
                <Text category='h5'>{item.title}</Text>
                <Text category='h6'>Released on {new Date(item.release_date * 1000).toLocaleString()}</Text>
            </View>
        </Card>
    )
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