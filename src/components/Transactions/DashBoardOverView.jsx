import React, { useEffect, useState } from "react";
import { getOverview } from "../../services/OverviewService"; // Update the path according to your file structure

const DashboardOverview = () => {
  const [overviewData, setOverviewData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOverviewData = async () => {
      try {
        const data = await getOverview();
        setOverviewData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchOverviewData();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        Error fetching overview: {error.message}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
      
      <Card
        title="Active Investment"
        amount={overviewData.active_investment}
        color="bg-green-700"
        description="Currently active investments."
      />
      <Card
        title="Total Earnings"
        amount={overviewData.total_earnings}
        color="bg-yellow-700"
        description="Cumulative earnings from investments."
      />
      <Card
        title="Wallet Balance"
        amount={overviewData.wallet_balance}
        color="bg-purple-900"
        description="Current balance in your wallet."
      />
      <Card
        title="Referral Earnings"
        amount={overviewData.referral_earnings}
        color="bg-red-700"
        description="Earnings from referrals."
      />
      <Card
        title="Total Deposits"
        amount={overviewData.total_deposits}
        color="bg-teal-600"
        description="Total amount deposited."
      />
      <Card
        title="Total Withdrawals"
        amount={overviewData.total_withdrawals}
        color="bg-orange-600"
        description="Total amount withdrawn."
      />
      <Card
        title="Total Bonus"
        amount={overviewData.total_bonus}
        color="bg-orange-400"
        description="Total Awarded Bonus."
      />
      <Card
        title="Referral Code"
        amount={overviewData.referral_link}
        color="bg-gray-700"
        link
        description="Your unique referral Code."
      />
      
    </div>
  );
};

const Card = ({ title, amount, color, link, description }) => {
  return (
    <div
      className={`p-6 rounded-lg shadow-md text-white ${color} flex flex-col items-center`}
    >
      <h3 className="text-lg font-semibold text-center">{title}</h3>

      {link ? (
        <p className="mt-4">
          <a href={amount} className="underline font-bold">
            {amount}
          </a>
        </p>
      ) : (
        <p className="mt-4 text-2xl font-bold text-center">
          ${amount.toFixed(2)} {/* Ensure it's displayed as a fixed decimal */}
        </p>
      )}

      <p className="mt-2 text-center">{description}</p>
    </div>
  );
};

export default DashboardOverview;
