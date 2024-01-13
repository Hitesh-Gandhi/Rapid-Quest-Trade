import React from 'react';
import './sidebar.css';
import { RiArrowDropRightLine } from "react-icons/ri";

const Sidebar = () => {
    return (
        <section id="intro">
            <div className="retirementBox">
                <div className="strategyText">Retirement Strategy</div>
                <div className="contribution">
                    <div className="sliderValue">Employee Contribution</div>
                    <div className="range">
                        <div className="field">
                            <input type="range" min="0" max="100" value="50" steps="1" className="slider" />
                            <div className="valueRight">12%</div>
                        </div>
                        </div>
                    </div>
                    <div className="contribution">
                        <div className="sliderValue">Retirement Age</div>
                        <div className="range">
                            <div className="field">
                                <input type="range" min="0" max="100" value="50" steps="1" className="slider" />
                                <div className="valueRight">65</div>
                            </div>
                            <hr className="linebreak"/>
                        </div>
                    </div>
                    <div className="employePercentage">
                        <div className="eContri">Employee Contribution</div>
                        <div className="ePercentage">8.4%</div>
                    </div>
                    <div className="interestRate">
                        <div className="iRate">Interest Rate</div>
                        <div className="iPercentage">5%</div>
                    </div>
                    <button className="updateBtn">
                        <div className="updateText">Update</div>
                    </button>
                    <div className="helpDocs">View Help Docs <RiArrowDropRightLine/></div>
                </div>
                <div className="ad">
                    <div className="verticalLine"></div>
                    <div className="advertisement">
                        <div className="lineOne">Are you considering a</div>
                        <div className="lineTwo">Housing Advance?</div>
                        <div className="lineThree">Limited Time reduced interest.</div>
                        <div className="lineFour">Learn More <RiArrowDropRightLine/></div>
                    </div>
                </div>
        </section>
    );
}

export default Sidebar;
