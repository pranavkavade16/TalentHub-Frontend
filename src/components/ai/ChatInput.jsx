import SuggestedPrompts from "./SuggestedPrompts";

const ChatInput = () => {
  return (
    <div className="card border-0 shadow-sm rounded-4 mt-4">
      <div className="card-body">
        <SuggestedPrompts />

        <div className="input-group mt-4">
          <input
            type="text"
            className="form-control border-0"
            placeholder="Ask something about your applicants..."
          />

          <button className="btn btn-primary px-4">
            <i className="bi bi-send-fill me-2"></i>
            Send
          </button>
        </div>

        <small className="text-muted d-block mt-3">
          AI responses are generated only from available applicant data.
        </small>
      </div>
    </div>
  );
};

export default ChatInput;
