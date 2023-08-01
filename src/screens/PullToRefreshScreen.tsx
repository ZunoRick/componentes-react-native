import React, { useContext, useState } from 'react'
import { RefreshControl, ScrollView, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../../android/app/src/theme/appTheme'
import { ThemeContext } from '../context/themeContext/ThemeContext'

export const PullToRefreshScreen = () => {
    const { top } = useSafeAreaInsets
    const { theme: { colors, dark } } = useContext( ThemeContext )

    const [refreshing, setRefreshing] = useState(false)
    const [data, setData] = useState<String>()

    const onRefresh = () => {
        setRefreshing(true)
        setTimeout(() => {
            console.log('Terminamos')
            setRefreshing(false)
            setData('Hola Mundo')
        }, 3000);
    }

    return (
        <ScrollView
            style={{
                marginTop: refreshing ? top : 0
            }}
            refreshControl={
                <RefreshControl
                    refreshing={ refreshing }
                    onRefresh={ onRefresh }
                    progressViewOffset={ 10 }
                    progressBackgroundColor={ colors.text }
                    colors={ [ 'white', 'red', 'orange' ] }
                    style={{ backgroundColor: "#5856D6" }}
                    tintColor="white"
                    title='Refreshing'
                    titleColor={ dark ? 'white' : 'black' }
                />
            }
        >
            <View style={ styles.globalMargin }>
                <HeaderTitle title='Pull to Refresh'/>

                {
                    data && <HeaderTitle title={ data }/>
                }
            </View>
        </ScrollView>
    )
}
