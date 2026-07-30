const prompts = [
  {
    icon: "bi-stars",
    text: "Top Candidates",
  },
  {
    icon: "bi-file-earmark-text",
    text: "Summarize",
  },
  {
    icon: "bi-person-check",
    text: "Interview First",
  },
  {
    icon: "bi-code-slash",
    text: "Frontend Profile",
  },
];

const SuggestedPrompts = () => {
  return (
    <div className="d-flex flex-wrap gap-2 mt-3">
      {prompts.map((prompt) => (
        <button
          key={prompt.text}
          className="btn btn-light border rounded-pill px-3 py-2"
        >
          <i className={`bi ${prompt.icon} text-primary me-2`}></i>

          {prompt.text}
        </button>
      ))}
    </div>
  );
};

export default SuggestedPrompts;
