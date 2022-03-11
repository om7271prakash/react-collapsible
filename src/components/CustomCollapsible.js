import React, { useState } from "react";
import { FaArrowUp } from 'react-icons/fa';
import { FaArrowDown } from 'react-icons/fa';


import s from "./CustomCollapsible.module.css";

const CustomCollapsible = () => {
    const [opneCollapseIndex, setOpenCollapseIndex] = useState(0);
    const data = [
        {
            title: "What is Lorem Ipsum?    ",
            discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            title: "What is Lorem Ipsum?    ",
            discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            title: "What is Lorem Ipsum?    ",
            discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            title: "What is Lorem Ipsum?    ",
            discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
    ]

    const handleClick = (i) =>{
        setOpenCollapseIndex(prevState => {
            if(prevState === i){
                return null;
            }
            return i;
        });
    }
    return (
        <div className={s['collapsible-outer']}>
            {data.map((d, i) => {
                return <Collapse key={i} data={d} index={i} openIndex={opneCollapseIndex} onClick={handleClick} />
            })}
        </div>
    )
}

const Collapse = (props) => {
    const collapseToggleHandler = () => {
        props.onClick(props.index);
    }
    return (
        <div className={`${s.collapse} ${props.index}`}>
            <div 
                className={s.title} 
                onClick={collapseToggleHandler}
            >
                {props.data.title} {props.openIndex === props.index ? <FaArrowUp /> : <FaArrowDown />}
            </div>
            <div 
                className={`${s.description} ${props.openIndex === props.index ? s['description-show'] : s['description-hide']} `}
            >
                {props.data.discription}
            </div>
        </div>
    )
}

export default CustomCollapsible;