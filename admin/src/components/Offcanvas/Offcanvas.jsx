import React, { useState } from "react";

import { Button } from 'react-bootstrap';
import { OffcanvasProvider, Trigger, Offcanvas } from 'react-simple-offcanvas'
import SidebarTwo from './../MainLinks/SidebarTwo';



const Example = () => {

    return (
        <>
            <OffcanvasProvider >
                <Trigger>
                    <div>
                        Меню
                    </div>
                </Trigger>
                <Offcanvas position="left" title="меню">
                    <SidebarTwo />

                </Offcanvas>
            </OffcanvasProvider>
        </>
    );
}

export default Example



