import React from 'react'
import {
    StyleSheet,
    Text,
    View,
} from 'react-native'

const styles = StyleSheet.create({
    display: {
        flex: 2,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        alignItems: 'flex-end',
    },
    displayValue: {
        fontSize: 60,
        color: '#fff',
    },
    displayHistory: {
        fontSize: 30,
        color: '#fff',
    }
})

export default props => 
    <View style={styles.display}>
        <Text style={styles.displayHistory}
            numberOfLines={1}>{props.history}</Text>
        <Text style={styles.displayValue}
            numberOfLines={1}>{props.value}</Text>
    </View>