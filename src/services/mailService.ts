import nodemailer from "nodemailer";

type Props = {
  subject: string;
  toEmail: string;
  message: string;
};

export const sendMail = async ({ message, subject, toEmail }: Props) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  const mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: toEmail,
    subject: subject,
    html: message,
  };

  try {
    const sendMailInfo = await transporter.sendMail(mailOptions);

    return {
      status: true,
      data: sendMailInfo.response,
    };
  } catch (error) {
    return {
      status: false,
      error,
    };
  }
};
