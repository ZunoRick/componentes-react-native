import React, { useState } from 'react'
import { Button, Modal, StyleSheet, Text, View } from 'react-native'
import { styles } from '../../android/app/src/theme/appTheme';
import { HeaderTitle } from '../components/HeaderTitle'

export const ModalScreen = () => {
    const [isVisible, setIsVisible] = useState(false)
    
    return (
        <View style={ styles.globalMargin }>
            <HeaderTitle title='Modal Screen' />

            <Button
                title='Abrir Modal'
                onPress={ () => setIsVisible(true) }
            />

            <Modal
                animationType='fade'
                visible={ isVisible }
                transparent
            >
                {/* Bakground negro */}
                <View style={ stylesModal.container }>
                    {/* Contenido del modal */}
                    <View style={ stylesModal.card }>
                        <Text style={ stylesModal.modalTitle }>Modal</Text>
                        <Text style={ stylesModal.modalText }> Cuerpo del modal</Text>
                        <Button
                            title='Cerrar'
                            onPress={ () => setIsVisible(false) }
                        />
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const stylesModal = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        backgroundColor: 'white',
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        elevation: 10,
        borderRadius: 5
    },
    modalTitle:{
        fontSize: 20,
        fontWeight: 'bold'
    },
    modalText: {
        fontSize: 15,
        fontWeight: '300',
        marginBottom: 20
    }
});