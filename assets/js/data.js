/* =========================================================================
   Content data — curated from Kyle's GitHub (github.com/Kilo27) + resume.
   Edit here to update the site; markup is generated in main.js.
   ========================================================================= */

/* Inline SVG icons (stroke uses currentColor) */
const ICONS = {
  hand: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11V5.5a1.5 1.5 0 0 1 3 0V10m0-1V4.5a1.5 1.5 0 0 1 3 0V10m0-.5a1.5 1.5 0 0 1 3 0V15a6 6 0 0 1-6 6h-1.6a5 5 0 0 1-3.9-1.9l-3-3.7a1.6 1.6 0 0 1 2.4-2.1L9 15V6.5a1.5 1.5 0 0 1 3 0"/></svg>',
  sword: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 3H20v5.5L9.5 19 5 20l1-4.5L16.5 5"/><path d="m13 6 5 5M5 20l3.5-3.5M14 17l3 3 2-2-3-3"/></svg>',
  planet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="13" r="6"/><path d="M4.5 17c-1.6 1.7-2.5 3-2 3.6.9 1 5-1 9.3-4.6S19 8.3 18.4 7.5c-.5-.6-2 .2-4 1.6"/><circle cx="19" cy="5" r="1.2"/></svg>',
  cpu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M10 11h4v2h-4z" fill="currentColor" stroke="none"/><path d="M9 3v2M12 3v2M15 3v2M9 19v2M12 19v2M15 19v2M3 9h2M3 12h2M3 15h2M19 9h2M19 12h2M19 15h2"/></svg>',
  chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4v16h16"/><path d="M8 15l3-4 3 2 5-7"/><circle cx="19" cy="6" r="1.3" fill="currentColor" stroke="none"/></svg>',
  chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16v11H9l-4 4v-4H4z"/><path d="M8 10h8M8 13h5"/></svg>',
  rocket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c3 1.5 5 4.5 5 9l-2.5 2.5h-5L7 11c0-4.5 2-7.5 5-8Z"/><circle cx="12" cy="9" r="1.6"/><path d="M9.5 14.5 7 17m7.5-2.5L17 17M10 19c-.5 1.5-2 2.5-2 2.5S8 20 8.5 18.5"/></svg>',
  github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.4-1.27.73-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.28 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg>',
  /* ILCA 6 — solid silhouette mark (outer boundary of the traced diagram, filled), legible at small icon sizes */
  sailMark: '<svg viewBox="0 0 894 894" fill="currentColor" stroke="none"><path d="M430.2 45.7 L428.2 51.5 L424.1 65 L419 82 L416 91.5 L413 101.5 L409.4 113.7 L405.9 125.7 L401 143.5 L398.7 152 L395.5 163.5 L393.3 172 L392 176.5 L389.7 184.5 L385 202.5 L379.4 224.5 L376.1 237 L374 245 L371.9 253.5 L369 265.5 L365.9 278 L363.4 288.5 L357.1 316 L353.4 332.5 L351 344 L347 363 L342.9 382.5 L341.1 391.5 L338.6 404.5 L335.9 418.5 L334 428.5 L332.6 436 L330 451.5 L325.1 482 L321.6 507 L318 533.5 L316.1 550 L312.5 599.3 L311 617 L307 686.8 L305.6 707.7 L230 705 L204.5 703.9 L189.3 702.5 L171.5 701.8 L156.3 704.7 L160.5 713.5 L181.6 731.5 L210.5 753.2 L386.8 763.1 L407.6 764.2 L409 768.4 L415.4 791.3 L425.2 823.5 L442.5 841.5 L476 842.5 L475.3 836.5 L473 828 L470.4 818 L468.3 807.7 L466.9 803.4 L466 800.8 L465 795.6 L462.6 786.5 L459.1 773 L457 764.9 L512.3 763.6 L676.5 757.5 L693.3 756.9 L695 763.1 L698.1 778 L703.1 801.5 L711.3 815.2 L731 819 L737.8 814.1 L736 805.5 L734 795.5 L732 785 L728.9 768.5 L726.1 752.5 L721 739.5 L717.4 728 L716.5 720.5 L696 720 L675.2 717.5 L672.8 713.7 L672.4 710.1 L672.9 696 L671 677.5 L669.4 664.1 L666.9 654.9 L668.4 652.6 L673 645.9 L668.5 635.6 L664 629.2 L659.5 611.4 L652.4 584.5 L648.3 570 L645.4 560 L643.1 552.5 L641.1 546.5 L629 508.5 L618.7 477.5 L601.1 426.5 L598.2 418.5 L595 409.5 L587 388 L579.9 369.6 L578 364.3 L577.1 361.2 L570 344.2 L564.5 329.5 L561 320.5 L556.9 310.8 L556 308 L554.1 302.7 L544.5 279.5 L539 266.5 L535.5 258 L531.5 248.5 L526 235.5 L521.5 225 L519.2 220 L512.5 204.5 L508 194.5 L502.4 182.4 L499 174.6 L489.4 153.4 L487 147.3 L485.5 145 L484 142.5 L477 126.6 L470 111.5 L441.8 56.3 L441.5 50.7 L440.2 45.1 L430.2 45.7 Z"/></svg>',
  /* ILCA 6 dinghy — traced from class rigging diagram */
  sail: '<svg viewBox="0 0 447 447" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0.000000,447.000000) scale(0.100000,-0.100000)" fill="currentColor" stroke="none"><path d="M2157 4243 c-20 -34 -169 -555 -266 -936 -150 -583 -276 -1249 -311 -1647 -6 -69 -15 -168 -20 -220 -9 -92 -26 -487 -22 -503 3 -9 -254 -1 -478 14 -139 10 -258 11 -272 3 -16 -10 -8 -44 10 -44 9 -1 57 -39 105 -85 48 -47 98 -91 110 -99 43 -28 323 -51 764 -62 l262 -7 20 -61 c10 -34 29 -95 41 -136 46 -155 51 -169 64 -180 15 -12 216 -27 216 -16 0 10 -88 360 -96 379 -6 16 18 17 287 17 305 0 705 14 825 29 38 5 70 7 72 6 2 -2 16 -60 33 -131 16 -70 35 -137 42 -148 16 -23 147 -51 147 -31 -1 40 -71 370 -83 388 -7 12 -17 39 -21 60 l-7 37 -99 0 c-82 0 -100 3 -100 15 0 8 -4 15 -9 15 -5 0 -7 17 -6 37 2 21 -1 73 -6 118 -6 44 -11 93 -11 108 -1 15 -4 30 -8 32 -3 2 -179 9 -391 15 -211 5 -444 12 -516 15 -99 3 -133 1 -133 -8 -1 -7 0 -86 0 -176 l1 -163 -90 3 c-72 3 -93 8 -103 22 -12 16 -36 18 -251 19 l-237 1 0 22 c0 38 12 85 22 85 5 0 16 7 25 15 8 8 19 12 25 9 6 -4 8 -3 5 3 -4 6 13 27 36 48 114 101 128 117 123 132 -6 13 20 15 226 9 266 -7 997 -25 1167 -29 l114 -2 2 25 c1 14 -7 39 -19 55 -12 17 -23 37 -24 45 -14 58 -120 416 -167 560 -170 524 -425 1183 -641 1655 -12 28 -59 129 -103 226 -98 217 -191 403 -202 407 -5 2 -6 17 -2 33 5 26 3 29 -20 29 -14 0 -28 -3 -30 -7z m33 -31 c0 -11 -20 -81 -44 -158 -47 -147 -138 -480 -158 -576 -9 -45 -15 -55 -25 -46 -15 12 -18 -3 -4 -17 6 -6 -11 -91 -43 -220 -29 -116 -70 -289 -91 -385 -22 -96 -41 -178 -44 -182 -4 -4 -12 -4 -18 0 -9 6 -9 19 -3 47 6 22 28 121 50 220 40 176 102 429 155 630 39 150 181 640 200 693 7 19 25 14 25 -6z m15 -63 c-4 -6 2 -17 14 -25 29 -21 44 -51 25 -51 -7 0 -14 9 -14 19 0 10 -6 18 -14 18 -8 0 -18 5 -21 10 -7 12 0 40 10 40 4 0 3 -5 0 -11z m15 -71 c0 -5 -9 -4 -20 2 -11 6 -18 15 -14 21 6 11 34 -7 34 -23z m-2 -19 c49 -10 50 -11 82 -82 36 -79 110 -236 158 -335 30 -63 30 -63 8 -71 -11 -5 -79 -28 -149 -52 -123 -43 -127 -45 -122 -69 4 -14 8 -26 10 -28 2 -2 71 21 153 50 l150 55 25 -56 c78 -171 300 -711 295 -716 -2 -1 -79 -30 -173 -64 l-169 -62 -18 23 c-10 13 -16 29 -13 36 3 7 1 11 -4 8 -7 -5 -58 69 -178 258 l-32 51 24 3 c37 5 41 32 5 32 -17 0 -30 5 -30 10 0 6 -8 10 -18 10 -20 0 -62 50 -62 74 0 8 -4 16 -9 18 -15 5 -111 160 -105 169 3 5 9 7 13 5 4 -3 7 7 8 22 1 15 -1 20 -4 12 -15 -40 -25 -40 -54 0 -29 39 -29 40 -15 97 40 167 166 613 172 613 2 0 25 -5 52 -11z m282 -508 c0 -5 -12 -14 -27 -19 -170 -63 -254 -89 -258 -81 -4 5 2 12 12 16 78 30 250 91 261 92 6 1 12 -3 12 -8z m-496 -203 c11 -18 43 -70 72 -115 l53 -82 -16 -58 c-29 -106 -29 -103 3 -103 45 0 74 11 74 27 0 11 -7 13 -32 8 -26 -6 -30 -5 -25 9 4 11 1 16 -11 17 -14 1 -14 2 -1 6 8 2 20 15 25 30 10 28 0 41 146 -187 112 -173 120 -189 99 -175 -5 3 -12 1 -16 -4 -3 -6 3 -8 14 -6 15 3 28 -9 50 -46 l31 -49 -28 -6 c-40 -10 -43 -13 -31 -37 7 -12 13 -23 14 -25 1 -1 18 5 38 13 l37 15 25 -40 c26 -41 26 -64 1 -54 -8 3 -16 1 -20 -4 -6 -10 30 -9 40 1 8 8 35 -30 132 -182 68 -106 72 -115 57 -131 -12 -14 -13 -20 -4 -26 7 -4 10 -3 6 3 -4 6 0 16 7 23 12 9 17 7 27 -12 7 -13 43 -70 81 -127 38 -57 67 -105 66 -106 -2 -2 -39 -15 -83 -29 -108 -35 -114 -39 -96 -68 14 -22 -8 -5 -164 127 -33 28 -93 77 -132 109 -43 34 -70 63 -66 70 3 6 3 8 -2 4 -4 -4 -24 5 -44 20 -68 51 -196 165 -194 172 1 5 -5 14 -14 22 -12 9 -15 9 -9 1 11 -19 -9 -16 -25 4 -8 9 -77 68 -154 131 -79 65 -140 122 -139 131 1 16 102 452 151 654 15 59 29 107 33 107 3 0 14 -15 24 -32z m830 -627 c-5 -4 -81 -34 -169 -65 -88 -32 -175 -64 -194 -72 -34 -15 -53 -12 -35 6 5 5 81 34 169 65 88 31 176 63 195 70 36 13 51 11 34 -4z m39 -76 c95 -250 239 -658 234 -660 -91 -33 -171 -55 -176 -48 -4 4 -34 49 -66 98 -87 135 -97 150 -180 279 -69 107 -75 120 -61 135 10 11 12 21 6 31 -7 11 -10 11 -11 3 -1 -7 -2 -17 -3 -23 -3 -24 -18 -10 -60 55 l-45 70 37 11 c67 21 265 93 270 99 16 15 38 -5 55 -50z m-1017 -110 c27 -22 56 -46 65 -55 9 -8 47 -40 84 -70 38 -30 105 -86 151 -125 45 -38 113 -95 150 -125 37 -30 72 -59 78 -65 6 -5 50 -43 98 -84 49 -40 86 -77 83 -81 -3 -5 0 -12 6 -16 8 -4 9 -3 5 4 -4 7 -4 12 -1 12 6 0 110 -84 205 -165 83 -71 142 -120 157 -128 7 -5 11 -13 7 -18 -3 -5 -2 -8 3 -7 10 3 47 -25 144 -106 50 -42 57 -51 46 -65 -10 -14 -10 -14 4 -3 14 10 20 9 38 -5 13 -12 18 -23 13 -31 -9 -13 -16 -10 -134 41 -31 13 -27 31 5 21 26 -8 21 -2 -11 15 -18 9 -22 9 -20 -1 4 -20 -29 -13 -107 20 -202 87 -247 107 -325 139 -187 76 -204 85 -184 100 10 7 13 13 8 13 -6 0 -15 -5 -22 -12 -8 -8 -24 -6 -64 11 -29 13 -107 45 -173 73 -66 27 -133 56 -150 63 -106 49 -319 135 -323 130 -4 -4 100 -55 113 -55 3 0 44 -18 92 -39 49 -21 144 -62 213 -91 69 -28 154 -65 190 -80 36 -16 173 -75 305 -131 132 -56 258 -109 280 -119 22 -10 97 -41 168 -70 70 -29 127 -54 127 -57 0 -18 -23 -41 -37 -37 -10 2 -148 10 -308 18 -159 8 -486 25 -726 38 l-435 22 -42 57 c-48 65 -48 65 -27 259 23 223 120 820 142 876 4 11 11 9 33 -9 15 -12 49 -40 76 -62z m1264 -573 c0 -9 -362 -133 -369 -126 -8 8 8 15 175 73 177 62 194 66 194 53z m17 -59 c6 -21 33 -112 61 -201 40 -129 49 -169 41 -189 -5 -13 -6 -30 -3 -36 5 -9 4 -9 -6 0 -13 12 -120 176 -210 321 -28 45 -53 82 -56 82 -12 0 2 -28 64 -122 38 -57 71 -108 73 -113 2 -6 30 -49 61 -97 35 -53 56 -93 52 -102 -3 -9 -9 -16 -13 -16 -3 1 -33 26 -66 57 -33 30 -54 52 -46 48 9 -6 12 -4 7 4 -4 6 -11 9 -16 6 -9 -6 -319 248 -321 262 0 6 315 120 361 132 3 0 11 -16 17 -36z m131 -438 c1 -8 3 -21 4 -28 1 -7 -2 -26 -6 -42 -7 -29 -7 -29 8 -10 16 19 16 19 10 -10 -4 -23 -3 -27 5 -15 9 12 10 10 8 -10 -5 -33 -72 -52 -107 -30 -13 8 -12 11 5 25 11 9 15 14 8 11 -7 -4 -9 1 -6 14 4 16 8 18 19 9 17 -14 19 2 2 19 -9 9 -7 13 5 18 9 3 17 10 17 16 0 5 -4 6 -10 3 -6 -3 -7 1 -4 9 8 20 14 20 31 -1 13 -16 13 -16 4 4 -13 26 -14 33 -3 33 5 0 9 -7 10 -15z m-1608 -94 c0 -16 -6 -20 -22 -18 -20 2 -23 -3 -25 -33 -1 -19 -4 -60 -7 -90 -2 -30 -6 -110 -7 -177 l-2 -123 -25 0 c-24 0 -25 2 -19 53 3 28 10 138 14 242 4 105 9 180 11 168 4 -25 32 -40 32 -17 0 8 -4 12 -10 9 -6 -4 -10 12 -10 39 l0 46 35 -39 c19 -21 35 -48 35 -60z m-30 74 c14 -19 14 -19 -2 -6 -10 7 -18 18 -18 24 0 6 1 8 3 6 1 -2 9 -13 17 -24z m315 -60 c77 -3 259 -12 405 -20 346 -19 670 -35 743 -37 44 -2 57 -6 55 -17 -2 -8 -12 -15 -23 -17 -286 -44 -810 -43 -1137 1 -181 24 -252 43 -277 71 -11 13 -21 26 -21 29 0 2 26 3 58 0 31 -2 120 -7 197 -10z m-249 -30 c17 -16 14 -18 -10 -9 -9 3 -16 10 -16 15 0 13 9 11 26 -6z m-46 -31 c0 -8 -6 -14 -14 -14 -9 0 -12 7 -9 20 6 22 23 18 23 -6z m95 -6 c6 -6 -6 -8 -34 -6 -26 2 -46 9 -49 16 -3 10 5 12 34 6 22 -3 44 -11 49 -16z m1564 -25 c-8 -14 -23 -18 -67 -16 -97 3 -99 5 -22 18 108 17 102 18 89 -2z m-1349 -9 c144 -14 164 -23 41 -19 -68 3 -175 5 -237 5 -101 0 -113 2 -107 16 6 15 20 16 127 10 67 -4 146 -9 176 -12z m1375 -4 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z m-1695 -17 c0 -5 37 -9 83 -11 91 -3 117 -8 117 -24 0 -6 -6 -6 -15 2 -12 10 -28 0 -95 -60 -44 -40 -80 -77 -80 -82 0 -6 34 22 76 61 42 39 80 71 85 71 22 0 4 -23 -68 -88 -93 -85 -108 -83 -98 12 4 34 9 69 11 79 3 9 1 17 -4 17 -6 0 -13 -38 -17 -85 -4 -47 -11 -85 -15 -85 -5 0 -7 8 -5 18 2 9 4 54 4 100 1 47 5 82 11 82 6 0 10 -3 10 -7z m1710 -20 c0 -15 -18 -16 -202 -10 -112 4 -237 8 -278 9 l-75 1 60 7 c33 4 158 7 278 8 196 2 217 0 217 -15z m-470 -44 c222 -6 407 -12 411 -14 3 -3 12 -62 19 -132 7 -71 16 -131 21 -134 6 -3 7 -14 3 -24 -7 -17 -20 -18 -223 -11 -119 3 -231 8 -248 11 -24 3 -33 0 -33 -10 0 -12 15 -15 64 -15 36 0 67 -4 70 -9 3 -5 123 -12 266 -16 143 -4 260 -11 260 -16 0 -22 -756 -1 -1655 46 -159 8 -425 22 -590 30 -405 20 -460 25 -444 39 2 2 72 0 154 -5 261 -15 885 -39 1008 -39 86 0 124 -4 140 -14 17 -12 88 -17 302 -25 154 -6 339 -13 412 -16 76 -4 134 -2 137 3 4 7 -572 30 -631 25 -10 -1 -13 36 -13 152 0 144 1 153 20 158 11 3 20 12 20 20 0 12 12 14 63 11 34 -2 244 -9 467 -15z m-550 1 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m1000 -20 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m14 -107 c9 -112 9 -107 -2 -111 -6 -2 -13 34 -17 80 -3 46 -9 91 -11 101 -3 10 0 17 9 17 11 0 16 -21 21 -87z m-1694 -23 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m-33 -42 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m1738 -68 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z m-2160 -50 c94 -5 274 -15 400 -20 127 -6 361 -17 520 -25 421 -21 908 -37 1157 -39 l218 -1 0 -46 0 -46 -84 -7 c-229 -19 -524 -26 -1076 -26 -333 0 -632 2 -665 5 -33 2 -125 7 -205 10 -180 7 -365 23 -407 36 -17 6 -71 48 -120 95 l-88 84 90 -5 c50 -3 167 -10 260 -15z m2168 -14 c4 -10 1 -13 -9 -9 -15 6 -19 23 -5 23 5 0 11 -7 14 -14z m-165 -13 c-10 -2 -28 -2 -40 0 -13 2 -5 4 17 4 22 1 32 -1 23 -4z m370 -33 c1 -14 11 -43 22 -65 15 -31 80 -326 80 -365 0 -13 -94 10 -111 28 -16 17 -73 257 -65 271 3 4 6 42 7 85 l3 77 30 -3 c25 -2 32 -8 34 -28z m-1255 -358 c26 -103 47 -190 47 -192 0 -12 -168 6 -184 19 -9 7 -23 39 -32 70 -9 31 -31 106 -50 167 -19 62 -34 115 -34 118 0 3 46 6 103 6 l102 0 48 -188z"></path><path d="M2408 3182 c-35 -4 -45 -17 -71 -99 l-23 -69 23 4 c14 3 23 11 23 23 0 14 7 19 30 19 20 0 30 -5 30 -15 0 -8 7 -15 15 -15 22 0 19 47 -2 53 -10 3 2 6 27 7 25 1 56 6 70 11 17 6 7 7 -32 3 l-57 -5 -3 43 c-3 40 -5 43 -30 40z m2 -63 c0 -22 -4 -38 -9 -34 -5 3 -12 1 -16 -5 -8 -13 -35 -13 -35 0 0 6 7 10 15 10 8 0 15 4 15 9 0 15 19 61 25 61 3 0 5 -18 5 -41z"></path><path d="M2270 3163 c-29 -11 -60 -47 -60 -70 0 -33 23 -28 40 10 11 22 23 33 42 35 33 4 47 32 15 31 -12 0 -29 -3 -37 -6z"></path><path d="M2254 3072 c5 -8 66 -4 66 4 0 2 -16 4 -36 4 -19 0 -33 -4 -30 -8z"></path><path d="M2026 3077 c-8 -35 -18 -71 -22 -80 -4 -12 -1 -17 14 -17 16 0 23 13 39 80 18 74 18 80 2 80 -12 0 -21 -17 -33 -63z"></path><path d="M1922 1571 l-1 -148 87 -6 c48 -4 151 -10 230 -13 l142 -7 0 80 c0 79 -1 81 -26 87 -14 4 -116 40 -227 81 -110 41 -201 75 -202 75 -1 0 -2 -67 -3 -149z m321 13 l117 -46 0 -65 c0 -57 -2 -64 -17 -59 -20 5 -370 21 -390 17 -10 -1 -13 30 -13 132 l0 135 93 -35 c50 -19 145 -54 210 -79z"></path><path d="M1656 1498 c3 -5 10 -6 15 -3 13 9 11 12 -6 12 -8 0 -12 -4 -9 -9z"></path><path d="M1656 1468 c3 -5 10 -6 15 -3 13 9 11 12 -6 12 -8 0 -12 -4 -9 -9z"></path><path d="M3268 1333 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"></path><path d="M3208 1323 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"></path></g></svg>',
  medal: '<svg viewBox="0 0 24 28" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9 2 6.5 9M15 2 17.5 9"/><circle cx="12" cy="17" r="7"/><path d="M12 12.8 13.3 15.6 16.3 16 14.1 18.1 14.6 21 12 19.5 9.4 21 9.9 18.1 7.7 16 10.7 15.6Z"/></svg>',
  ship: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17c1.8 1.1 3.6 1.6 9 1.6s7.2-.5 9-1.6"/><path d="M4.5 17V10.5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1V17"/><path d="M8.5 9.5V5.5h2.2v4M13.3 9.5V5.5h2.2v4"/></svg>',
  flagIE: '<svg viewBox="0 0 36 24" width="28" height="19"><clipPath id="beyond-flag-ie"><rect width="36" height="24" rx="3"/></clipPath><g clip-path="url(#beyond-flag-ie)"><rect width="12" height="24" x="0" fill="#169b62"/><rect width="12" height="24" x="12" fill="#ffffff"/><rect width="12" height="24" x="24" fill="#ff883e"/></g></svg>'
};

