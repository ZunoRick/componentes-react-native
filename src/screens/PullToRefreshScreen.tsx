import React, { useState } from 'react'
import { RefreshControl, ScrollView, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../../android/app/src/theme/appTheme'

export const PullToRefreshScreen = () => {
    const { top } = useSafeAreaInsets

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
                    progressBackgroundColor="#5856D6"
                    colors={ [ 'white', 'red', 'orange' ] }
                    style={{ backgroundColor: "#5856D6" }}
                    tintColor="white"
                    title='Refreshing'
                    titleColor="white"
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
