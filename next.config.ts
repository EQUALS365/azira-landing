import type { NextConfig } from "next"

// The root redirect, treatment subdomains and ?h= headline variants are
// handled in proxy.ts
const nextConfig: NextConfig = {
  experimental: {
    agentUpgrade: "security",
  },
}

export default nextConfig
