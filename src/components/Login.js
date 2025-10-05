import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { NETFLIX_BG_IMAGE, USER_AVATAR } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignForm, setIsSignForm] = useState(true);
  const toggleSignInForm = () => {
    setErrorMessage("");
    setIsSignForm(!isSignForm);
  };

  if (user) navigate("/browse");

  const [errorMessage, setErrorMessage] = useState(null);

  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullName.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.errorMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode === "auth/invalid-credential") {
            setErrorMessage("Incorrect email and password");
          } else {
            setErrorMessage(errorCode + "-" + errorMessage);
          }
        });
    }
  };
  return (
    <div className="absolute">
      <img
        className="h-screen object-cover md:w-screen"
        src={NETFLIX_BG_IMAGE}
        // srcSet={NETFLIX_BG_IMAGE_SRC_SET}
        alt="bg-image"
      />

      <form
        onSubmit={(e) => e.preventDefault()}
        className="px-16 flex flex-col rounded-md top-0 mt-28 w-full md:w-7/12 text-white absolute bg-black bg-opacity-80 z-50 mx-auto right-0 left-0"
      >
        <h1 className="mt-20 text-white mb-4 font-bold text-2xl">
          {isSignForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignForm && (
          <input
            ref={fullName}
            className="bg-slate-700 focus:outline-none mb-4 p-4 rounded-sm"
            type="text"
            placeholder="Enter Full Name"
            required={true}
            autoComplete="fullname"
          />
        )}
        <input
          ref={email}
          className="bg-slate-700 focus:outline-none mb-4 p-4 rounded-sm"
          type="email"
          placeholder="Email"
          autoComplete="email"
          required={true}
        />
        <input
          ref={password}
          className="bg-slate-700 focus:outline-none mb-4 p-4 rounded-sm"
          type="password"
          placeholder="Password"
          autoComplete="new-password"
          required={true}
        />
        {errorMessage && (
          <div className="flex items-center pb-4">
            <img
              className="w-6"
              src="/assets/error-icon.svg"
              alt="error-icon"
            />
            <p className="pl-2 font-bold text-red-500">{errorMessage}</p>
          </div>
        )}
        <button
          onClick={handleButtonClick}
          className="mb-4 text-white bg-[#C11119] py-2 w-full rounded-sm"
        >
          {isSignForm ? "Sign In" : "Sign Up"}
        </button>
        <div className="flex pb-20 text-white">
          <p>{isSignForm ? "New to Netflix?" : "Already Registered?"}</p>
          <button onClick={toggleSignInForm} className="pl-2 hover:underline">
            {isSignForm ? "Sign Up" : "Sign In"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
