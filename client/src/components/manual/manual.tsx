import React, { useState } from "react";
import "./manual.css";
import {
  StarOutlined,
  HeartOutlined,
  ShareAltOutlined,
  QuestionCircleOutlined,
  NodeIndexOutlined,
  InsertRowBelowOutlined,
  ExclamationCircleOutlined,
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
              <h6>set</h6>
              <h6>(next round)</h6>
            </div>
          </div>

          <div className="bet-container-bottom">
            <div className="bet-container-amount">
              <div className="Amount-new">
              <div className="Amount-new1">
              <h4>Amount</h4>
                <ExclamationCircleOutlined />
                <h4>0 INR</h4>

            </div>
              <div className="Amount-new2">
             
                <h4>Auto cash out</h4>
                <h4>Chance</h4>
                <h4>0.99%</h4>
              </div>
            </div>
            </div>

            <div className="Amount-new-table">
              <div className="Amount-box1">
                <h1>logo</h1>
                <p>1.000000</p>
              </div>
              <div className="Amount-box2">
                <h1>100.00</h1>
                <p>x</p>
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
<div className="all-common-button">
<div className="all-common-button1">

<StarOutlined />
<p>22856</p>
  <HeartOutlined />
<p>22902</p>
  <ShareAltOutlined />

        </div>
<div className="all-common-button2">
  <QuestionCircleOutlined />
 <NodeIndexOutlined />
  <InsertRowBelowOutlined />
</div>
</div>
        </div>


      </div>
    </>
  );
};

export default advanced;
