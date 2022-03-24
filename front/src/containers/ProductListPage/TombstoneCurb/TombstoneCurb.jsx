import React, { useState, useEffect } from 'react';
import ContainerList from '../ContainerList';
import { getTombstoneCurb } from './../../../actions/components/tombstoneCurb';
import { useDispatch, useSelector } from 'react-redux';


const RenderTombstoneCurbModal = ({ SizeMemorials, setSizeMemorials }) => {
    const tombstoneCurb = useSelector((state) => state.tombstoneCurb.tombstoneCurb)

    const dispatch = useDispatch();

    const onChange = e => {
        setSizeMemorials(e.target.value)
    }

    useEffect(() => {
        dispatch(getTombstoneCurb())
    }, [])

    return (
        <ContainerList
            title="Цветники и надгробия"
            product={tombstoneCurb}
            onChange={onChange}
            checked={SizeMemorials}
        />
    )
}

export default RenderTombstoneCurbModal

