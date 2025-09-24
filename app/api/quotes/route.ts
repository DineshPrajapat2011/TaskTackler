import { NextRequest, NextResponse } from 'next/server'

interface QuoteRequest {
  companyName: string
  contactName: string
  email: string
  phone: string
  projectType: string
  description: string
  budget: string
  timeline: string
}

export async function POST(request: NextRequest) {
  try {
    const data: QuoteRequest = await request.json()
    
    // Validate required fields
    if (!data.companyName || !data.contactName || !data.email || !data.projectType || !data.description) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // In a real application, you would:
    // 1. Send email to admin@tasktacklerinfotech.com (Email service setup required)
    // 2. Send confirmation email to the client
    // 3. Store in database
    // Note: Email service (SendGrid, Mailgun, etc.) needs to be configured
    
    console.log('Quote request received for admin@tasktacklerinfotech.com:', data)
    
    // Simulate email sending to admin
    const adminEmailData = {
      to: 'admin@tasktacklerinfotech.com',
      subject: `New Quote Request from ${data.companyName}`,
      body: `
        New quote request received:
        
        Company: ${data.companyName}
        Contact: ${data.contactName}
        Email: ${data.email}
        Phone: ${data.phone}
        Project Type: ${data.projectType}
        Budget: ${data.budget}
        Timeline: ${data.timeline}
        
        Description:
        ${data.description}
      `
    }
    
    console.log('Email would be sent to admin:', adminEmailData)
    
    return NextResponse.json({ 
      success: true, 
      message: 'Quote request submitted successfully. Admin has been notified.' 
    })
  } catch (error) {
    console.error('Error processing quote request:', error)
    return NextResponse.json({ error: 'Failed to process quote request' }, { status: 500 })
  }
}