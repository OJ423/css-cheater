import { Helmet, HelmetProvider } from 'react-helmet-async';

interface PageMetaProps {
  title: string,
  description: string,
  author: string,
  keywords: string,
  ogImage: string,
  twitterCard: {
    cardType: string,
    title: string,
    description: string,
    imageUrl: string,
  },
}

export default function Meta ({ title, description, author, keywords, ogImage, twitterCard }: PageMetaProps) {
  return (
    <HelmetProvider>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <meta name='title' content={title}/>
        <meta name='description' content={description}/>
        <meta name='author' content={author}/>
        <meta name='keywords' content={keywords}/>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://css-cheater.netlify.app/" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:card" content={twitterCard.cardType} />
        <meta property="twitter:url" content="https://css-cheater.netlify.app/" />
        <meta name="twitter:title" content={twitterCard.title} />
        <meta name="twitter:description" content={twitterCard.description} />
        <meta name="twitter:image" content={twitterCard.imageUrl} />
      </Helmet>
    </HelmetProvider>
  )
}
