// Tech name → logo, in one place. Keys are matched case-insensitively.
// simple-icons first; devicon only for brands simple-icons doesn't ship (Azure).
import {
  siCloudflare,
  siCloudflarepages,
  siFastapi,
  siGit,
  siJavascript,
  siNuxt,
  siPostgresql,
  siPython,
  siReact,
  siStripe,
  siSupabase,
  siTailwindcss,
  siUnrealengine,
  siVercel,
  siVuedotjs,
} from 'simple-icons';
import azureUrl from 'devicon/icons/azure/azure-plain.svg';

// simple-icons → { path, hex } on a 24×24 grid; devicon → { url, hex } rendered as a mask
const fromSimpleIcons = (icon) => ({ path: icon.path, hex: `#${icon.hex}` });
const azure = { url: azureUrl, hex: '#0078D4' };

const icons = {
  javascript: fromSimpleIcons(siJavascript),
  'vue.js': fromSimpleIcons(siVuedotjs),
  vue: fromSimpleIcons(siVuedotjs),
  'vue 3': fromSimpleIcons(siVuedotjs),
  nuxt: fromSimpleIcons(siNuxt),
  react: fromSimpleIcons(siReact),
  'tailwind css': fromSimpleIcons(siTailwindcss),
  python: fromSimpleIcons(siPython),
  fastapi: fromSimpleIcons(siFastapi),
  supabase: fromSimpleIcons(siSupabase),
  postgresql: fromSimpleIcons(siPostgresql),
  git: fromSimpleIcons(siGit),
  vercel: fromSimpleIcons(siVercel),
  cloudflare: fromSimpleIcons(siCloudflare),
  'cloudflare pages': fromSimpleIcons(siCloudflarepages),
  'unreal engine': fromSimpleIcons(siUnrealengine),
  stripe: fromSimpleIcons(siStripe),
  azure,
  'azure functions': azure,
  'azure storage': azure,
  'azure table / blob storage': azure,
};

export function getStackIcon(name) {
  return icons[name.trim().toLowerCase()] ?? null;
}
