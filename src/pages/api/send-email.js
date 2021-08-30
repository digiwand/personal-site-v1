export default function handler(req, res) {
  // console.log(req.body);
  // todo: find a service that will allow me to send emails
  res.status(200).json(req.body);
}
