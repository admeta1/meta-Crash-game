import React, { useState } from "react";
// import "./manual.css";
import {
  StarOutlined,
  HeartOutlined,
  ShareAltOutlined,
  QuestionCircleOutlined,
  NodeIndexOutlined,
  InsertRowBelowOutlined,
  ExclamationCircleOutlined,
  DollarOutlined,
} from "@ant-design/icons";

type Props = {};

const advanced: React.FC<Props> = () => {
  return (
    <>
       <div className="graph-container"> 
         <div className="graph-left-col">
          <div className="top active">Manual</div>
          <div className="bottom">Advance</div>
        </div> 

        <div className="graph-right-col">
          <div className="bet-container-top">
            <div className="button1">
              <h4>Bet</h4>
              <h4>(next round)</h4>
            </div>
          </div>

          <div className="bet-container-bottom">
            <div className="bet-container-amount">
              <div className="Amount-new">
                <div className="Amount-new1">
                  <div className="Amount-new1-p1">
                    <p className="Amount-new1-p1-h4">Amount</p>
                    <div className="Amount-new1-p1-logo">
                      <ExclamationCircleOutlined />
                    </div>
                  </div>

                  <p className="Amount-new2-p2">  0 INR </p>
                </div>
                <div className="Amount-new2">
                  <p className="Amount-p3">Auto cash out </p>
                   
                 
                  <div className="Amount-p4">
                    <span className="Amount-p4-1">Chance</span>
                    <span className="Amount-p4-2">0.99%</span>
                   
                  </div>
                </div>
              </div>
            </div>

            <div className="Amount-new-table">
              <div className="Amount-box1">
                <div className="Amount-box-sm1">
                  <DollarOutlined />
                  <p>1.000000</p>
                </div>
                <div className="Amount-box-sm2">
                  <p className="Amount-box-sms1">/2 </p>
                  <p className="Amount-box-sms2">x2</p>
                  <div className="Amount-box-sms3">
                    <div className="Amount-box-sms3-p">
                      <p className="down_arrow">^</p>
                      <p className="up_arrow">^</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Amount-box2">
                <span className="Amount-box-sp1">100.00</span>
                <span className="Amount-box-sp2">x</span>
               
              </div>
            </div>

            <div className="ten-top">
              <div className="ten">
                <div className="amount-10">
                  <p>10</p>
                </div>
                <div className="amount-100">
                  <p>100</p>
                </div>
                <div className="amount-1000">
                  <p>1000</p>
                </div>
                <div className="amount-10000">
                  <p>10000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="all-common-button-main">
            <div className="all-common-button1">
              <StarOutlined />
              <p>22856</p>
              <HeartOutlined />
              <p>22902</p>
              <ShareAltOutlined />
            </div>
            <div className="all-common-button2">
              <InsertRowBelowOutlined />
              <NodeIndexOutlined />
              <QuestionCircleOutlined />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default advanced;
