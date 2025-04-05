import type { SvelteHTMLElements } from "svelte/elements";

export type PromiseLikeReturnType<T> = T extends PromiseLike<infer U> ? U : T
export type ReadableStreamInputType<T> = T extends ReadableStream<infer U> ? U : T
export type Assign<T, U> = Omit<T, keyof U> & U
export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>
export type Accessor<T> = () => T
export type AccessorSetter<T> = (value: T) => T
export type HTMLTag = keyof SvelteHTMLElements
export type HTMLProps<T extends HTMLTag> = SvelteHTMLElements[T]
export type NotNullOrUndefined<T> = T extends null | undefined ? never : T