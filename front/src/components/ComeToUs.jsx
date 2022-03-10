import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getComeToUs } from '../actions';
import Loader from './Small/Loader';


const ComeToUs = () => {
    const comeToUs = useSelector((state) => state.comeToUs.comeToUs)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getComeToUs())
    }, [])


    const renderComeToUs = () => {
        if (comeToUs.length === 0) {
            return (
                <Loader />
            )
        }
        return (
            <div>
                {comeToUs.length > 0 ?
                    comeToUs.map((comeToUs, index) =>
                        <div key={index} className="titles">
                            <div style={{ padding: "10px" }} className="titles-title">
                                <h2>{comeToUs.heading}</h2>
                                <span style={{ textAlign: "center" }}>{comeToUs.description}</span>
                            </div>
                        </div>
                    ) : null
                }
            </div>
        )
    }
    return (
        <>
            {renderComeToUs()}
        </>
    )
}

export default ComeToUs;