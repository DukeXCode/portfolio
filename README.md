# Portfolio

My personal portfolio site.

## Stack

- [Astro](https://astro.build/) (static)
- [Tailwind CSS](https://tailwindcss.com/)
- TypeScript
- i18n: English + German (`/en`, `/de`)

## Scripts

```sh
pnpm dev      # start dev server
pnpm build    # build to ./dist
pnpm preview  # preview the production build
```

## Structure

```
src/
  pages/        # routes (localized under [lang])
  layouts/
  components/
  i18n/         # en.json, de.json
  assets/
```
