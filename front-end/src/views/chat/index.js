/* eslint-disable react/prop-types */
import React from 'react';
import {
  Box,
  Container,
  makeStyles,
  Grid,
  Menu
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Picker from 'emoji-picker-react';
import Page from 'src/components/Page';
import { getUsers } from 'src/utils/Api';
// import parse from 'src/utils/parse';
import stringify from 'src/utils/stringify';
import Users from './Users';
import ChatBox from './ChatBox';
import Toolbar from './Toolbar';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  msgInputContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: -50
  }
}));

const messages = [
  {
    from_id: 1,
    to_id: 5,
    clt_name: 'dd',
    msg_content: 'sdfsdf',
    created_at: '2021-04-03',
    read_at: '2021-04-05'
  },
  {
    from_id: 5,
    to_id: 1,
    clt_name: 'dd',
    msg_content: 'sdfsdf',
    created_at: '2021-04-03',
    read_at: '2021-04-05'
  }
];

const CustomerListView = () => {
  const classes = useStyles();
  const [users, setUsers] = React.useState([]);
  const [selId, setSelId] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [msgCon, setMsgCon] = React.useState('');
  const open = Boolean(anchorEl);
  const onEmojiClick = (event, emojiObject) => {
    setMsgCon(msgCon + emojiObject.emoji);
    setAnchorEl(null);
  };

  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem('brainaly_user'));
    getUsers({ userId: user.userId }).then((res) => {
      console.log(res);
      setUsers(res);
    });
  }, []);

  const refresh = (id) => {
    console.log(id);
    setSelId(id);
  };

  const handleEmojiPopClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleEmojiPopClose = () => {
    setAnchorEl(null);
  };

  const sendMessage = () => {
    console.log(stringify(msgCon), 'emoji');
  };
  return (
    <Page
      className={classes.root}
      title="Customers"
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            xl={2}
            lg={3}
            md={3}
            xs={3}
          >
            <Box mt={3}>
              <Users customers={users} selectedUser={selId} toUser={refresh} />
            </Box>
          </Grid>
          <Grid
            item
            xl={10}
            lg={9}
            md={9}
            xs={9}
          >
            <Box mt={3}>
              <ChatBox MsgContent={messages} />
              <div className="msgInputContainer">
                <Menu
                  id="long-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={open}
                  onClose={handleEmojiPopClose}
                >
                  <Picker onEmojiClick={onEmojiClick} />
                </Menu>
                <EmojiEmotionsIcon className="emojiButton" fontSize="large" onClick={handleEmojiPopClick} />
                <input type="text" placeholder="Type a Message" className="msgInput" value={msgCon} onChange={(e) => { setMsgCon(e.target.value); }} />
                <SendIcon className="sendButton" fontSize="large" onClick={sendMessage} />
              </div>
            </Box>
          </Grid>
        </Grid>

      </Container>
    </Page>
  );
};

export default CustomerListView;
