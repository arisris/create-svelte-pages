import { browser } from "$app/environment";
import { createRawSnippet, onMount } from "svelte";

const dark = "dark", light = "light", key = "svelte:theme";

export const themeScriptSnippet = createRawSnippet(() => ({
  render: () => `<script>!(function(){t=localStorage.getItem('${key}')||(window.matchMedia('(prefers-color-scheme: ${dark})').matches?'${dark}':'${light}');document.documentElement.className=t,document.documentElement.dataset.theme=t})();</script>`
}))

type ThemeMode = typeof dark | typeof light;

type ThemeOptions = {
  onChange?: (value: ThemeMode) => void
}

export const useTheme = ({ onChange }: ThemeOptions = {}) => {
  let theme = $state<ThemeMode | null>(null);
  const toggle = () => (theme = theme === light ? dark : light)
  const set = (value: ThemeMode) => (theme = value)
  onMount(() => set(localStorage.getItem(key) as ThemeMode | null || light) && void 0)
  $effect(() => {
    if (theme !== null) {
      onChange?.(theme)
      if (browser) {
        localStorage.setItem(key, theme)
        document.documentElement.className = theme;
        document.documentElement.dataset.theme = theme
      }
    }
  })
  return {
    get value() {
      return theme
    },
    set,
    toggle
  }
}