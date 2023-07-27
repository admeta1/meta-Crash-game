import "./bettable.css"
import { Button, Layout, } from 'antd'
import { useState } from 'react';
import {Table} from 'antd';
import { useNavigate } from 'react-router-dom';
type Props = {}

const { Header, Content } = Layout;

function AllTransactions({ }: Props) {

  const navigate = useNavigate();

  const [getData, setGetData] = useState('');

  const columns = [
    {
      title: 'Player',
      dataIndex: 'player',
      key: 'player_id',
    },
    {
      title: 'Cash Out',
      dataIndex: 'coin',
      key: 'coin',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Profit',
      dataIndex: 'Profile',
      key: 'Profile_type'
    },
    
  ]
  

  const dataSource = [
  {
    key: '1',
    player: <div style={{display:"flex", alignItems:"center"}}><img style={{height:"30px", width:"30px", borderRadius:"50%", marginRight:"4px"}} src="https://bc.game/assets/avatar.3730afd4.png" alt="" /> <p>Hidden1</p></div>,
    coin: 'betting',
    amount: <div style={{display:"flex", alignItems:"center"}}><img style={{height:"30px", width:"30px", borderRadius:"50%", marginRight:"4px"}} src="https://bc.game/coin/INR.black.png" alt="" /> <p>5678</p></div>,
    Profile: 'betting',
  },
  {
    key: '2',
    player: <div style={{display:"flex", alignItems:"center"}}><img style={{height:"30px", width:"30px", borderRadius:"50%", marginRight:"4px"}} src="https://bc.game/assets/avatar.3730afd4.png" alt="" /> <p>Hidden1</p></div>,
    coin: 'betting',
    amount: <div style={{display:"flex", alignItems:"center"}}><img style={{height:"30px", width:"30px", borderRadius:"50%", marginRight:"4px"}} src="https://bc.game/coin/INR.black.png" alt="" /> <p>5678</p></div>,
    Profile: 'betting',
  }, {
    key: '3',
    player: <div style={{display:"flex", alignItems:"center"}}><img style={{height:"30px", width:"30px", borderRadius:"50%", marginRight:"4px"}} src="https://bc.game/assets/avatar.3730afd4.png" alt="" /> <p>Hidden1</p></div>,
    coin: 'betting',
    amount: <div style={{display:"flex", alignItems:"center"}}><img style={{height:"30px", width:"30px", borderRadius:"50%", marginRight:"4px"}} src="https://bc.game/coin/INR.black.png" alt="" /> <p>5678</p></div>,
    Profile: 'betting',
  }, {
    key: '4',
    player: <div style={{display:"flex", alignItems:"center"}}><img style={{height:"30px", width:"30px", borderRadius:"50%", marginRight:"4px"}} src="https://bc.game/assets/avatar.3730afd4.png" alt="" /> <p>Hidden1</p></div>,
    coin: 'betting',
    amount: <div style={{display:"flex", alignItems:"center"}}><img style={{height:"30px", width:"30px", borderRadius:"50%", marginRight:"4px"}} src="https://bc.game/coin/INR.black.png" alt="" /> <p>5678</p></div>,
    Profile: 'betting',
  },

  ]

 


  // axios.get('http://localhost:8000/add-token').then((response)=>{
  //   for(let each in response.data){
  //     console.log(response.data[each].name);
  //   }
    
    
  // })




  return (
    <div>

      <Layout>
        <Layout>
          <Header style={{ height: '1vh' }} className='header'>

          </Header>
          <Content className='content'>
            <div className="transactions-button-container">
              <Button className='transaction-button' onClick={()=>{navigate('/transactions/all-transactions')}}>All Transactions</Button>
              {/* <Button className='transaction-button' onClick={()=>{navigate('/transactions/deposits')}}>Deposits</Button>
              <Button className='transaction-button' onClick={()=>{navigate('/transactions/withdrawal')}}>Withdrawal</Button> */}
            </div>
            
            <div className='parent'>
            <Table 
            dataSource={dataSource}
            columns= {columns} 
            style={{backgroundColor: "transparent", border:'2px solid rgb(35,80,138)', color:'#fff', borderRadius: '10px', marginTop:'2rem'}} 
            bordered={true}
            pagination={false}
            size= 'large'
             />
            </div>
           
          </Content>
        </Layout>


      </Layout>


    </div>
  )
}

export default AllTransactions