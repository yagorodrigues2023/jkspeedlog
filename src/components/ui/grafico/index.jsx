import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Out", valor: 170 },
  { name: "Nov", valor: 330 },
  { name: "Dez", valor: 300},
  { name: "Out", valor: 150 },
  { name: "Nov", valor: 330 },
  { name: "Dez", valor: 300 }
];

export function GraficoLinha() {
  return (
    <ResponsiveContainer  width="95%" height={150}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="valor"
          stroke="var(--corPrimaria)"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
