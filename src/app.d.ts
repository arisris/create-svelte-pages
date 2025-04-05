/// <reference types="../.wrangler/types/runtime.d.ts" />

// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals { }
		// interface PageData { }
		// interface PageState {}
		interface Platform {
			env: Bindings;
			caches: CacheStorage;
			context: ExecutionContext;
			cf: CfProperties
		}
	}
}