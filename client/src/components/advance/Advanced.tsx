import React, { useState } from "react";
// import "./advanced.css";
import {
  StarOutlined,
  HeartOutlined,
  ShareAltOutlined,
  QuestionCircleOutlined,
  NodeIndexOutlined,
  InsertRowBelowOutlined,
  ExclamationCircleOutlined
} from "@ant-design/icons";

type Props = {};

const manual: React.FC<Props> = () => {
    // const [activeTabs, setactiveTabs] = useState(0);
  return (
    //     <div className="imp-container">
    //     <div className="manual-c">
    //       <button className="Manual">{"Manual"}</button>
    //       <button className="Advanced">{"Advanced"}</button>
    //     </div>

    //     <div className="bet">
    //     <button className="Bet Next round">{"Bet (Next rounded)"}</button>
    //     </div>
    //      <div className = "Amount">
    //      <div className = "inr">

    //         <h4>Amount</h4>
    //         <h4>0 INR</h4>
    //      </div>
    //      </div>
    //      <div className = "Amount-box1">
    //         <h1>logo</h1>
    //         <p>1.000000</p>
    //      <div className = "Amount-box2">
    // <p>/2</p>
    // <p>x2</p>
    // <p>
    //     ^
    //     ^
    // </p>

    //      </div>
    //      </div>

    //      <div className = "Auto cash">
    //      <div className = "chance">

    //         <h4>Auto cash out</h4>
    //         <h4>Chance</h4>
    //         <h4>0.99%</h4>
    //      </div>
    //      </div>
    //      <div className = "Auto cash1">
    //         <p>100.00</p>
    //         <h1>x</h1>
    //      </div>

    //     <div className="Ten">
    //       <div className="amount-10">
    //       <p>10</p>
    //       <p>100</p>
    //       <p>100</p>
    //       <p>10000</p>
    //       </div>
    //     </div>

    //     <div className="star ">
    //     <div className="new-star1 ">

    //     <StarOutlined style={{ fontSize: "24px", color: "gold" }} />
    //     <p>22766</p>
    //     <HeartOutlined style={{ fontSize: "24px", color: "red" }} />
    //      <p>22865</p>

    //       <ShareAltOutlined style={{ fontSize: "24px", color: "blue" }} />
    //     </div>
    //     <div className="new-star2 ">
    //     <QuestionCircleOutlined />
    //     <NodeIndexOutlined />
    //     <InsertRowBelowOutlined />

    //     </div>
    //     </div>
    //   </div>
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
             <div className = "Amount-new">
             <h4>Amount</h4>
             <ExclamationCircleOutlined />
            <h4>0 INR</h4>
            <h4>Auto cash out</h4>
             <h4>Chance</h4>
             <h4>0.99%</h4>
          </div>

          <div className = "Amount-new-table">

        </div>
        </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default manual;
