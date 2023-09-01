import type { Library } from '..'

export function removeBook(library: Library[], bookToRemove: Library) {
  return library.filter(({ book }) => book.ISBN !== bookToRemove.book.ISBN) ?? library
}
