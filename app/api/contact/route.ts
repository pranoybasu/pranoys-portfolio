import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

/**
 * POST /api/contact
 * Handles contact form submissions
 * 
 * SETUP REQUIRED: To enable email delivery, follow these steps:
 * 
 * Option 1: Using Resend (Recommended)
 * 1. Install: npm install resend
 * 2. Sign up at https://resend.com
 * 3. Get your API key and add to .env.local:
 *    RESEND_API_KEY=your_key_here
 * 4. Uncomment the Resend code below
 * 
 * Option 2: Using SendGrid
 * 1. Install: npm install @sendgrid/mail
 * 2. Sign up at https://sendgrid.com
 * 3. Get your API key and add to .env.local:
 *    SENDGRID_API_KEY=your_key_here
 * 4. Uncomment the SendGrid code below
 * 
 * Option 3: Using EmailJS (Frontend Only)
 * 1. No backend needed - integrate directly in component
 * 2. Sign up at https://www.emailjs.com
 * 3. Add public key to environment
 * 4. Replaces this entire API route with client-side implementation
 */

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validation
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // TODO: Uncomment one of the email services below
    // ============================================

    // OPTION 1: Resend Email Service
    // Uncomment the following code and ensure RESEND_API_KEY is set:
    /*
    import { Resend } from 'resend';
    
    const resend = new Resend(process.env.RESEND_API_KEY);

    const result = await resend.emails.send({
      from: 'noreply@pranoybasu.dev',
      to: 'pranoybasuch@gmail.com',
      replyTo: body.email,
      subject: `New Contact Form Submission from ${body.name}`,
      html: `
        <h2>New Message from Portfolio Contact Form</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Message:</strong></p>
        <p>${body.message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (result.error) {
      throw new Error(result.error.message);
    }

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
    */

    // OPTION 2: SendGrid Email Service
    // Uncomment the following code and ensure SENDGRID_API_KEY is set:
    /*
    import sgMail from '@sendgrid/mail';
    
    sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

    const msg = {
      to: 'pranoybasuch@gmail.com',
      from: 'noreply@pranoybasu.dev',
      replyTo: body.email,
      subject: `New Contact Form Submission from ${body.name}`,
      html: `
        <h2>New Message from Portfolio Contact Form</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Message:</strong></p>
        <p>${body.message.replace(/\n/g, '<br>')}</p>
      `,
    };

    await sgMail.send(msg);

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
    */

    // FALLBACK: No email service configured
    // In production, you MUST set up one of the email services above
    console.log('Contact form submission received:', {
      name: body.name,
      email: body.email,
      message: body.message,
      timestamp: new Date().toISOString(),
    });

    // Log to console - in production, should send email
    if (process.env.NODE_ENV === 'production') {
      console.warn(
        'WARNING: Email service not configured. Messages are being logged but not delivered.'
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Message received. Please note: Email delivery is not yet configured. Contact the developer.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process contact form submission' },
      { status: 500 }
    );
  }
}
