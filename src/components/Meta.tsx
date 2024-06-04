import { Helmet } from 'react-helmet';

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
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description}/>
      <meta name='author' content={author}/>
      <meta name='keywords' content={keywords}/>
      <meta name='ogImage' content={ogImage}/>
      <meta name="twitter:card" content={twitterCard.cardType} />
      <meta name="twitter:title" content={twitterCard.title} />
      <meta name="twitter:description" content={twitterCard.description} />
      <meta name="twitter:image" content={twitterCard.imageUrl} />
    </Helmet>
  )
}
