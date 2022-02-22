import axios from "axios";
import { API } from "../../../api";
import { UPDATE_USER, UPLOAD_PROFILE_IMAGE } from "../../types";

const temporaryToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjIsImVtYWlsIjoiYmFndXNuQGdtYWlsLmNvbSIsImlhdCI6MTY0NTUzOTMyMSwiZXhwIjoxNjQ1NjI1NzIxfQ.guh0ffFOnAom4amJKp0WRiNMuvCjQlFz-s1tMB0g0qE";

// export const uploadImageAction = (data) => {
//   return (dispatch) => {
//     axios
//       .put(API + "api/v1/user/upload", { image: data }, { headers: { Authorization: "Bearer " + temporaryToken } })
//       .then((res) => {
//         console.log(res);
//         dispatch({ type: UPLOAD_PROFILE_IMAGE });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
// };

export const updateProfileAction = (name, email) => {
  return (dispatch) => {
    axios
      .put(
        API + "api/v1/user/edit",
        { fullName: name, email: email },
        {
          headers: {
            Authorization: "Bearer " + temporaryToken,
          },
        }
      )
      .then((response) => {
        console.log(response);
        dispatch({ type: UPDATE_USER });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
