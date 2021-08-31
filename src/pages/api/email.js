import emailjs from 'emailjs-com';

const serviceID = process.env.EMAIL_JS_SERVICE_ID;
const templateID = process.env.EMAIL_JS_TEMPLATE_ID;
const userID = process.env.EMAIL_JS_USER_ID;

/**
 * @param {Object} req
 * @param {String} req.body.user_name
 * @param {String} req.body.user_email
 * @param {String} req.body.message
 * todo: add 'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
 */

function handler(req, res) {
  if (req.method !== 'POST') { return res.status(500); }

  emailjs.send(serviceID, templateID, { ...req.body }, userID).then((response) => {
    console.log(response);
    console.log(response.text);

    res.status(response.status).json(response.text);
  }, (err) => {
    res.status(500).json(err);
  });
}

export default handler;
