import * as nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
    secure: false,
  });

  const body = await request.json();
  const { name, email, message } = body;

  if (!message || !name || !message) {
    return NextResponse.json(
      { message: "Please fill out the necessary fields" },
      { status: 400 },
    );
  }

  const mailData = {
    from: email,
    to: "satriaaxel7703@gmail.com",
    subject: `Message from ${name}`,
    text: `${message} | Sent from: ${email}`,
    html: `<div>${message}</div><p>Sent from: ${email}</p>`,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, (err: Error | null, info) => {
      if (err) {
        reject(err);
        return NextResponse.json(
          { error: err.message || "Something went wrong" },
          { status: 500 },
        );
      } else {
        resolve(info.accepted);
        NextResponse.json({ message: "Message sent!" }, { status: 200 });
      }
    });
  });

  return NextResponse.json({ message: "berhasil" });
};
