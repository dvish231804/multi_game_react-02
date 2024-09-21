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

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/game" element={<Games/>} />
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
