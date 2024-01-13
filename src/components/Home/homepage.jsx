import React from 'react';
import './homepage.css';
import graphImg from '../../assets/graph.png';
import piechartImg from '../../assets/piechart.png';
import { IoMdArrowDropdown } from "react-icons/io";

const Homepage = () => {
    return (
        <div>
            <section id="homepage">
                <div className="incomeYear">
                    <div className="income">Retirement Income</div>
                    <div className="year">Starting Year 2056</div>
                </div>
                <div className="amount">
                    <div className="goal">$300,000</div>
                    <div className="goalPercentage">59%</div>
                    <div className="estIncome">$300</div>
                </div>
                <div className="amountTxt">
                    <div className="sectionOne">
                        <div className="mygoal">My Goal</div>
                        <hr className="lineBreakOne" />
                    </div>
                    <div className="section2">
                        <div className="goalAchieved">Goal Achieved</div>
                        <hr className="lineBreakTwo" />
                    </div>
                    <div className="sectionThree">
                        <div className="monthlyIncome">Est. Monthly Income</div>
                        <hr className="lineBreakThree" />
                    </div>
                </div>
                <div className="graphPart">
                    <div className="CO">Contributions Overtime</div>
                    <img src={graphImg} alt="GraphImage" className="graphImage" />
                </div>
                <div className="QA">
                    <div className="question">How Do I compare to my peers?</div>
                    <div className="answer">These numbers represent current goal achievement</div>
                </div>
                <div className="peers">
                    <div className="details">
                        <div className="age">Age:  Under 30 <IoMdArrowDropdown/></div>
                        <hr className="lineBreak"/>
                        <div className="salary">Salary:  K 20 - K 30 <IoMdArrowDropdown/></div>
                        <hr className="lineBreak"/>
                        <div className="gender">Gender:  Male <IoMdArrowDropdown/></div>
                    </div>
                    <img src={piechartImg} alt="PieImage" className="piechartImg" />
                </div>
            </section>
        </div>
    );
}

export default Homepage;
