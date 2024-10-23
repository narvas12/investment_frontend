
// src/components/Layout/AuthFooter.js
import React from 'react';

const AuthFooter = () => (
  <footer className="bg-[#000000] text-white text-center py-4">
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <script
        type="text/javascript"
        src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js"
        async
      >
        {JSON.stringify({
          symbols: [
            { proName: "FOREXCOM:SPXUSD", title: "S&P 500 Index" },
            { proName: "FOREXCOM:NSXUSD", title: "US 100 Cash CFD" },
            { proName: "FX_IDC:EURUSD", title: "EUR to USD" },
            { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
            { proName: "BITSTAMP:ETHUSD", title: "Ethereum" },
          ],
          showSymbolLogo: true,
          isTransparent: false,
          displayMode: "adaptive",
          colorTheme: "dark",
          locale: "en",
        })}
      </script>
    </div>
  </footer>
);

export default AuthFooter;
