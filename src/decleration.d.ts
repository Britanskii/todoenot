declare module "*.sass"

declare module "*.svg"

import {Theme} from "@mui/material/styles"

declare module "@mui/material/styles" {

    interface PaletteColor {
        backgroundColor?: string
        boxShadow?: string
        shadow?: string
        first?: string
        second?: string
        third?: string
    }

    interface SimplePaletteColorOptions {
        backgroundColor?: string
        boxShadow?: string
        shadow?: string
        first?: string
        second?: string
        third?: string
    }
}
