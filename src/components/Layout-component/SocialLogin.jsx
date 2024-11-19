import { FaGoogle,FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h1 className="font-semibold mb-3 text-2xl">Login with</h1>
            <div className="*:w-full space-y-2">
                <button className="btn"><FaGoogle></FaGoogle>Login with Google</button>
                <button className="btn"><FaGithub></FaGithub> Login with Git Hub</button>
            </div>
            
        </div>
    );
};

export default SocialLogin;