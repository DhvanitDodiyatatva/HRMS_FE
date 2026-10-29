/**
 * Application-wide constants and enums for HRMS Frontend.
 */

export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'HRMS'

// ─── Attendance Status ────────────────────────────────────────────────────────
export enum AttendanceStatus {
  PRESENT = 'present',
  ABSENT = 'absent',
  MISSED_PUNCH = 'missed_punch',
  PENDING_CLOCK_OUT = 'pending_clock_out',
  ON_LEAVE = 'on_leave',
  HOLIDAY = 'holiday',
  WEEK_OFF = 'week_off',
}

// ─── Leave Status ─────────────────────────────────────────────────────────────
export enum LeaveStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected',
  CANCELLED = 'cancelled',
}

// ─── Resignation Status ───────────────────────────────────────────────────────
export enum ResignationStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected',
}

// ─── Salary Run Status ────────────────────────────────────────────────────────
export enum SalaryRunStatus {
  DRAFT = 'draft',
  PROCESSING = 'processing',
  COMPLETED = 'completed',
  LOCKED = 'locked',
}

// ─── User Roles ───────────────────────────────────────────────────────────────
export enum UserRole {
  SUPER_ADMIN = 'super_admin',
  HR_ADMIN = 'hr_admin',
  EMPLOYEE = 'employee',
  HOD = 'hod',
}

// ─── Export formats ───────────────────────────────────────────────────────────
export enum ExportFormat {
  EXCEL = 'excel',
  PDF = 'pdf',
  CSV = 'csv',
}

// ─── Pagination defaults ──────────────────────────────────────────────────────
export const DEFAULT_PAGE_SIZE = 20
export const PAGE_SIZE_OPTIONS = [10, 20, 50, 100]
