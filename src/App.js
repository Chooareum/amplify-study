import { Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import SignOutPage from './SignOut';
import ConfirmPage from './Confirm';

/* src/App.js */
function App() {
  // Todo logic here

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignUpPage />} />
          <Route path='/SignIn' element={<SignInPage />} />
          <Route path='/SignOut' element={<SignOutPage />} />
          <Route path='/Confirm' element={<ConfirmPage />} />
        </Routes>
      </BrowserRouter>
      {/* Add Todo JSX here  */}
      {/* <Heading level={1}>Hello</Heading>
      <Button onClick={()=>console.log("")}>Sign out</Button> */}
    </>
  );
}

export default App;