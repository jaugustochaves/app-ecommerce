import React from "react";
import { StyleSheet, View } from "react-native";

import Topo from "./Componets/Topo";

import Detalhes from "./Componets/Detalhes";

export default function Cesta() {
    return <>
        <Topo />
        <View style={estilos.cesta}>
            <Detalhes />
        </View>
    </>
}

const estilos = StyleSheet.create({
    cesta: {
        paddingHorizontal: 16,
        paddingVertical: 8
    }
})