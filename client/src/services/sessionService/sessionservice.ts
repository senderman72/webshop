const sessionService = {
  async getSessionStatus(sessionId) {
    const response = await fetch(
      `http://localhost:3000/session_status?session_id=${sessionId}`
    );
    const data = await response.json();
    return data;
  },
};

export default sessionService;
