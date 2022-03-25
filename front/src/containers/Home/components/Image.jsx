import React, { useState, useEffect } from 'react';




export const Image = (props) => {
    return (
        <div
            style={{
                backgroundImage: `url(${props.sendUrl})`,
                width: "500px",
                height: "250px"
            }}
        />
    );
}
