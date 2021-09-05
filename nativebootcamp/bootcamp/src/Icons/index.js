import React from 'react'
import VectorIcons from 'react-native-vector-icons/Ionicons'

VectorIcons.loadFont();


export default function Icons({name, size, focused, focusedColor = "tomato", color = "black"}) {
    return (
        <VectorIcons
        size={size}
        name={name}
        color={focused ? focusedColor : color}
      />
    )
}
