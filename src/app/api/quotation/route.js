import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const data = await request.json();

    console.log(data)
    const requiredFields = [
      "name",
      "email",
      "phone",
      "serviceType",
      "origin",
      "destination",
    ];
    const missingFields = requiredFields.filter((field) => !data[field]);

    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(", ")}` },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });


    if(data.serviceTab == "fcl"){

    }else{

    }
    // Function to create email content
    const createEmailContent = (isOwner = false) => {
      const fields = [
        { label: "Name", value: data.name },
        { label: "Company", value: data.company },
        { label: "Email", value: data.email },
        { label: "Phone", value: data.phone },
        { label: "Service Type", value: data.serviceType },
        { label: "Service Category", value: data.serviceTab },
        { label: "Origin", value: data.origin },
        { label: "Destination", value: data.destination },
        {
          label: data.serviceTab == "fcl" ? "Dimensions (W×V)" :"Dimensions (L×W×H)",
          value: data.serviceTab == "fcl" ? `${data.weight}×${data.volume}`: `${data.length}×${data.width}×${data.height}`,
        },
        { label: "Weight", value: data.weight ? `${data.weight} kg` : null },
        { label: "CBM", value: data.CBM },
        { label: "Incoterm", value: data.incoTerm },
        { label: "Shipper Address", value: data.shipperAddress },
        { label: "Shipper Pin Code", value: data.shipperPinCode },
        { label: "Consignee Address", value: data.consigneeAddress },
        { label: "Consignee Pin Code", value: data.consigneePinCode },
        { label: "Additional Info", value: data.additionalInfo },
      ];

      return `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 30px; ">
            <div style="background-color: #154c89; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); padding: 20px; margin-bottom: 20px;">
                <div style="text-align: center; margin-bottom: 30px;">
                    <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">
                        ${isOwner ? "New Quotation Request" : "Thank You for Your Request"}
                    </h1>
                    <p style="color: #ffc40a; margin-top: 10px; font-size: 16px;">
                        ${isOwner ? "A new quotation request has been received" : "We have received your quotation request"}
                    </p>
                </div>

                <div style="background-color: #f8f9fa; border-radius: 8px; padding: 20px;">
                    ${fields
                      .filter((field) => field.value)
                      .map(
                        (field) => `
                        <div style="display: flex; margin-bottom: 10px; border-bottom: 1px solid #e0e0e0; padding-bottom: 10px;">
                            <div style="width: 180px; color: #252525; font-weight: 600;">${field.label}</div>
                            <div style="flex: 1; color: #202124;">${field.value}</div>
                        </div>
                    `
                      )
                      .join("")}
                </div>

                <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
                    <p style="color: #ededed; margin: 0; text-align: center;">
                        ${
                          isOwner
                            ? "Please review the details and take necessary action."
                            : "Our team will review your request and get back to you shortly."
                        }
                    </p>
                </div>
            </div>

            <div style="text-align: center; color: #5f6368; font-size: 14px;">
                <p>© ${new Date().getFullYear()} Transpeed. All rights reserved.</p>
            </div>
        </div>
      `;
    };

    // Send email to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: data.email,
      subject: "Quotation Request Confirmation",
      html: createEmailContent(false),
    });

    // Send email to owner
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.OWNER_EMAIL, 
      subject: `New Quotation Request from ${data.name}`,
      html: createEmailContent(true),
    });

    return NextResponse.json(
      { message: "Quotation request received and confirmation emails sent" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing quotation:", error);
    return NextResponse.json(
      { error: "Failed to process quotation request" },
      { status: 500 }
    );
  }
}
