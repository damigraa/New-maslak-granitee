
import axios from '../../helpers/axios';


export const updatedStandMonument = (id, updateStandMonument) => axios.patch(`/standMonument/update/${id}`, updateStandMonument)
export const deletedStandMonument = (id) => axios.delete(`/standMonument/delete/${id}`)
