import ogImage from '/css-cheater-og-image.jpg'



export default function PageMeta(pathName: string) {
  switch (pathName) {
    case '/':
      return {
        title: 'CSS Cheater - Free CSS, HTML, Tailwind & React Code for Web Designers',
        description: 'A React project detailing some of my favourite web elements that I have found or created. CSS, HTML, React and Tailwind.',
        author: 'Oliver Smith',
        keywords: 'Web design elements, CSS, HTML, Tailwind, React, Website templates, Free CSS and HTML',
        ogImage: ogImage, // Path to your image
        twitterCard: {
          cardType: 'summary_large_image',
          title: 'CSS Cheater - Free CSS, HTML, Tailwind & React Code for Web Designers',
          description: 'A React project detailing some of my favourite web elements that I have found or created. CSS, HTML, React and Tailwind.',
          imageUrl: ogImage,
        },
      };
    case '/buttons':
      return {
        title: 'Free CSS and Tailwind Buttons for Web Designers',
        description: 'Here are some CSS and Tailwind buttons that I like and are available for you to copy and use.',
        author: 'Oliver Smith',
        keywords: 'CSS Buttons, Tailwind Buttons, React Buttons, HTML Buttons',
        ogImage: ogImage,
        twitterCard: {
          cardType: 'summary_large_image',
          title: 'Free CSS and Tailwind Buttons for Web Designers',
          description: 'Here are some CSS and Tailwind buttons that I like and are available for you to copy and use.',
          imageUrl: ogImage,
        },
      };
      case '/sections':
        return {
          title: 'Free Hero, Column and Footer Sections for Web Designers | CSS Cheater',
          description: 'Here are some CSS and Tailwind sections that I like and are available for you to copy and use.',
          author: 'Oliver Smith',
          keywords: 'CSS Hero, Tailwind Hero, React Hero, HTML Hero, Footers, Column Sections',
          ogImage: ogImage,
          twitterCard: {
            cardType: 'summary_large_image',
            title: 'Free Hero, Column and Footer Sections for Web Designers | CSS Cheater',
            description: 'Here are some CSS and Tailwind sections that I like and are available for you to copy and use.',
            imageUrl: ogImage,
          },
        };
        case '/pricing-tables':
          return {
            title: 'CSS and Tailwind Pricing Tables',
            description: 'Two elegant pricing tables for you to use and tweak as your own.',
            author: 'Oliver Smith',
            keywords: 'CSS Pricing Table, Tailwind Pricing Table, React Pricing Table',
            ogImage: ogImage,
            twitterCard: {
              cardType: 'summary_large_image',
              title: 'CSS and Tailwind Pricing Tables ',
              description: 'Two elegant pricing tables for you to use and tweak as your own.',
              imageUrl: ogImage,
            },
          };
    default:
      return {
        title: 'CSS Cheater - Free CSS, HTML, Tailwind & React Code for Web Designers',
        description: 'A React project detailing some of my favourite web elements that I have found or created. CSS, HTML, React and Tailwind.',
        author: 'Oliver Smith',
        keywords: 'Web design elements, CSS, HTML, Tailwind, React, Website templates, Free CSS and HTML',
        ogImage: ogImage, // Path to your image
        twitterCard: {
          cardType: 'summary_large_image',
          title: 'CSS Cheater - Free CSS, HTML, Tailwind & React Code for Web Designers',
          description: 'A React project detailing some of my favourite web elements that I have found or created. CSS, HTML, React and Tailwind.',
          imageUrl: ogImage,
        }
      }
  }
}