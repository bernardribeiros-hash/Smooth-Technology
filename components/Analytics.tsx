import Script from "next/script";
import { SITE } from "@/lib/constants";

/**
 * Google Analytics 4 + Meta Pixel.
 * Troque SITE.googleAnalyticsId e SITE.metaPixelId em lib/constants.ts pelos seus IDs reais.
 * Os scripts só carregam se os IDs não forem os placeholders padrão.
 */
export function Analytics() {
  const gaEnabled = SITE.googleAnalyticsId && !SITE.googleAnalyticsId.includes("XXXX");
  const pixelEnabled = SITE.metaPixelId && !/^0+$/.test(SITE.metaPixelId);

  return (
    <>
      {gaEnabled && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${SITE.googleAnalyticsId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${SITE.googleAnalyticsId}');
            `}
          </Script>
        </>
      )}

      {pixelEnabled && (
        <Script id="meta-pixel-init" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${SITE.metaPixelId}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}
    </>
  );
}
