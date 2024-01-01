import * as React from 'react';
import { ChartContainer } from '@mui/x-charts';
import { LinePlot, MarkPlot } from '@mui/x-charts/LineChart';

const xLabels = [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G',
];

export default function TinyLineChart({color, data}) {
    return (
        <ChartContainer
            width={400}
            height={100}
            margin={{ top: 10, right: 10, bottom: 0, left: 10 }}
            series={[{ type: 'line', data: data }]}
            xAxis={[{ scaleType: 'point', data: xLabels }]}
            sx={{
                '.MuiLineElement-root': {
                    stroke: {color},
                },
                '.MuiMarkElement-root': {
                    stroke: {color},
                },
            }}
            disableAxisListener
        >
            <LinePlot />
            <MarkPlot />
        </ChartContainer>
    );
}