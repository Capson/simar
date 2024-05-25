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
        class="px-2 py-1 ml-1 whitespace-pre-wrap max-w-full chatbot-host-bubble"
        data-testid="host-bubble"
        style={{
          display: 'inline-block',
          'border-radius': '10px', // Adjust as needed
          padding: '5px', // Space for the border
          background: 'linear-gradient(45deg, violet, 00338D, #E6E6FA, 005EB8)', // Gradient colors
          '-webkit-mask': 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          '-webkit-mask-composite': 'destination-out',
          'mask-composite': 'exclude',
        }}
      >
        <span
          class="content"
          style={{
            display: 'block',
            'border-radius': '10px', // Match the outer border radius
            padding: '2px', // Adjust as needed
            background: '#ffffff', // Background of the content area
            width: 'max-content',
            'font-size': '15px',
            cursor: 'pointer',
          }}
        >
          {props.prompt}
        </span>
      </span>
    </div>
  </>
);
