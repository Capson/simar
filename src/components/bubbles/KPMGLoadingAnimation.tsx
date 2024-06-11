import { JSX } from 'solid-js';

export const KPMGLoadingAnimation = () => (
  <div class="flex items-center">
    <div class="w-2 h-2 mr-1 rounded-full bg-gray-400 animate-pulse" />
    <div class="w-2 h-2 mr-1 rounded-full bg-gray-400 animate-pulse" />
    <div class="w-2 h-2 rounded-full bg-gray-400 animate-pulse" />
  </div>
);