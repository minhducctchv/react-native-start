import {Text, View} from "react-native";

type catProps = {
    name: string
}
const Cat2 = (props: catProps) => {
    return (
        <View>
            <Text>Tên meo là : {props.name}</Text>
        </View>
    )
}

export default Cat2
