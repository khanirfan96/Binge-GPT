import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { updatePassword, signOut } from "firebase/auth";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from "../utils/Firebase";

const ChangePassword = ({ openDialog, setOpenDialog }) => {
    const navigate = useNavigate();
    const currentpass = useRef(null);
    const newpassword = useRef(null);
    const confirmpassword = useRef(null);

    const user = auth.currentUser;

    const handlePasswordChange = (event) => {
        event.preventDefault()
        // Handle the password change logic here
        if (newpassword.current.value !== confirmpassword.current.value) {
            return toast.error('Password is not match');
        }
        updatePassword(user, newpassword.current.value).then(() => {
            // password update successfully.
            toast.success("Password updated successfully!");
            signOut(auth)
            .then(() => { })
            .catch((error) => {
              // An error happened.
              toast.error("Error updating password: " + error.message);
              navigate("/error");
            });
        }).catch((error) => {
            // An error occurred
            toast.error("Error updating password: " + error.message);
        });
        setOpenDialog(false);
    };
    return (
        <div>
            <Dialog open={openDialog} onClose={setOpenDialog} className="relative z-30">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                />

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <DialogPanel
                            transition
                            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                        >
                            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                        <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                            Change Password
                                        </DialogTitle>
                                        <div className="mt-2">
                                            <input
                                                ref={currentpass}
                                                type="text"
                                                placeholder="Current Password"
                                                className="p-4 my-4 w-full bg-gray-600"
                                            />
                                            <input
                                                ref={newpassword}
                                                type="password"
                                                placeholder="New Password"
                                                className="p-4 my-4 w-full bg-gray-600"
                                            />
                                            <input
                                                ref={confirmpassword}
                                                type="text"
                                                placeholder="Confirm New Password"
                                                className="p-4 my-4 w-full bg-gray-600"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button
                                    type="button"
                                    onClick={handlePasswordChange}
                                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                >
                                    Change Password
                                </button>
                                <button
                                    type="button"
                                    data-autofocus
                                    onClick={() => setOpenDialog(false)}
                                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                >
                                    Cancel
                                </button>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
            <ToastContainer />
        </div>
    )
}

export default ChangePassword;