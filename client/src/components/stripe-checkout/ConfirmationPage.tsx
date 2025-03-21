import React, { useState, useEffect } from "react";
import sessionService from "../../services/sessionService/sessionservice";

import SuccessPage from "./SuccessPage";
import { useParams } from "react-router";

interface SessionStatus {
  status: string;
}

const ConfirmationPage = () => {
  const [sessionStatus, setSessionStatus] = useState<SessionStatus | null>(
    null
  );

  const sessionId = useParams().session_id;

  useEffect(() => {
    const getSessionStatus = async () => {
      const status = await sessionService.getSessionStatus(sessionId);
      setSessionStatus(status);
    };
    getSessionStatus();
  }, [sessionId]);

  if (sessionStatus) {
    if (sessionStatus.status === "complete") {
      return <SuccessPage />;
    } else if (sessionStatus.status === "open") {
      return;
    }
  }

  return (
    <div>
      <SuccessPage />;
    </div>
  );
};

export default ConfirmationPage;
