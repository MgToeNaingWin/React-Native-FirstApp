import { Text, StyleSheet, View, TextInput, Pressable, FlatList, ScrollView, Alert } from 'react-native'
import React, { JSX, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CurrencyExchangeValue } from '../constants/currency';
import CurrencyButton from './CurrencyButton';

export default function CurrencyExchange(): JSX.Element {
    const [inputValue, setInputValue] = useState('');
    const [resultValue, setResultValue] = useState("");
    const [targetCurrency, setTargetCurrency] = useState<string>('');

    const pressButton = (targetValue: Currency) => {
        const trimmed = inputValue.trim();

        if (!trimmed) {
            return Alert.alert("Notice", "Enter a value to Convert");
        }

        const inputNumber = Number(trimmed);

        if (isNaN(inputNumber)) {
            return Alert.alert("Notice", "Invaid Your Input");
        }

        const converted = inputNumber * targetValue.value;
        const result = `${converted.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 6
        })} ${targetValue.symbol} 🤩`;

        setResultValue(result);
        setTargetCurrency(targetValue.name);
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <Text style={styles.HeadingText}>Currency Exchanger</Text>

            <ScrollView
                contentContainerStyle={styles.Container}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
            >
                <View style={styles.TopContainer}>
                    <View style={styles.MmkContainer}>
                        <Text style={styles.Mmk}>MMK 🇲🇲</Text>
                        <TextInput
                            style={styles.inputField}
                            maxLength={12}
                            value={inputValue}
                            clearButtonMode='always'
                            onChangeText={(text) => {
                                setInputValue(text);
                                setResultValue("");
                                setTargetCurrency('');
                            }}
                            keyboardType='decimal-pad'
                            placeholder='Enter Myanmar Kyat...'
                            placeholderTextColor="#94A3B8"
                        />
                    </View>

                    {resultValue ? (
                        <View style={styles.resultBox}>
                            <Text style={styles.resultText}>{resultValue}</Text>
                        </View>
                    ) : null}
                </View>

                <View style={styles.ButtonContainer}>
                    <FlatList
                        numColumns={2}
                        data={CurrencyExchangeValue}
                        keyExtractor={item => item.name}
                        columnWrapperStyle={styles.columnWrapper}
                        contentContainerStyle={styles.listContent}
                        scrollEnabled={false}
                        renderItem={({ item }) => (
                            <Pressable
                                style={({ pressed }) => [
                                    styles.gridItem,
                                    targetCurrency === item.name && styles.selectedItem,
                                    pressed && styles.pressedItem
                                ]}
                                onPress={() => pressButton(item)}
                            >
                                <CurrencyButton
                                    name={item.name}
                                    flag={item.flag}
                                    isSelected={targetCurrency === item.name}
                                />
                            </Pressable>
                        )}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#F8FAFC',
    },
    HeadingText: {
        fontSize: 26,
        fontWeight: "bold",
        textAlign: "center",
        color: "#1E3A8A",
        marginVertical: 20,
    },
    Container: {
        paddingHorizontal: 16,
        paddingBottom: 24,
    },
    TopContainer: {
        backgroundColor: '#FFFFFF',
        padding: 16,
        borderRadius: 12,
        elevation: 3,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.08,
        shadowRadius: 3,
    },
    MmkContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#CBD5E1',
        borderRadius: 8,
        paddingHorizontal: 12,
    },
    Mmk: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#475569',
        marginRight: 10,
    },
    inputField: {
        flex: 1,
        height: 48,
        fontSize: 16,
        color: '#0F172A',
    },
    resultBox: {
        marginTop: 16,
        alignItems: 'center',
        paddingTop: 10,
        borderTopWidth: 1,
        borderTopColor: '#F1F5F9',
    },
    resultText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#059669',
    },
    ButtonContainer: {
        marginTop: 10,
    },
    columnWrapper: {
        gap: 8,
    },
    listContent: {
        paddingBottom: 20,
    },
    gridItem: {
        flex: 1,
        marginVertical: 4,
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
    },
    selectedItem: {
        backgroundColor: '#DBEAFE',
        borderWidth: 1,
        borderColor: '#3B82F6',
    },
    pressedItem: {
        opacity: 0.7,
    },
})