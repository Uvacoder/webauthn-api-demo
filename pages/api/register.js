import pick from 'lodash/pick';
import { registerUser } from '@/lib/db';

export default async function handler(req, res) {
  const user = await registerUser(req.body);
  const response = pick(user, ['name', 'email', 'image_url']);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(response));
}
