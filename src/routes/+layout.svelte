<script lang="ts">
  import "$lib/app.css";
  import { base } from "$app/paths";
  import { themeScriptSnippet } from "$lib/theme.svelte";
  let { children } = $props();
</script>

<svelte:head>
  <link rel="shortcut icon" type="image/x-icon" href="{base}/favicon.ico" />
  <link
    rel="apple-touch-icon"
    sizes="180x180"
    href="{base}/_app/icon/apple-touch-icon.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="32x32"
    href="{base}/_app/icon/favicon-32x32.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="16x16"
    href="{base}/_app/icon/favicon-16x16.png"
  />
  <link rel="manifest" href="{base}/_app/icon/site.webmanifest" />
  {@render themeScriptSnippet()}
</svelte:head>
{@render children?.()}