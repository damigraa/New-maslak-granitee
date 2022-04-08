import React from 'react'
import { getCeramics } from './../../actions';

const Ceramics = () => {

    const [show, setShow] = useState(false);
    const [ceramicsModal, setCeramicsDetailModal] = useState(false);
    const [ceramicsDetails, setCeramicsDetails] = useState(null);
    const [currentId, setCurrentId] = useState(null)
    const dispatch = useDispatch();

    const ceramics = useSelector((state) => state.ceramics.ceramics)

    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    useEffect(() => {
        dispatch(getCeramics())
    }, [])



    const showCeramicsModal = (ceramics) => {
        setCeramicsDetails(ceramics);
        setCeramicsDetailModal(true);
    };
    return (
        <MainContainer
            backButtonProduct
            // productSort
            fullFunctional
            get={getCeramics}
            handleShow={handleShow}
        >
            <BackButton
                text="Назад"
                href="containerProductPage"
            />
            <Container>
                <Row>
                    <Col>
                        <RenderCeramics
                            showCeramicsModal={showCeramicsModal}
                            setShow={setShow}
                            setCurrentId={setCurrentId}
                            ceramics={ceramics}
                        />
                    </Col>
                </Row>
            </Container>
            <AddCeramics
                show={show}
                handleClose={handleClose}
                currentId={currentId}
                setCurrentId={setCurrentId}
            />
            <DetailsCeramics
                ceramicsModal={ceramicsModal}
                ceramicsDetails={ceramicsDetails}
                setCeramicsDetailModal={setCeramicsDetailModal}
            />
        </MainContainer >
    );
}

export default Ceramics
