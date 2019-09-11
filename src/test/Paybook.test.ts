import Paybook from '../lib/Paybook'
import {
  User,
  Session,
  Credentials,
  Transaction,
  CatalogueSite
} from 'paybook-ts'
const pb = new Paybook()
pb.setApiKey('INSERT API KEY HERE')
pb.setIsTest(true)
let user: User
let session: Session
let credentials: Credentials
let transactions: Array<Transaction>
let catalogues: Array<CatalogueSite>
test('create user', async () => {
  user = await pb.createUser('Test')
  expect(user.name).toEqual('Test')
})

test('Init session', async () => {
  session = await pb.initSession(user.id_user)
  expect(session.token).toBeDefined()
})

test('Get Site Catalogues', async () => {
  catalogues = await pb.getCatalogueSites(session.token)
  expect(catalogues.length).toBeGreaterThan(0)
})

test('Create Credentials', async () => {
  credentials = await pb.createCredentials(session.token, catalogues[0].id_site, {
    username: 'test',
    password: 'test'
  })

  expect(credentials.id_credential).toBeDefined()
})

test('Check Credentials Status', async () => {
  const status = await pb.checkCredentialsStatusByJobId(session.token, credentials.id_job)
  expect(status).toBeDefined()
})

test('Get Transactions', async () => {
  transactions = await pb.getTransactions(session.token, credentials.id_credential)
  expect(transactions).toBeDefined()
})