const PROJECTS = [
  {
    icon: 'hand',
    name: 'Leap Motion Device Driver',
    tagline: 'Control your machine with a wave of your hand',
    desc: 'A Linux device driver for the Ultraleap motion sensor that turns hand gestures into system commands — swipe to change volume, pinch to read memory usage, grab for uptime, and trace a circle to inspect your network interfaces. Written in C with a Makefile build and a userspace UI layer.',
    tags: ['C', 'Linux', 'Makefile', 'Ultraleap', 'Systems'],
    year: '2026',
    wide: true,
    links: [{ label: 'Source', url: 'https://github.com/Kilo27/device-driver', icon: 'github' }]
  },
  {
    icon: 'sword',
    name: 'The Forgotten Soldier',
    tagline: 'A 2D RPG engine, built from scratch in Java',
    desc: 'A tile-based adventure RPG in pure Java — rooms and sub-rooms, an inventory and combat system, NPCs with branching dialogue, sprite rendering with masks, and full save / load through object serialization.',
    tags: ['Java', 'Game Engine', 'OOP', 'Serialization'],
    year: '2025',
    links: [{ label: 'Source', url: 'https://github.com/Kilo27/The-Forgotten-Soldier', icon: 'github' }]
  },
  {
    icon: 'planet',
    name: 'Meteor Madness',
    tagline: 'NASA Space Apps 2025 · asteroid impact simulator',
    desc: 'Built at the NASA Space Apps Challenge in Athlone. A Unity simulation that procedurally generates the Earth — mesh, ocean and mantle — then pulls real Near-Earth-Object data to model asteroid trajectories and impacts, backed by a Python service and a companion web app.',
    tags: ['Unity', 'C#', 'ShaderLab', 'Python', 'NASA'],
    year: '2025',
    links: [{ label: 'Source', url: 'https://github.com/Kilo27/NASA_METEOR_MADNESS_4', icon: 'github' }]
  },
  {
    icon: 'cpu',
    name: 'SystemInfo',
    tagline: 'Your hardware at a glance, on any OS',
    desc: 'A cross-platform desktop app for Windows, macOS and Linux that surfaces detailed system information — CPU, cache, disk, GPU, network and OS — in a clean, navigable interface. Built with Java and Gradle.',
    tags: ['Java', 'Gradle', 'Cross-platform', 'Desktop'],
    year: '2025',
    links: [{ label: 'Source', url: 'https://github.com/Kilo27/SystemInfo', icon: 'github' }]
  },
  {
    icon: 'chart',
    name: 'Leaving Cert CS Project',
    tagline: 'Graded H1 · a full-stack prediction app',
    desc: 'My Leaving Certificate Computer Science project, awarded an H1. A React front-end paired with a Python back-end that web-scrapes data, generates predictions and reports on their accuracy — full-stack, end to end.',
    tags: ['React', 'Node.js', 'Python', 'Web Scraping'],
    year: '2025',
    links: [{ label: 'Source', url: 'https://github.com/Kilo27/LCCSproject', icon: 'github' }]
  },
  {
    icon: 'chat',
    name: 'Ardán',
    tagline: 'A social platform for the Irish language',
    desc: 'An Irish-language social media app born from a passion for language conservation — giving Gaeilge a modern, living space online. Currently in active development.',
    tags: ['React', 'Gaeilge', 'Social', 'In progress'],
    year: '2026',
    badge: 'In development',
    soon: true,
    links: [{ label: 'Coming soon', muted: true }]
  },
  {
    icon: 'rocket',
    name: 'Rocket Flight Computer',
    tagline: 'PCB & embedded software · bound for EuRoC',
    desc: 'Designing the schematics and routing the PCB for a rocket flight computer, targeting a launch at the European Rocketry Challenge (EuRoC) — bridging embedded software with real, physical hardware.',
    tags: ['PCB Design', 'Embedded', 'Hardware', 'C'],
    badge: 'In progress',
    soon: true,
    links: [{ label: 'In development', muted: true }]
  }
];

