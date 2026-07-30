const MessageBubble = ({ sender, message, time }) => {
  const isAI = sender === "ai";

  return (
    <div
      className={`d-flex mb-4 ${
        isAI ? "justify-content-start" : "justify-content-end"
      }`}
    >
      {isAI && (
        <div
          className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0"
          style={{ width: 42, height: 42 }}
        >
          <i className="bi bi-stars"></i>
        </div>
      )}

      <div style={{ maxWidth: "75%" }}>
        <div
          className={`rounded-4 px-4 py-3 shadow-sm ${
            isAI ? "bg-white border" : "bg-primary text-white"
          }`}
        >
          <p className="mb-0">{message}</p>
        </div>

        <small className="text-muted mt-1 d-block">{time}</small>
      </div>

      {!isAI && (
        <img
          src="https://i.pravatar.cc/100?img=12"
          alt=""
          width="42"
          height="42"
          className="rounded-circle ms-3"
        />
      )}
    </div>
  );
};

export default MessageBubble;
