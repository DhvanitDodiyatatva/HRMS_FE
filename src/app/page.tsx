'use client'

import React, { useEffect, useState } from 'react'

interface BackendStatus {
  online: boolean
  message: string
  data?: any
}

export default function HomePage() {
  const [backendStatus, setBackendStatus] = useState<BackendStatus>({
    online: false,
    message: 'Checking connection to http://localhost:8000/api/v1/health/...',
  })

  useEffect(() => {
    const checkBackend = async () => {
      try {
        const res = await fetch('http://localhost:8000/api/v1/health/')
        if (res.ok) {
          const json = await res.json()
          setBackendStatus({
            online: true,
            message: 'Connected to Django Backend API',
            data: json,
          })
        } else {
          setBackendStatus({
            online: false,
            message: `Backend returned HTTP ${res.status}`,
          })
        }
      } catch (err: any) {
        setBackendStatus({
          online: false,
          message: 'Backend is offline or not running on port 8000',
        })
      }
    }

    checkBackend()
  }, [])

  const modules = [
    { title: 'Attendance Management', desc: 'Punch In/Out, Shifts, Policy, Biometric Devices', tag: 'Phase 08' },
    { title: 'Leave Management', desc: 'Types, Rules, Annual Templates, Balances, Approvals', tag: 'Phase 11' },
    { title: 'Employee Onboarding', desc: 'Directory, Add/Edit wizard, Invitations, Profiles', tag: 'Phase 10' },
    { title: 'Salary & Payroll', desc: 'Salary Heads, Rules Engine, Monthly Runs, Slips', tag: 'Phase 13-14' },
    { title: 'Master Data', desc: '12 reference data entities, Department & Designation', tag: 'Phase 09' },
    { title: 'Resignation & Transfers', desc: 'Application, Multi-step approvals, Handover records', tag: 'Phase 12, 16' },
  ]

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      {/* Hero header */}
      <div className="mb-10 text-center">
        <div className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700">
          Enterprise HRMS
        </div>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Human Resource Management System
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600 sm:text-lg">
          Integrated Frontend (Next.js 15) & Backend (Django 5 REST Framework)
        </p>
      </div>

      {/* System Health / Status Banner */}
      <div className="mb-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">System Status</h2>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Frontend status */}
          <div className="flex items-center space-x-4 rounded-xl border border-emerald-100 bg-emerald-50/50 p-4">
            <span className="relative flex h-3.5 w-3.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-emerald-500"></span>
            </span>
            <div>
              <div className="font-semibold text-emerald-950">Frontend (Next.js 15)</div>
              <div className="text-xs text-emerald-700">Online &bull; Running on localhost:3000</div>
            </div>
          </div>

          {/* Backend status */}
          <div
            className={`flex items-center space-x-4 rounded-xl border p-4 ${
              backendStatus.online
                ? 'border-emerald-100 bg-emerald-50/50'
                : 'border-amber-100 bg-amber-50/50'
            }`}
          >
            <span className="relative flex h-3.5 w-3.5">
              {backendStatus.online && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              )}
              <span
                className={`relative inline-flex h-3.5 w-3.5 rounded-full ${
                  backendStatus.online ? 'bg-emerald-500' : 'bg-amber-500'
                }`}
              ></span>
            </span>
            <div>
              <div className={`font-semibold ${backendStatus.online ? 'text-emerald-950' : 'text-amber-950'}`}>
                Backend (Django REST Framework)
              </div>
              <div className={`text-xs ${backendStatus.online ? 'text-emerald-700' : 'text-amber-700'}`}>
                {backendStatus.message}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-6 flex flex-wrap gap-3 border-t border-slate-100 pt-4 text-xs font-medium">
          <a
            href="http://localhost:8000/api/docs/"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-slate-900 px-3 py-2 text-white hover:bg-slate-800"
          >
            Open Swagger API Docs (localhost:8000/api/docs/)
          </a>
          <a
            href="http://localhost:8000/admin/"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-700 hover:bg-slate-50"
          >
            Django Admin (localhost:8000/admin/)
          </a>
          <a
            href="http://localhost:8000/api/v1/health/"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-700 hover:bg-slate-50"
          >
            Test Health Endpoint
          </a>
        </div>
      </div>

      {/* Modules Overview Grid */}
      <h2 className="mb-4 text-lg font-bold text-slate-900">Application Modules</h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {modules.map((m) => (
          <div
            key={m.title}
            className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-xs transition hover:border-blue-300 hover:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-slate-900">{m.title}</h3>
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600">
                  {m.tag}
                </span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">{m.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
