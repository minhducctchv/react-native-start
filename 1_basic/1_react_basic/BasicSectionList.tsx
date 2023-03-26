import {SectionList, Text, View, StyleSheet} from "react-native";

const data = [
    {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
    {
        title: 'J',
        data: [
            'Jackson',
            'James',
            'Jillian',
            'Jimmy',
            'Joel',
            'John',
            'Julie',
        ],
    },
    {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
    {
        title: 'J',
        data: [
            'Jackson',
            'James',
            'Jillian',
            'Jimmy',
            'Joel',
            'John',
            'Julie',
        ],
    },
    {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
    {
        title: 'J',
        data: [
            'Jackson',
            'James',
            'Jillian',
            'Jimmy',
            'Joel',
            'John',
            'Julie',
        ],
    },
    {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
    {
        title: 'J',
        data: [
            'Jackson',
            'James',
            'Jillian',
            'Jimmy',
            'Joel',
            'John',
            'Julie',
        ],
    },
    {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
    {
        title: 'J',
        data: [
            'Jackson',
            'James',
            'Jillian',
            'Jimmy',
            'Joel',
            'John',
            'Julie',
        ],
    },
    {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
    {
        title: 'J',
        data: [
            'Jackson',
            'James',
            'Jillian',
            'Jimmy',
            'Joel',
            'John',
            'Julie',
        ],
    },
    {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
    {
        title: 'J',
        data: [
            'Jackson',
            'James',
            'Jillian',
            'Jimmy',
            'Joel',
            'John',
            'Julie',
        ],
    }
]

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});
const BasicSectionList = () => {
    return (
        <View style={styles.container}>
            <SectionList
                sections={data}
                renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                renderSectionFooter={({section}) => <Text style={{...styles.sectionHeader, backgroundColor: 'black'}}>{section.title}</Text>}
                keyExtractor={(item, index) => `${item}${index}`}
            />
        </View>
    )
}

export default BasicSectionList
