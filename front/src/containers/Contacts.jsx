import React, { useEffect } from 'react'
import ContainerPage from '../components/ContainerPage/ContainerPage';
import Layout from '../components/Layout';
// import TitleContacts from '../components/TitleContacts';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from './../actions/components/contact';
import Loader from './../components/Small/Loader';
import ComeToUs from '../components/ComeToUs';
import { generatePublicUrl } from '../urlConfig';

function Contacts() {
    const dispatch = useDispatch()
    const contact = useSelector((state) => state.contact.contact)


    useEffect(() => {
        dispatch(getContacts())
    }, [])


    const renderContacts = () => {
        if (contact.length === 0) {
            return (
                <Loader />
            )
        }
        return (
            <>
                {contact.length > 0 ?
                    contact.map((con) =>
                        <div className="col-md-4 my-1 sm-12">
                            <div className="WhatsApp mainContacts-img text-center">
                                <img
                                    style={{ height: "40px", width: "40px", marginBottom: "10px" }}
                                    src={generatePublicUrl(con.iconImg)}
                                />
                            </div>
                            <div className="mainContacts-number text-center">
                                <a href={con.href}>{con.title}</a>
                            </div>
                            <div className="mainContacts-text text-center">{con.description}</div>
                        </div>
                    ) : null
                }
            </>
        )
    }
    return (
        <Layout>
            <ContainerPage
                title={`Контакты "МАСЛАК-ГРАНИТ"`}
            >

                <div className="row my-5 text-center">

                    {renderContacts()}
                    {/* <div className="col-md-4  my-1 sm-12">
                        <div className="Phone mainContacts-img  text-center">
                            <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-house-door" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z" />
                                <path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                            </svg>
                        </div>
                        <div className="mainContacts-number text-center">
                            <a href="tel:+79537513915">+7 953 157 39 15</a>
                        </div>
                        <div className="mainContacts-text text-center">с 7-00 до 20-00 мск</div>
                    </div>

                    <div className="col-md-4 my-1 sm-12">
                        <div className="Email mainContacts-img  text-center"><svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-envelope-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                        </svg></div>
                        <div className="mainContacts-number  text-center">
                            <a href="mailto:admin@maslak-granit.ru">admin@maslak-granit.ru</a>
                        </div>
                        <div className="mainContacts-text  text-center">Присылайте проект на почту</div>
                    </div> */}
                </div>
                <ComeToUs />
            </ContainerPage>
        </Layout>

    )
}

export default Contacts;
