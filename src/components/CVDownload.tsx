import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { openPrintableCV } from '@/utils/generateCV';

const CVDownload = () => {
  const [lang, setLang] = useState<'en' | 'fr' | 'ar'>('fr');

  const handleDownload = () => {
    openPrintableCV(lang);
  };

  return (
    <div className="flex items-center gap-3">
      <div className="flex gap-2">
        <button className={`px-3 py-2 rounded ${lang === 'fr' ? 'bg-primary text-white' : 'bg-muted'}`} onClick={() => setLang('fr')}>FR</button>
        <button className={`px-3 py-2 rounded ${lang === 'en' ? 'bg-primary text-white' : 'bg-muted'}`} onClick={() => setLang('en')}>EN</button>
        <button className={`px-3 py-2 rounded ${lang === 'ar' ? 'bg-primary text-white' : 'bg-muted'}`} onClick={() => setLang('ar')}>AR</button>
      </div>
      <Button className="btn-secondary" onClick={handleDownload}>Download CV</Button>
    </div>
  );
};

export default CVDownload;
