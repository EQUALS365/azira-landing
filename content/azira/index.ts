import { brand } from "./brand"
import { clinic } from "./clinic"
import { ipl } from "./ipl"
import { laserHairRemoval } from "./laser-hair-removal"
import { prp } from "./prp"
import { skinLaxity } from "./skin-laxity"

/** Everything for Azira Aesthetics. Add a concern by adding it to the list. */
export const azira = {
  brand,
  clinic,
  concerns: [skinLaxity, ipl, prp, laserHairRemoval],
}
