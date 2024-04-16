import Nav from "../components/nav/Nav";
import UploadImgForm from "../components/uploadImgForm/UploadImgForm";

const UploadImg = () => {
    if(localStorage.getItem('token')){return (
        <>
            <Nav />
            <UploadImgForm />
        </>
      );}
      else{
        return(
          <>
          <Nav/>
          <p>login to upload images</p>
          </>
        )
      }
}
 
export default UploadImg;

