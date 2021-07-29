import NavTab from 'components/nav/navTabs/navTab/NavTab';

export default function NavTabs({ children }) {
  return (
    <nav sx={{
        transition: 'transform 0.3s',
        mt: 3,
        transform: ['translateY(-120px)', 'translateY(0)', 'translateY(0)'],
      }}
    >
      <NavTab href="#home" displayName="Home" />
      <NavTab href="#about" displayName="About" />
      <NavTab href="#contact" displayName="Contact" />
      
      {/** @todo add resume button */}
    </nav>
  );
}