type Props = {
  prompt: string;
  onPromptClick?: () => void;
};

export const StarterPromptBubble = (props: Props) => (
  <>
    <div
      data-modal-target="defaultModal"
      data-modal-toggle="defaultModal"
      class="flex justify-start items-start animate-fade-in host-container active:brightness-75"
      onClick={() => props.onPromptClick?.()}
    >
      <span
        class="px-2 py-1 ml-1 whitespace-pre-wrap max-w-full chatbot-host-bubble"
        data-testid="host-bubble"
        style={{
          width: 'max-content',
          'font-size': '15px',
          'border-radius': '0.5em',
          cursor: 'pointer',
          border: '2px solid #6D2077',
          padding: '0.5em',
          background: 'linear-gradient(to right, #00338D, #6D2077)',
          color: 'white',
          transition: 'transform 0.3s', // Smooth transition for the zoom effect
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        {props.prompt}
      </span>
    </div>
  </>
);