import React from 'react';
import Helmet from 'react-helmet';

const Product = ({match,data}) => {
  var product= data.find(p => p.id === Number(match.params.productId));
  var productData;
  var canonicalUrl="http://localhost:8080/products/" + product.id;
  var canonicalUrlLink='<link rel="canonical" href=' + canonicalUrl + '>';
//  var canonicalUrl3='<link rel="canonical" href="http://localhost:8080/products/"' + product.id + '>'; // did not work, figure out later 
  if(product)
    productData = <div>
                    <p dangerouslySetInnerHTML={{__html: canonicalUrlLink}}/>
                    <h3> {product.name} </h3>
                    <p>{product.description}</p>
                    <hr/>
                    <h4>{product.status}</h4>  
                  </div>;
  else
    productData = <h2> Sorry. Product doesnt exist </h2>;
  return (
    <div style={{ display: 'flex' }}>
        <Helmet>
            {/* h1 element */}
            <h1>Product</h1>
            {/* title tag */}
            <title>Product</title>
            {/* link tag */}
            <link rel="canonical" href={canonicalUrl} />
            {/* multiple meta tags */}
            <meta name="robots" content="index, follow"/>
            <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no"/>
            <meta name="description" content="Welcome to SEO enabled product page on this site."/>
            {/* base element */}
            <base target="_blank" href="http://mysite.com/" />
            {/* SEO Schema object for each page - showing script tag with an example to populating data element */}
            <script type="application/ld+json">{`
                    "@context" : "http://schema.org",
                    "@type" : "${product.id}", 
                    "name" : "Sears Parts Direct",
                    "url" : "https://www.searspartsdirect.com/",
                    "logo": "https://www.searspartsdirect.com/etc/designs/searspartsdirect/clientlib_base/img/sears_partsDirect_logo.png",
                    "sameAs" : [ "https://www.facebook.com/SearsPartsDirect/",
                    "https://twitter.com/PartsDirect",
                    "https://plus.google.com/115376339334052640937"],
                    "contactPoint" : [{ 
                        "@type" : "ContactPoint",
                        "url" : "https://www.searspartsdirect.com/partsdirect/contactus.pd",
                        "telephone" : "+1-888-873-3829",
                        "contactType" : "customer service"
                    }]
                `}
            </script>
            {/* noscript elements */}
            <noscript>{`
                <link rel="stylesheet" type="text/css" href="foo.css" />
            `}</noscript>

            {/* inline style elements */}
            <style type="text/css">{`
                body {
                    background-color: blue;
                }

                p {
                    font-size: 12px;
                }
            `}</style>
          </Helmet>
      <div style={{
         padding: '0 10% 0 10%',
         width: '80%',
         margin: 'auto',
         background: '#ffffff' }}> 
    
         {productData} 
      </div>
    </div>
  )    
}

export default Product;