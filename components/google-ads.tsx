"use client"

import Script from "next/script"

import { useConsent } from "@/components/consent"

// Google Ads conversion tag, loaded only after cookie consent, like the Meta
// Pixel. The account ID (AW-…) and the Lead conversion's label come from
// NEXT_PUBLIC_GOOGLE_ADS_ID and NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL; a malformed
// value loads nothing. gtag reads the ad click's gclid from the landing URL,
// which the proxy leaves unchanged.
const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID?.trim()
const VALID_ADS_ID = ADS_ID && /^AW-\d{6,15}$/.test(ADS_ID) ? ADS_ID : null
const LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL?.trim()
const VALID_LABEL = LABEL && /^[\w-]{4,64}$/.test(LABEL) ? LABEL : null

export function GoogleAds() {
  const consent = useConsent()
  if (!VALID_ADS_ID || consent !== "granted") return null

  return (
    <>
      <Script
        id="google-ads-src"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${VALID_ADS_ID}`}
      />
      <Script id="google-ads" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('consent','default',{ad_storage:'granted',ad_user_data:'granted',ad_personalization:'granted',analytics_storage:'denied'});gtag('js',new Date());gtag('config','${VALID_ADS_ID}');`}
      </Script>
    </>
  )
}

/**
 * Reports the Lead conversion after a successful enquiry. The lead ID is the
 * transaction ID, so Google counts one conversion per lead even if the event
 * fires twice. Does nothing without consent or without a conversion label.
 */
export function trackGoogleAdsLead(leadId: string) {
  if (!VALID_ADS_ID || !VALID_LABEL || !window.gtag || !leadId) return
  window.gtag("event", "conversion", {
    send_to: `${VALID_ADS_ID}/${VALID_LABEL}`,
    transaction_id: leadId,
  })
}
