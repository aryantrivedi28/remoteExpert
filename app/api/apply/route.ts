import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    const requiredFields = ['fullName', 'email', 'primarySkill', 'consent']
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { message: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { message: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Validate consent
    if (!body.consent) {
      return NextResponse.json(
        { message: 'You must agree to the terms' },
        { status: 400 }
      )
    }

    // Prepare data for GoHighLevel
    const ghlData = {
      // Contact information
      contact: {
        name: body.fullName,
        email: body.email,
        phone: body.whatsapp || '',
        customField: {
          'country': body.country || '',
          'primary_skill': body.primarySkill,
          'secondary_skills': body.secondarySkills || '',
          'experience': body.experience || '',
          'portfolio': body.portfolio || '',
          'linkedin': body.linkedin || '',
          'hourly_rate': body.hourlyRate || '',
          'work_type': body.workType || 'freelance',
          'tools': body.tools || '',
          'intro': body.intro || '',
          'application_source': 'RemoteExpertJobs Website',
          'application_date': new Date().toISOString()
        }
      },
      // Additional data for webhook
      metadata: {
        source: 'website_application_form',
        submittedAt: new Date().toISOString(),
        userAgent: request.headers.get('user-agent') || '',
        ip: request.headers.get('x-forwarded-for') || ''
      }
    }

    // Send to GoHighLevel Webhook
    const GHL_WEBHOOK_URL = process.env.GHL_WEBHOOK_URL
    if (!GHL_WEBHOOK_URL) {
      console.error('GHL_WEBHOOK_URL not configured')
      // Still return success to user but log error
      return NextResponse.json({
        success: true,
        message: 'Application received (webhook not configured)',
        data: body
      })
    }

    const ghlResponse = await fetch(GHL_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ghlData)
    })

    if (!ghlResponse.ok) {
      const errorText = await ghlResponse.text()
      console.error('GoHighLevel webhook error:', errorText)
      throw new Error(`GoHighLevel webhook failed: ${ghlResponse.status}`)
    }

    const ghlResult = await ghlResponse.json()

    return NextResponse.json({
      success: true,
      message: 'Application submitted successfully',
      data: body,
      ghlResponse: ghlResult
    })

  } catch (error) {
    console.error('Error processing application:', error)
    return NextResponse.json(
      { 
        message: error instanceof Error ? error.message : 'Internal server error',
        success: false
      },
      { status: 500 }
    )
  }
}