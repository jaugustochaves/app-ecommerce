import React from "react";
import { StyleSheet, Image, Dimensions, Text, View } from "react-native";

import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';
const width = Dimensions.get('screen').width;

export default function Cesta() {
    return <>
        <Image source={topo} style={estilos.topo} />
        <Text style={estilos.titulo}>Detalhe da Cesta</Text>
        <View style={estilos.cesta}>
            <Text style={estilos.subtitulo}>Cesta de Verduras</Text>
            <view style={estilos.vFabricante}>
                <Image source={logo} style={estilos.imagemLogo} />
                <Text style={estilos.fabricante}>Jenny Jack Farm</Text>
            </view>
            <Text style={estilos.descricao}>Uma cesta com produtos selecionados cuidadozamente da fazenda direto para a sua cozinha</Text>
            <Text style={estilos.preco}>R$ 40,00</Text>
        </View>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width
    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16
    },
    cesta: {
        paddingHorizontal: 16,
        paddingVertical: 8
    },
    subtitulo: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontWeight: "bold"
    },
    vFabricante: {
        flexDirection: "row",
        paddingVertical: 12
    },
    imagemLogo: {
        width: 32,
        height: 32
    },
    fabricante: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    }
})