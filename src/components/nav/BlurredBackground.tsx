function BlurredBackground() {
  return (
    <div
      className="block land:hidden [backdrop-filter:blur(2rem)_opacity(0.95)_brightness(0.85)]
        h-full w-screen fixed left-0 top-0 pointer-events-none select-none"
    />
  );
}

export default BlurredBackground;
