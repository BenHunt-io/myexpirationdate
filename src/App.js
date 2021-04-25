import 'fontsource-roboto';
import {TextField, ThemeProvider,
   Grid, RadioGroup, FormControlLabel, Radio, FormLabel, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'
import React from 'react';
import DeathAge from './components/DeathAge';
import Footer from './components/footer';


const useStyles = makeStyles({
  pageLayout : {
    marginTop : '10%',
    height: '100%',
  },

  expirationBtnGridItem : {
    marginTop: '10%',
  },

  inputContainer : {
    height: "60%",
  },

});


function App() {

  const [age, setAge] = React.useState();
  const [isSmoker, setSmoker] = React.useState();
  const [genitalia, setGenitalia] = React.useState();
  const [yearsLeft, setYearsLeft] = React.useState();
  const [isLucky, setIsLucky] = React.useState();


  const classes = useStyles();

  const onSmokerChange = e => {
    setSmoker(e.target.value);
  };

  const onAgeChange = e => {
    setAge(e.target.value);
  }
  
  const onGenitaliaChange = e => {
    setGenitalia(e.target.value);
  }

  const onCalculateExpiration = () => {
    const avgMAge = 78;
    const avgFAge = 81;
    const avgOther = (avgMAge + avgFAge) / 2;
  
    const coin1 = Math.round(Math.random());
    const coin2 = Math.round(Math.random());
    const coin3 = Math.round(Math.random());
    setIsLucky(true);

    let deathAge;
  
    if(genitalia === "vagina"){
      deathAge = avgMAge;
    } else if(genitalia === "penis"){
      deathAge = avgFAge;
    } else {
      deathAge = avgOther;
    }
  
    if(isSmoker){
      deathAge -= 5;
    }
  
    if(coin1 === 0){
      setIsLucky(false);
      if(coin2 === 0){
        deathAge -= 10;
        if(coin3 === 0){
          deathAge -= 20;
        }
      }
    }

    setYearsLeft((deathAge-age).toPrecision(4));
  };

  return (
      <ThemeProvider>
          <div id="pageLayout" className={classes.pageLayout}>
            <Grid className={classes.inputContainer} container justifyContent="center" alignItems="center" direction="column">
                <Grid item xs="12">
                  <TextField id="ageInput" label="Age" variant="outlined" required="true" onChange={onAgeChange}
                    type="number" inputProps={{max:130}} />
                </Grid>
                <Grid item xs="12">
                  <FormLabel>Smoker</FormLabel>
                  <RadioGroup row aria-label="Smoker" id="smokerRadio" value={isSmoker} onChange={onSmokerChange} required="true">
                    <FormControlLabel value="1" control={<Radio />} label="Yes" />
                    <FormControlLabel value="0" control={<Radio />} label="No" />
                  </RadioGroup>
                </Grid>
                <Grid item xs="12">
                  <FormLabel>Sex</FormLabel>
                  <RadioGroup row aria-label="Sex" id="sexRadio" value={genitalia} onChange={onGenitaliaChange} required="true">
                    <FormControlLabel value="penis" control={<Radio />} label="Penis" />
                    <FormControlLabel value="vagina" control={<Radio />} label="Vagina" />
                    <FormControlLabel value="both" control={<Radio />} label="Both" />
                  </RadioGroup>
                </Grid>
                <Grid className={classes.expirationBtnGridItem} item xs="12">
                  <Button variant="contained" onClick={onCalculateExpiration}>
                    Calculate Expiration
                  </Button>
                </Grid>
                <DeathAge
                  yearsLeft={yearsLeft}
                  isLucky={isLucky}
                />
            </Grid>

            <Footer/>
          </div>
      </ThemeProvider>
  );
}

export default App;