// index.tsx (or your main component file)

import React, { useEffect } from 'react';

const DialogflowMessenger: React.FC = () => {

  useEffect(() => {
    // Ensure the scripts are loaded before initializing
    const script1 = document.createElement('script');
    script1.src = "https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js";
    script1.async = true;
    document.head.appendChild(script1);

    script1.onload = () => {
      // Initialize Dialogflow Messenger after the script has loaded
      (window as any).dfMessenger = {
        chatTitle: 'Dela',
        agentId: '53c5d239-25e2-4354-8b0f-fabca3e8b4eb',
        languageCode: 'en',
        projectId: 'cuda-jendela-429114',
        maxQueryLength: -1,
      };
    };
  }, []); // Empty dependency array ensures this runs once on component mount

  return (
    <>
      <link rel="stylesheet" href="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css" />
      <div id="df-messenger-chat"></div>

      <style>{`
        #df-messenger {
          z-index: 999;
          position: fixed;
          --df-messenger-font-color: #000;
          --df-messenger-font-family: Google Sans;
          --df-messenger-chat-background: #f3f6fc;
          --df-messenger-message-user-background: #d3e3fd;
          --df-messenger-message-bot-background: #fff;
          bottom: 0;
          right: 0;
          top: 0;
          width: 350px;
        }
      `}</style>
    </>
  );
};

export default DialogflowMessenger;
