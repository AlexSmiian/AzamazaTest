import { defaultLang,languagesMap as defaultLanguagesMap } from '../i18n';

export default function getAlternates(
  { lang,
    pathname,
    languagesMap = defaultLanguagesMap
  }: {
    lang: string,
    pathname: string,
    languagesMap?: { code: string; name: string }[];
}) {
  if (process.env.NEXT_PUBLIC_PRODUCT_ENV === 'stage') return;
  const normalizedPathname = pathname === '/' ? '' : pathname
  const BASE_URL = 'https://geofinder.mobi'

  const languages = languagesMap.reduce((acc, feature) => {
    const langPrefix = feature.code === defaultLang ? '' : `/${feature.code}`
    acc[feature.code] = `${BASE_URL}${langPrefix}${normalizedPathname}`
    return acc
  }, {} as Record<string, string>)

  languages['x-default'] = `${BASE_URL}${normalizedPathname}`

  return {
    alternates: {
      canonical: `${BASE_URL}${lang === defaultLang ? '' : `/${lang}`}${normalizedPathname}`,
      languages,
    },
  }
}
