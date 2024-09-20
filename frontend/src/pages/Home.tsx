import React from "react";
import YandexDiskExplorer from "../components/YandexDiskExplorer";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <YandexDiskExplorer />
    </div>
  );
};

export default Home;
