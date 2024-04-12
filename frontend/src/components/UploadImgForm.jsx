const UploadImgForm = () => {
    return ( 
        <>
        <form>
            <label for="file">Upload Image</label>
                <input name="datei" type="file"></input>  
            <button>Upload!</button>
        </form>
        </>
     );
}
 
export default UploadImgForm;
