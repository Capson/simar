export const KPMGLoadingAnimation = () => {
  return (
    <div class="flex justify-center items-center space-x-2">
      <div class="w-3 h-3 rounded-full bg-violet-500 animate-bounce bounce-delay-0"/>
      <div class="w-3 h-3 rounded-full bg-red-500 animate-bounce bounce-delay-1"/>
      <div class="w-3 h-3 rounded-full bg-blue-500 animate-bounce bounce-delay-2"/>
      <div class="w-3 h-3 rounded-full bg-green-500 animate-bounce bounce-delay-3"/>
    </div>
  );
};