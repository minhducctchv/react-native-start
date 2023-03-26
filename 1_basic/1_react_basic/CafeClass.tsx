import React, {Component} from 'react'
import {Text, View, Button} from 'react-native'

type catProps = {
    name: string
}
class Cat extends Component<catProps> {
    state = {isHungry: true}
    render() {
        return (
            <View>
                <Text>
                    Xin chào tên tôi là {this.props.name}, {this.state.isHungry ? 'Tôi đang đói' : 'Tôi no rồi'}
                </Text>
                <Button
                    title={this.state.isHungry ? 'Cho tôi xin ít sữa' : 'THANK YOU'}
                    disabled={!this.state.isHungry}
                    onPress={() => {
                        this.setState({isHungry: false})
                    }}
                />
            </View>
        )
    }
}

class CafeClass extends Component{
    render() {
        return (
            <View>
                <Cat name="Leo Băn Teo" />
                <Cat name="Meo Meo Con Heo" />
            </View>
        )
    }
}

export default CafeClass
