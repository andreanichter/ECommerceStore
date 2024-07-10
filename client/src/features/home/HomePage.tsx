import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomePage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Slider {...settings}>
        <div>
          <img
            src="/images/hero1.jpg"
            alt="hero"
            style={{ display: "block", width: "100%", maxHeight: "500px" }}
          />
        </div>
        <div>
          <img
            src="/images/hero2.jpg"
            alt="hero"
            style={{ display: "block", width: "100%", maxHeight: "500px" }}
          />
        </div>
        <div>
          <img
            src="/images/hero3.jpg"
            alt="hero"
            style={{ display: "block", width: "100%", maxHeight: "500px" }}
          />
        </div>
      </Slider>
      <Box display="flex" justifyContent="center" mt={4}>
        <Typography variant="h1" component="h1" gutterBottom>
          Welcome to the store!
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" mb={4}>
        <Typography variant="h5" component="p" align="center" maxWidth="md">
          Discover the best deals on the latest products. We are committed to providing the best shopping experience. Our store offers a wide variety of products at competitive prices. Our mission is to ensure customer satisfaction with every purchase.
        </Typography>
      </Box>
    </>
  );
}
