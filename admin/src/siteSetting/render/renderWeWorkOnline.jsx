import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteWeWorkOnline } from '../../actions'
import Loader from "../../components/Loader"
import Container from '@material-ui/core/Container'



const RenderWeWorkOnline = ({ weWorkOnline, setCurrentId, setShow }) => {
    const dispatch = useDispatch()


    const Edit = (item) => {
        setCurrentId(item._id)
        setShow(true)
    }
    return (
        <div>
            {!weWorkOnline ? <Loader /> :
                weWorkOnline.map((item) =>
                    <div key={item.id}>
                        <span>----------------------</span>
                        <div><span style={{ color: "white" }}>Главный Заголовок:</span> {item.stage || "-------"}</div>
                        <div><span style={{ color: "white" }}>Описание:</span> {item.title || "-------"}</div>
                        <div><span style={{ color: "white" }}>Подробнее: </span>{item.description.map((des, index) => <div>{`${index} ${des} `} </div>)}</div>
                        <div><span style={{ color: "white" }}>Первое имя:</span> {item.buttonText || "-------"}</div>
                        <div> <span style={{ color: "white" }}>Первое описание:</span> {item.buttonHref || "-------"}</div>
                        <div>
                            <button className="btn btn-secondary m-1" onClick={() => Edit(item)}>Редактировать</button>
                            <button className="btn btn-secondary m-1" onClick={() => dispatch(deleteWeWorkOnline(item._id))}>Удалить</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default RenderWeWorkOnline