import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { sendMessageAction } from '../redux/actions/userAction';

const MessageComponent = ({ recipientId }) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');

  const handleSendMessage = async () => {
    try {
      // Update the data structure to include sender, receiver, and content
      const data = {
        sender: '65740a0efbfe5e368863474e', // Replace with actual sender ID
        receiver: '65756c36647aab15d826ccf0', // Replace with actual receiver ID
        content: message,
      };
      dispatch(sendMessageAction(data.sender, data.receiver, data.content));
      const response = await axios.post('/api/send-message', data);
  
      console.log('Message sent successfully:', response.data);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  
    setMessage('');
  };

  return (
    <Box>
      <TextField
        label="Message"
        variant="outlined"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button variant="contained" onClick={handleSendMessage}>
        Send Message
      </Button>
    </Box>
  );
};

export default MessageComponent;
