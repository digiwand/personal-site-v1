import Fade from 'react-reveal/Fade';
import {
  Box,
  Button,
  Label,
  Input,
  Textarea,
} from 'theme-ui';

/**
 * @todo  
 * - style inputs
 * - add server-side email client (SendGrid?)
 * - update submit button to send email
 * - throttle requests
 * - verify inputs
 * - disable "Send" button if inputs are not all entered
 */
function ContactForm() {
  return (
    <Box as="form" 
      sx={{
        transition: 'width 0.3s',
        flex: '1 0 auto',
        width: ['100%', '100%', 'auto'],
        maxWidth: '680px',
      }}
      onSubmit={(e) => e.preventDefault()}
    >
      <Fade bottom>
        <Label htmlFor="contact-form-name">Full Name</Label>
        <Input 
          name="contact-form-name" 
          id="contact-form-name" 
          placeholder="New Friend"
          mb={3} 
          required
        />
      </Fade>

      <Fade bottom delay={200}>
        <Label htmlFor="contact-form-email">Email</Label>
        <Input type="email" 
          name="contact-form-email" 
          id="contact-form-email" 
          placeholder="beawesome@newfriends.com"
          mb={3}
          required
        />
      </Fade>

      <Fade bottom delay={400}>
        <Label htmlFor="contact-form-message">Message</Label>
        <Textarea id="contact-form-message" 
          placeholder="123-45-678"
          name="contact-form-message" 
          rows={6} 
          mb={3}
          required
        />        
      </Fade>

      <Fade bottom delay={1000}>
        <Button>Send</Button>
      </Fade>
    </Box>
  )
}

export default ContactForm;