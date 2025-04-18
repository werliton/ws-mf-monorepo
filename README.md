# ws-mf-monorepo

Monorepo com **Vite + React + TypeScript** utilizando **Module Federation** para compartilhar módulos entre aplicações independentes.

## 📆 Estrutura do Projeto

```bash
ws-mf-monorepo/
├── apps/
│   ├── app_host/         # Aplicação principal (consome módulos remotos)
│   └── app_provider/       # Aplicação remota (expõe módulos via Module Federation)
├── package.json
├── pnpm-workspace.yaml
```

## 🚀 Tecnologias

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Module Federation](https://webpack.js.org/concepts/module-federation/) via [`@module-federation/vite`](https://github.com/module-federation/universe)
- Monorepo gerenciado com workspaces: [pnpm](pnpm-workspace.yaml)

## 💠 Como rodar o projeto

### 1. Instale as dependências

Use o gerenciador de pacotes que preferir:

```bash
pnpm install
```

### 2. Rode os apps

Em dois terminais separados:

```bash
# Terminal 1 - App remoto
cd apps/app_provider
pnpm run dev
```

```bash
# Terminal 2 - App host
cd apps/host
pnpm run dev
```

### 3. Acesse os aplicativos:

- **Host**: http://localhost:5174
- **Remote**: http://localhost:5173

> Obs: as portas podem ser ajustadas no `vite.config.ts` de cada app.

## 📡 Module Federation

### 🔗 Exposição de módulos (remote)

No app `app_provider`, o `vite.config.ts` contém:

```ts
exposes: {
  './button': './src/components/button.tsx',
}
```

### 📅 Consumo de módulos (host)

No app `app_host`, você pode importar diretamente:

```tsx
import { Button } from "app_remote/button";
```

Ou usar lazy loading:

```tsx
const RemoteButton = React.lazy(() => import("app_remote/button"));
```

> Lembre-se de exportar como `default` no componente remoto se for usar `React.lazy`.

---

## 💡 Dicas

- Use `shared` no `vite.config.ts` para garantir singleton de dependências como `react` e `react-dom`.
- Para evitar erros com `lazy` ou `await import()`, prefira usar `export default` no módulo remoto.
- O arquivo `remoteEntry.js` deve estar acessível publicamente via HTTP para o host carregar dinamicamente.

---

## 🥪 Em desenvolvimento

Este projeto está em constante evolução com foco em:

- Melhorar a DX (Developer Experience)
- Testar estratégias de carregamento assíncrono
- Criar exemplos reais de compartilhamento entre apps

---

## 📄 Licença

[MIT](LICENSE)

---

Feito com 💻 por [@werliton](https://github.com/werliton)
