import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Texto from "../../../componets/Texto";

import logo from '../../../../assets/logo.png';

export default function Detalhes() {
    return <>
        <Texto style={estilos.subtitulo}>Cesta de Verduras</Texto>
        <View style={estilos.vFabricante}>
            <Image source={logo} style={estilos.imagemLogo} />
            <Texto style={estilos.fabricante}>Jenny Jack Farm</Texto>
        </View>
        <Texto style={estilos.descricao}>Uma cesta com produtos selecionados cuidadozamente da fazenda direto para a sua cozinha</Texto>
        <Texto style={estilos.preco}>R$ 40,00</Texto>
    </>
}

const estilos = StyleSheet.create({
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