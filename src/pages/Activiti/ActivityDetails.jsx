import React, { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { activities } from "../../api/modules/activities.api";

const ActivityDetail = () => {
  const theme = useTheme();
  const { slug } = useParams();
  const user = useSelector((state) => state.account.account);
  const [news, setNews] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await activities.getAll({
          type: "news",
          slug: slug,
        });
        setNews(response.data.rows[0]);
      } catch (error) {}
    };
    fetchData();
  }, [slug]);
  if (!news) return <></>;

  return (
    <section className="news-detail">
      <Box>
        <Box
          sx={{
            span: {
              color: theme.palette.primary.contrastText,
              fontSize: "0.8rem",
            },
            img: {
              objectFit: "cover",
              width: "500",
              height: "300px",
              margin: "24px 0",
            },
          }}
        >
          <Typography variant="h5" fontWeight={500} marginBottom="24px">
            {news.title}
          </Typography>
          <Box textAlign="center">
            <img src={news.thumbnail} />
          </Box>
          <div dangerouslySetInnerHTML={{ __html: news.content }}></div>
        </Box>
      </Box>
    </section>
  );
};

export default ActivityDetail;
