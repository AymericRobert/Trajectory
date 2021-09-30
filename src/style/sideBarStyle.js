import styled from "styled-components";

export const Container = styled.div``;
export const Button = styled.button`
    color: #3e64ff;
    border-color: #3e64ff;
    border-radius: 40px;
    cursor: pointer;
    padding: 11px 16px;
    cursor: pointer;
    border-width: 1px;
    font-size: 14px;
    font-weight: 400;
    -webkit-box-shadow: 0px 10px 20px -6px rgb(0 0 0 / 12%);
    -moz-box-shadow: 0px 10px 20px -6px rgba(0, 0, 0, 0.12);
    box-shadow: 0px 10px 20px -6px rgb(0 0 0 / 12%);
`;

export const SidebarContainer = styled.div`
    background-color: #3e64ff;
    margin-left: -10px;
    color: white;
    width: 3.5rem;
    height: 80vh;
    margin-top: 1rem;
    border-radius: 0 30px 30px 0;
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
`;

export const Expend = styled.ul`
    max-height: 100%;
    overflow-y: scroll;
    color: white;
    list-style: none;
    display: ${(props) => (props.clicked ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    background-color: #3e64ff;
    padding: 1rem 0;
    position: absolute;
    top: 6rem;
    left: 0;
    width: 20rem;
    transition: all 0.5s ease;
    border-radius: 0 30px 30px 0;
    z-index: 10;
`;

export const TrajectoryBox = styled.li`
    padding: 5px 0;
`;

export const Separation = styled.div`
    width: auto;
    height: 1px;
    background-color: white;
`;

export const BoxColor = styled.div`
    width: 10px;
    height: 10px;
    background-color: ${(props) => props.color};
    margin-left: 10px;
`;

export const ColorContainer = styled.div`
    display: flex;
    align-items: baseline;
`;
export const DisabledDiv = styled.div`
    display: flex;
    align-items: center;
`;
export const Input = styled.input`
    margin: 6px 0 0 10px;
`;
