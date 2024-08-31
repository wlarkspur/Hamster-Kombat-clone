import { useState } from "react";
import "./App.css";
import Hamster from "./icons/Hamster";

const levelMinPoints = [
  0, // Bronze
  5000, //Silver
  25000, //Gold
  100000, //Platinum
  1000000, // Diamond
  2000000, // Epic
  10000000, //Legendary
  50000000, //Master
  100000000, //GrandMaster
  1000000000, //Lord
  18000000000, //Creator
];

const levelNames = [
  "Bronze", // From 0 to 4999 coins
  "Silver", // From 5000 coins to 24,999 coins
  "Gold", // From 25,000 coins to 99,999 coins
  "Platinum", // From 100,000 coins to 999,999 coins
  "Diamond", // From 1,000,000 coins to 1,999,999 coins
  "Epic", // From 2,000,000 coins to 9,999,999 coins
  "Legendary", // From 10,000,000 coins to 49,999,999 coins
  "Master", // From 50,000,000 coins to 99,999,999 coins
  "GrandMaster", // From 100,000,000 coins to 999,999,999 coins
  "Lord", // From 1,000,000,000 coins to 17,999,999,999 coins
  "Creator", // From 18,000,000,000 coins to infinite
];

function App() {
  const [levelIndex, setLevelIndex] = useState(7);
  const [points, setPoint] = useState(70000000);
  const calculateProgress = () => {
    if (levelIndex >= levelNames.length - 1) {
      return 100;
    }
    const currentLevelMin = levelMinPoints[levelIndex];

    const nextLevelMin = levelMinPoints[levelIndex + 1];
    const progress =
      ((points - currentLevelMin) / (nextLevelMin - currentLevelMin)) * 100;

    return Math.min(progress, 100);
  };
  console.log(calculateProgress());
  return (
    <div className="bg-black flex justify-center ">
      <div className="w-full bg-black text-white h-screen font-bold flex-col max-w-xl">
        <div className="px-4 z-10">
          <div className="flex items-center space-x-2 pt-4">
            <div className="bg-gray-700">
              <Hamster size={24} className="text-[#d4d4d4]" />
            </div>
            <div>
              <p className="text-sm">Wlarkspur (CEO)</p>
            </div>
          </div>
          <div className="flex items-center justify-between space-x-4 mt-1 ">
            <div className="flex items-center w-1/3">
              <div className="w-full ">
                <div className="flex justify-between">
                  <p className="text-sm">{levelNames[levelIndex]}</p>
                  <p className="text-sm">
                    {levelIndex + 1}
                    <span className="text-[#95908a]">
                      {" "}
                      / {levelNames.length}
                    </span>
                  </p>
                </div>
                <div className="flex items-center border-2 mt-1 border-[#43433b] rounded-full ">
                  <div className="w-full h-2 bg-[#43433b]/[0.6] rounded-full">
                    <div
                      className="progress-gradient h-2 rounded-full"
                      style={{ width: `${calculateProgress()}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
