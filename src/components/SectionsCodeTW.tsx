import { useState } from "react";
import { tailwindSection } from "../utils/sectionsUtils"
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import css from 'react-syntax-highlighter/dist/esm/languages/hljs/css';
import htmlbars from 'react-syntax-highlighter/dist/esm/languages/hljs/htmlbars';
import docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';

SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('htmlbars', htmlbars);

interface SectionsCodeProps {
  sectionName: string,
  tailwindSections: tailwindSection[],
}

export default function SectionsCodeTW({ sectionName, tailwindSections }: SectionsCodeProps) {
  const [showCode, setShowCode] = useState<boolean>(false)
  
  function handleShowCode():void {
    setShowCode(!showCode)
  }

  function handleCSSSectionCopy():void {
    const selectedSection = tailwindSections.find(section => section.sectionName === sectionName);
    if(selectedSection){
      navigator.clipboard.writeText(`React Code:
${selectedSection.code}`
    )}
  }

  const selectedTailwind: tailwindSection | undefined = tailwindSections.find((section: tailwindSection) => section.sectionName === sectionName);
  const sectionTW:string | undefined = selectedTailwind?.code;
  return (<>
    <div className="flex gap-8 my-8 w-[100%] max-w-screen-xl m-auto" key={sectionName}>
      <button onClick={handleShowCode} className="bg-black h-[50px] my-3 px-8 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-100 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-rose-500 before:to-rose-500 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
        {showCode? 'Hide Code' : 'Show Code'}
      </button>
      <button onClick={handleCSSSectionCopy} className="bg-black h-[50px] my-3 px-8 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-100 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-rose-500 before:to-rose-500 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
        Copy Code
      </button>
    </div>
    
    <section className={`${showCode ? '': 'hidden'} text-left text-sm w-[100%] max-w-screen-xl m-auto`}>
        <div >
          <h3 className="font-bold mb-4">React & Tailwind Code</h3>
          {sectionTW ?
          <SyntaxHighlighter className="h-96" wrapLongLines={true} language="html" style={docco}>
            {sectionTW}
          </SyntaxHighlighter>          
          : null
          }
        </div>
    </section>
      </>
  )
}