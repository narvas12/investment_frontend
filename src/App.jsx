import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import AuthProvider, { useAuth } from "./AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import UnauthHeader from "./components/Layout/UnauthHeader";
import AuthHeader from "./components/Layout/AuthHeader";
import UnauthFooter from "./components/Layout/UnauthFooter";
import AuthFooter from "./components/Layout/AuthFooter";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Home from "./components/Layout/Home";
import AddDeposit from "./components/Transactions/AddDeposit";
import DepositList from "./components/Transactions/DepositList";
import WithdrawalList from "./components/Transactions/WithdrawalList";
import AddWithdrawal from "./components/Transactions/AddWithdrawal";
import PendingDepositTransactions from "./components/Transactions/admin/PendingDeposiTransactions.jsx";
import PendingWithdrawalsTransactions from "./components/Transactions/admin/PendingWithdrawalTransaction";
import DashboardOverview from "./components/Transactions/DashBoardOverView";
import InvestmentList from "./components/Investments/InvestmentList";
import AboutUs from "./components/miniComponents/About";
import CompleteDeposit from "./components/Transactions/CompleteDeposit.jsx";
import Profile from "./components/miniComponents/Profile.jsx";
import EarningsTable from "./components/Transactions/Earnings.jsx";
import CreatePaymentAccount from "./components/UserData/CreatePaymentAccount.jsx";
import PaymentAccountsList from "./components/UserData/PaymentAccountsList.jsx";
import AddBonusComponent from "./components/Transactions/admin/AddBonus.jsx";
import AdminDashboardLayout from "./components/Layout/AdminHeader.jsx"; // Import your Admin layout

const App = () => {
  const { isAuthenticated, loading, user } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // You could replace this with a spinner component
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
            {/* Default route */}
            <Route
              path="/"
              element={
                isAuthenticated ? (
                  <Navigate to="/dashboard" />
                ) : (
                  <Navigate to="/home" />
                )
              }
            />

            {/* Unauthenticated Routes */}
            <Route element={<UnauthHeader />}>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              
            </Route>

            {/* Authenticated Routes with AuthHeader */}
            <Route
              element={
                <ProtectedRoute>
                  <AuthHeader />
                </ProtectedRoute>
              }
            >
              <Route
                path="/dashboard"
                element={<Navigate to="/dashboard/overview" />}
              />
              <Route path="/dashboard/deposits" element={<DepositList />} />
              <Route path="/dashboard/withdrawals" element={<WithdrawalList />} />
              <Route path="/dashboard/add-deposit" element={<AddDeposit />} />
              <Route path="/dashboard/add-withdrawal" element={<AddWithdrawal />} />
              <Route path="/dashboard/overview" element={<DashboardOverview />} />
              <Route path="/dashboard/investments" element={<InvestmentList />} />
              <Route path="/dashboard/comfirm-deposit" element={<CompleteDeposit />} />
              <Route path="/dashboard/profile" element={<Profile />} />
              <Route path="/dashboard/earnings" element={<EarningsTable />} />
              <Route path="/dashboard/add-payment-account" element={<CreatePaymentAccount />} />
              <Route path="/dashboard/withdrawal-accounts" element={<PaymentAccountsList />} />
            </Route>

            {/* Admin Dashboard Routes */}
            <Route
              element={
                <ProtectedRoute>
                  {user?.is_staff ? <AdminDashboardLayout /> : <Navigate to="/admin/update-deposits" />}
                </ProtectedRoute>
              }
            >
              <Route
                path="/admin/update-deposits"
                element={<PendingDepositTransactions />}
              />
              <Route
                path="/admin/update-withdrawals"
                element={<PendingWithdrawalsTransactions />}
              />
              <Route
                path="/admin/send-bonus"
                element={<AddBonusComponent />}
              />
            </Route>

            {/* Catch-all undefined routes */}
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </main>
        {/* Footer based on authentication status */}
        {isAuthenticated ? <AuthFooter /> : <UnauthFooter />}
      </div>
    </Router>
  );
};

export default App;
