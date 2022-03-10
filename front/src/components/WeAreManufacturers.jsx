import React, { useEffect } from 'react'
import './style.scss'
import { useSelector, useDispatch } from 'react-redux';
import { getManufacture } from '../actions';

function WeAreManufacturers() {
    const manufacture = useSelector(state => state.manufacture.manufacture)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getManufacture())
    }, [])


    return (


        <div className="container-fluid manufacturers">
            <div className="row text-center">

                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-xs-12 text-center">
                            <h2>Мы производители</h2>
                            <p>И вот что это значит для вас</p>
                        </div>
                    </div>
                    <div className="row text-center">
                        {manufacture.length > 0 ?
                            manufacture.map((man, index) =>
                                <div  key={index}  className="col-md-3 col-sm-6 col-xs-12">
                                    <div className="box-icon">
                                        <img style={{ width: "70px", height: "70px" }} src={man.iconImg} alt="" />
                                    </div>
                                    <h4 className="active-text">{man.title}</h4>
                                    <p className="center-padding">{man.description}</p>
                                </div>
                            
                                            ) : null
                                            }
                            </div>
                </div>
            </div>
        </div>
    )
}

export default WeAreManufacturers
