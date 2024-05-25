type Props = {
  prompt: string;
  onPromptClick?: () => void;
};

export const StarterPromptBubble = (props: Props) => (
  <>
    <style>
      {`
        @keyframes border-shine {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }

        .starter-prompt {
          position: relative;
          display: inline-block;
          padding: 0.5em 1em;
          border-radius: 15px;
          background-color: #e0b3ff; /* Light purple background */
          color: black; /* Text color */
          cursor: pointer;
          overflow: hidden; /* Ensure pseudo-element doesn't overflow */
        }

        .starter-prompt::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          border-radius: 15px;
          border: 2px solid transparent;
          background: linear-gradient(90deg, purple, purple, white, purple, purple);
          background-size: 200% 100%;
          z-index: 1;
          animation: border-shine 2s linear infinite;
        }

        .starter-prompt > span {
          position: relative;
          z-index: 2; /* Ensure text is above the pseudo-element */
        }
      `}
    </style>

    <div
      data-modal-target="defaultModal"
      data-modal-toggle="defaultModal"
      class="flex justify-start items-start animate-fade-in host-container hover:brightness-90 active:brightness-75"
      onClick={() => props.onPromptClick?.()}
    >
      <span
        class="starter-prompt px-2 py-1 ml-1 whitespace-pre-wrap max-w-full chatbot-host-bubble"
        data-testid="host-bubble"
        style={{
          width: 'max-content',
          'font-size': '15px'
        }}
      >
        <span>{props.prompt}</span>
      </span>
    </div>
  </>
);