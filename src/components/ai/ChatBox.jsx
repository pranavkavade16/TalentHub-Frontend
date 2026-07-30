import MessageBubble from "./MessageBubble";

const messages = [
  {
    id: 1,
    sender: "ai",
    message:
      "Hello! I'm your AI Hiring Assistant. I can help you analyze applicants, compare resumes and suggest the best candidates.",
    time: "10:00 AM",
  },
  {
    id: 2,
    sender: "user",
    message: "Suggest the top 3 candidates for Frontend Developer.",
    time: "10:01 AM",
  },
  {
    id: 3,
    sender: "ai",
    message:
      "Based on the available applicant data, Sarah Johnson, Emily Davis and Michael Chen appear to be the strongest candidates due to their React expertise, relevant experience and technical skills.",
    time: "10:01 AM",
  },
];

const ChatBox = () => {
  return (
    <div className="card border-0 shadow-sm rounded-4">
      <div
        className="card-body p-4"
        style={{
          height: "500px",
          overflowY: "auto",
          background: "#f8fafc",
        }}
      >
        {messages.map((message) => (
          <MessageBubble key={message.id} {...message} />
        ))}
      </div>
    </div>
  );
};

export default ChatBox;
