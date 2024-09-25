import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Games from "./pages/Games";
import Activities from "./pages/Activities";
import Accounts from "./pages/Accounts";
import NavBar from "./components/NavBar";
import MyProfile from "./pages/MyProfile";
import EditProfile from "./pages/EditProfile";
import Wallet from "./pages/Wallet";
import Withdraw from "./pages/Withdraw";
import Deposit from "./pages/Deposit";
import Notification from "./pages/Notification";

import KYC from "./pages/KYC";
import TicTacToe from "./components/tic/TicTacToe";
=======
import GuessNumberGame from "./gamesPage/GuessNumberGame";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/account" element={<Accounts />} />
        <Route path="/account/my-profile" element={<MyProfile />} />
        <Route
          path="/account/my-profile/edit-profile"
          element={<EditProfile />}
        />
        <Route path="/account/wallet" element={<Wallet />} />
        <Route path="/account/wallet/withdraw" element={<Withdraw />} />
        <Route path="/account/wallet/deposite" element={<Deposit />} />
        <Route path="/notifications" element={<Notification />} />

        <Route path="/kyc" element={<KYC />} />
        <Route path="/tic" element={<TicTacToe/>} />
=======
        <Route path="/account/wallet/deposite" element={<Deposit />} />
        <Route path="/games/guess-number" element={<GuessNumberGame />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
