import { dev } from "$app/environment";
import { error, type Handle, type HandleServerError } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
  return resolve(event)
}

export const handleError: HandleServerError = ({ error: e, status }) => {
  if (status === 404) return error(status, { message: "Not found" })
  if (dev) {
    console.error(e)
  }
  return error(status, { message: (e as Error).message })
}