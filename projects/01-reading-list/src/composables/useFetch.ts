import { FetchError } from '@/exceptions/FetchError'

export async function useFetch<T>(url: string) {
  const response = await fetch(url)

  if (!response.ok) {
    throw new FetchError(response.statusText, response.status)
  }

  const data = (await response.json()) as T

  return data
}
