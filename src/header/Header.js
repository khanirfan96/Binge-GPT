import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ChangePassword from "../changepassword/changepass";
import { auth } from "../utils/Firebase";
import { changeLanguage } from "../utils/configSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import { addUser, removeUser } from "../utils/userSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearchView);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => { })
      .catch((error) => {
        // An error happened.
        navigate("/error");
        toast.success('Sign out Succesfully!')
      });
  };

  const handleGPT = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handlePasswordChange = () => {
    setOpenDialog(true);
  };

  function getFirstChars(str) {
    return (str ? str.split(' ').map(word => word.charAt(0)).join('') : 'G');
  }

  return (
    <>
      <div className="absolute px-8 py-2 w-[-webkit-fill-available] bg-gradient-to-b from-black z-20 justify-between flex flex-col md:flex-row">
        <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="netflix-url" />
        {user && (
          <div className="flex p-3 justify-between items-center">

            {showGptSearch && (
              <select
                className="p-2 m-2 bg-gray-900 text-white"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <button
              className="py-2 px-4 mx-4 my-2 bg-red-600 text-white rounded-lg"
              onClick={handleGPT}
            >
              {showGptSearch ? "Homepage" : "GPT Search"}
            </button>
            <div className="w-10 h-10 rounded-3xl bg-red-600">
              <div className="text-white text-3xl text-center font-bold cursor-pointer" onClick={toggleDropdown}>{getFirstChars(user.displayName)}</div>
            </div>
            {isOpen && (
              <div className="absolute right-4 mt-[115px] w-30 bg-red-600 z-10 rounded-md">
                <ul className="p-1">
                  <li
                    className="py-1 px-2 text-white cursor-pointer"
                    onClick={handlePasswordChange}
                  >
                    Change Password
                  </li>
                  <div className="border border-solid border-white" />
                  <li
                    className="py-1 px-2 text-white cursor-pointer"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}

      </div>
      <ChangePassword openDialog={openDialog} setOpenDialog={setOpenDialog} />
      <ToastContainer />
    </>
  );
};

export default Header;
