/**
 * app/validar/page.tsx  — NOVO ARQUIVO no SITE PRINCIPAL (site-informatica)
 * 
 * Página pública de validação de certificados.
 * Busca diretamente no Supabase do portal via anon key.
 */

'use client'

import { useState, useTransition } from 'react'
import { Award, Search, CheckCircle, XCircle, Loader2 } from 'lucide-react'

interface CertResult {
  student_name: string
  course_name: string
  hours: number
  issued_at: string
  code: string
}

async function fetchCertificate(code: string): Promise<CertResult | null> {
  // Busca no Supabase do portal do aluno via REST API pública
  const SUPABASE_URL = process.env.NEXT_PUBLIC_PORTAL_SUPABASE_URL!
  const SUPABASE_ANON = process.env.NEXT_PUBLIC_PORTAL_SUPABASE_ANON_KEY!

  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/certificates?code=eq.${encodeURIComponent(code.toUpperCase())}&select=student_name,course_name,hours,issued_at,code`,
    {
      headers: {
        apikey: SUPABASE_ANON,
        Authorization: `Bearer ${SUPABASE_ANON}`,
      },
      cache: 'no-store',
    }
  )

  if (!res.ok) return null
  const data = await res.json()
  return data?.[0] ?? null
}

export default function ValidarPage() {
  const [code, setCode]     = useState('')
  const [result, setResult] = useState<CertResult | null | 'not_found'>(null)
  const [isPending, start]  = useTransition()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!code.trim()) return
    start(async () => {
      const cert = await fetchCertificate(code.trim())
      setResult(cert ?? 'not_found')
    })
  }

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-16">
      <div className="w-full max-w-lg">

        {/* Cabeçalho */}
        <div className="text-center mb-8">
          <div className="inline-flex p-3 bg-blue-50 rounded-2xl mb-4">
            <Award className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">
            Validação de Certificado
          </h1>
          <p className="text-gray-500 mt-2">
            Digite o código impresso no certificado para confirmar sua autenticidade.
          </p>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Código do certificado
            </label>
            <input
              type="text"
              value={code}
              onChange={(e) => { setCode(e.target.value.toUpperCase()); setResult(null) }}
              placeholder="Ex: ST-2026-00001"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm font-mono tracking-widest focus:outline-none focus:ring-2 focus:ring-blue-500 uppercase"
              autoComplete="off"
              spellCheck={false}
            />
          </div>

          <button
            type="submit"
            disabled={isPending || !code.trim()}
            className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl text-sm font-semibold hover:bg-blue-700 disabled:opacity-50 transition-colors"
          >
            {isPending ? (
              <><Loader2 className="w-4 h-4 animate-spin" /> Verificando...</>
            ) : (
              <><Search className="w-4 h-4" /> Verificar certificado</>
            )}
          </button>
        </form>

        {/* Resultado — válido */}
        {result && result !== 'not_found' && (
          <div className="mt-6 bg-white rounded-2xl border-2 border-green-200 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
              <p className="font-semibold text-green-800">Certificado válido e autêntico</p>
            </div>
            <dl className="space-y-3 text-sm">
              <div>
                <dt className="text-gray-500">Aluno</dt>
                <dd className="font-semibold text-gray-900 text-base">{result.student_name}</dd>
              </div>
              <div>
                <dt className="text-gray-500">Curso</dt>
                <dd className="font-medium text-gray-800">{result.course_name}</dd>
              </div>
              <div className="flex gap-8">
                <div>
                  <dt className="text-gray-500">Carga horária</dt>
                  <dd className="font-medium text-gray-800">{result.hours} horas</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Data de emissão</dt>
                  <dd className="font-medium text-gray-800">
                    {new Date(result.issued_at).toLocaleDateString('pt-BR', {
                      day: '2-digit', month: 'long', year: 'numeric',
                    })}
                  </dd>
                </div>
              </div>
              <div className="pt-2 border-t border-gray-100">
                <dt className="text-gray-400 text-xs">Código</dt>
                <dd className="font-mono text-xs text-gray-500">{result.code}</dd>
              </div>
            </dl>
            <p className="text-xs text-gray-400 mt-4 border-t border-gray-100 pt-3">
              Emitido por <strong>Smooth Technology — Bernardo Ribeiro</strong> · Gravataí/RS
              <br />Este é um certificado de curso livre, para fins de conhecimento e aperfeiçoamento.
            </p>
          </div>
        )}

        {/* Resultado — não encontrado */}
        {result === 'not_found' && (
          <div className="mt-6 bg-white rounded-2xl border-2 border-red-100 shadow-sm p-6">
            <div className="flex items-center gap-3">
              <XCircle className="w-6 h-6 text-red-400 shrink-0" />
              <div>
                <p className="font-semibold text-red-700">Certificado não encontrado</p>
                <p className="text-sm text-gray-500 mt-0.5">
                  Verifique se o código foi digitado corretamente e tente novamente.
                </p>
              </div>
            </div>
          </div>
        )}

        <p className="text-center text-xs text-gray-400 mt-8">
          Smooth Technology · smoothtechnology.com.br
        </p>
      </div>
    </main>
  )
}
