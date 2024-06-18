import React, { useState, useEffect } from "react";
import { FcStatistics } from "react-icons/fc";
import { MdCallMissedOutgoing, MdBlock } from "react-icons/md";
import { PieChart, BarChart } from "@mui/x-charts";

const labels = ["Telegram", "Facebook", "Instagram", "От рекламы", "Другое"];

const generateRandomData = () =>
  labels.map((label) => ({
    label,
    value: Math.floor(Math.random() * 100),
  }));

const Reports = () => {
  return (
    <div className="report_count">
      <div className="report_container">
        <div className="report_flex"></div>
      </div>
    </div>
  );
};

const SearchBar = () => {
  return (
    <div className="-container">
      <div className="search-wrapper">
        <div className="report_buttons">
          <button> Telegram</button>
          <button>Facebook</button>
          <button>Instagram</button>
          <button>От рекламы</button>
          <button>Другое</button>
        </div>
      </div>
    </div>
  );
};

export default function TeacherEffectiveness() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setCards(generateRandomData());
      setLoading(false);
    }, 1000);
    return () => clearTimeout(delay);
  }, []);

  return (
    <div className="container">
      <SearchBar />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="chart_main">
          <div className="pie-chart-section">
            <PieChart series={[{ data: cards }]} width={600} height={350} />
          </div>
          <div className="pie-chart-section2">
            <BarChart
              className="barch"
              series={[
                { data: [3, 4, 1, 6, 9], stack: "A", label: "Доход" },
                { data: [4, 3, 1, 5, 8], stack: "A", label: "Траты" },
                { data: [4, 9, 5, 4, 1], stack: "B", label: "Учащиеся" },
                { data: [2, 8, 1, 3, 1], stack: "B", label: "Зарплаты" },
                { data: [1, 6, 5, 8, 9], label: "Авансы" },
              ]}
              width={500}
              height={350}
            />
          </div>
        </div>
      )}
    </div>
  );
}
