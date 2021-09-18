function BlurredBackground() {
  return (
    <div
      css={{
        /** @todo update logic as this is not supported in firefox. also, consider animating */
        backdropFilter: 'blur(2rem) opacity(0.95) brightness(0.85)',
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        left: '0',
        top: '0',
        transition: 'backdropFilter 0.3s',
        pointerEvents: 'none',
        userSelect: 'none',
      }}
      sx={{ display: ['block', 'block', 'none'] }}
    />
  );
}

export default BlurredBackground;
