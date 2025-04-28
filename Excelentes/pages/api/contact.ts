import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  if (req.method!=='POST') return res.status(405).end();
  const { name,email,message } = req.body;
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
  });
  await transporter.sendMail({
    from: `"${name}" <${email}>`,
    to: process.env.EMAIL_USER,
    subject: `Contacto Óptica Excelentes`,
    text: message
  });
  res.status(200).json({ success:true });
}
