import { uploadImg } from "../../functions/fetches.js";
import "./uploadImgForm.css";
import { useNavigate } from "react-router-dom";
const UploadImgForm = () => {
  const navigate = useNavigate();
  const redirect = (event) => {
    uploadImg(event);
    navigate("/");
  };
  return (
    <>
      <form onSubmit={redirect}>
        <label htmlFor="text">Bildbeschreibung</label>
        <input type="text" name="text" id="inputComment"></input>
        <label htmlFor="file">Upload Image</label>
        <input name="image" type="file"></input>
        <button>Upload!</button>
      </form>
    </>
  );
};

export default UploadImgForm;
