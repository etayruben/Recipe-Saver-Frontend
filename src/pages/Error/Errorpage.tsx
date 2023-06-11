import React from "react";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import "./Errorpage.css"

const ErrorPage: React.FC = () => {
    const navigate = useNavigate()

    return (
        <div className="container">
        <Typography variant="h4" component="h1" className="errorTitle">
          Error Page
        </Typography>
        <img src="/errorimage.jpeg" alt="Image" />
        <Typography variant="body1">
          There was an error while fetching data from the server.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          className="retryButtons"
          onClick={() => navigate(-1)}
        >
          Last page
        </Button>
      </div>
    );
  };

  export default ErrorPage