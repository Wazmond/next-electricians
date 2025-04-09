import { GlobalAfterChangeHook } from 'payload'

export const afterChangeHook: GlobalAfterChangeHook = async ({ req, doc }) => {
  console.log(doc)
}
