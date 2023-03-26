import {Text, TextInput, View} from "react-native";

const Cat = () => {
    return (
        <View>
            <Text>Xin chào tôi là ...</Text>
            <TextInput
                style={
                    {
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 1
                    }
                }
                defaultValue="Đô ra e mon"
            />
        </View>
    )
}

export default Cat
