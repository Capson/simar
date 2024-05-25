import { JSX } from "solid-js";

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
            background-position: 200% 50%;
          }
        }

        .starter-prompt {
          position: relative;
          display: inline-block;
          padding: 0.5em;
          border-radius: 0.5em;
          border: 2px solid purple;
          cursor: pointer;
          background: linear-gradient(
            90deg, 
            purple, 
            purple, 
            purple, 
            white, 
            purple, 
            purple, 
            purple
          );
          background-size: 200% 200%;
          transition: background-position 0.5s, border 0.5s;
        }

        .starter-prompt:hover {
          animation: border-shine 2s linear infinite;
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
        {props.prompt}
      </span>
    </div>
  </>
);