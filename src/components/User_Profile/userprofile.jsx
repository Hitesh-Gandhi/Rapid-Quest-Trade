import React from 'react';
import './userprofile.css';
import profileImg from '../../assets/profileimage.jpeg';
import { IoMdArrowDropdown } from "react-icons/io";

const Userprofile = () => {
    return (
        <section id="profile">
            <div className="userDetails">
                <img src={profileImg} alt="profileImg" className="profileImg" />
                <div className="userNames">
                    <div className="username">Hi Mike,</div>
                    <div className="welcomeBack">welcome back.</div>
                </div>
            </div>
            <div className="accountDetails">
                <div className="day">Today</div>
                <div className="balanceAmt">$19,892</div>
                <div className="balance">Account Balance</div>
                <div className="contributionAmt">$4,000</div>
                <div className="contribution">Year-to-Date Contributions</div>
                <div className="interestAmt">$1,892</div>
                <div className="interest">Total Interest</div>
                <button className="wantBtn">I want to <IoMdArrowDropdown/></button>
            </div>
            <div className="transactions">
                <div className="recentTransactions">Recent Transactions</div>
                <div className="date1">2020-08-07</div>
                <div className="bankName1">Withdrawl Transfer to Bank-XXX11</div>
                <hr className="lineBreak"/>
                <div className="date2">2020-07-21</div>
                <div className="bankName2">Withdrawl Transfer to Bank-XXX11</div>
                <hr className="lineBreak"/>
                <div className="date3">2020-07-16</div>
                <div className="bankName3">Withdrawl Transfer to Bank-XXX11</div>
                <hr className="lineBreak"/>
            </div>
        </section>
    );
}

export default Userprofile;
