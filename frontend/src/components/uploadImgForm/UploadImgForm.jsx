import { uploadImg } from "../../functions/fetches.js";
import "./UploadImgForm.css"

const UploadImgForm = () => {
    return ( 
        <div className="upload-form">
            <form>
                <label htmlFor="file">Upload Image</label>
                <input name="datei" type="file"></input>  
                <button>Upload!</button>
            </form>
        </div>
     );
}
 
export default UploadImgForm;