const SKILLS = [
  { title: 'Languages', items: ['Python', 'C', 'C++', 'Java', 'Kotlin', 'JavaScript'] },
  { title: 'Web', items: ['React', 'Node.js', 'HTML', 'CSS', 'REST'] },
  { title: 'Mobile', items: ['Android', 'Kotlin', 'Android Studio'] },
  { title: 'Systems & Hardware', items: ['Linux Drivers', 'Embedded C', 'PCB Design', 'Unity'] },
  { title: 'Tools & Practice', items: ['Git', 'GitHub', 'Gradle', 'Agile', 'Data Analysis'] },
  { title: 'Spoken', items: ['English', 'Gaeilge · fluent (TEG B2)', 'Español · conversational'] }
];

const TIMELINE = [
  {
    date: 'Sep 2025 — Present',
    title: 'MSc, Immersive Software Engineering',
    org: 'University of Limerick',
    desc: 'A residency-based programme blending deep software engineering with entrepreneurship and communication.'
  },
  {
    date: '2025',
    title: 'NASA Space Apps Challenge',
    org: 'Athlone, Ireland',
    desc: 'Built “Meteor Madness”, a Unity asteroid-impact simulator, over a hackathon weekend.'
  },
  {
    date: '2025',
    title: 'ACI Worldwide FooBar',
    org: 'Programming competition',
    desc: 'Progressed to Question 3 in ACI’s 2025 algorithmic challenge.'
  },
  {
    date: '2025',
    title: 'Leaving Certificate — 554 points',
    org: 'Gaelcholáiste Charraig Uí Leighin, Cork',
    desc: 'H1 in the Computer Science project; educated entirely through Irish.'
  },
  {
    date: 'Jan 2023 — Jun 2024',
    title: 'Coding Mentor',
    org: 'CoderDojo @ Cork Airport Business Park',
    desc: 'Taught beginner & intermediate Python, C++ and JavaScript, guiding students through hands-on challenges.'
  },
  {
    date: 'May 2023',
    title: 'Work Experience — IBM & Dell EMC',
    org: 'Cork',
    desc: 'Saw how IBM’s Cloud Pak for Security is built and how exploits are found and handled; toured Dell EMC end to end.'
  },
  {
    date: 'Oct 2022',
    title: 'Work Experience — Wunderman Thompson',
    org: 'Copenhagen, Denmark',
    desc: 'Watched global ad campaigns delivered across markets and languages for clients like Dell, Snapchat and Amazon.'
  }
];

const BEYOND = [
  { icon: 'sailMark', label: 'Sailing Instructor', note: 'ILCA 6 · Monkstown Bay & Cove' },
  { icon: 'flagIE', label: 'Fluent Irish', note: 'TEG B2 · Maynooth' },
  { icon: 'ship', label: 'Tour Guide', note: 'Titanic Experience, Cobh' },
  { icon: 'medal', label: 'Gaisce Bronze', note: "President's Award" }
];
