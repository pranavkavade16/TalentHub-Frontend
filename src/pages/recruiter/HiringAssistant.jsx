import PageHeader from "../../components/common/PageHeader";
import ChatBox from "../../components/ai/ChatBox";
import ChatInput from "../../components/ai/ChatInput";

function HiringAssistant() {
  return (
    <>
      <PageHeader
        title="AI Hiring Assistant"
        subtitle="Analyze applicants and receive AI-powered hiring recommendations."
      />

      <ChatBox />

      <ChatInput />
    </>
  );
}

export default HiringAssistant;
