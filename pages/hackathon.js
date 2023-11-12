import HeaderLinks from "../components/Header/HeaderLinks";
import Header from "../components/Header/Header";
import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import landingPageStyle from "../styles/jss/nextjs-material-kit-pro/pages/landingPageStyle";
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";
import Button from "../components/CustomButtons/Button";
import Parallax from "../components/Parallax/Parallax";

const useStyles = makeStyles(landingPageStyle);

export default function Hackathon(...rest ){
    React.useEffect(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    });
    const classes = useStyles();
    return <>
        <Header
            color="transparent"
            brand="FEKRA BCH TARBA7 EL ......"
            links={<HeaderLinks dropdownHoverColor="info" />}
            fixed
            changeColorOnScroll={{
                height: 300,
                color: "info"
            }}
            {...rest}
        />
        <Parallax image="/img1/header_EpicCare.jpg" filter="dark">
            <div className={classes.container}>
                <GridContainer>
                    <GridItem xs={12} sm={6} md={6}>
                        <h1 className={classes.title}>Your Comprehensive Health Management Solution

                        </h1>
                        <h4>
                            Empower your health journey with HealthQR, where your personalized health information is just a scan away. Experience seamless healthcare management through our intuitive app, ensuring precision, efficiency, and peace of mind for you and your healthcare providers.
                        </h4>
                        <br />
                        <Button
                            color="danger"
                            size="lg"
                            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                            target="_blank"
                        >
                            <i className="fas fa-play" />
                            Watch video
                        </Button>
                    </GridItem>
                </GridContainer>
            </div>
        </Parallax>
    </>

}