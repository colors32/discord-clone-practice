import React, { useEffect } from 'react';
import './App.scss';
import Sidebar from "./components/sidebar/Sidebar";
import Chat from "./components/chat/Chat";
import Login from "./components/login/Login"
import { useAppDispatch, useAppSelector } from './app/hooks';
import { auth } from './firebase';
import { login, logout } from './features/userSlice';
import {ErrorFallBack} from './utils/ErrorFallBack'
import {ErrorBoundary} from 'react-error-boundary'

function App() {

  const user = useAppSelector((state) => state.user.user);
  // const user = null;

  const dispatch = useAppDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((loginUser) => {
      // console.log(loginUser);
      if (loginUser) {
        dispatch(login({
          uid: loginUser.uid,
          photo: loginUser.photoURL,
          email: loginUser.email,
          displayName: loginUser.displayName,
        }))
      } else {
        dispatch(logout());
      }
    })
  }, [dispatch]);

  return (
    <div className="App">
      {user ? (
        <>
          {/* sidebar */}
          <ErrorBoundary fallbackRender={ErrorFallBack}>
          <Sidebar />
          </ErrorBoundary>
          {/* chat */}
          <Chat />
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </div>
  );
}

export default App;
