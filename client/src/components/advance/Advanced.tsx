import React, { useState } from "react";
import "./advanced.css";
import { EyeOutlined, 
  StarOutlined,
  HeartOutlined,
  ShareAltOutlined,
  QuestionCircleOutlined,
  NodeIndexOutlined,
  InsertRowBelowOutlined,
   } from "@ant-design/icons";

type Props = {};

const Advanced: React.FC<Props> = () => {
  return (
    <>
      
      <div className="yellow-container">
        <div className="yellow-container-top">
          <div className="yellow-button">
            <h4>Cash Out</h4>
          </div>
        </div>
        <div className="simple-container">
          <div className="simple-container1">
            <div className="simple-container1-sm1"> Simple </div>
            <div className="simple-container2-sm2">
              <div className="simple-container2-l">
                <EyeOutlined />
              </div>
              <div className="simple-container2-h"> Run</div>
            </div>
          </div>
          <div className="marti-container2">
            <div className="marti-container2-sm1"> Simple </div>
            <div className="marti-container2-sm2">
              <div className="simple-container2-2l">
                <EyeOutlined />
              </div>
              <div className="simple-container2-2h"> Run</div>
            </div>
          </div>
        </div>


<div className="payout-main">
          <div className="payout-main1">
            <div className="payout-main-pm"> Payout Martingale </div>
            <div className="payout-main1-pm1">
              <div className="payout-main12-l">
                <EyeOutlined />
              </div>
              <div className="payout-main1-h"> Run</div>
            </div>
          </div>
          {/* -------------------- */}
          <div className="add-container">
            <div className="Add-script-btn"> 
            <h2>Add script </h2>
            </div>

          </div>
        </div>
<div className=" text-use">
<p className=" text-use-all">
<QuestionCircleOutlined />
Use of script is optional and players must take full responsibility for any attendant risks. We will not be held liable in this regard.Help?
</p>
</div>

<div className="bottom-main-c ">
          <div className="bottom-main-c-manual">Manual</div>
          <div className="bottom-main-c-Advance">Advance</div>
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
   
    </>
  );
};

export default Advanced;
