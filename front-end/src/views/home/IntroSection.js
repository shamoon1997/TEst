/* eslint-disable max-len */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import {
  Grid,
  makeStyles,
  Box,
  Card,
  CardMedia,
  Button
} from '@material-ui/core';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  cardMedia: {
    height: 600
  },
  boxContainer: {
    marginLeft: '5vw',
    marginRight: '5vw'
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

const IntroSection = () => {
  const classes = useStyles();

  return (
    <Box
      component="div"
      mt={15}
      className={classes.boxContainer}
    >
      <Grid
        container
        spacing={7}
      >
        <Grid
          xl={6}
          lg={6}
          md={6}
          xs={12}
          item
        >
          <Fade left>
            <Grid item xs={12} container direction="column" spacing={2} justifyContent="center">
              <Grid item xs className={classes.titleContainer}>
                <div style={{ color: '#01025C', fontSize: 46, fontWeight: 'bold' }}>The World Best Quiz Platform</div>
              </Grid>
              <Grid item className={classes.contentContainer}>
                <div style={{ color: '#5E2B66', fontSize: 36 }}>
                  Lorem ipsum dolor shit aimsup eokco EWV woiekc sit lite dawgowm coro eoc. Wpo icosowk, owkoc oiwek fjoek ciowli colw kookwl.
                </div>
              </Grid>
              <Grid container item className={classes.buttonContainer}>
                <Grid
                  xl={4}
                  lg={4}
                  md={6}
                  xs={12}
                >
                  <Button variant="outlined">How It Works</Button>
                </Grid>
                <Grid
                  xl={4}
                  lg={4}
                  md={6}
                  xs={12}
                >
                  <Button variant="contained" color="secondary">Way To Play</Button>
                </Grid>
              </Grid>
            </Grid>
          </Fade>
        </Grid>
        <Grid
          xl={6}
          lg={6}
          md={6}
          xs={12}
          item
        >
          <Flip left>
            <Card>
              <CardMedia
                className={classes.cardMedia}
                image="/static/images/classmates-working-together.png"
              />
            </Card>
          </Flip>
        </Grid>
      </Grid>
    </Box>
  );
};

export default IntroSection;
