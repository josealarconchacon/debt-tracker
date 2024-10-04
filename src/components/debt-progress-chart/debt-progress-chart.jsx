// import React from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
// import "./debt-progress-chart.styles.scss";

// function DebtProgressChart({ progressData }) {
//   return (
//     <div className="debt-progress-chart">
//       <h2 className="recharts-wrapper">Debt Progress</h2>
//       <ResponsiveContainer width="100%" height={300}>
//         <LineChart data={progressData}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="date" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Line type="monotone" dataKey="debt" stroke="#8884d8" />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }

// export default DebtProgressChart;
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./debt-progress-chart.styles.scss";

function DebtProgressChart({ progressData }) {
  return (
    <div className="debt-progress-chart">
      <h2 className="chart-title">Debt Progress</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={progressData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="debt" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DebtProgressChart;
