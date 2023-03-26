import {Text, TextInput, View} from "react-native";
import {useState} from "react";

const HandlingTextInput = () => {
    const [text, setText] = useState('')
    return (
        <View>
            <TextInput
                style={{height: 40}}
                placeholder="Nhập chữ để translate"
                onChangeText={text => setText(text)}
                defaultValue={text}
            />
            <Text style={{padding: 10, fontSize: 42}}>
                { text.split(' ').map(word => word && '🍕').join(' ')}
            </Text>
        </View>
    )
}

export default HandlingTextInput
