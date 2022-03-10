import React from 'react'
import HelpModal from './HelpModal'

function Help() {
    const submitApplicationForm = () => {

    }
    return (
        <div className="container-fluid">
            <div className="container help">
                <div className="row">
                    
                    <div className="col-md-4 col-xs-12 help-img">
                        <div className="two" ></div>
                    </div>
                    <div className="col-sm-6 col-sm-offset-6 col-md-offset-6 col-md-6 col-xs-12 head-under">
                        <div className="row">
                            <div className="col-md-8 col-xs-12">
                                <HelpModal
                                    title={"Подберем модель и ответим на все вопросы бесплатно"}
                                    description={"Оставьте ваши контакты и мы перезвоним вам в течение 3-х минут"}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Help
