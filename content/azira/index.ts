import { brand } from "./brand"
import { clinic } from "./clinic"
import { laserHairRemoval } from "./laser-hair-removal"
import { morpheus8 } from "./morpheus8"
import { prp } from "./prp"
import { rfMicroneedling } from "./rf-microneedling"
import { skinLaxity } from "./skin-laxity"

/** Everything for Azira Aesthetics. Add a concern by adding it to the list. */
export const azira = {
  brand,
  clinic,
  concerns: [skinLaxity, morpheus8, rfMicroneedling, prp, laserHairRemoval],
}
