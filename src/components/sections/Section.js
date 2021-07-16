export default function Section({ children, ...props }) {
  return (
    <section id={props.id} {...props}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'flex-start',
        minHeight: '100vh',
        p: 0,
      }}
    >
      {children}
    </section>
  );
}