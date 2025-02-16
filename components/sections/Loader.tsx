"use client";

import React from 'react'
import CircularText from '../ui/CircularText';

export default function Loader() {
    return (
        <CircularText
            text="PARKOUR*MAROC*"
            onHover="speedUp"
            spinDuration={20}
            className="custom-class"
        />
    )
}
