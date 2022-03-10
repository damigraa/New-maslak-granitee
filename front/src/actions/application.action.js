import { applicationConstants } from './constants'
import axios from '../helpers/axios';
import swal from 'sweetalert';


export const createApplication = (form) => {
  return async (dispatch) => {
    try {
      dispatch({ type: applicationConstants.CREATE_APPLICATION_REQUEST });
      const res = await axios.post(`application/create`, form);
      if (res.status === 201) {
        dispatch({ type: applicationConstants.CREATE_APPLICATION_SUCCESS });
        swal({
          title: "Успешно отправено",
          text: "Оператор свяжится с вами в ближайшее время",
          icon: "success",
        });
      } else {
        dispatch({ type: applicationConstants.CREATE_APPLICATION_FAILURE });
      }
    } catch (error) {
      console.log(error);
    }
  };
};



// export const getApplication = () => {
//   return async (dispatch) => {
//     try {
//       dispatch({ type: applicationConstants.GET_APPLICATION_REQUEST });
//       const res = await axios.get(`application/getApplications`);
//       if (res.status === 200) {
//         const { applications } = res.data;
//         dispatch({
//           type: applicationConstants.GET_APPLICATION_SUCCESS,
//           payload: { applications },
//         });
//       } else {
//         dispatch({ type: applicationConstants.GET_APPLICATION_FAILURE });
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };