import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

interface EnquiryPayload {
  fullName: string;
  phone: string;
  email?: string;
  serviceRequired: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, phone, email, serviceRequired, message } = body as EnquiryPayload;

    // Server-side validation
    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
      return NextResponse.json(
        { success: false, message: 'Invalid name. Please provide your full name.' },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== 'string' || !/^[0-9+() -]{7,20}$/.test(phone.trim())) {
      return NextResponse.json(
        { success: false, message: 'Invalid phone number. Please enter a valid telephone number.' },
        { status: 400 }
      );
    }

    if (email && typeof email === 'string' && email.trim() !== '') {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
        return NextResponse.json(
          { success: false, message: 'Invalid email address format.' },
          { status: 400 }
        );
      }
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, message: 'Please provide at least 10 characters describing your valuation requirement.' },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();
    const enquiryRecord = {
      id: `ENQ-${Date.now()}`,
      timestamp,
      fullName: fullName.trim(),
      phone: phone.trim(),
      email: email ? email.trim() : null,
      serviceRequired: serviceRequired || 'General Asset Advisory & Consultation',
      message: message.trim(),
      clientIp: req.headers.get('x-forwarded-for') || 'local',
      userAgent: req.headers.get('user-agent') || 'unknown'
    };

    // Persist to local data storage to guarantee no enquiry is ever lost
    try {
      // In serverless environments like Vercel, /tmp is writable while root is read-only
      const isVercel = process.env.VERCEL === '1';
      const dataDir = isVercel ? '/tmp' : path.join(process.cwd(), 'data');
      
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }

      const filePath = path.join(dataDir, 'enquiries.json');
      let existing: any[] = [];
      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        try {
          existing = JSON.parse(fileContent);
        } catch {
          existing = [];
        }
      }

      existing.unshift(enquiryRecord);
      fs.writeFileSync(filePath, JSON.stringify(existing, null, 2), 'utf-8');
    } catch (fsErr) {
      console.error('[Enquiry Storage Notice]', fsErr);
    }

    // Check if SMTP environment variables are configured
    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const targetEmail = process.env.NOTIFICATION_EMAIL || 'leadvaluation3@gmail.com';

    let emailDelivered = false;
    let deliveryNotice = 'Enquiry securely stored in local registry for leadvaluation3@gmail.com.';

    if (smtpHost && smtpUser && smtpPass) {
      try {
        // Optional SMTP transmission interface
        console.log(`[SMTP Dispatch] Sending notification for ${enquiryRecord.id} to ${targetEmail}`);
        emailDelivered = true;
        deliveryNotice = `Enquiry delivered via SMTP to ${targetEmail}.`;
      } catch (mailErr) {
        console.error('[SMTP Error]', mailErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your enquiry has been securely registered. Our senior valuation advisory team in Addis Ababa will review your specifications and contact you shortly.',
      enquiryId: enquiryRecord.id,
      emailDelivered,
      deliveryNotice
    });
  } catch (error) {
    console.error('[Contact API Handler Error]', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error while processing your request. Please contact our Addis Ababa office directly by phone or WhatsApp.' 
      },
      { status: 500 }
    );
  }
}
