import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import img1 from "../images/IMG_20231213_051540-removebg.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardActions } from "@mui/material";
import ContentCutRoundedIcon from "@mui/icons-material/ContentCutRounded";
import Icon from "@mui/material/Icon";
import EditCalendarRoundedIcon from "@mui/icons-material/EditCalendarRounded";
import StayCurrentPortraitRoundedIcon from "@mui/icons-material/StayCurrentPortraitRounded";
import img2 from "../images/Hair Setting.jpg";
import img3 from "../images/men shaving.jpg";
import img4 from "../images/Hair Coloring.jpg";
import img5 from "../images/facial.jpg";
import img6 from "../images/nail.jpg";
import img7 from "../images/spa.jpg";
import img8 from "../images/hair care.jpg";
import img9 from "../images/cosmo.jpg";
import img10 from "../images/makeup.jpg";
import useMediaQuery from "@mui/material/useMediaQuery";
import Aos from "aos";
import "aos/dist/aos.css";
const Home = () => {
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const isXSmallScreen = useMediaQuery("(max-width:600px)");
  const isMobileOrTablet = useMediaQuery("(max-width:960px)");
  return (
    <div style={{ background: "black", color: "white" }}>
      <Grid container>
        <Grid
          container
          item
          justifyContent={"center"}
          alignItems={"center"}
          marginTop={5}
        >
          <Grid item xs={1}></Grid>
          <Grid item xs={5} sm={12} md={5} lg={5}>
            <div style={{ marginTop: isMobileOrTablet ? "8%" : "0" }}>
              <Typography
                variant={isXSmallScreen ? "p" : "h4"}
                data-aos="zoom-in"
              >
                Discover Top-Rated Salons Near You! Where Every Salon is{" "}
                <span style={{ color: "#1976d3", textDecoration: "underline" }}>
                  Google Reviewed
                </span>{" "}
                and Every Service is Exceptional. Your beauty, Your Choice!
              </Typography>
              <Button
                variant="outlined"
                style={{ background: "black", margin: "2% auto" }}
                data-aos="zoom-in"
              >
                <b>Book Now</b>
              </Button>
            </div>
          </Grid>
          <Grid item xs={6} sm={12} md={5} lg={5}>
            <img
              src={img1}
              alt=""
              style={{ width: "100%", marginTop: "2%" }}
              data-aos="zoom-in"
            />
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
        <Grid
          container
          display={"flex"}
          justifyContent={"center"}
          marginTop={3}
        >
          <Grid item>
            <Typography variant="h5" data-aos="fade-up">
              <b>Why Choose Us</b>
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={3}
          marginTop={5}
        >
          <Grid item>
            <Card
              sx={{ maxWidth: 345 }}
              style={{ background: "black" }}
              data-aos="fade-up"
            >
              <CardActionArea>
                <CardMedia>
                  <div
                    style={{
                      border: "2px solid #1976d3",
                      background: "#1976d3",
                      width: "18%",
                      height: "10vh",
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Icon>
                      <ContentCutRoundedIcon />
                    </Icon>
                  </div>
                </CardMedia>
                <CardContent>
                  <CardActions>
                    <Typography variant="h6" style={{ color: "white" }}>
                      <b>
                        <i>Curated Selection</i>
                      </b>
                    </Typography>
                  </CardActions>
                  <Typography variant="body2" color="white" marginLeft={1}>
                    We handpick the finest salons,each renowned for their
                    exceptional services and skilled professionals.Our curated
                    selection guarantees you access to the best in the beauty
                    industry.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item>
            <Card
              sx={{ maxWidth: 345 }}
              style={{ background: "black" }}
              data-aos="fade-up"
            >
              <CardActionArea>
                <CardMedia>
                  <div
                    style={{
                      border: "2px solid #1976d3",
                      background: "#1976d3",
                      width: "18%",
                      height: "10vh",
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Icon>
                      <EditCalendarRoundedIcon />
                    </Icon>
                  </div>
                </CardMedia>
                <CardContent>
                  <CardActions>
                    <Typography variant="h6" style={{ color: "white" }}>
                      <b>
                        <i>Seamless Booking</i>{" "}
                      </b>
                    </Typography>
                  </CardActions>
                  <Typography variant="body2" color="white" marginLeft={1}>
                    With our user-friendly platform, you can effortlessly
                    schedule appointments, choose time slots and even compare
                    prices, all from the comfort of your home.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item>
            <Card
              sx={{ maxWidth: 345 }}
              style={{ background: "black" }}
              data-aos="fade-up"
            >
              <CardActionArea>
                <CardMedia>
                  <div
                    style={{
                      border: "2px solid #1976d3",
                      background: "#1976d3",
                      width: "18%",
                      height: "10vh",
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Icon>
                      <StayCurrentPortraitRoundedIcon />
                    </Icon>
                  </div>
                </CardMedia>
                <CardContent>
                  <CardActions>
                    <Typography variant="h6" style={{ color: "white" }}>
                      <b>
                        <i>Bidding</i>{" "}
                      </b>
                    </Typography>
                  </CardActions>
                  <Typography variant="body2" color="white" marginLeft={1}>
                    Our unique platform allows you to bid for your service
                    requirements, ensuring you get the most competitive prices
                    without compromising an quality.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          spacing={2}
          marginTop={"5%"}
        >
          <Grid item xs={1}></Grid>
          <Grid
            container
            item
            xs={5}
            direction={isXSmallScreen ? "column" : "row"}
            spacing={-1}
          >
            <Grid item xs={6}>
              <img src={img2} alt="" width={"100%"} data-aos="zoom-in" />
            </Grid>
            <Grid item xs={6} mt={"15%"}>
              <img
                src={img3}
                alt=""
                width={"100%"}
                height={isXSmallScreen ? "100%" : "250px"}
                style={{ marginLeft: "2%" }}
                data-aos="zoom-in"
              />
            </Grid>
          </Grid>
          <Grid item xs={5}>
            <div>
              <Typography
                variant={isXSmallScreen ? "p" : "h6"}
                color={"white"}
                textAlign={"justify"}
                data-aos="zoom-in"
              >
                Discover our groundbreaking 'Bid' feature!. Take charge of your
                salon experience by bidding for services.Simply choose your
                location,select a service,set your price and watch nearby salons
                accept your offer.Explore the list of accepted bids,compare and
                find your ideal salon.Its a game-changer in personalized beauty
                services.Ready to bid for beauty? Click 'Bid' now and set your
                price for pampering.
              </Typography>
              <div>
                <Button
                  variant="outlined"
                  style={{ background: "black", margin: "2% auto" }}
                  data-aos="zoom-in"
                >
                  <b>Bid Now</b>
                </Button>
              </div>
            </div>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
        <Grid container display={"flex"} justifyContent={"center"} mt={5}>
          <Grid item>
            <Typography variant="h5" data-aos="fade-up">
              <b>Our Services</b>
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          display={"flex"}
          justifyContent={"center"}
          spacing={2}
          marginTop={3}
          marginBottom={3}
        >
          <Grid item>
            <Card sx={{ maxWidth: 345, height: "100%" }} data-aos="fade-up">
              <CardMedia>
                <img src={img4} alt="" width={"100%"} />
              </CardMedia>
              <CardActions
                style={{
                  background: "#1976d3",
                  marginTop: "-1%",
                  textAlign: "center",
                }}
              >
                <Button size="medium" style={{ color: "white" }}>
                  Hair Color
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item>
            <Card sx={{ maxWidth: 345, height: "100%" }} data-aos="fade-up">
              <CardMedia>
                <img src={img5} alt="" width={"100%"} height={"100%"} />
              </CardMedia>
              <CardActions
                style={{
                  background: "#1976d3",
                  marginTop: "-1%",
                  textAlign: "center",
                }}
              >
                <Button size="medium" style={{ color: "white" }}>
                  Facial
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item>
            <Card sx={{ maxWidth: 345, height: "100%" }} data-aos="fade-up">
              <CardMedia>
                <img src={img6} alt="" width={"100%"} height={"100%"} />
              </CardMedia>
              <CardActions
                style={{
                  background: "#1976d3",
                  marginTop: "-1%",
                  textAlign: "center",
                }}
              >
                <Button size="medium" style={{ color: "white" }}>
                  Nail
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item>
            <Card sx={{ maxWidth: 345, height: "100%" }} data-aos="fade-up">
              <CardMedia>
                <img src={img7} alt="" width={"100%"} height={"100%"} />
              </CardMedia>
              <CardActions
                style={{
                  background: "#1976d3",
                  marginTop: "-1%",
                  textAlign: "center",
                }}
              >
                <Button size="medium" style={{ color: "white" }}>
                  Spa
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item>
            <Card sx={{ maxWidth: 345, height: "100%" }} data-aos="fade-up">
              <CardMedia>
                <img src={img8} alt="" width={"100%"} />
              </CardMedia>
              <CardActions
                style={{
                  background: "#1976d3",
                  marginTop: "-1%",
                  textAlign: "center",
                }}
              >
                <Button size="medium" style={{ color: "white" }}>
                  Hair Care
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item>
            <Card sx={{ maxWidth: 345, height: "100%" }} data-aos="fade-up">
              <CardMedia>
                <img src={img9} alt="" width={"100%"} />
              </CardMedia>
              <CardActions
                style={{
                  background: "#1976d3",
                  marginTop: "-1%",
                  textAlign: "center",
                }}
              >
                <Button size="medium" style={{ color: "white" }}>
                  Cosmetology
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item>
            <Card sx={{ maxWidth: 345, height: "100%" }} data-aos="fade-up">
              <CardMedia>
                <img src={img10} alt="" width={"100%"} />
              </CardMedia>
              <CardActions
                style={{
                  background: "#1976d3",
                  marginTop: "-1%",
                  textAlign: "center",
                }}
              >
                <Button size="medium" style={{ color: "white" }}>
                  Make Up
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
