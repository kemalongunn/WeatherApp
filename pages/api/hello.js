// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { citylist } from "../../public/CityList"

export default function handler(req, res) {
  res.status(200).json({ citylist })
}
