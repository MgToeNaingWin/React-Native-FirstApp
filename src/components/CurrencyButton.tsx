import { View, Text, StyleSheet } from 'react-native'
import React, { JSX } from 'react'

type CurrencyButtonProps = {
    name: string;
    flag: string;
    isSelected?: boolean;
}

const CurrencyButton = (props: CurrencyButtonProps): JSX.Element => {
    return (
        <View style={styles.buttonContent}>
            <Text style={styles.flagText}>{props.flag}</Text>
            <Text style={[
                styles.currencyName,
                props.isSelected && styles.currencyNameSelected
            ]}>
                {props.name}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 14,
        paddingHorizontal: 8,
        width: '100%',
    },
    flagText: {
        fontSize: 24,
        marginRight: 8,
    },
    currencyName: {
        fontSize: 14,
        fontWeight: '600',
        color: '#334155',
    },
    currencyNameSelected: {
        color: '#1D4ED8',
        fontWeight: '700',
    }
})

export default CurrencyButton;