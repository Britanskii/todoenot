declare module "*.sass"

import {Theme} from "@mui/material/styles"

declare module "@mui/material/styles" {

    interface PaletteColor {
        second?: string
        third?: string
    }

    interface SimplePaletteColorOptions {
        second?: string
        third?: string
    }
}
