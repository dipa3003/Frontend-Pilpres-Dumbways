import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import ChartDataLabel from "chartjs-plugin-datalabels";
import dataPaslon from "../mocks/dataPaslon.json";

export type TDataPaslon = {
    nomorPaslon: number;
    name: string;
    vote: number;
};
type TProps = {
    totalVote: number;
};

ChartJS.register(ArcElement, Tooltip, ChartDataLabel);

export default function PieChart(Props: TProps) {
    const { totalVote } = Props;
    const options = {
        plugins: {
            datalabels: {
                formatter: (value: string) => {
                    return `${value}%`;
                },
                color: "black",
                // font: { weight: "bold", size: 16 },
            },
        },
    };
    const data = {
        labels: ["Paslon 1", "Paslon 2", "Paslon 3"],
        datasets: [
            {
                label: "Total result",
                data: [(dataPaslon[0].vote / totalVote) * 100, (dataPaslon[1].vote / totalVote) * 100, (dataPaslon[2].vote / totalVote) * 100],
                backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"],
                hoverOffset: 4,
            },
        ],
    };
    return <Pie data={data} options={options} />;
}
