import { createSignal, Suspense } from 'solid-js';

export default function Home() {
   const [count, setCount] = createSignal(0);

   return (
      // Dumb placeholder thing
      <div class="glitch flex min-h-screen justify-center px-12" data-text="ゴゴゴゴゴ">
         <svg xmlns="http://www.w3.org/2000/svg" class="max-h-screen py-8" viewBox="0 0 4183.1036 5160.9674">
            <g class="mask" fill="#e4c870" stroke="#bf1b62" stroke-width="10" transform="translate(-229.31961 516.72462)">
               <path d="M2920 3654c0-8 5-35 11-60l11-44h20l-6 28c-3 15-9 42-12 60l-7 32h-17zm-44 69c-3-3-6-10-6-15v-8h30v9c0 6-4 12-9 15l-8 5zm-106 108c0-10 24-21 43-21l12 1-19 14c-22 17-36 19-36 6zm-1053 63c-4-4-7-18-7-31v-23h18l6 22 5 23-7 7-8 8zm147 20-7-26 6-52 5-52-17-11-16-10 3 58 3 58-21-2-20-1-1-41-2-40-10 37-10 37-29-40c-15-21-36-58-45-82-9-23-25-53-35-66l-18-24-1 19-1 19-11-33-12-32c-34.0133-121.2947-29.5163-122.2716-3-52 2-2 25 15 51 36l48 39 6-6 6-6 28 36 29 36v30l7-6 6-7 14 11 13 11v-8c0-5-9-24-21-43-25-42-20-48 17-19l29 22-20-24c-11-13-24-29-28-35-4-5-26-30-47-55-22-24-40-49-41-55 0-5-2-27-4-49l-4-38-16-24c-8-13-15-30-15-39s-5-21-10-28c-6-7-22-29-36-51l-25-39 5-13 5-14h29l6-24 6-25-25-37-25-37v-18c0-11 9-35 19-55l19-36 11 20 11 21v55l12-12c7-7 16-12 20-12h8v38c0 21 3 42 7 45l7 7 13-31 13-30 8 5 9 6-3-31-4-30 15-35 14-34h31v-12c0-7 11-23 23-35l23-21 2-37 3-37-10 6-10 6-3-21-3-21-24 21c-13 12-28 21-33 21h-8v-30l26-10 25-10-7-11-7-12 14 5 14 5 17-29 18-28h20v39l-13 8-14 8-5 23-5.1438 7.8468 10.044 6.702C1876.2275 2834.7689 1882 2834 1889 2828l20.4286-16.7917 2.8958 31.2051L1888 2883l28-27 29-27 23-5 23-6 23 25 24 26 40 10 40 11 16-6 15-6 7 41 7 42 11-4 11-4 3-37 3-37-21-102c-12-56-22-108-23-115v-13l-9 9-8 8 10 34c6 19 10 53 10 76v42l-16 13-17 14-11-18c-6-10-17-26-24-35l-12-17 10 28c5 16 10 35 10 43v15l-19-10-18-10-9-53c-4-29-9-62-9-73-1-11-4-27-8-35l-7-15 19-50 19-50 19 3c10 2 25 3 35 3h16l5 20 5 19h22l-16-25c-9-14-15-27-13-29s26-6 53-8l50-3 8 35c11 54 13 183 4 308l-9 112-6.5743 17.4065L2220 3040h20v121l-11 42-10 42-25 30-24 30v-30l-1-30-10 18-10 17h-13c-7 0-20-8-29-18-19-20-22-33-8-30 9 3 11-2 11-24v-13l-10 15-9 15-31-34-30-35v65l20 40 21 40-15 14-14 15-10-28-10-28-72-65-73-64-13 3c-7 1-29-4-49-12l-35-15v8c0 4 11 13 25 19s25 16 25 20c0 5 19 22 43 38l42 29h25l25 1 14 29c8 17 22 35 31 42l17 12 6 31 7 30h71l28-21 29-21 20 11 20 11 18 76 18 75-15 10c-7 5-18 7-23 6l-9-3-18-53-17-53-16-16-16-16-12 12-12 12h-44l-31 25-30 26-11 34-12 35-9-5-9-6v16c0 9 8 32 19 53l19 37 7 55 7 55-21-19-21-19-6 6c-12.779 9.7748 7.6481 23.5476 15 33 11 15 21 33 21 40v14h20v-41l9 6c5 3 12 18 16 34l6 29 20 23 72.2344 6.8743c107.504 31.9237 53.9439-22.3115-53.2344 92.1257h-20v-37l-20-18-20-18v73h-20l-6-25c-8-30-20-32-27-4l-6 21-18-4-18-3-6-62-6-62-17-26-18-27-5 6-6 6 10 12c6 7 13 28 17 46l6 34-11 44-11 44h-18zm37-385c-11-15-21-33-21-39 0-5-17-43-38-82l-38-73 3-20 4-20-10 15-11 15v-20c0-21-22-91-32-100l-5-6v101l13 11c8 6 14 17 14 24s6 18 14 24c7 6 21 33 31 59l18 47 14 8 13 8v14c0 8 10 31 22 51l22 37 4-12 4-13zm126-156-7-6v26l7-6 6-7zm-90-360-7-6v26l16.7531 22.3304 38.7581-22.4792zm494 952-1-31-16-22-84.0592-49.797c112.1962 19.6094 58.8902-13.4101 88.0592-20.203 11-26 23-60 26-76l7-30 14-10 13-11 27-65c15-36 33-72 41-81l14-16v-45l-15 6-15 5v-8c0-4-14-28-30-53l-30-46-45-11c-24-6-48-11-53-11h-9l-21 48c-11 26-23 60-27 75l-6 28-9-6-10-6v-68l-9-6-10-5-7-56-7-56 14-9c8-5 17-9 22-9h7v54l12-12 12-12h53l18 20 18 20h66l15 16c9 8 16 20 16 25s4 9 9 9h9l7-42 8-43 24-32c32-41 26-42-18-2-19 17-41 35-50 39l-16 9-22-20-21-20v-13c0-7 7-33 15-56 18-52 11-67-9-19-7 19-16 41-20 49l-6 15 5-68 6-69 13-36c7-21 17-46 21-57l8-20-21 19-21 18-6 32c-9 43-55 165-65 171l-9 5-5-9-6-10 11-70c6-39 9-77 7-83l-4-12-30 52c-16 29-31 52-34 52s-6-41-8-92l-3-92 12-95 11-96-2-157-1-158h44l34 26 33 25v-8c0-5-7-19-16-31l-15-22h30l38 45 37 45h12c6 0 22 8 34 18l22 18-21 37-21 37-4 51-4 52-9 6c-11 8-73 128-73 142v11l39-35c21-19 45-38 53-43s20-18 26-29l11-20 1 21v21l-20 18-20 18v26c0 14-4 33-10 41l-9 14 8 11c5 5 11 19 14 30l5 20 1-38 1-38 20-39c11-22 20-46 20-54v-15l20-11 20-11v-38l-10-6-10-6v-44l46 50c25 27 52 62 60 77l15 28h28l7 36 6 35-4 49-5 49-40 48c-54 65-64 88-14 33l40-44 7 6c3 4 10 44 15 90l10 82-6 31-6 30 20-33 21-32v-24c0-12 3-26 7-29l6-7 15 13 15 12-12-23-13-24 7-16 6-16 9 14 10 15v142l-12 33-11 34-8-20-8-19v36l-1 37-26 78c-15 44-33 91-40 106-8 15-14 30-14 33v6l11-7c6-3 26-30 45-60s39-54 44-54h9l4 18 5 17 2-30c1-16 5-39 10-50l8-20 7 18 8 18-6 42-6 42-27 55c-14 30-43 78-63 105-20 28-45 67-54 88-10 20-20 37-23 37h-5l6-47 6-48-24 43-23 43-7-7-7-7v-78l-9 5c-5 3-14 27-21 53l-12 48-16 18-16 18-12-22-11-22-18 26-17 27h-28l-1-22v-23l-19 40-19 40zm300-421c4-22 9-64 9-94v-55l-9-13-8-14-12 33-11 32v171l11-11c6-6 15-28 20-49zm-176 445-7-11 16-16 16-16-1.9091 7.2854-7.3964 28.6755L2561 4000Zm-607 71c0-8-2-26-3-40s-5-35-9-47l-7-23h54l-5 51-5 50-12 12-11 11zm-141-23-17-35v-52h25l11 44 10 44-6 18-6 17zm295 9 4-36-10.7666-4.7908-8.3514-5.3423L2072 3993l20.7784-30.7085L2101 3970l15 15 15 15-7 35-6 35-10 6-11 7zm-232 29-12-14 7-51 7-50h7c4 0 12 5 19 12l12 12v45l-11 7-11 6 5 24 4 24h-7c-4 0-13-7-20-15zm610-7c3.7691-17.601-3-43-6-55l-6-23h41l6 10 6 10h-21l6 24 6 25-7 20-6 21-43.6605 83.1608zm-474 24-7-11 8-28c4-15 6-35 5-44l-3-17 17-6c24-9 27-3 19 42l-6 40-3.2407 44.1892 1.8843 73.9808zm187.3899-20.2693c0-8-2-26-3-40s-5-35-9-47l26.8444 9.1961 20.1556-32.1961-5 51-5 50-12 12-11 11zm177.6419-16.4597 4-36c.082-.4894-30.28-40.7275-37-40l34.0872 8.9299 12.9128 6.0701 15 15-7 35-7.107 20.7878c.079 2.9419-16.6622 28.9699-16.6622 28.9699zm-119.6419 48.4597-7-11-.3147-25.8054c13.9197-7.8946 15.3902-44.2389 15.3902-44.2389l17.5267-7.9568 16.3732-23.4097s-.685 34.1529-2.9754 48.4108l-6 40-13 18-13 17zM2560 4071v-42l10-20 11-19h32l-6 35-6 35-20 27-21 26zm-25 129-6-10 11-20 11-20h12c7 0 29-16 50-36l37-35v15c0 8-11 32-25 53l-26 37-29 13-30 12zm-275 22c0-5 7-16 16-23l16-13-3 18-4 19-12 5-13 4zm-312-2-16-10-25-45-26-45 19 10c10 6 22 15 25 20l6 10h37l4 35 4 35h-6c-3 0-12-5-22-10z" />
               <path fill="none" stroke-miterlimit="100" d="M3623.8711 4643.2004 3635 4591l5-10-12-7-11-7 24-11 24-10-27-4c-34-4-34-4-7-45l22-33 49-29 50-30-16-3-16-3v-19h-29l-11-20-11-21-22 7c-12 4-28 9-34 11l-13 5v-21l28-3 27-3-3-23-3-23 9-12 9-12 1-37 1-38h-7c-5 0-13 5-20 12l-11 11-14-12-14-11-14 16c-7 9-24 20-38 25l-24 10-30-7-29-6 11-11c6-6 11-15 11-20v-9l-27 7-26 6 12-15 13-16h-29l2-37 1-38 22-35c12-19 22-40 22-47v-12l22-15 22-16h75l6-9 5-10-17-10-18-10 20-1h20l-14-9-13-8 32-17c18-9 39-16 47-16h13v-9c0-5-5-11-12-13l-11-4 44-22 44-21-84-1h-85l20-15 19-14-25-1h-25l10-8 11-7-2-22-45.813-2.4995 72.0958-75.718c10.4969-11.7397 37.8003-53.8837 60.2519-62.6801L3652 3610h-52v-14c0-8 5-18 10-21l10-6-5-8-5-8 18-15c24-21 78-38 121-38l36-1 25-14 25-14-11-1h-12l2-17 1-18-47 3-48 3v-10c0-5 5-13 11-16l10-7-5-14-5-14 29-15 30-15-3-12-2-11 52-41 52-41v-11l1-12-21-5-21-6 22-23 21-23-33-6c-18-4-28-7-23-8 6-1 22-12 36-25l26-22 7-27 6-27h-30v-20l25-12c25-11 34-28 15-28h-10v-28l30-7c16-4 32-11 36-16l5-9-8 1c-4 1-12 1-17 0l-9-1 18-20 18-20-6-6-7-7-13 12-14 11-14-16-13-16-44 6-43 6 22-31 22-31-23 7-23 7 7-10 6-10-12-5-13-4 49-31c28-18 56-32 64-32h14l-16-25-16-24 57-27c32-15 61-31 64-36l6-9-8-51-8-52 11-13c91.4296-22.6122 20.4242 5.5282 141.3096-132.5677L4083 2430h-37l20-16 19-15-25 6c-14 3-51 9-82 12l-57 6-17-7-17-7 19-14 19-14-12-1h-13l15.5189-10.5386L3928 2359c15 0 36-4 47-9l20-9h-13l-13-1 6-10 13.7573-5.4122L4013 2319c18 0 41-4 52-9l20-9h-10l-10-1 25-13 25-14-4-14c-2-8-4-26-4-42v-27l-24-6-23-6v-28l-35-17-35-17 11-7 11-6-38-19-38-19-4-13-4-13 20-6 20-5 5-19 5-19h-26l-27-1 18-10 18-11-11-13-11-13 18-11 18-10-18-1h-17l6-27c3-16 13-41 20-57 18-38 19-36-17-36h-32l44-48c24-27 62-61 84-75l39-27h-17c-9 0-35 7-57 16l-41 17-5-6-6-6 27-35c15-20 31-36 36-36 4 0 19-12 32-26l25-26-5-17-4-16 33-19c18-11 39-28 46-38s18-18 24-18 25-13 43-29l33-29-10-10-10-10 38-21 39-20-15-1h-15l-1-32c-1-18-5-52-9-74l-7-42 30-17 30-18 6-28 5-28 41-23 24.9433-47.61.4549-11.78471L4363 1026c-27 13-63 27-82 30l-34 7 7-11 7-12h-9c-5 0-15 7-22 15s-16 15-21 15h-8l6-32 6-33-14 13c-7 6-19 12-26 12h-13v-60l19-57c11-32 30-112 41-178 35-195 58-315 74-400 9-44 26-136 39-205l73.3626-637.79086-565.8997 304.15071C3815.4629-181.64015 3340 217 3213 314c-79 59-170 132-203 162l-61 54h-29v-38l-15-6-15-5-1-23-1-23-12 28c-7 16-17 32-23 35-5 4-16 21-24 37l-14 30-21 3-21 3-22 40-23 40-17 6c-9 4-27 15-40 25l-24 18h-35l-33 27-32 27 11-21c17-31 16-33-23-33h-35v28l-21-5-21-6 5-23 4-24h-24l-11-22-11-23v33l-1 32h-26l-17 20-18 21 6 9 5 9-9 5-9 6-12-35-12-36 6-14 5-15 16.2496 4.65649c-11.2307-6.79325-3.0034-.74379-5.2496-5.65649l16-6 15-6-6-15-6-15 11-7 11-7-10-26-11-27h-29l-12-22c-7-13-16-26-21-29l-9-6-11-146c-6-81-13-145-16-142-2 2-8 71-12 152l-8 148-12 29-11 30-22 15c-12 9-29 16-37 17s-20 2-26 3l-11 1 5 25 4 25h-26c-15 0-36-5-47-10l-19-11v96l-20-33c-11-18-27-35-35-38l-14-6-29 21-29 20-11-11-12-12v45l-27-26c-15-14-31-25-35-25h-8v-22l-1-23-19-23-19-22-13 2-13 3-3-20-3-20-30-18-31-17 5-14 5-13-11-78-11-78-16 79c-10 43-22 91-28 107l-12 27-17 1c-10 1-28 0-41-1l-22-1-6 15-6 16h-12c-7 0-22-10-34-23l-22-23v-15l-1-14-62-66c-34-37-91-90-126-119S929-25.311882 861-92.311882L255.21453-498.59008 265 48c3 26 13 83 20 127 8 44 26 157 40 250 14 94 30 199 35 235 6 36 15 108 20 160 10 97 37 233 50 260l7 15-6 19-7 19-80 4c-43 2-85 6-91 8l-13 4 25.14398 19.4653 55.08049 35.4706-26.05931 28.2693L260 1249l33 17c17 9 40 23 49 32l18 15-6 9-6 9 17 25 17 26-6 6-6 6 27 28 27 28h-25l6 11c4 5 18 14 31 19l24 10v30h-8c-4 0-12-3-17-8-6-4 8 10 30 30l40 37-18 1h-18l15 28c8 15 26 38 40 51l26 24-10 12-10 12 34 18 35 19-5 8-5 8-27-6-27-5 25 15 25 15-22 1h-21l55 56 56 56-14 9-14 9-25-6-25-5 20 16 20 16-22-6-23-6v8c0 5 16 24 35 43s35 38 35 42c0 3-15 11-34 18l-33 11-29-11-29-11 22 23 22 23-40-3-40-4 12 26c7 14 16 26 21 26h9l-5 9-6 9 31 11 31 11-6 16c-3 8-6 18-6 20s-25 4-56 4h-57l34 25c19 14 46 30 62 36l27 11v26l23 7 22 6-15 5c-8 3-25 10-38 17l-23 11 43 16 43 17-3 11-2 12h9c11 0 106 109 100 115-3 2-25-9-49-24l-45-28-23 15-23 15-24-11-25-12v19l-27 3-28 3 1 18 2 17h-28v19l22 7c26 8 40 18 84 62 18 17 38 32 44 32h11l-3 18-4 17-44-3-45-2 34 15 33 15-11 13-11 13 12 12 12 12h44l31 35 31 36v70l-7-4-8-5-84 22-84 23 17 6c10 4 27 7 38 7h21l-7 8c-4 4-24 12-44 19l-37 12 53-5 52-6v9c0 5-5 14-11 20l-12 12 39 10c22 6 58 13 81 17l42 6 5 14 5 14h-48l5 15 6 15-23 9-24 10 13 2c6 1 18 2 24 3l13 1 3 18 3 17h-35l12 12c7 7 12 15 12 18v6l-35-4-35-4v6c0 4 20 16 45 27l45 20-5 10c-4 5-14 9-23 9h-17l30 20 30 20h-25v20h28l27 1 18 13 17 13-15 13-15 12-18-4-18-5-10 11-11 11 5 14 5 14-14-9-14-8 14 17 13 17h-20l5 20 5 20 30 25 30 25h-22l-24.57971 2.3739L794 3540c12.22048 4.4339 33 3 43 7l18 7-40 12-40 12 62 1 62 1-5 15-6 15h24l-6 15-6 16 26 9 25 10-6 10-6 10-22 1-22 1 33 14c17 8 32 17 32 20v7l-77.76388-1.6526S961.52805 3748.6446 965 3750l20 9h-14l-13 1 11 14 12 14-23 5-23 4 35 2 35 3-13 5-12 5 6 9 5 9h-31v30h-30v20h-22l-23 1 45 27 45 27-18 3-17 3v9c0 9 40 34 73 46l19 7-5 18-5 19h17c10 0 32 5 49 11l32 11-6 9-5 9h-27c-29 0-56 13-50 24l3 8-25 13-25 14 35 15 35 15-40 1-40 2 13 5 12 5-6 9-5 9h-39v9c0 5 7 17 16 25l15 16-13 1c-7 1-17 1-22 0-4-1-14 3-21 9l-12 10-17-6-16-6v51l11 7 12 7-17 9-17 9-32-6-32-6 30 17c17 9 38 23 47 32l18 15-6 9-6 9 12 14 12 15h-77l29 25 29 25h36l-5 14-5 13 18 18 18 18-40-6-40-6 15 9c8 5 23 10 33 10h17v23l-30-6c-40-9-32.97653-.4413-38.04806-7.7318L945 4598m2765-233c0-3-2-5-5-5s-5 2-5 5 2 5 5 5 5-2 5-5zm397-2722-7-6-7 6-6 7h26z" style="mix-blend-mode:normal" />
               <path d="m1642 3547-22-23v-35l10 6c13 8 43 65 37 71-2 2-13-6-25-19zm1188-61c0-8 5-18 10-21l10-6v15c0 8-4 18-10 21l-10 6zm10-104c0-13 5-44 12-70l11-47 24-37c28-45 34-47 28-10-2 15-7 47-10 72l-6 45-29 35-29 35zm10-167-15-18-3-104-4-105-11 11c-6 6-17 11-24 11h-13v-25c0-13-5-35-11-48l-11-25-23-12-22-12-21-37-21-36 10-18c14-24 23-22 79 21l49 37 6 18c4 11 16 38 26 63l20 43 19-16 20-17-9-6c-4-3-16-20-25-38l-17-34 23 4 23 3 3 22 3 21 25 16 24 16v38l-21 5-22 6 6 15 6 14-21 39-20 38-7 64-6 64zm305-37 8-33 27-35c27-34 30-40 30-58 0-5 11-14 25-20l25-12v-49l78-60 77-61h45v9c0 12-27 33-74 57l-41 20-3 21-3 20-57 69c-31 38-65 78-74 88-10 11-18 25-18 32v12l-26 17-26 17zm176-215 14-18-17 14c-17 13-22 21-14 21 2 0 10-8 17-17zm-2087 87c-18-16-48-48-67-72l-35-43c-14.5331-42.319-56.4234-184.5538-85-159l-6 6 14 15 15 14v39l-20-12-20-13-10-29c-5-16-10-41-10-55v-27c-29.73985-5.29-15.1274-46.4251 11-24 34 35 76 83 94 105l33 40 12 44 12 44 51 50 52 50 27 9 28 10v9c0 10-33 29-52 29h-13zm-184-294c0-3-4-8-10-11l-10-6v21h10c6 0 10-2 10-4zm462 248c-7-14-24-41-38-60l-26-34h-31l-39-42-38-41v26l-20-18c-22-20-26-14-10 16l11 19h-47l-45-65c-24-36-52-81-62-100l-19-35h-18l-1 28v27l-10-24-10-24 10-6c5-4 16-18 23-33l14-26 55 70c64 82 100 113 192 162l69 36h48l-2 13-3 12 28 3 28 3 60-20 59-20 11 21 11 21-12 7-12 8 18 11 19 11-17 14c-10 7-18 19-18 26v12l-22-6c-13-3-33-6-45-6h-23v-28l-47-4c-59-5-62-4-24 13l30 14-3 20-3 20-15 3-14 3z" />
               <path d="m2964 2931-7-32-18 6-19 6 6-15 6-16h37l11 20 11 20h63l-14 14c-8 8-27 18-43 21l-27 7zm196 10c0-5 6-16 14-24l14-14-6-10-7-10-67 2-68 2v-6c0-3 17-14 38-24l37-18 90-98 90-99 3 10c2 5-3 20-12 33l-16 24v60l38-6 37-6 19-16c10-9 22-27 28-40l9-24 10 10 11 11-6 20-7 21-37 35-36 36h-26l-30 43-31 42-36 28c-38 28-53 33-53 18zm-1428-44-12-14 23-23 22-24 3 17 3 17-14 20-14 20zm1638-56c0-11 4-31 10-46l10-25 25 6 25 6v-42h20v-11c0-6 10-24 21-41 12-17 25-44 29-62l8-31 1 37 1 37-30 59c-26 52-39 70-80 120-6 6-17 12-25 12h-15zm-1460-18c0-10 3-35 6-55l7-38h26l6-19c3-10 14-26 25-36l19-17 7 27 6 26-23 45-23 45-28 20-28 20zm730-13-11-20 12.7144-18.2311L2641 2771l-11-19 22-6 22-5 7 11 7 11-5 14-5 13-18.8896 4.8236L2653 2810c7.3373 29.8119-5.2284 14.1495-13 0zm-1594-237c-4-13-15-30-23-39l-17-16 12-44c7-24 12-62 12-84v-40h18l6 33 7 32 10-15 10-15-6 33-7 32h20l4 61 3 60-17-4-17-5-4 17-3 16zm2445-12-1-13-21 5-21 6 8-17 7-17-2-105-2-105 32-18 31-17-6 15 3.3951 11.5241 31.0273-32.0371L3538 2210l15-24c9-13 32-41 51-62l36-39v-86l10 6 10 6v59l12 20 13 20-37 37-37 38-31 70c-17 39-35 79-39 90-5 11-18 67-29 125s-20 99-21 91zm-2046-39c-28-10-60-24-72-32l-20-15-20-40-21-40-7-42-7-42 7-21 6-20h62l86 47c47 26 106 57 131 69 25 13 57 33 72 46l27 23 2 15c1 8 1 21 0 27l-1 12-30 16-29 15-68-1-68-1zm1423-18-37-16-7-20-6-20 23-23 24-24 90-44c50-25 101-48 115-52s34-15 44-24c11.4744-1.8955 13.1567-2.6017 23-6 11.6505-.041 29.4312-1.1304 44.9106-2.6783L3219 2278l7 25 6 26-12 36-12 36-25 29-25 30-44 26-45 26-82 4-82 4zm-481-52-17-19v-34l-9 5-9 6-5-14-6-15 19-23 18-24 4-24 3-24 28 38 29 37 2 34 3 35 12 13 11 14-7 6c-3 4-18 7-33 7h-27zm-1350-152 6-56 6-55 9-12c5-7 15-35 22-64l12-52 13-11 12-10 12 14 12 15-10 54-10 54-36 67-37 66c-4.3712-8.5406-7.074-8.9179-11-10zm1573-6c0-4 7-15 15-24l14-16-59 1h-60v-12c0-13 29-61 82-133 18-25 54-78 81-117 27-40 51-73 54-73s-3 12-12 28l-18 27 27-25 27-24-5-13-5-13h7c5 0 25-15 45-34 20-18 47-40 60-49l23-15 29-46 29-46h16c9 0 25-7 36-15 10-8 27-15 37-15h17l10-26 10-25v-42c0-23-4-56-9-74l-9-31 18-30 18-29 30-22 30-21 23-2 24-3 1 20c1 11 2 28 3 38l1 17h38l10 13c5 6 12 23 14 37l3 25 13-2 12-3v30h-30v55l-26 49-26 49 18-8c24-9 34-10 60-1l21 6 13-55 13-56 11 4 11 4 3 21 3 22h18l7 45 6 45-21 42c-11 23-19 44-17 45 2 2 21-7 41-22 21-14 44-25 52-25h14l5 15 6 15h32l-22 16-22 15v26l-35 36c-19 19-43 38-53 41l-19 6-11 23-11 22v-20l-1-20-20-13-20-12v-13c0-6 6-24 14-38l14-27-28 16-28 16 6 15 5 14-12-7-13-8-34 33c-32 31-79 99-69 99 2 0 15-5 29-11l25-12 16 13c8 7 15 16 15 21v9h-65l-46 16-46 17-38-7-37-7 28-30 29-30-28 10c-16 6-43 22-61 36-35 27-46 30-46 16 0-10 117-130 180-183 24-21 41-38 37-38-3 0-38 17-76 37l-71 36-25 39-25 38h-11c-6 0-26 14-44 32l-34 31-5 22-5 21-41 33-40 32 5 9 6 9-21 11c-11 6-20 8-20 5s-18 4-40 15l-40 20v20h22l-12 16c-8 8-22 20-32 25l-18 10zm-696-34c-38-27-94-90-94-106 0-4-91-98-203-208l-203-201-52-87-52-87v-53l20-5 20-5-7-40-6-40 13-8 14-9 13 17 12 17 1-9c0-6-9-19-20-31l-20-21 12-32c14-35 16-37 39-19l16 12 12 38 13 37h10c10 0 35 10 126 52l42 20v11c0 7-4 27-9 44l-9 32 19 26 20 25-25 12-26 11-23-21c-13-12-27-22-32-22h-8l23 25 23 25h37v8c0 4 18 15 40 26l39 19 5 13 5 14h31l1 23c0 12 0 49-1 83l-1 61 30 30 30 30 6 26 7 25 25 24 26 23-7-27-6-28h7c5 0 21 21 37 48 16 26 38 55 47 65l18 17 12 43c6 23 13 57 14 75l3 32h-11c-7-1-30-14-53-30zm396-5v-15h20v30h-20zm-99.3804 81.2987L2230 2228v-122l10 10 11 11-3 69-22.2978 254.701zM972 2218c-6-6-12-16-12-21-55.66109-185.5792-154.54783-162.8062-15-103l14 5 16 56c9 30 15 60 13 66l-3 10zm1118-8c-5-10-10-25-10-32 0-8-7-24-16-37l-17-23-8 13-8 14-23-22-22-23h26l-7-17c-4-10-8-26-10-36s-14-31-27-46c-13-16-30-38-38-50-53-79-171-241-217-300l-23-29v-53l15-36 16-37-16-8c-8-5-15-13-15-18v-10h18l17-1-17-10-18-10v-47l13-5 12-4-18-49-17-49v-32c0-18 3-33 6-33 8 0 83 53 122 87l33 28 22 64 22 64 65 18 65 17 18 23 18 22 6-7 6-6-29-38c-17-20-33-42-37-48l-7-12 22-27 21-27 4-36c2-21 5-43 8-49l4-13-23-6-24-6-8-21c-7-22-9-34-19-99-5-35-21-77-50-128l-14-24-19-7-19-7 2-19c1-10 5-26 9-36l8-17h25l11 26 12 25 19-6 20-6 12 23c7 12 20 29 29 38l17 15 22 54c11 29 21 61 21 70s19 54 41 101l41 85 8 76c4 42 10 81 14 87l7 11-7 151-7 151-23-46c-12-26-25-62-29-81l-6-34h-42l6 66 6 66 13 15c16 20 38 82 38 109 0 12 7 35 15 50 8 16 15 36 15 45v17l-15 6-15 5v73c0 40-3 83-6 95l-6 22 15.1239 32.3736-17.2038 54.1107zm272-22-13-16-6-36-6-36h21l-10-32c-6-18-17-49-25-69l-15-36 13-44 12-44-2-149-2-148 10-12 10-12-6-22-5-22-14 11c-8 7-16 10-18 8s-1-51 4-109l7-105-8-20-8-20v67l-1 67-10 6-10 6v-15c0-8-7-21-15-30l-15-15-1-78-1-78 13-28 12-28 11 4 11 4 6 54 6 54 1-47 2-48 12 3 13 2 3-22 3-23h-31l-1 13-1 12-8-25-8-25-1-77-1-78 25-6 25-6 15 6 15 5v-39h17l17 38 17 37-3 32-2 32 19 21 19 21-13 8-13 9 4 13 4 13-25 22-26 22 13 34 12 34v83l10 6 10 6 1-18 1-18 10 40c11 45 15 110 8 140l-5 20 33 3 32 3v29h-10c-5 0-10 5-10 10v10h48l11-13 11-14-8-8-7-8 12 7 12 6 28-12c15-6 37-22 49-35l21-23-14-56-15-57 15-14 15-15 13 23c19 35 40 90 46 122l5 28 55-58c30-32 65-74 79-95 23-36 42-54 49-46 3 2-6 47-19 99l-24 94-5 100-5 100-70 65-69 65-7 21c-3 11-19 34-34 50-16 16-50 65-77 109s-70 104-94 133l-46 53-3-10c-2-5 6-28 18-51s20-44 18-45c-2-2-14 16-27 41l-24 44h-27v-18l-19-5-20-5-3 36-3 35zm198-274-74.2556 120.756c47.2543-49.6834 101.0714-199.0407 74.2556-120.756Zm163.6777-266.991L2680 1625l-9 15c-4 8-27.2678 25.5686-31.2678 41.5686 8.9054 19.3349 53.3163 36.4891 68.9455 10.4404 4-8 11-28 15-45zM3511 2077l-1-59 17-64 17-64 10 3 10 3 8 35 7 34-21 33-20 33-13 52-13 52zm-1971-13-35-13h-82l-82-1-23 10-23 11-40-20-39-19 38-16c21-9 45-16 53-16h14l-6-10-6-10h20l-24-24-24-24-11-43c-6-24-15-51-20-59-6-8-19-28-30-45l-20-30 17-12c9-7 24-13 33-13h16l17 20c9 11 17 27 17 35 0 22 22 67 45 91 23 26 131 84 154 84h16l25 20c14 11 31 20 38 20s27 7 43 16l30 15-12 15c-6 8-18 14-25 14h-14v20l-12-1c-7-1-29-7-48-15zm-36-56-22-10-18 11-19 10h80zm667-871c-25-51-26-57-7-57h14l5 13 5 12 7-27 7-28h18v101l-14 15-14 14z" />
               <path fill="none" d="M1389 692c-7-15-28-47-44-72-46-67-125-200-125-209 0-7-206-243-313-356L631.83386-150.00153l14-3L890-1l28 33c69.73535 125.71046 144.9659 193.72234 259 283l88 134 88 134 29 65c29 64 34 97 7 44zm1701 21c0-5 23-39 50-78 27-38 71-101 97-140 64-94 197-246 336-384l118.3998-84.188614 205.3201-138.671116L3637 82c-40 43-103 114-142 159-38 45-79 91-90 104-105 117-211 243-254 303-51 69-61 81-61 65zm-1613-91c-15-16-36-45-46-64l-18-36 38 25 37 25 26 39 26 39h-36zm-118-89-14-18 18 14c16 13 21 21 13 21-2 0-10-8-17-17z" />
            </g>
         </svg>
      </div>
   );
} 