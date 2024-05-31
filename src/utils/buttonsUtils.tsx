export interface cssButton {
    buttonName: string,
    code: {
      html: string,
      css: string,
    }
}

export interface tailwindButton {
  buttonName:string,
  code:string,
}

// css buttons

export const cssButtons:cssButton[] = [{
    buttonName: 'Sliding Button',
    code: {
      html: `<button class="btn-slide">
  Button Text
</button>`,
      css: `.btn-slide {
  display: inline-block;
  padding: 1rem 1.8rem;
  font-size: 16px;
  font-weight: 700;
  color: white;
  border: 3px solid rgb(37, 123, 242);
  cursor: pointer;
  position: relative;
  background-color: transparent;
  text-decoration: none;
  overflow: hidden;
  z-index: 1;
  font-family: inherit;
}
       
.btn-slide::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(37, 123, 242);
  transform: translateX(-100%);
  transition: all .3s;
  z-index: -1;
}
       
.btn-slide:hover::before {
  transform: translateX(0);
}`,
  }
},
  {
    buttonName: 'Button Strokes',
    code: {
      html: `<button class="btn-strokes">
  Button Strokes
</button>`,
      css: `.btn-strokes {
  padding: 1rem 2rem;
  font-weight: 700;
  background: rgb(255, 255, 255);
  color: blueviolet;
  border-radius: .5rem;
  border-bottom: 2px solid blueviolet;
  border-right: 2px solid blueviolet;
  border-top: 2px solid white;
  border-left: 2px solid white;
  transition-duration: 1s;
  transition-property: border-top, 
    border-left, 
    border-bottom,
    border-right,
    box-shadow;
}
  
.btn-strokes:hover {
  border-top: 2px solid blueviolet;
  border-left: 2px solid blueviolet;
  border-bottom: 2px solid rgb(238, 103, 238);
  border-right: 2px solid rgb(238, 103, 238);
  box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px;
}`
    },
  },
  {
    buttonName: "Button Rise",
    code: {
      html: `<button class="btn-rise">
  Button Rise
</button>`,
      css: `.btn-rise {
  outline: 0;
  grid-gap: 8px;
  align-items: center;
  background-color: #ff90e8;
  color: #000000;
  border: 1px solid #000;
  border-radius: 4px;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  font-size: 16px;
  gap: 8px;
  justify-content: center;
  line-height: 1.5;
  overflow: hidden;
  padding: 12px 16px;
  text-decoration: none;
  text-overflow: ellipsis;
  transition: all .14s ease-out;
  white-space: nowrap;
}
.btn-rise:hover {
  box-shadow: 8px 8px 0 #9c0e53;
  transform: translate(-4px,-4px);
}
.btn-rise:focus-visible{
  outline-offset: 1px;
}`
    }
  },
  {
    buttonName: 'Come Together',
    code: {
      html: `<button class="btn-come-together>
  Come together
</button>`,
      css: `.btn-come-together {
  font-size: 16px;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 13px 20px 13px;
  outline: 0;
  border: 1px solid black;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.btn-come-together:after {
  content: "";
  background-color: #ffe54c;
  width: 100%;
  z-index: -1;
  position: absolute;
  height: 100%;
  top: 7px;
  left: 7px;
  transition: 0.2s;
}

.btn-come-together:hover:after {
  top: 0px;
  left: 0px;
}`
    }
  },
  {
    buttonName: 'Blurry Button',
    code: {
      html:`<button class="blurry-button">
  Blurry Button
</button>`,
      css:`.blurry-button {
  padding: 15px 20px;
  font-size: 16px;
  background: transparent;
  border: none;
  position: relative;
  color: #f0f0f0;
  z-index: 1;
}

.blurry-button::after,
.blurry-button::before {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -99999;
  transition: all .4s;
}

.blurry-button::before {
  transform: translate(0%, 0%);
  width: 100%;
  height: 100%;
  background: #28282d;
  border-radius: 10px;
}

.blurry-button::after {
  transform: translate(10px, 10px);
  width: 35px;
  height: 35px;
  background: #ffffff15;
  backdrop-filter: blur(5px);
  border-radius: 50px;
}

.blurry-button:hover::before {
  transform: translate(5%, 20%);
  width: 110%;
  height: 110%;
}

.blurry-button:hover::after {
  border-radius: 10px;
  transform: translate(0, 0);
  width: 100%;
  height: 100%;
}

.blurry-button:active::after {
  transition: 0s;
  transform: translate(0, 5%);
}`
    }
  },
  {
    buttonName: 'Pulse Button',
    code: {
      html: `<button class='btn-pulse'>
  Pulse Button
</button>`,
      css: `.btn-pulse {
  position: relative;
  font-size: 14px;
  text-transform: uppercase;
  text-decoration: none;
  padding: 1em 2.5em;
  display: inline-block;
  border-radius: 6em;
  transition: all .2s;
  border: none;
  font-family: inherit;
  font-weight: 500;
  color: black;
  background-color: rgb(234, 233, 233);
}
  
.btn-pulse:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
}
  
.btn-pulse:active {
  transform: translateY(-1px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);
}
  
.btn-pulse::after {
  content: "";
  display: inline-block;
  height: 100%;
  width: 100%;
  border-radius: 100px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transition: all .4s;
}
  
.btn-pulse::after {
  background-color: #e7e7e7;
}
  
.btn-pulse:hover::after {
  transform: scaleX(1.4) scaleY(1.6);
  opacity: 0;
}`
    }
  },
  {
    buttonName: 'Crosshatch Button',
    code: {
      html:`<button class="crosshatch-button">
  Crosshatch Button
</button>`,
      css: `.crosshatch-button {
  --b: 3px;   /* border thickness */
  --s: .45em; /* size of the corner */
  --color: #373B44;
  
  padding: calc(.5em + var(--s)) calc(.9em + var(--s));
  color: var(--color);
  --_p: var(--s);
  background:
    conic-gradient(from 90deg at var(--b) var(--b),#0000 90deg,var(--color) 0)
    var(--_p) var(--_p)/calc(100% - var(--b) - 2*var(--_p)) calc(100% - var(--b) - 2*var(--_p));
  transition: .3s linear, color 0s, background-color 0s;
  outline: var(--b) solid #0000;
  outline-offset: .6em;
  font-size: 16px;

  border: 0;

  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.crosshatch-button:hover,
.crosshatch-button:focus-visible{
  --_p: 0px;
  outline-color: var(--color);
  outline-offset: .05em;
}

.crosshatch-button:active {
  background: var(--color);
  color: #fff;
}`
    }
  },
  {
    buttonName: 'Gradient Blur',
    code: {
      html:`<button class="btn-gradient-blur">
  Gradient Blur
</button>`,
      css: `.btn-gradient-blur {
  padding: 0.6em 2em;
  border: none;
  outline: none;
  color: rgb(255, 255, 255);
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.btn-gradient-blur:before {
  content: "";
  background: linear-gradient(
    45deg,
    #ff0000,
    #ff7300,
    #fffb00,
    #48ff00,
    #00ffd5,
    #002bff,
    #7a00ff,
    #ff00c8,
    #ff0000
  );
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  -webkit-filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing-btn-gradient-blur 20s linear infinite;
  transition: opacity 0.3s ease-in-out;
  border-radius: 10px;
}

@keyframes glowing-btn-gradient-blur {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}

.btn-gradient-blur:after {
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #222;
  left: 0;
  top: 0;
  border-radius: 10px;
}`
    }
  },
  {
    buttonName: 'Rounded Shadow',
    code:{
      html:`<button class="btn-rounded-shadow">
  Rounded Shadow
</button>`,
      css:`.btn-rounded-shadow {
  background-color: #fbeee0;
  border: 2px solid #422800;
  border-radius: 30px;
  box-shadow: #422800 4px 4px 0 0;
  color: #422800;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  font-size: 18px;
  padding: 0 18px;
  line-height: 50px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.btn-rounded-shadow:hover {
  background-color: #fff;
}

.btn-rounded-shadow:active {
  box-shadow: #422800 2px 2px 0 0;
  transform: translate(2px, 2px);
}`
    }
  },
  {
    buttonName: 'Colour Crush',
    code:{
      html:`<button class="btn-color-crush">
  Colour Crush
</button>`,
      css:`.btn-color-crush {
  --color: #00A97F;
  padding: 0.8em 1.7em;
  background-color: transparent;
  border-radius: .3em;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: .5s;
  font-weight: 400;
  font-size: 17px;
  border: 1px solid;
  font-family: inherit;
  text-transform: uppercase;
  color: var(--color);
  z-index: 1;
}
  
.btn-color-crush::before, .btn-color-crush::after {
  content: '';
  display: block;
  width: 50px;
  height: 50px;
  transform: translate(-50%, -50%);
  position: absolute;
  border-radius: 50%;
  z-index: -1;
  background-color: var(--color);
  transition: 1s ease;
}
  
.btn-color-crush::before {
  top: -1em;
  left: -1em;
}
  
.btn-color-crush::after {
  left: calc(100% + 1em);
  top: calc(100% + 1em);
}
  
.btn-color-crush:hover::before, .btn-color-crush:hover::after {
  height: 410px;
  width: 410px;
}
  
.btn-color-crush:hover {
  color: rgb(10, 25, 30);
}
  
.btn-color-crush:active {
  filter: brightness(.8);
}`
    }
  },
  {
    buttonName: 'Brackets Button',
    code: {
      html:`<button class="btn-brackets">
  Brackets Button
</button>`,
      css:`.btn-brackets {
  width: 10em;
  position: relative;
  height: 3.5em;
  border: 3px ridge #149CEA;
  outline: none;
  background-color: transparent;
  color: black;
  transition: 1s;
  border-radius: 0.3em;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}

.btn-brackets::after {
  content: "";
  position: absolute;
  top: -10px;
  left: 3%;
  width: 95%;
  height: 40%;
  background-color: white;
  transition: 0.5s;
  transform-origin: center;
}

.btn-brackets::before {
  content: "";
  transform-origin: center;
  position: absolute;
  top: 80%;
  left: 3%;
  width: 95%;
  height: 40%;
  background-color: white;
  transition: 0.5s;
}

.btn-brackets:hover::before, .btn-brackets:hover::after {
  transform: scale(0)
}

.btn-brackets:hover {
  box-shadow: inset 0px 0px 25px #1479EA;
}`
    }
  }
]

