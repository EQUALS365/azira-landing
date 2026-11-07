import { SlimHeader } from "@/components/blocks/slim-header"
import { CookieBanner } from "@/components/consent"
import { GoogleAds } from "@/components/google-ads"
import { MetaPixel } from "@/components/meta-pixel"
import { MotionProvider } from "@/components/motion"
import { site } from "@/content"

// The header sits in the layout so the error fallback keeps the phone number
export default function ConcernLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <MotionProvider>
      <SlimHeader logo={site.brand.logo} phone={site.clinic.phone} />
      {children}
      <CookieBanner />
      <MetaPixel />
      <GoogleAds />
    </MotionProvider>
  )
}
