import React, { useState, useEffect } from 'react';
// import { ThemeProvider} from '@livechat/ui-kit'
import {Launcher} from 'react-chat-window'
import logo from './logo.svg';
import './App.css';

function App() {
  const [messageList,setMessageList] = useState([])
  const [msg,setMsg]=useState("")
  const [up,setUp]=useState(0)

  const _onFilesSelected = files =>{
    console.log(files)
  }

  const _onMessageWasSent = message=> {
    console.log(message)
    setMessageList([...messageList, message])
    setMsg(message)
    setUp(Date.now())
  }

  const _sendMessage = text => {
    if (text.length > 0) {
      setMessageList([...messageList, {
        author: 'them',
        type: 'text',
        data: { text }
      }])
    }
  }

  useEffect(()=>{
    if(up!=0){
      setTimeout(() => {
        _sendMessage(`${msg.data[msg.type]} too`)
      }, 1000);
    }
  },[up])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Launcher
        agentProfile={{
          teamName: 'react-chat-window',
          imageUrl: '/logo.png'
        }}
        onFilesSelected={_onFilesSelected}
        onMessageWasSent={_onMessageWasSent}
        messageList={messageList}
        showEmoji
      />
      </header>
    </div>
  );
}

export default App;