export const tailwindButtons:tailwindButton[] = [
  {
    buttonName: 'Pink Swipe',
    code: `<button className="px-8 z-30 py-4 bg-rose-400 rounded-md text-white relative font-semibold font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-rose-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#be123c;] hover:[text-shadow:2px_2px_2px_#fda4af] text-2xl">
  Hover Me
</button>`
  },
  {buttonName: 'Side Swipe',
    code: `<button className="w-[150px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
  Side Swipe
</button>`
  },
  {
    buttonName: 'Blink',
    code:`<button className="cursor-pointer relative group overflow-hidden border-2 px-8 py-2 border-green-500">
  <span className="font-bold text-white text-xl relative z-10 group-hover:text-green-500 duration-500">Blink</span>
  <span className="absolute top-0 left-0 w-full bg-green-500 duration-500 group-hover:-translate-x-full h-full"></span>
  <span className="absolute top-0 left-0 w-full bg-green-500 duration-500 group-hover:translate-x-full h-full"></span>
  <span className="absolute top-0 left-0 w-full bg-green-500 duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
  <span className="absolute delay-300 top-0 left-0 w-full bg-green-500 duration-500 group-hover:translate-y-full h-full"></span>
</button>`
  },
  {
    buttonName: 'Border Grow',
    code:`<button className="cursor-pointer uppercase bg-gray-100 px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition">
  Border Grow
</button>`
  },
  {
    buttonName: 'Shrinking Scarlet',
    code: `<button className="cursor-pointer inline-flex items-center rounded-full px-9 py-3 text-xl font-mono font-semibold text-rose-600 hover:text-white border-2 border-rose-600
    hover:bg-rose-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-75 hover:bg-rose-600 duration-300  focus:bg-transparent">
  Shrinking Violet
</button>`
  },
  {
    buttonName: 'Gradient Rise',
    code:`<button
  className="w-36 h-12 text-white font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-lg hover:scale-105 duration-200 hover:drop-shadow-2xl hover:shadow-[#7dd3fc] hover:cursor-pointer"
  >
    Gradient Rise
</button>`
  },
  {
    buttonName: 'Pulsing Button',
    code: `<button className="bg-blue-200 hover:bg-blue-400 text-black font-bold py-3 px-6 rounded-full shadow-lg shadow-neutral-650 hover:text-white transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
  Pulsing Button
</button>`
  },
  {
    buttonName: 'Circle Zone',
    code:`<button className="relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-14 w-56 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold">
  <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
  <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div>
  <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
  <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div>
  <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div>
  <p className="z-10">Circle Zone</p>
</button>`
  },
  {
    buttonName: 'Soft Colour Set',
    code: `<button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-white/10 dark:hover:bg-white/20 dark:text-white dark:hover:text-white">
  Button
</button>
<button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-100 text-gray-500 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-white/10 dark:hover:bg-white/20 dark:text-neutral-400 dark:hover:text-neutral-300">
  Button
</button>
<button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-teal-100 text-teal-800 hover:bg-teal-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-teal-900 dark:text-teal-500 dark:hover:text-teal-400">
  Button
</button>
<button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-900 dark:text-blue-400">
  Button
</button>
<button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-100 text-red-800 hover:bg-red-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-red-900 dark:text-red-500 dark:hover:text-red-400">
  Button
</button>
<button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-yellow-100 text-yellow-800 hover:bg-yellow-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-yellow-900 dark:text-yellow-500 dark:hover:text-yellow-400">
  Button
</button>
<button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-white/10 text-white hover:bg-white/20 disabled:opacity-50 disabled:pointer-events-none">
  Button
</button>`
  },
  {
    buttonName: 'Add to Cart',
    code:`<button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
  Add to cart
  <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="m5 11 4-7"></path>
    <path d="m19 11-4-7"></path>
    <path d="M2 11h20"></path>
    <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4"></path>
    <path d="m9 11 1 9"></path>
    <path d="M4.5 15.5h15"></path>
    <path d="m15 11-1 9"></path>
  </svg>
</button>`
  },
  {
    buttonName: 'Subtle White Set',
    code: `<button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm bg-white hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none ">
  Button
</button>
<button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-500 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
  Button
</button>
<button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-teal-500 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
  Button
</button>
<button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-blue-600 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
  Button
</button>
<button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-red-500 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
  Button
</button>
<button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-yellow-500 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
  Button
</button>`
  }
]
