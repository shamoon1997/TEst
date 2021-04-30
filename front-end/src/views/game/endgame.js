/* eslint-disable */
import React from 'react';
import { v4 as uuid } from 'uuid';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import {
  Box,
  makeStyles,
  MenuItem,
  Dialog,
  DialogActions,
  DialogContent,
  CardContent,
  Card,
  Typography,
  DialogTitle,
  Grid,
  TextField,
  DialogContentText
} from '@material-ui/core';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import {
  Flip
} from 'react-awesome-reveal';
import {
  setSocket,
  emitEvent,
  onMessageReceived,
  offEvent
} from 'src/utils/socket';
import { signUp } from 'src/utils/Api';
import cogoToast from 'cogo-toast';
import Page from 'src/components/Page';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
    position: 'fixed',
    bottom: 0,
    height: 350,
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center'
  },
  modal: {
    width: '100vw',
    padding: 20
  },
  cardMedia: {
    height: 600
  },
  boxContainer: {
    marginLeft: '5vw',
    marginRight: '5vw',
    marginBottom: 100
  },
  titleInput: {
    marginTop: 30
  },
  titleContainer: {
    marginTop: 40
  },
  contentContainer: {
    marginTop: 40
  },
  buttonContainer: {
    marginTop: 40
  },
  avatar: {
    width: 150,
    height: 150
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'center'
  }
}));

const EndGameSection = ({ game, playersInfo, userInfo }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const checkPlace = (data) => {
    playersInfo.sort(function (a, b) {
      if (a.userScore < b.userScore) return 1;
      if (a.userScore > b.userScore) return -1;
      if (a.userScore == b.userScore) return 0;
    });
    let criterion = 0
    playersInfo.map((p, index) => {
      if (p.userId == data.userId) {
        criterion = index + 1;
      }
    });
    return criterion;
  };
  return (
    <Page
      className={classes.root}
    >

      <Grid
        container
        spacing={3}
        justify="space-around"
      >
        {
          playersInfo?.map((player, index) => {
            return (
              (game?.ownerId == userInfo?.userId && game?.gameType == 'teach')
                ? null : (
                <Grid
                  key={uuid()}
                  item
                  xl={12}
                  lg={12}
                  md={12}
                  xs={12}
                >
                  <Card className="">
                    <CardContent className="">
                      <Grid
                        container
                        spacing={3}
                        justify="space-around"
                      >
                        <Grid
                          item
                          key={uuid()}
                          xl={4}
                          lg={4}
                          md={4}
                          xs={4}
                        >
                          {
                            checkPlace(player) <= 3 && checkPlace(player) > 0
                              ? <img src={"/"+checkPlace(player)+"-place.png"} style={{width: 50}} />
                              : checkPlace(player)
                          }
                        </Grid>
                        <Grid
                          item
                          key={uuid()}
                          xl={4}
                          lg={4}
                          md={4}
                          xs={4}
                          justify="center"
                          alignItems="center"
                        >
                          <div className="end-game-typh">{player.userNickName}</div>
                        </Grid>
                        <Grid
                          item
                          key={uuid()}
                          xl={4}
                          lg={4}
                          md={4}
                          xs={4}
                          justify="center"
                          alignItems="center"
                        >
                          <div className="end-game-typh">{player?.userScore}</div>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
                )
            );
          })
        }
      </Grid>

    </Page>
  );
};

EndGameSection.propTypes = {
  game: PropTypes.object,
  playersInfo: PropTypes.array,
  userInfo: PropTypes.object
};

export default EndGameSection;
