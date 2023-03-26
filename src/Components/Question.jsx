import React from 'react'
import Faq from 'react-faq-component';
import { QuesData } from '../Data';
import './Ques.css';

const styles = {
    bgColor: 'white',
    titleTextColor: "black",
    rowTitleColor: "black",
    border: '1px solid black'
};
const config = {
    tabFocus: true,
    expandIcon: "+",
    collapseIcon: "-",
};

export default function Question() {

    return (
        <div>
            <div className="faq-style-wrapper">
                <Faq data={QuesData} config={config} />
            </div>
        </div>
    );
}