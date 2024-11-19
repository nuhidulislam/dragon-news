import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
    return (
        <div>
            <h1 className="font-semibold text-2xl mb-3">Find Us On</h1>

            <div className="join flex join-vertical *:bg-base-100">
  <button className="btn join-item justify-start"> <FaFacebook></FaFacebook> FaceBook</button>
  <button className="btn join-item justify-start"><FaTwitter></FaTwitter> Twitter</button>
  <button className="btn join-item justify-start"> <FaInstagram></FaInstagram> Instragram</button>
</div>
            
        </div>
    );
};

export default FindUs;