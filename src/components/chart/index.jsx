// 441172
import React from 'react'
import { ResponsivePie } from '@nivo/pie'
import info from './info';
import styled from 'styled-components';
const ChartPie = ({ books }) => {


    return (
        <ChartBox>

            <ResponsivePie
                data={info}
                margin={{ top: 30, right: 30, bottom: 30, left: 30 }}
                innerRadius={0.5}
                padAngle={1}
                cornerRadius={4}
                colors={{ scheme: 'yellow_orange_red' }}
                borderWidth={1}
                borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                radialLabelsSkipAngle={10}
                radialLabelsTextXOffset={6}
                radialLabelsTextColor="#333333"
                radialLabelsLinkOffset={0}
                radialLabelsLinkDiagonalLength={16}
                radialLabelsLinkHorizontalLength={24}
                radialLabelsLinkStrokeWidth={1}
                radialLabelsLinkColor={{ from: 'color' }}
                slicesLabelsSkipAngle={10}
                slicesLabelsTextColor="#333333"
                animate={true}
                motionStiffness={90}
                motionDamping={15}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'ruby'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'c'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'go'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'python'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'scala'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'lisp'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'elixir'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'javascript'
                        },
                        id: 'lines'
                    }
                ]}
            //     legends={[
            //         {
            //             anchor: 'right',
            //             direction: 'column',
            //             translateY: 0,
            //             translateX: 20,
            //             itemWidth: 100,
            //             itemHeight: 18,
            //             itemTextColor: '#999',
            //             symbolSize: 18,
            //             symbolShape: 'circle',
            //             effects: [
            //                 {
            //                     on: 'hover',
            //                     style: {
            //                         itemTextColor: '#000'
            //                     }
            //                 }
            //             ]
            //         }
            //     ]}
            />
        </ChartBox>
    )
}

export default ChartPie;

const ChartBox = styled.div`
width: 40%;
height: 100%;

`
