import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";
const data = [
  { mes: "Jul", valor: 18000 },
  { mes: "Ago", valor: 22000 },
  { mes: "Set", valor: 17000 },
  { mes: "Out", valor: 26000 },
  { mes: "Nov", valor: 30000 },
  { mes: "Dez", valor: 28000 }
];

export function GraficoLinha() {
  return (
    <ResponsiveContainer width="95%" height={145}>
      <LineChart
        data={data}
        margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
      >
        {/* Eixo X */}
        <XAxis
          dataKey="mes"
          tickMargin={8}
        />

        {/* Eixo Y colado à esquerda */}
        <YAxis
        width={50}
        tick={{ fontSize: ".8rem" }}
        tickFormatter={(value) => (value / 1000).toFixed(0)}
        unit="k"
        />

        <Tooltip
        formatter={(value) =>
            `R$ ${value.toLocaleString("pt-BR")}`
        }
        />

        {/* Tooltip (opcional, mas recomendado) */}
        <Tooltip
          formatter={(value) =>
            `R$ ${value.toLocaleString("pt-BR")}`
          }
        />

        {/* SOMENTE PONTOS */}
        <Line
          type="monotone"
          dataKey="valor"
          stroke="var(--corPrimaria)"
          strokeWidth={3}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
