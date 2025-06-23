import { useNavigate } from "react-router";
import { useAuth } from "../hook/useAuth";
import toast from "react-hot-toast";

const GoogleLogin = () => {
  const { continueWithGoogle } = useAuth();
  const navigate = useNavigate();
  const handleGoogleLogin = () => {
    continueWithGoogle()
      .then((result) => {
        console.log("after google login", result);
        toast.success("Google logged successful");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error);
      });
  };
  return (
    <div>
      {/* Divider */}
      <div className="flex items-center my-6">
        <hr className="flex-grow border-gray-300" />
        <span className="mx-3 text-gray-500 font-semibold">OR</span>
        <hr className="flex-grow border-gray-300" />
      </div>

      {/* Continue with Google Button */}
      <button
        onClick={handleGoogleLogin}
        className="w-full flex items-center justify-center gap-3 py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-100 transition cursor-pointer"
      >
        <svg
          className="w-5 h-5"
          viewBox="0 0 533.5 544.3"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#4285F4"
            d="M533.5 278.4c0-18.2-1.6-35.7-4.7-52.7H272v99.7h146.9c-6.3 34-25 62.8-53.3 82v68h85.9c50.4-46.4 79.9-114.8 79.9-197z"
          />
          <path
            fill="#34A853"
            d="M272 544.3c72.6 0 133.6-24 178.2-65.3l-85.9-68c-23.8 16-54.2 25.5-92.3 25.5-70.9 0-131-47.8-152.5-112.3h-89.5v70.6c44.2 87.3 134.6 149.5 242 149.5z"
          />
          <path
            fill="#FBBC05"
            d="M119.5 322.2c-11-32.8-11-68.4 0-101.2v-70.6h-89.5c-38.6 75.7-38.6 165.7 0 241.4l89.5-69.6z"
          />
          <path
            fill="#EA4335"
            d="M272 107.7c39.5 0 75.2 13.6 103.2 40.5l77.3-77.3C405.7 24 346.7 0 272 0 164.6 0 74.2 62.2 30 149.5l89.5 69.6c21.5-64.6 81.6-112.3 152.5-112.3z"
          />
        </svg>
        Continue with Google
      </button>
    </div>
  );
};

export default GoogleLogin;
