import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import mentors from "./mentors.json";
import Card from "./Card";
import Box from "@material-ui/core/Box";
import { Button } from "@mui/material";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  grid: {
    width: "100%",
    margin: "0px",
    padding: "100px 0px"
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary
  },

  displayPaper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    position: "fixed"
  }
}));

function createMentor(mentor) {
  return (
    <Card
      key={mentor.id}
      name={mentor.name}
      school={mentor.school}
      Major={mentor.Major}
      Level={mentor.Level}
      Interests={mentor.Interests}
      Location={mentor.Location}
      Email={mentor.Email}
    />
  );
}

function Body() {
  const [Checked, setChecked] = useState(false);
  const [mentorsList, setMentorsList] = useState(mentors);

  function filterMentors(featureGroup, featureToCheck) {
    if (Checked === false) {
      setChecked(true);
      setMentorsList(
        mentorsList.filter((mentor) => mentor[featureGroup] === featureToCheck)
      );
    }

    if (Checked === true) {
      setChecked(false);
      setMentorsList(mentors);
    }
  }

  function displaySearch(e) {}

  const classes = useStyles();
  return (
    <Grid container spacing={2} className={classes.grid}>
      <Grid item xs={6} md={2}>
        <Paper className={classes.displayPaper}>
          <form onSubmit={displaySearch}>
            <div className="main-filters">
              <div className="academic-filters">
                <h4>Academic Field</h4>
                <br></br>
                <input
                  type="checkbox"
                  onChange={(e) =>
                    filterMentors("AcademicField", "Engineering")
                  }
                />
                <span>Engineering</span>
                <br></br>
                <input
                  type="checkbox"
                  onChange={(e) => filterMentors("Location", "Medecine")}
                />

                <span>Medecine</span>
                <br></br>
                <input
                  type="checkbox"
                  onChange={(e) => filterMentors("AcademicField", "Arts")}
                />
                <span>Arts</span>
              </div>
              <br></br>

              <div className="level-filters">
                <h4>Educational Level</h4>
                <br></br>
                <input
                  type="checkbox"
                  onChange={(e) => filterMentors("Level", "Bachelor's Degree")}
                />
                <span>Bachelor's Degree</span>
                <br></br>
                <input
                  type="checkbox"
                  onChange={(e) => filterMentors("Level", "Master's Degree")}
                />
                <span>Master's Degree</span>
                <br></br>
                <input
                  type="checkbox"
                  onChange={(e) => filterMentors("Level", "Phd")}
                />
                <span>Phd</span>
                <br></br>
                <input
                  type="checkbox"
                  onChange={(e) => filterMentors("Level", "Executive position")}
                />
                <span>Executive position</span>
                <br></br>
              </div>
              <br></br>

              <div className="location-filters">
                <h4>Location</h4>
                <br></br>
                <input
                  type="checkbox"
                  onChange={(e) => filterMentors("Location", "Africa")}
                />
                <span>Africa</span>
                <br></br>
                <input
                  type="checkbox"
                  onChange={(e) => filterMentors("Location", "Asia")}
                />
                <span>Asia</span>
                <br></br>
                <input
                  type="checkbox"
                  onChange={(e) => filterMentors("Location", "Australia")}
                />
                <span>Australia</span>
                <br></br>
                <input
                  type="checkbox"
                  onChange={(e) => filterMentors("Location", "Europe")}
                />
                <span>Europe</span>
                <br></br>
                <input
                  type="checkbox"
                  onChange={(e) => filterMentors("Location", "North America")}
                />
                <span>North America</span>
                <br></br>
                <input
                  type="checkbox"
                  onChange={(e) => filterMentors("Location", "South America")}
                />
                <span>South America</span>
                <br></br>
                <br></br>
              </div>
              <br></br>
            </div>
          </form>
        </Paper>
      </Grid>
      <Grid item xs={6} md={10}>
        <Box>
          <Paper className={classes.paper}>
            {mentorsList.map((mentor) => (
              <Box sx={{ flexWrap: "wrap" }}>{createMentor(mentor)}</Box>
            ))}
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Body;
