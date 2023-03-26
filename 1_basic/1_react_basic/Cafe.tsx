import {View, Text, Button} from 'react-native'
import {useState} from 'react'

type catProps = {
    name: string
}
const Cat = (props: catProps) => {
    const [isHungry, setIsHungry] = useState(true)
    return (
        <View>
            <Text>
                Xin chào tên tôi là {props.name}, {isHungry ? 'Tôi đang đói' : 'Tôi no rồi'}
            </Text>
            <Button
                title={isHungry ? 'Cho tôi xin ít sữa' : 'THANK YOU'}
                disabled={!isHungry}
                onPress={() => {
                    setIsHungry(false)
                }}
            />
        </View>
    )
}

const Cafe = () => {
    return (
        <View>
            <Cat name="Leo teo meo" />
            <Cat name="Mèo béo ú" />
        </View>
    )
}

export default Cafe
