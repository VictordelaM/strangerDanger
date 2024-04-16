import { uploadImg } from "../../functions/fetches.js";
import './uploadImgForm.css'
const UploadImgForm = () => {
  return (
    <>
      <form onSubmit={uploadImg}>
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
