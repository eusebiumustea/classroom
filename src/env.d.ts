interface ImportMetaEnv {
  readonly VITE_SECRET_KEY: string;
  readonly VITE_HOST: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
