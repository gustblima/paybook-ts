import axios from 'axios'
import {
  User,
  Session,
  Credentials,
  Transaction,
  CatalogueSite,
  Attachment
} from './Models'

export default class Paybook {
  private apiKey
  private url = 'https://sync.paybook.com/v1'
  private defaultQueryParams = { params: {} }

  private post (resource, body) {
    console.log(`PAYBOOK - POST -> ${resource}`)
    return axios.post(this.getEndpoint(resource), body, this.defaultQueryParams)
    .then(this.parseResponse)
    .catch(this.parseError)
  }

  private get (resource, queryParams = {}) {
    console.log(`PAYBOOK - GET -> ${resource}`)
    return axios.get(this.getEndpoint(resource), {
      params: {
        ...this.defaultQueryParams,
        ...queryParams
      }
    })
    .then(this.parseResponse)
    .catch(this.parseError)
  }

  private delete (resource, queryParams = {}) {
    console.log(`PAYBOOK - DELETE -> ${resource}`)
    return axios.delete(this.getEndpoint(resource), {
      params: {
        ...this.defaultQueryParams,
        ...queryParams
      }
    })
    .then(this.parseResponse)
    .catch(this.parseError)
  }

  private parseError (err) {
    return err.response.data
  }

  private getEndpoint (resource) {
    return this.url + resource
  }

  private parseResponse (res) {
    if (res.errors) {
      throw res.errors
    }
    return res.data.response
  }

  setApiKey (apiKey: string) {
    this.apiKey = apiKey
    this.defaultQueryParams.params['api_key'] = this.apiKey
  }

  setIsTest (isTest: boolean) {
    this.defaultQueryParams.params['is_test'] = isTest
  }

  createUser (name: string, externalId: number = undefined): Promise<User> {
    return this.post('/users', {
      name,
      id_external: externalId
    })
  }

  getUsers (): Promise<Array<User>> {
    return this.get('/users')
  }

  initSession (userId): Promise<Session> {
    return this.post('/sessions', {
      api_key: this.apiKey,
      id_user: userId
    })
  }

  createCredentials (token, siteId, credentials): Promise<Credentials> {
    return this.post('/credentials', {
      id_site: siteId,
      credentials,
      token
    })
  }

  deleteCredentials (token, credentialsId, userId) {
    return this.delete(`/credentials/${credentialsId}`, {
      token,
      id_user: userId
    })
  }

  getCredentials (token): Promise<Array<Credentials>> {
    return this.get('/credentials', {
      ...this.defaultQueryParams.params,
      token
    })
  }

  getTransactions (token, credentialId, options = {}): Promise<Array<Transaction>> {
    return this.get('/transactions', {
      token,
      id_credential: credentialId,
      ...options
    })
  }

  getAttachment (token, attachmentId): Promise<Attachment> {
    return this.get(`/attachments/${attachmentId}`, {
      token
    })
  }

  getAttachments (token, options = {}): Promise<Array<Attachment>> {
    return axios.get(`/attachments`, {
      params: {
        token,
        ...options
      }
    })
  }

  getAttachmentExtra (token, attachmentId) {
    return this.get(`/attachments/${attachmentId}/extra`, {
      token
    })
  }

  getCatalogueSites (token): Promise<Array<CatalogueSite>> {
    return this.get('/catalogues/sites', { token })
  }

  getCatalogueSiteOrganizations (token) {
    return this.get('/catalogues/site_organizations', { token })
  }

}
