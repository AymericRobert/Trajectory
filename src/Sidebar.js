/* eslint-disable func-names */
/* eslint-disable prefer-spread */
/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from "react";
import {
    Container,
    Button,
    SidebarContainer,
    Expend,
    TrajectoryBox,
    Separation,
    BoxColor,
    ColorContainer,
    DisabledDiv,
    Input,
} from "./style/sideBarStyle";

const Sidebar = ({ datas, callBackFunc }) => {
    const [checked, setChecked] = useState(new Array(datas.length).fill(false));
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const handleOnChange = (position) => {
        const updatedCheckedState = checked.map((item, index) =>
            index === position ? !item : item
        );

        setChecked(updatedCheckedState);
    };
    useEffect(() => {
        callBackFunc(checked);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [checked]);

    return (
        <Container>
            <Button clicked={click} onClick={() => handleClick()}>
                {click ? "Close" : "Open"}
            </Button>
            <SidebarContainer>
                <h3>Menu</h3>
                <Expend clicked={click}>
                    {datas.map((elem, index) => (
                        <TrajectoryBox key={elem.id}>
                            <h4>Item : {elem.id}</h4>
                            <DisabledDiv>
                                <p>Disabled : </p>
                                <Input
                                    type="checkbox"
                                    checked={checked[index]}
                                    onChange={(e) => handleOnChange(index)}
                                />
                            </DisabledDiv>
                            <ColorContainer>
                                <p>Color :</p> <BoxColor color={elem.color} />
                            </ColorContainer>
                            <p>Average speed : {elem.averageSpeed}</p>
                            <p>Average time : {elem.time}</p>
                            <p>Distance : {elem.distance}</p>
                            <Separation />
                        </TrajectoryBox>
                    ))}
                </Expend>
            </SidebarContainer>
        </Container>
    );
};

export default Sidebar;
