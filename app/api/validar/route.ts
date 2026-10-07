import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  try {
    const code = req.nextUrl.searchParams.get('code')
    if (!code) {
      return NextResponse.json({ error: 'Código não informado.' }, { status: 400 })
    }

    const SUPABASE_URL = process.env.NEXT_PUBLIC_PORTAL_SUPABASE_URL
    const SUPABASE_ANON = process.env.NEXT_PUBLIC_PORTAL_SUPABASE_ANON_KEY

    if (!SUPABASE_URL || !SUPABASE_ANON) {
      console.error('Variáveis ausentes:', { SUPABASE_URL: !!SUPABASE_URL, SUPABASE_ANON: !!SUPABASE_ANON })
      return NextResponse.json({ error: 'Configuração ausente no servidor.' }, { status: 500 })
    }

    const url = `${SUPABASE_URL}/rest/v1/certificates?code=eq.${encodeURIComponent(code.toUpperCase())}&select=student_name,course_name,hours,issued_at,code`

    const res = await fetch(url, {
      headers: {
        apikey: SUPABASE_ANON,
        Authorization: `Bearer ${SUPABASE_ANON}`,
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    })

    if (!res.ok) {
      const text = await res.text()
      console.error('Supabase error:', res.status, text)
      return NextResponse.json({ error: 'Erro ao consultar banco.' }, { status: 502 })
    }

    const data = await res.json()
    const cert = data?.[0] ?? null

    if (!cert) {
      return NextResponse.json(null, { status: 404 })
    }

    return NextResponse.json(cert)
  } catch (err) {
    console.error('Erro interno:', err)
    return NextResponse.json({ error: 'Erro interno.' }, { status: 500 })
  }
}
