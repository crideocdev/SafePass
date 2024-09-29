
import {View,Text, Image} from "react-native";

export default function SplashScreen(){
    return(
        <View className="flex-1 justify-center items-center bg-customColor-100">
            <View>
                <Image 
                    source={require('../assets/icon.png')}
                    className="w-24 h-24"
                    style={{ resizeMode: "cover" }}
                />
                <Text className="text-center text-customColor-300">Cargando</Text>
            </View>
        </View>
    )
}