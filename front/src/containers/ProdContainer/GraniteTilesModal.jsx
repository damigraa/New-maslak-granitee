import React, { useState, useEffect } from 'react';
import ContainerList from '../ProductListPage/ContainerList';
import { getGraniteTiles } from '../../actions/components/graniteTiles';
import { useDispatch, useSelector } from 'react-redux';


const RenderGraniteTilesModal = ({ tiles, setTiles }) => {
    const graniteTiles = useSelector((state) => state.graniteTiles.graniteTiles)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGraniteTiles())
    }, [])

    return (
        <ContainerList
            title="Плитка"
            titleTwo="плитку"
            product={graniteTiles}
            stateProduct={tiles}
            setStateProduct={setTiles}
        />
    )
}

export default RenderGraniteTilesModal

