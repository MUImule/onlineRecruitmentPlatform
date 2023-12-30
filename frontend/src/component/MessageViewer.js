// Example structure in MessageViewer.js
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMessagesAction } from '../redux/actions/userAction';
import { Box, Typography } from '@mui/material';

const MessageViewer = () => {
  const dispatch = useDispatch();
  const userId = '65740a0efbfe5e368863474e'; // Replace with actual user ID

  // Fetch messages on component mount
  useEffect(() => {
    dispatch(getMessagesAction(userId));
  }, [dispatch, userId]);

  // Access messages from the Redux store
  const messages = useSelector(state => state.userAction.messages);

  // Render messages
  return (
    
<Box>
      <Typography variant="h5" sx={{ color: 'white', pb: 2 }}>
        Received Messages
      </Typography>
      {messages.map((message) => (
        <Box key={message._id} sx={{ borderBottom: '1px solid #ccc', pb: 2 }}>
          <Typography variant="body1" sx={{ color: 'white' }}>
            {message.content}
          </Typography>
          {/* Additional message details can be displayed here */}
        </Box>
      ))}
    </Box>
  );
};

export default MessageViewer;

