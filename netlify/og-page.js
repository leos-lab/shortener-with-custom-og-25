// Return a local image path if no original is provided
const imageURL = function(data) {
  if(data.original_og) {
    return `${data.original_og}`;
  } else {
    return `${data.domain}/image${data.path}.png`;
  }
};

export default (data) => {
 return `
 <!DOCTYPE html>
 <html lang="en">
 <head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Find that at...</title>
   <meta name="twitter:card" content="summary_large_image"/>
   <meta name="twitter:site" content="${data.site}"/>
   <meta name="twitter:title" content="${data.title}"/>
   <meta name="twitter:description" content="${data.description}"/>
   <meta name="twitter:creator" content="${data.site}"/>
   <meta name="twitter:image" content="${imageURL(data)}"/>
   <meta name="og:image" content="${imageURL(data)}"/>
   <meta name="og:image:secure_url" content="$${imageURL(data)}"/>
   <meta name="image" property="og:image" content="${imageURL(data)}"/>
   <meta property="og:site_name" content="${data.site}"/>
   <meta property="og:title" content="${data.title}"/>
   <meta property="og:description" content="${data.description}"/>
 </head>
 <body>
  A little OG image help from <a href="https://hawksworx.com">Phil Hawksworth</a>
 </body>
 </html>
 `;
}
