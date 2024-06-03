import { cssSection } from "../utils/sectionsUtils"
import '../css/sections.css'
import SectionsCode from "./SectionsCode"
import DOMPurify from 'dompurify'; 

interface SectionsCodeProps {
  sectionName: string,
  cssSections: cssSection[]
}

export default function SectionsDisplay({ sectionName,cssSections }: SectionsCodeProps) {
  const selectedCSS: cssSection | undefined = cssSections.find((section: cssSection) => section.sectionName === sectionName);
  const sectionTitle:string = DOMPurify.sanitize(selectedCSS?.sectionName);
  const sectionHTML:string = DOMPurify.sanitize(selectedCSS?.code.html);
  return(
      <section className="w-[100%]">
        <h3 className="font-bold text-2xl text-left mb-8 max-w-screen-xl m-auto">{sectionTitle}</h3>
        <div dangerouslySetInnerHTML={{__html:sectionHTML}}></div>
        <SectionsCode key={sectionName} sectionName={sectionName} cssSections={cssSections} />
      </section>
  )
}