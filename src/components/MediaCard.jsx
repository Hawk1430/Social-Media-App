import React, { useRef, useState, useEffect } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import GradientButton from "./GradientButton";

const MAX_LINES = 3;

export default function MediaCard() {
  const [readMore, setReadMore] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const descriptionRef = useRef(null);

  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  useEffect(() => {
    const el = descriptionRef.current;
    if (el) {
      setIsOverflowing(el.scrollHeight > el.clientHeight);
    }
  }, []);

  return (
    <Card
      sx={{
        maxWidth: 400,
        borderRadius: "16px",
        backgroundColor: "#fff",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
        padding: 2,
        mx: "auto",
      }}
    >
      <CardMedia
        component="img"
        image="/image.jpg"
        alt="Post banner"
        sx={{
          height: 200,
          borderRadius: "12px",
          objectFit: "cover",
          width: "100%",
        }}
      />

      <CardContent sx={{ p: 0, mt: 2 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          Post Title That Might Be Very Long...
        </Typography>

        <Box sx={{ display: "flex", mt: 1 }}>
          <Box sx={{ flex: 1, pr: 1 }}>
            <Typography
              ref={descriptionRef}
              variant="body2"
              color="text.secondary"
              sx={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: readMore ? "unset" : MAX_LINES,
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {description}
            </Typography>

            {!readMore && isOverflowing && (
              <Box
                component="span"
                onClick={() => setReadMore(true)}
                sx={{
                  color: "#f15a24",
                  fontWeight: 600,
                  cursor: "pointer",
                  display: "inline-block",
                  mt: 1,
                }}
              >
                Read more...
              </Box>
            )}
          </Box>

          <GradientButton />
        </Box>
      </CardContent>
    </Card>
  );
}
