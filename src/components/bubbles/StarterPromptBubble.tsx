type Props = {
  prompt: string;
  onPromptClick?: () => void;
};

export const StarterPromptBubble = (props: Props) => (
  <>
    <div
      data-modal-target="defaultModal"
      data-modal-toggle="defaultModal"
      class="flex justify-start items-start animate-fade-in host-container hover:brightness-90 active:brightness-75"
      onClick={() => props.onPromptClick?.()}
    >
      <span
        class="px-2 py-1 ml-1 whitespace-pre-wrap max-w-full chatbot-host-bubble bg-violet-400"
        data-testid="host-bubble"
        style={{
          width: 'max-content',
          'font-size': '15px',
          'border-radius': '0.5em', // Combined both border-radius
          cursor: 'pointer',
          border: '2px solid purple', // Added border style
          padding: '0.5em', // Added padding for space inside the border
        }}
      >
        {props.prompt}
      </span>
    </div>
  </>
);