export interface User {
  id_user: string
  id_external: string
  name: string
  dt_create: Date,
  dt_modify: Date
}

export interface Session {
  token: string
  key: string
  iv: string
}

export interface Credentials {
  id_credential: string
  id_job_uuid: string
  id_job: string
  is_new: number
  username: string
  ws: string
  status: string
  twofa: string
}

export interface ResponseCodes {
  code: number
}

export interface CredentialStatus {
  rid: string
  code: number
  errors: any
  status: boolean
  message: string
  response: Array<ResponseCodes>
}

export interface CatalogueSite {
  id_site: string
  id_site_organization: string
  id_site_organization_type: string
  id_site_type: string
  is_business: number
  is_personal: number
  version: number
  name: string
  credentials: Array<Credentials>
  endpoint: string
}

export interface Transaction {
  id_transaction: string
  id_account: string
  id_account_type: string
  id_credential: string
  id_currency: string
  id_disable_type: string
  id_external: string
  id_site: string
  id_site_organization: string
  id_site_organization_type: string
  id_user: string
  is_account_disable: number
  is_deleted: number
  is_disable: number
  is_pending: number
  description: string
  amount: number
  currency: string
  attachments: Array<Attachment>
  extra: any
  reference: any
  keywords: any
  dt_transaction: Date
  dt_refresh: Date
  dt_disable: Date
  dt_deleted: Date
}

export interface Attachment {
  id_attachment: string
  id_attachment_type: string
  is_valid: number
  file: string
  mime: string
  url: string
}
