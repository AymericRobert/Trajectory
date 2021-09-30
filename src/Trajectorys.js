import React, { useState } from "react";
import trajectoires from "./trajectoires.json";
import Sidebar from "./Sidebar";

import {
    VictoryChart,
    VictoryScatter,
    VictoryGroup,
    VictoryVoronoiContainer,
    VictoryTooltip,
    VictoryLine,
} from "victory";
import { Container } from "./style/style";

const Trajectorys = () => {
    const datas = { dataArray: [] };
    const [graphWidth, setGraphWidth] = useState(800);
    const [graphHeight, setGraphHeight] = useState(600);

    trajectoires.forEach((elem, i) => {
        ///////////////////
        let array1 = [];
        let array2 = [];
        let data = [];
        let color = ["red", "blue", "black", "orange", "green"];
        let averageSpeed = 0;
        let time = 0;
        let distance = 0;
        let x = 0;
        let y = 0;
        let dx = 0;
        let dy = 0;
        array1 = trajectoires.map((i) =>
            i.points.sort(function (a, b) {
                return a.time - b.time;
            })
        );
        array2 = array1[i];

        for (let i = 0; i < array2.length; i++) {
            x = x + Math.abs(array2[i].x - dx);
            y = y + Math.abs(array2[i].y - dy);
            dx = array2[i].x;
            dy = array2[i].y;
            data.push(array2[i]);
        }

        time = array2[array2.length - 1].time - array2[0].time;
        distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
        averageSpeed = distance / time;

        datas.dataArray.push({
            id: elem.id,
            color: color[i],
            data: data,
            averageSpeed: averageSpeed,
            time: time,
            distance: distance,
        });
    });
    let selectTraj = [];
    const [disabledArray, setDisabled] = useState(undefined);
    const handleCallback = (childData) => {
        setDisabled({ datas: childData });
    };
    selectTraj = disabledArray !== undefined ? disabledArray.datas : selectTraj;

    return (
        <Container>
            <Sidebar datas={datas.dataArray} callBackFunc={handleCallback} />
            <div>
                <VictoryChart
                    height={graphHeight}
                    width={graphWidth}
                    containerComponent={
                        <VictoryVoronoiContainer responsive={false} />
                    }
                >
                    {datas &&
                        datas.dataArray.map(
                            (elem, index) =>
                                selectTraj[index] === false && (
                                    <VictoryGroup
                                        color={elem.color}
                                        labels={({ datum }) =>
                                            `x: ${datum.x} y: ${datum.y}`
                                        }
                                        labelComponent={
                                            <VictoryTooltip
                                                style={{ fontSize: 10 }}
                                            />
                                        }
                                        data={elem.data}
                                        sortKey="time"
                                        key={elem.id}
                                    >
                                        <VictoryLine
                                            sortKey="time"
                                            animate={{
                                                duration: 2000,
                                                onLoad: { duration: 1000 },
                                            }}
                                        />
                                        <VictoryScatter
                                            size={({ active }) =>
                                                active ? 4 : 3
                                            }
                                        />
                                    </VictoryGroup>
                                )
                        )}
                </VictoryChart>
                <label>
                    Graph width:
                    <input
                        type="number"
                        value={graphWidth}
                        onChange={(e) => setGraphWidth(e.target.value)}
                    />
                </label>
                <label>
                    {"        "}Graph height:
                    <input
                        type="number"
                        value={graphHeight}
                        onChange={(e) => setGraphHeight(e.target.value)}
                    />
                </label>
            </div>
        </Container>
    );
};

export default Trajectorys;
