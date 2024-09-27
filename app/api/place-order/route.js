import Invoice from "@/components/pdf/Invoice";
import { renderToFile } from '@react-pdf/renderer';
import fs from "fs";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import path from "path";



export const POST = async (req, res) => {

  if (req.method == "POST") {
    
    const invoiceData = await req.json();

    try {

      // Generate PDF
      const pdfPath = path.join(process.cwd(), 'public', `invoice-${invoiceData.user.id}.pdf`);
      await renderToFile(<Invoice invoiceData={invoiceData} />, pdfPath);

      // Send Email
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      let mailOptions = {
        from: process.env.EMAIL_USER,
        to: invoiceData.user.email,
        subject: "Your invoiceData Invoice",
        text: "Please find attached your invoice.",
        attachments: [
          {
            filename: `invoice-${invoiceData.user.id}.pdf`,
            path: pdfPath,
            contentType: "application/pdf",
          },
        ],
      };

      await transporter.sendMail(mailOptions);


      // Construct base URL
      const protocol = req.headers['x-forwarded-proto'] || 'http';
      const host = req.headers.host || "localhost:3000";
      const baseUrl = `${protocol}://${host}`;
      
      const responseData = {
        message: "invoiceData placed and invoice sent!",
        // downloadLink: `${req.headers.origin}/invoice-${invoiceData.id}.pdf`,
        downloadLink: `${baseUrl}/invoice-${invoiceData.user.id}.pdf`,
      };

      return new NextResponse(JSON.stringify(responseData), {
        status: 200,
      });

    } catch (error) {
      return new NextResponse("Failed to place invoiceData and send invoice.", {
        status: 500,
      });
    }
  } else {
    return new NextResponse("Method not Allow", {
      status: 405,
    });
  }
};

// export const config = {
//   api: {
//     bodyParser: true,
//   },
// };

// export const runtime = 'edge'; // or 'nodejs'
// export const revalidate = 60;