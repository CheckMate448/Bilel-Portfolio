export function openPrintableCV(lang: 'en' | 'fr' | 'ar' = 'fr') {
  try {
    
    const provided = {
      name: 'BILEL GNAOUIA',
      title: 'Graphic Designer',
      phone: '+216 22 645 407',
      location: 'Tunis',
      email: 'bilelg363@gmail.com',
      // we will fetch language-specific strings from translations below
      experience: [],
      education: {
        institution: 'Collège la Salle',
        degree: 'Design Graphique',
        years: '2023--2025',
        certification: 'Adobe Photoshop, Illustrator, InDesign, UI/UX Design',
        club: 'JCI Collège la Salle'
      },
      skills: {
        languages: ['Arabe','Français','Anglais'],
        tools: ['Photoshop', 'Illustrator', 'InDesign', 'UI/UX Design']
      },
      interests: 'NON SPÉCIFIÉS'
    };

    // Translated content for the CV body (profile, experience, education field labels, etc.)
    const contentTranslations: Record<string, any> = {
      en: {
        profile: `Creative at heart, I love bringing ideas to life through graphic design. Whether creating a visual identity, an impactful social media post, or a well‑designed website, I apply my attention to detail and mastery of tools (Photoshop, Illustrator, InDesign...) to deliver unique projects. Curious and constantly seeking inspiration, I strive to combine aesthetics and effectiveness to capture and leave a lasting impression.`,
        experience: [
          'Graphic Designer — Enix ads: Created advertising visuals, banners and digital campaigns; optimized for social media.',
          'Graphic Designer — Bharcom: Designed visual identities and print/digital materials; collaborated with marketing teams on deliverables.',
          'Created visual identities and communication materials (logos, posters, web banners, etc.).',
          'Designed content for social media and the web.',
          'Collaborated with clients to understand their needs and propose creative solutions.'
        ],
        education: {
          degree: 'Graphic Design',
          certificationLabel: 'Certification',
          clubLabel: 'Club'
        },
        skills: {
          languagesLabel: 'Languages',
          toolsLabel: 'Tools'
        },
        interests: 'NOT SPECIFIED'
      },
      fr: {
        profile: `Créatif dans l'âme, j'adore donner vie aux idées à travers le design graphique. Que ce soit pour créer une identité visuelle, un post impactant sur les réseaux ou un site au design soigné, je mets mon sens du détail et ma maîtrise des outils (Photoshop, Illustrator, InDesign...) au service de projets uniques. Curieux et toujours en quête d'inspiration, je cherche à allier esthétique et efficacité pour captiver et marquer les esprits.`,
        experience: [
          "Graphic Designer — Enix ads: Création de visuels publicitaires, bannières et campagnes digitales; optimisation pour les réseaux sociaux.",
          "Graphic Designer — Bharcom: Conception d'identités visuelles et supports print/numériques; collaboration avec les équipes marketing pour livrables.",
          "Création d'identités visuelles et de supports de communication (logos, affiches, bannières web, etc.).",
          'Conception de contenus pour les réseaux sociaux et le web.',
          'Collaboration avec les clients pour comprendre leurs besoins et proposer des solutions créatives.'
        ],
        education: {
          degree: 'Design Graphique',
          certificationLabel: 'Certification',
          clubLabel: 'Club'
        },
        skills: {
          languagesLabel: 'Langues',
          toolsLabel: 'Outils'
        },
        interests: 'NON SPÉCIFIÉS'
      },
      ar: {
        profile: `مبدع بطبعي، أحب أن أُحيي الأفكار عبر التصميم الجرافيكي. سواء في إنشاء هوية بصرية، أو منشور مؤثر على الشبكات الاجتماعية، أو موقع إلكتروني بتصميم أنيق، أضع حسّي للتفاصيل وإتقاني للأدوات (فوتوشوب، إليستريتور، إنديزاين...) في خدمة مشاريع فريدة. أنا فضولي ودائم البحث عن الإلهام، وأسعى لدمج الجمال والفعالية لترك انطباع دائم.`,
        experience: [
          'مصمم جرافيك — Enix ads: إنشاء مرئيات إعلانية، لافتات وحملات رقمية؛ التحسين للشبكات الاجتماعية.',
          'مصمم جرافيك — Bharcom: تصميم هويات بصرية ومواد للطباعة/الرقمية؛ التعاون مع فرق التسويق على التسليمات.',
          'إنشاء هويات بصرية ومواد تواصل (شعارات، ملصقات، لافتات ويب...) .',
          'تصميم محتوى لوسائل التواصل الاجتماعي والويب.',
          'التعاون مع العملاء لفهم احتياجاتهم واقتراح حلول إبداعية.'
        ],
        education: {
          degree: 'تصميم جرافيكي',
          certificationLabel: 'الشهادات',
          clubLabel: 'النادي'
        },
        skills: {
          languagesLabel: 'اللغات',
          toolsLabel: 'الأدوات'
        },
        interests: 'غير محدد'
      }
    };

    const CT = contentTranslations;
    const content = CT[lang] || CT['fr'];
    // override provided fields with selected-language content
    const aboutText = content.profile;
    provided.experience = content.experience;
    // education degree and labels
    const eduDegree = content.education.degree || provided.education.degree;
    const certificationLabel = content.education.certificationLabel || 'Certification';
    const clubLabel = content.education.clubLabel || 'Club';
    const interestsText = content.interests || provided.interests;

    // Extract info from DOM with reasonable fallbacks
    const root = document;

    const name = provided.name;
    const subtitle = provided.title;
    // Title translations (Graphic Designer)
    const titleTranslations: Record<string, string> = {
      en: 'Graphic Designer',
      fr: 'Graphique Designer',
      ar: 'مصمم جرافيك'
    };
    const subtitleText = titleTranslations[lang] || subtitle;

    // Contact: look for mailto and tel links
    const emailEl = root.querySelector('a[href^="mailto:"]') as HTMLAnchorElement | null;
    const phoneEl = root.querySelector('a[href^="tel:"]') as HTMLAnchorElement | null;
  // Prefer provided contact info
  const email = provided.email || (emailEl ? emailEl.href.replace('mailto:', '') : '');
  const phone = provided.phone || (phoneEl ? phoneEl.href.replace('tel:', '') : '');

    // About: prefer an element with id or section named about, else first paragraph in About
    const aboutSection = root.querySelector('#about, section#about, [data-about]') || null;
  // Use provided or translated profile text
  const about = aboutText;

    // Skills: collect badge text or list items
  // Use provided skills
  const skills = Array.isArray(provided.skills.tools) ? provided.skills.tools : [];


    // Work experience: try to find sections labelled 'Experience' or list items under .experience
    // Use provided experience
    const experiences: string[] = provided.experience;

    // Projects: titles from project cards
  const projectNodes = Array.from(root.querySelectorAll('section [class*="card-elevated"] h3, section [class*="card-elevated"] .text-md, .projects h3')) as HTMLElement[];
  const projects = projectNodes.length ? projectNodes.map(n => (n.textContent || '').trim()).filter(Boolean) : [];

    // Profile image: try to find profile photo in hero or components
    const imgEl = root.querySelector('img[alt*="profile"], img[src*="profile"], .hero img, .avatar img') as HTMLImageElement | null;
    const imgSrc = imgEl ? imgEl.src : '';

    // Translations for section headings
    const t: Record<string, Record<string, string>> = {
      en: {
        profile: 'Profile',
        work: 'Work Experience',
        education: 'Education',
        skills: 'Skills',
        projects: 'Projects',
        languages: 'Languages',
        interests: 'Interests',
        generated: 'Generated from portfolio — use the browser print dialog to Save as PDF.'
      },
      fr: {
        profile: 'Profil',
        work: 'Expérience Professionnelle',
        education: 'Formation',
        skills: 'Compétences',
        projects: 'Projets',
        languages: 'Langues',
        interests: "Centres d'intérêt",
        generated: "Généré depuis le portfolio — utilisez l'option d'impression du navigateur pour enregistrer en PDF."
      },
      ar: {
        profile: 'الملف الشخصي',
        work: 'الخبرة المهنية',
        education: 'التعليم',
        skills: 'المهارات',
        projects: 'المشاريع',
        languages: 'اللغات',
        interests: 'الهوايات',
        generated: 'تم التوليد من الموقع — استخدم طباعة المتصفح لحفظ كملف PDF.'
      }
    };

    const trans = t[lang] || t['fr'];

    // Build a clean CV HTML with subtle horizontal separators
    const dirStyles = lang === 'ar' ? `
      body { direction: rtl; text-align: right; }
      .left { flex-direction: row-reverse; }
    ` : '';

    const styles = `
      @media print { @page { size: A4; margin: 20mm; } }
      body { font-family: 'Inter', Arial, Helvetica, sans-serif; color: #111; background: #fff; margin: 0; padding: 28px; }
      .cv { max-width: 800px; margin: 0 auto; }
      .top { display:flex; align-items:center; justify-content:space-between; gap:16px; }
      .left { display:flex; gap:16px; align-items:center; }
      .profile-pic { width:96px; height:96px; border-radius:8px; object-fit:cover; }
      h1 { font-size:22px; margin:0; font-weight:700; }
      h2 { font-size:13px; margin:4px 0 0 0; color:#555; font-weight:600 }
      .contact { text-align:right; font-size:13px; color:#333 }
      .section { margin-top:18px; padding-top:12px; }
      .divider { border-top:1px solid #e6e6e6; margin-top:12px; }
      .section h3 { margin:0 0 8px 0; font-size:14px; color:#111 }
      ul { margin:6px 0 0 18px; }
      li { margin-bottom:6px; }
      .muted { color:#666; font-size:13px }
      .skills-list { display:flex; flex-wrap:wrap; gap:8px; }
      .skill-pill { background:#f3f4f6; color:#111; padding:6px 10px; border-radius:999px; font-size:12px }
      a { color:#0b5fff; text-decoration: none }
    ` + dirStyles;

  const profileImgHtml = imgSrc ? `<img src="${imgSrc}" class="profile-pic" alt="profile"/>` : '';

  const skillsHtml = skills.length ? skills.map(s => `<span class="skill-pill">${s}</span>`).join('') : '<div class="muted">No skills listed</div>';

  const experienceHtml = experiences.length ? '<ul>' + experiences.map(e => `<li>${e}</li>`).join('') + '</ul>' : '<div class="muted">No work experience listed on page.</div>';
  const projectsHtml = projects.length ? '<ul>' + projects.map(p => `<li>${p}</li>`).join('') + '</ul>' : '<div class="muted">No projects listed on page.</div>';

  // Education HTML from provided.education
  const edu = provided.education;
  const educationHtml = `
    <div>
      <div style="font-weight:600">${edu.institution} — ${eduDegree}</div>
      <div class="muted">${edu.years}</div>
      <div style="margin-top:6px">${certificationLabel}: ${edu.certification}</div>
      <div style="margin-top:4px">${clubLabel}: ${edu.club}</div>
    </div>
  `;

  // Languages and interests
  const languages = Array.isArray(provided.skills.languages) ? provided.skills.languages : [];
  const languagesHtml = languages.length ? '<ul>' + languages.map(l => `<li>${l}</li>`).join('') + '</ul>' : '<div class="muted">No languages listed</div>';
  const interestsHtml = interestsText ? `<div>${interestsText}</div>` : '<div class="muted">No interests listed</div>';

    const html = `
      <!doctype html>
      <html lang="${lang}" dir="${lang === 'ar' ? 'rtl' : 'ltr'}">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <title>CV - ${name}</title>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
          <style>${styles}</style>
        </head>
        <body>
          <div class="cv">
            <div class="top">
              <div class="left">
                ${profileImgHtml}
                <div>
                  <h1>${name}</h1>
                  <h2>${subtitleText}</h2>
                </div>
              </div>
              <div class="contact">
                ${phone ? `<div>${phone}</div>` : ''}
                ${email ? `<div>${email}</div>` : ''}
              </div>
            </div>

            <div class="divider"></div>

            <div class="section">
              <h3>${trans.profile}</h3>
              <div class="muted">${about || (lang === 'fr' ? 'Résumé professionnel non trouvé sur la page.' : (lang === 'en' ? 'Short professional summary not found on page.' : 'ملخص مهني غير موجود على الصفحة.'))}</div>
            </div>

            <div class="divider"></div>

            <div class="section">
              <h3>${trans.work}</h3>
              ${experienceHtml}
            </div>

            <div class="divider"></div>

            <div class="section">
              <h3>${trans.education}</h3>
              ${educationHtml}
            </div>

            <div class="divider"></div>

            <div class="section">
              <h3>${trans.skills}</h3>
              <div class="skills-list">${skillsHtml}</div>
            </div>

            <div class="divider"></div>

            <div class="section">
              <h3>${trans.projects}</h3>
              ${projectsHtml}
            </div>

            <div class="divider"></div>

            <div class="section">
              <h3>${trans.languages}</h3>
              ${languagesHtml}
            </div>

            <div class="divider"></div>

            <div class="section">
              <h3>${trans.interests}</h3>
              ${interestsHtml}
            </div>

            <div style="margin-top:18px; font-size:12px; color:#777">${trans.generated}</div>
          </div>
        </body>
      </html>
    `;

    const w = window.open('', '_blank');
    if (!w) {
      alert('Unable to open print window. Please allow popups and try again.');
      return;
    }
    w.document.write(html);
    w.document.close();
    // Wait for images to load (if any) before printing
    const tryPrint = () => {
      try {
        w.focus();
        w.print();
      } catch (e) {
        console.warn('Print failed, retrying', e);
        setTimeout(tryPrint, 500);
      }
    };
    setTimeout(tryPrint, 600);

  } catch (err) {
    console.error('CV generation failed', err);
    alert('CV generation failed. Check console for details.');
  }
}
