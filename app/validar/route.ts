/**
 * app/api/validar/route.ts — Site principal
 * API route server-side que busca no Supabase sem CORS
 */

import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get('code')
  if (!code) return NextResponse.json(null, { status: 400 })

  const SUPABASE_URL  = process.env.NEXT_PUBLIC_PORTAL_SUPABASE_URL
  const SUPABASE_ANON = process.env.NEXT_PUBLIC_PORTAL_SUPABASE_ANON_KEY

  if (!SUPABASE_URL || !SUPABASE_ANON) {
    return NextResponse.json(null, { status: 500 })
  }

  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/certificates?code=eq.${encodeURIComponent(code)}&select=student_name,course_name,hours,issued_at,code`,
    {
      headers: {
        apikey: SUPABASE_ANON,
        Authorization: `Bearer ${SUPABASE_ANON}`,
      },
      cache: 'no-store',
    }
  )

  if (!res.ok) return NextResponse.json(null, { status: 404 })
  const data = await res.json()
  const cert = data?.[0] ?? null
  if (!cert) return NextResponse.json(null, { status: 404 })
  return NextResponse.json(cert)
}
