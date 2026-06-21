// ============================================================================
// data.js — Single Source of Truth (Data Layer)
// Trump Effects: A comprehensive editorial analysis
// OOAD: No DOM, no rendering. Pure data structures only.
// ============================================================================

// ---------------------------------------------------------------------------
// Site Metadata
// ---------------------------------------------------------------------------
const SiteMetadata = Object.freeze({
  title: "Trump Effects",
  subtitle:
    "A comprehensive analysis of the most controversial actions and their global impact",
  footer:
    "Trump Effects © 2025 — An independent editorial analysis. All facts sourced from public records, court documents, and verified reporting. This project aims to document policy impacts objectively.",
  lastUpdated: "June 2025",
});

// ---------------------------------------------------------------------------
// Action Categories (Enum)
// ---------------------------------------------------------------------------
const ActionCategory = Object.freeze({
  MILITARY: Object.freeze({
    id: "military",
    label: "Military & Conflict",
    color: "#ef4444",
  }),
  TRADE: Object.freeze({
    id: "trade",
    label: "Trade & Economy",
    color: "#f59e0b",
  }),
  DIPLOMACY: Object.freeze({
    id: "diplomacy",
    label: "Diplomacy & Relations",
    color: "#6366f1",
  }),
  RIGHTS: Object.freeze({
    id: "rights",
    label: "Human Rights",
    color: "#ec4899",
  }),
  TECH: Object.freeze({
    id: "tech",
    label: "Technology",
    color: "#06b6d4",
  }),
  ENVIRONMENT: Object.freeze({
    id: "environment",
    label: "Environment",
    color: "#10b981",
  }),
  INTELLIGENCE: Object.freeze({
    id: "intelligence",
    label: "Intelligence & Law",
    color: "#8b5cf6",
  }),
  IMMIGRATION: Object.freeze({
    id: "immigration",
    label: "Immigration",
    color: "#f97316",
  }),
  TERRITORIAL: Object.freeze({
    id: "territorial",
    label: "Territorial Claims",
    color: "#14b8a6",
  }),
});

// ---------------------------------------------------------------------------
// Actions Data — 14 Comprehensive Entries
// ---------------------------------------------------------------------------
const ActionsData = Object.freeze([
  // =========================================================================
  // ACTION 1: Israel-Gaza War Support
  // =========================================================================
  Object.freeze({
    id: "israel-gaza-war-support",
    title: "Israel-Gaza War Support",
    subtitle: "Unconditional backing of the deadliest urban campaign in modern history",
    category: ActionCategory.MILITARY,
    date: "Oct 2023 – Present",
    controversyLevel: 92,
    image: "images/israel_gaza.png",
    imageGradient:
      "linear-gradient(135deg, #1e3a5f 0%, #ffffff 40%, #15803d 100%)",
    summary:
      "Trump offered unwavering, full-throated support for Israel's military offensive in Gaza, publicly urging Netanyahu to 'finish the job' and calling for Gaza to be 'cleaned out.' His administration fast-tracked billions in arms shipments while vetoing multiple UN ceasefire resolutions.",
    overview:
      "Following the October 7, 2023 Hamas attack that killed roughly 1,200 Israelis, Trump positioned himself as Israel's most vocal international ally. He backed Prime Minister Netanyahu's scorched-earth campaign in Gaza, where over 40,000 Palestinians — roughly half of them women and children — were killed within 14 months. The US continued shipping $3.8 billion in annual military aid plus emergency packages totaling over $14 billion, even as the International Court of Justice issued provisional orders against Israel for potential genocide. Global protest movements erupted on every continent, with millions marching in London, Istanbul, Jakarta, and across US college campuses. Trump dismissed the casualty figures, labelled protesters 'pro-Hamas,' and threatened to cut funding to universities allowing encampments.",
    keyFacts: Object.freeze([
      "Over 40,000 Palestinians killed in Gaza by late 2024, with roughly 70% being women and children according to Gaza's Health Ministry.",
      "The US approved more than $14 billion in emergency military aid to Israel on top of the existing $3.8 billion annual package.",
      "Trump vetoed or opposed at least four UN Security Council ceasefire resolutions between October 2023 and mid-2024.",
      "The International Court of Justice ordered provisional measures against Israel in January 2024, finding plausible risk of genocide.",
      "An estimated 1.9 million Gazans — nearly 85% of the population — were internally displaced by the bombardment.",
      "Trump called for Gaza to be 'cleaned out' and suggested Egypt and Jordan absorb Palestinian refugees permanently.",
      "College campus protests across 60+ US universities resulted in over 3,000 arrests during spring 2024.",
    ]),
    globalEffects: Object.freeze([
      Object.freeze({
        title: "Humanitarian Catastrophe",
        description:
          "Gaza's healthcare system collapsed entirely. All major hospitals were destroyed or severely damaged. Famine conditions affected the entire 2.3 million population, with the UN warning of imminent mass starvation.",
      }),
      Object.freeze({
        title: "Regional Destabilization",
        description:
          "The conflict triggered Hezbollah rocket attacks on northern Israel, Houthi attacks on Red Sea shipping, and Iranian missile strikes — bringing the Middle East closer to a full-scale regional war than at any point since 1973.",
      }),
      Object.freeze({
        title: "Global Protest Movement",
        description:
          "The largest sustained global protest movement since the Iraq War erupted, with millions marching worldwide. US campuses saw their biggest activism wave since Vietnam, fundamentally reshaping youth political engagement.",
      }),
      Object.freeze({
        title: "International Law Crisis",
        description:
          "ICJ rulings, ICC arrest warrant applications against Israeli and Hamas leaders, and South Africa's genocide case tested the entire framework of international humanitarian law and US credibility in upholding it.",
      }),
    ]),
    affectedCountries: Object.freeze([
      Object.freeze({
        name: "Palestine",
        flag: "🇵🇸",
        impact:
          "Over 40,000 killed, 85% of Gaza's population displaced, and virtually all civilian infrastructure destroyed. Entire neighborhoods were leveled, creating what the UN called the worst humanitarian disaster of the 21st century.",
      }),
      Object.freeze({
        name: "Israel",
        flag: "🇮🇱",
        impact:
          "Approximately 1,200 killed in the October 7 attack. Ongoing rocket threats from multiple fronts strained the economy and society. International isolation grew as European allies distanced themselves from the campaign's conduct.",
      }),
      Object.freeze({
        name: "Iran",
        flag: "🇮🇷",
        impact:
          "Launched its first-ever direct missile strike on Israeli soil in April 2024. The conflict empowered Iran's proxy network across the region and heightened the risk of US-Iran military confrontation.",
      }),
      Object.freeze({
        name: "Lebanon",
        flag: "🇱🇧",
        impact:
          "Hezbollah exchanged daily fire with Israel along the border, displacing over 80,000 Lebanese civilians. A full-scale Israeli invasion remained a constant threat, devastating an already collapsed economy.",
      }),
      Object.freeze({
        name: "Egypt",
        flag: "🇪🇬",
        impact:
          "Faced enormous pressure to open the Rafah border crossing and absorb refugees. Egypt deployed additional troops to the Sinai border and resisted Trump's suggestion that it permanently resettle Gazans.",
      }),
      Object.freeze({
        name: "Jordan",
        flag: "🇯🇴",
        impact:
          "Already hosting 2+ million Palestinian refugees, Jordan faced domestic unrest as public fury over Gaza boiled over. King Abdullah warned of a 'red line' and recalled ambassadors temporarily.",
      }),
    ]),
    status: "Ongoing",
  }),

  // =========================================================================
  // ACTION 2: Epstein Files Declassification
  // =========================================================================
  Object.freeze({
    id: "epstein-files-declassification",
    title: "Epstein Files Declassification",
    subtitle: "The secrets they never wanted you to see",
    category: ActionCategory.INTELLIGENCE,
    date: "Jan 2025",
    controversyLevel: 95,
    image: "images/epstein_files.png",
    imageGradient:
      "linear-gradient(135deg, #1e1b4b 0%, #4c1d95 50%, #f59e0b 100%)",
    summary:
      "Trump signed an executive order to declassify files related to Jeffrey Epstein, the JFK assassination, and the MLK assassination. The move promised unprecedented transparency into some of America's darkest secrets, but critics questioned what was actually released versus what remained redacted.",
    overview:
      "On his first day back in office in January 2025, Trump signed an executive order mandating the declassification of files related to Jeffrey Epstein's sex trafficking network, as well as the assassinations of President John F. Kennedy and Reverend Martin Luther King Jr. The Epstein files drew the most public attention — Epstein, who died in federal custody in August 2019 under disputed circumstances, had documented connections to presidents, princes, tech billionaires, and Hollywood figures. The released documents contained flight logs, deposition transcripts, and FBI interview summaries that named dozens of prominent individuals. However, significant portions remained redacted on national security grounds, fueling accusations that the declassification was selective rather than complete. The public response was explosive — 'Epstein files' trended globally for weeks, and demands for accountability intensified.",
    keyFacts: Object.freeze([
      "Trump signed the executive order on January 20, 2025, his first day back in office, fulfilling a major campaign promise.",
      "Jeffrey Epstein was found dead in his Manhattan jail cell on August 10, 2019, with the official ruling of suicide widely disputed by the public.",
      "Released flight logs for Epstein's private jet showed over 700 flights with high-profile passengers between 1995 and 2013.",
      "The JFK files included previously classified CIA and FBI documents spanning over 50,000 pages from the 1960s investigation.",
      "Several key names and passages in the Epstein documents were redacted, with intelligence agencies citing 'sources and methods' protections.",
      "Public polling showed 72% of Americans believed Epstein did not act alone and that powerful accomplices remained unaccountable.",
      "The declassification order also covered the MLK assassination, revealing FBI surveillance records that had been sealed since 1968.",
    ]),
    globalEffects: Object.freeze([
      Object.freeze({
        title: "Erosion of Institutional Trust",
        description:
          "The partial releases deepened public skepticism about government transparency. The fact that files were still redacted decades later reinforced conspiracy theories and undermined faith in federal institutions across the political spectrum.",
      }),
      Object.freeze({
        title: "Global Accountability Pressure",
        description:
          "Named individuals in the UK, France, and the Caribbean faced renewed public scrutiny and legal pressure. Prince Andrew's settlement and Ghislaine Maxwell's conviction were re-examined in light of new evidence.",
      }),
      Object.freeze({
        title: "Political Weaponization of Transparency",
        description:
          "Critics argued Trump used declassification as a political weapon — releasing information damaging to opponents while keeping his own connections under wraps. The selective nature of the releases became a partisan flashpoint.",
      }),
    ]),
    affectedCountries: Object.freeze([
      Object.freeze({
        name: "United States",
        flag: "🇺🇸",
        impact:
          "The declassification reignited debates about elite accountability, government cover-ups, and the failures of the justice system. Multiple congressional hearings were demanded, and public trust in federal institutions dropped to historic lows.",
      }),
      Object.freeze({
        name: "United Kingdom",
        flag: "🇬🇧",
        impact:
          "Connections between Epstein and members of the British establishment, particularly Prince Andrew, drew renewed media scrutiny. Calls for a formal UK parliamentary inquiry intensified following the document releases.",
      }),
      Object.freeze({
        name: "France",
        flag: "🇫🇷",
        impact:
          "French modeling agency connections and Epstein's Paris apartment were highlighted in released FBI files. French prosecutors reopened preliminary investigations into potential trafficking victims recruited in France.",
      }),
    ]),
    status: "Ongoing",
  }),

  // =========================================================================
  // ACTION 3: Venezuela Military Threats
  // =========================================================================
  Object.freeze({
    id: "venezuela-military-threats",
    title: "Venezuela Military Threats",
    subtitle: "Maximum pressure on a nation already in freefall",
    category: ActionCategory.MILITARY,
    date: "2017 – Present",
    controversyLevel: 78,
    image: null,
    imageGradient:
      "linear-gradient(135deg, #b91c1c 0%, #fbbf24 50%, #1e3a5f 100%)",
    summary:
      "Trump repeatedly threatened military intervention against Venezuela's Maduro regime, recognized opposition leader Juan Guaidó as president, and imposed crippling oil sanctions that deepened one of the Western Hemisphere's worst humanitarian crises.",
    overview:
      "Beginning in 2017, Trump took an increasingly aggressive stance toward Venezuela, openly stating that a 'military option' was on the table. In January 2019, the US recognized opposition leader Juan Guaidó as the legitimate president, a dramatic move followed by 50+ nations. Sweeping sanctions on Venezuela's state oil company PDVSA and its gold sector devastated an already crumbling economy — GDP contracted by over 75% between 2014 and 2021, the worst peacetime collapse in modern history. Hyperinflation reached 1,000,000% at its peak. Over 7.7 million Venezuelans fled the country, creating the largest refugee crisis in Latin American history and straining neighboring Colombia, Brazil, and Peru. Despite the maximum pressure campaign, Maduro remained firmly in power, backed by Russia, China, and Cuba.",
    keyFacts: Object.freeze([
      "Trump publicly stated a military option for Venezuela was 'not off the table' at a press conference in August 2017, alarming Latin American allies.",
      "The US recognized Juan Guaidó as Venezuela's interim president in January 2019, followed by over 50 other nations.",
      "Sanctions on PDVSA slashed Venezuela's oil revenue by an estimated 99%, from $32 billion in 2014 to under $500 million by 2020.",
      "Venezuela's GDP collapsed by over 75% between 2014 and 2021, making it the worst peacetime economic contraction in modern history.",
      "Over 7.7 million Venezuelans have fled the country since 2015, creating the largest refugee displacement in Latin American history.",
      "Hyperinflation in Venezuela peaked at an annualized rate of approximately 1,000,000% in 2018, rendering the currency essentially worthless.",
    ]),
    globalEffects: Object.freeze([
      Object.freeze({
        title: "Refugee Crisis Across the Americas",
        description:
          "Over 7.7 million Venezuelans fled to neighboring countries, overwhelming social services in Colombia (2.9M refugees), Peru (1.5M), Ecuador, Brazil, and Chile. The crisis rivaled Syria in scale.",
      }),
      Object.freeze({
        title: "Oil Market Disruption",
        description:
          "Sanctions removed roughly 1.5 million barrels per day from global oil markets, contributing to price volatility and forcing US refineries that depended on Venezuelan heavy crude to seek alternatives from the Middle East.",
      }),
      Object.freeze({
        title: "Geopolitical Realignment",
        description:
          "Russia deployed military advisors, China extended over $60 billion in loans, and Cuba provided intelligence support — turning Venezuela into a Cold War-style proxy battleground in America's own hemisphere.",
      }),
    ]),
    affectedCountries: Object.freeze([
      Object.freeze({
        name: "Venezuela",
        flag: "🇻🇪",
        impact:
          "Economic collapse wiped out the middle class entirely. Hospitals ran without medicine, schools without teachers. The average Venezuelan lost 24 pounds in body weight due to food shortages during the peak crisis years.",
      }),
      Object.freeze({
        name: "Colombia",
        flag: "🇨🇴",
        impact:
          "Absorbed nearly 2.9 million Venezuelan refugees — the largest number of any country. Border cities like Cúcuta were overwhelmed, and Colombia spent billions integrating refugees while managing its own internal conflicts.",
      }),
      Object.freeze({
        name: "Brazil",
        flag: "🇧🇷",
        impact:
          "Northern states like Roraima saw Venezuelan arrivals exceed 10% of the local population. The Brazilian military was deployed to manage the border, and anti-immigrant tensions flared in border towns.",
      }),
      Object.freeze({
        name: "Cuba",
        flag: "🇨🇺",
        impact:
          "As Maduro's key political ally, Cuba faced intensified US sanctions and was returned to the State Sponsors of Terrorism list. Cuban intelligence and military advisors embedded in Venezuela became a US target.",
      }),
    ]),
    status: "Ongoing",
  }),

  // =========================================================================
  // ACTION 4: TikTok Ban & Forced Sale
  // =========================================================================
  Object.freeze({
    id: "tiktok-ban-forced-sale",
    title: "TikTok Ban & Forced Sale",
    subtitle: "170 million users caught in a US-China tech cold war",
    category: ActionCategory.TECH,
    date: "2020 – 2025",
    controversyLevel: 74,
    image: "images/tiktok_ban.png",
    imageGradient:
      "linear-gradient(135deg, #06b6d4 0%, #ec4899 50%, #1e1b4b 100%)",
    summary:
      "Trump initiated a years-long effort to ban TikTok from the United States, citing Chinese national security threats. The saga culminated in a Supreme Court-upheld ban and forced divestiture, affecting 170 million American users and reshaping the global tech landscape.",
    overview:
      "In August 2020, Trump signed an executive order to ban TikTok unless its Chinese parent company ByteDance sold its US operations within 45 days. The order cited national security concerns — alleging that TikTok's data collection practices could allow the Chinese Communist Party to access personal information of 170 million American users. After legal battles and delays spanning two administrations, Congress passed the Protecting Americans from Foreign Adversary Controlled Applications Act in April 2024, mandating divestiture by January 2025. The Supreme Court unanimously upheld the law in January 2025. Trump, now back in office, granted a 75-day extension and brokered a deal involving Oracle and other US investors taking majority ownership. The saga set a precedent for government authority over foreign-owned tech platforms and ignited fierce debates about data privacy, free speech, and digital sovereignty.",
    keyFacts: Object.freeze([
      "TikTok had approximately 170 million monthly active users in the United States at the time of the ban, making it one of the most popular apps in the country.",
      "The Supreme Court unanimously upheld the TikTok ban in January 2025, ruling that national security concerns justified the restriction on speech.",
      "ByteDance was valued at approximately $225 billion, making the forced sale one of the largest government-mandated divestitures in tech history.",
      "Trump initially tried to ban TikTok via executive order in August 2020, but federal courts blocked the action on First Amendment grounds.",
      "TikTok's algorithm was trained on data from over 1 billion global users, raising concerns about Chinese AI capabilities derived from American user data.",
      "India banned TikTok in June 2020 along with 58 other Chinese apps following border clashes, removing 200 million Indian users overnight.",
      "Content creators earning livelihoods on TikTok — estimated at over 5 million Americans — faced potential income loss from the ban.",
    ]),
    globalEffects: Object.freeze([
      Object.freeze({
        title: "Digital Sovereignty Precedent",
        description:
          "The TikTok ban established that governments could force the sale or shutdown of foreign-owned tech platforms on national security grounds, inspiring similar legislative efforts in the EU, Australia, and Canada.",
      }),
      Object.freeze({
        title: "US-China Tech Decoupling",
        description:
          "The forced sale accelerated the broader US-China tech cold war. China responded by tightening its own export controls on algorithms and AI technology, further splitting the global internet into competing spheres.",
      }),
      Object.freeze({
        title: "Creator Economy Disruption",
        description:
          "Millions of content creators, small businesses, and influencers who depended on TikTok for income faced existential uncertainty. The ban highlighted the fragility of building livelihoods on platforms subject to geopolitical forces.",
      }),
    ]),
    affectedCountries: Object.freeze([
      Object.freeze({
        name: "China",
        flag: "🇨🇳",
        impact:
          "Beijing condemned the ban as 'digital bullying' and retaliated with restrictions on US tech firms operating in China. ByteDance's forced divestiture was seen as a direct assault on China's tech sovereignty and global ambitions.",
      }),
      Object.freeze({
        name: "United States",
        flag: "🇺🇸",
        impact:
          "170 million users faced losing access to their primary social platform. The ban divided Americans — conservatives supported the national security rationale while younger users and civil libertarians opposed government censorship.",
      }),
      Object.freeze({
        name: "India",
        flag: "🇮🇳",
        impact:
          "India had already banned TikTok in 2020 after border clashes with China, removing 200 million users. Domestic alternatives like Moj and Josh filled the void, and India's ban served as a template for the US action.",
      }),
    ]),
    status: "Implemented",
  }),

  // =========================================================================
  // ACTION 5: Ukraine Aid Freeze
  // =========================================================================
  Object.freeze({
    id: "ukraine-aid-freeze",
    title: "Ukraine Aid Freeze",
    subtitle: "Abandoning an ally mid-war to cut a deal with Putin",
    category: ActionCategory.DIPLOMACY,
    date: "2024 – Present",
    controversyLevel: 88,
    image: "images/ukraine_aid.png",
    imageGradient:
      "linear-gradient(135deg, #1e40af 0%, #fde047 100%)",
    summary:
      "Trump froze military and financial aid to Ukraine, pressured Zelensky into territorial concessions, and openly flirted with recognizing Russia's annexation of Crimea — fundamentally undermining the Western alliance against Russian aggression.",
    overview:
      "Upon returning to office in 2025, Trump moved swiftly to reshape the US posture on the Russia-Ukraine war. He froze pending military aid packages worth over $8 billion, halted intelligence sharing, and publicly pressured President Zelensky to accept a ceasefire that would effectively cede Crimea, the Donbas, and parts of Zaporizhzhia and Kherson oblasts to Russia. Trump suggested Russia had 'legitimate security concerns' about NATO expansion and repeatedly floated withdrawing the US from the alliance. European allies — particularly Poland, the Baltic states, and the UK — scrambled to fill the gap, with the EU announcing a €50 billion defense package. The freeze represented the most dramatic shift in transatlantic security policy since the end of the Cold War, emboldening Moscow and terrifying Eastern European nations who viewed US commitment as their ultimate security guarantee.",
    keyFacts: Object.freeze([
      "Trump froze over $8 billion in approved military aid to Ukraine within his first weeks back in office in January 2025.",
      "The US had provided over $75 billion in total aid to Ukraine between February 2022 and January 2025, making it the largest military donor.",
      "Trump publicly suggested Russia could keep Crimea, which it had annexed in 2014, calling it 'historically Russian territory.'",
      "The EU announced a €50 billion emergency defense package to compensate for the potential loss of US military support.",
      "Trump threatened to withdraw the US from NATO unless European members immediately increased defense spending to 5% of GDP.",
      "Poland announced plans to spend 4.7% of GDP on defense in 2025, the highest ratio of any NATO member, in response to US uncertainty.",
      "Over 500,000 Ukrainian and Russian soldiers had been killed or wounded by the time the aid freeze took effect.",
    ]),
    globalEffects: Object.freeze([
      Object.freeze({
        title: "NATO Existential Crisis",
        description:
          "Trump's threats to withdraw from NATO and his sympathetic stance toward Putin triggered the most serious crisis in the alliance's 75-year history. European nations began discussing a post-American security architecture for the first time.",
      }),
      Object.freeze({
        title: "Russian Emboldening",
        description:
          "The aid freeze was interpreted by Moscow as a green light for escalation. Russian forces intensified offensives in eastern Ukraine, and Putin publicly thanked Trump for his 'realistic' approach to the conflict.",
      }),
      Object.freeze({
        title: "European Defense Surge",
        description:
          "European nations collectively announced over $200 billion in additional defense spending. Germany invoked a special €100 billion defense fund, France proposed a European nuclear umbrella, and the EU explored a joint military command structure.",
      }),
      Object.freeze({
        title: "Global Deterrence Weakened",
        description:
          "The abandonment of Ukraine sent shockwaves through Taiwan, South Korea, and Japan — all nations that depend on US security guarantees. If America could abandon Ukraine mid-war, no ally felt safe.",
      }),
    ]),
    affectedCountries: Object.freeze([
      Object.freeze({
        name: "Ukraine",
        flag: "🇺🇦",
        impact:
          "The aid freeze left Ukrainian forces critically short of ammunition, air defense systems, and armored vehicles during an active Russian offensive. Zelensky warned that without US support, Ukraine would face a 'catastrophic' military disadvantage.",
      }),
      Object.freeze({
        name: "Russia",
        flag: "🇷🇺",
        impact:
          "Moscow viewed the aid freeze as a major strategic victory. Russian state media celebrated Trump's stance, and military planners shifted resources to take advantage of reduced Ukrainian capabilities on the eastern front.",
      }),
      Object.freeze({
        name: "Poland",
        flag: "🇵🇱",
        impact:
          "As Ukraine's neighbor and NATO's eastern flank, Poland ramped defense spending to 4.7% of GDP and accelerated military modernization. Polish leaders openly questioned whether they could rely on the US Article 5 guarantee.",
      }),
      Object.freeze({
        name: "Germany",
        flag: "🇩🇪",
        impact:
          "Germany invoked a historic €100 billion special defense fund and reversed decades of military underinvestment. The Zeitenwende ('turning point') in German defense policy was directly catalyzed by US unreliability under Trump.",
      }),
    ]),
    status: "Escalating",
  }),

  // =========================================================================
  // ACTION 6: Muslim Travel Ban
  // =========================================================================
  Object.freeze({
    id: "muslim-travel-ban",
    title: "Muslim Travel Ban",
    subtitle: "Slamming the door on 135 million people in seven days",
    category: ActionCategory.IMMIGRATION,
    date: "Jan 2017",
    controversyLevel: 90,
    image: null,
    imageGradient:
      "linear-gradient(135deg, #1e3a5f 0%, #065f46 50%, #fbbf24 100%)",
    summary:
      "Just seven days into his presidency, Trump signed Executive Order 13769, banning entry from seven Muslim-majority nations. Chaos erupted at airports worldwide as travelers with valid visas were detained, deported, or stranded — sparking mass protests and constitutional challenges.",
    overview:
      "On January 27, 2017, Trump signed Executive Order 13769, titled 'Protecting the Nation from Foreign Terrorist Entry,' which immediately banned travelers from Iran, Iraq, Libya, Somalia, Sudan, Syria, and Yemen — all Muslim-majority nations — from entering the United States for 90 days. The ban also indefinitely suspended Syrian refugee admissions and capped total refugee intake at 50,000 per year, down from 110,000. The order was signed on a Friday afternoon with no advance notice to airports, airlines, or customs officials, triggering pandemonium. Green card holders, visa holders, students returning to universities, and families mid-transit were detained at airports across the country. Lawyers rushed to terminals to provide pro bono representation. Federal courts issued emergency stays within 48 hours, but not before families were torn apart. The ban went through three iterations before the Supreme Court upheld a modified version in June 2018, affecting citizens of over 135 million people in the targeted nations.",
    keyFacts: Object.freeze([
      "Executive Order 13769 was signed on January 27, 2017, just seven days after Trump's inauguration, with no advance coordination with relevant agencies.",
      "The initial ban affected nationals from seven countries: Iran, Iraq, Libya, Somalia, Sudan, Syria, and Yemen — all Muslim-majority nations.",
      "Over 60,000 visas were provisionally revoked in the first week, stranding travelers worldwide who had already been approved for entry.",
      "Massive protests erupted at airports across the US, with thousands of demonstrators gathering at JFK, LAX, SFO, Dulles, and O'Hare within hours.",
      "Federal judges in at least four states issued emergency temporary restraining orders within 48 hours of the executive order.",
      "The Supreme Court upheld a modified version of the ban (Travel Ban 3.0) in a 5-4 decision in Trump v. Hawaii in June 2018.",
      "The ban reduced annual refugee admissions from 110,000 to 50,000, and later to 18,000 — the lowest level since the Refugee Act of 1980.",
    ]),
    globalEffects: Object.freeze([
      Object.freeze({
        title: "Global Airport Chaos",
        description:
          "Airlines and border agencies worldwide were caught off guard. Passengers with valid visas were turned back mid-flight, detained at gates, or left stranded in transit countries, affecting thousands of travelers within the first 72 hours.",
      }),
      Object.freeze({
        title: "Diplomatic Fallout",
        description:
          "Targeted nations condemned the ban as Islamophobic. Iraq initially threatened reciprocal restrictions on Americans, and Iran imposed a retaliatory ban on US citizens. US diplomatic credibility in the Muslim world plummeted.",
      }),
      Object.freeze({
        title: "Academic and Research Disruption",
        description:
          "Thousands of students, researchers, and professors from affected countries were barred from returning to US universities and labs. Major universities reported losing top talent to Canadian and European institutions.",
      }),
      Object.freeze({
        title: "Constitutional Law Precedent",
        description:
          "The Supreme Court's 5-4 ruling in Trump v. Hawaii expanded executive power over immigration, but the dissent compared it to the discredited Korematsu Japanese internment ruling, ensuring the debate's lasting legal significance.",
      }),
    ]),
    affectedCountries: Object.freeze([
      Object.freeze({
        name: "Iran",
        flag: "🇮🇷",
        impact:
          "As the most populous nation affected (85M+ citizens), Iran saw tens of thousands of planned trips, student visas, and family reunifications cancelled overnight. Iran imposed a reciprocal ban on US citizens in response.",
      }),
      Object.freeze({
        name: "Iraq",
        flag: "🇮🇶",
        impact:
          "Iraqi translators and allies who had risked their lives supporting US military operations were blocked from entry, breaking promises of safe haven. Iraq was eventually removed from the ban's second iteration.",
      }),
      Object.freeze({
        name: "Syria",
        flag: "🇸🇾",
        impact:
          "Syrian refugees — fleeing a civil war that had killed over 500,000 — were indefinitely banned from resettlement in the US, closing one of the few remaining escape routes for the most desperate refugee population on earth.",
      }),
      Object.freeze({
        name: "Yemen",
        flag: "🇾🇪",
        impact:
          "Yemenis, already suffering the world's worst humanitarian crisis with 24 million people in need of aid, were barred from seeking refuge in the US. Thousands of Yemeni-American families were separated indefinitely.",
      }),
      Object.freeze({
        name: "Somalia",
        flag: "🇸🇴",
        impact:
          "Somali refugees, one of the largest refugee populations resettled in the US, saw new admissions halted. The large Somali-American community in Minnesota was devastated by the inability to bring family members to safety.",
      }),
      Object.freeze({
        name: "Libya",
        flag: "🇱🇾",
        impact:
          "Libyan students and professionals in the US faced uncertainty about their ability to travel home and return. Academic collaborations between US and Libyan institutions were effectively frozen.",
      }),
    ]),
    status: "Implemented",
  }),

  // =========================================================================
  // ACTION 7: Border Family Separations
  // =========================================================================
  Object.freeze({
    id: "border-family-separations",
    title: "Border Family Separations",
    subtitle: "Children in cages — the cruelty was the point",
    category: ActionCategory.RIGHTS,
    date: "2018 – 2019",
    controversyLevel: 94,
    image: null,
    imageGradient:
      "linear-gradient(135deg, #9f1239 0%, #f97316 100%)",
    summary:
      "Trump's 'zero tolerance' immigration policy resulted in over 5,500 children being forcibly separated from their parents at the US-Mexico border. Children were held in cage-like detention facilities, and hundreds were never reunited with their families.",
    overview:
      "In April 2018, Attorney General Jeff Sessions announced a 'zero tolerance' policy for illegal border crossings, mandating criminal prosecution of all adults — including asylum seekers — which automatically separated them from their children. Over the following months, more than 5,500 children, including infants and toddlers, were taken from their parents and placed in detention facilities that federal investigators described as severely overcrowded, with children sleeping on concrete floors under foil blankets in chain-link enclosures. Audio recordings of children screaming for their parents went viral. The Associated Press documented that the government had no systematic process for reuniting families, with some children shipped thousands of miles from their parents. After weeks of global condemnation — including from former First Ladies of both parties, religious leaders, and the United Nations — Trump signed an executive order on June 20, 2018, ending the policy. However, by 2024, hundreds of children still had not been reunited with their families due to insufficient record-keeping and deported parents who could not be located.",
    keyFacts: Object.freeze([
      "At least 5,556 children were separated from their parents under the zero tolerance policy between April and June 2018, according to government records.",
      "Children as young as 4 months old were taken from their parents and placed in government-run shelters or foster care.",
      "An Inspector General report found children sleeping on concrete floors under aluminum blankets in chainlink-fenced enclosures described as 'cages.'",
      "Audio obtained by ProPublica captured children sobbing and crying 'Mamá' and 'Papá' inside a CBP facility, sparking global outrage.",
      "The government acknowledged it had no centralized system for tracking which children belonged to which parents, making reunification a logistical nightmare.",
      "As of 2024, over 1,000 children had still not been reunited with their parents, with some parents deported to countries where they could not be located.",
      "Trump signed an executive order on June 20, 2018, ending family separations after bipartisan condemnation, including from all living former First Ladies.",
    ]),
    globalEffects: Object.freeze([
      Object.freeze({
        title: "Global Human Rights Outcry",
        description:
          "The UN Human Rights Council called the separations 'unconscionable.' Governments worldwide condemned the policy, and it became a defining symbol of the Trump administration's immigration stance, drawing comparisons to historical atrocities.",
      }),
      Object.freeze({
        title: "Lasting Psychological Trauma",
        description:
          "Pediatricians and psychologists documented severe trauma in separated children, including PTSD, anxiety, depression, and regression. The American Academy of Pediatrics called the policy 'government-sanctioned child abuse.'",
      }),
      Object.freeze({
        title: "Deterrence vs. Cruelty Debate",
        description:
          "The policy forced a national reckoning: was deterrence through deliberate cruelty an acceptable immigration enforcement strategy? The debate reshaped immigration politics and galvanized both pro- and anti-immigration movements.",
      }),
    ]),
    affectedCountries: Object.freeze([
      Object.freeze({
        name: "Mexico",
        flag: "🇲🇽",
        impact:
          "Mexico bore the brunt of the border crisis optics. Thousands of Mexican families were separated, and deported parents sometimes found themselves unable to locate their children held in US government custody.",
      }),
      Object.freeze({
        name: "Guatemala",
        flag: "🇬🇹",
        impact:
          "Guatemalan families fleeing gang violence and poverty made up a significant portion of those separated. Deported parents returned to dangerous conditions with no information about their children's whereabouts.",
      }),
      Object.freeze({
        name: "Honduras",
        flag: "🇭🇳",
        impact:
          "Honduran asylum seekers escaping MS-13 gang violence and political instability were among the most affected. Children were placed in shelters thousands of miles from their detained parents.",
      }),
      Object.freeze({
        name: "El Salvador",
        flag: "🇸🇻",
        impact:
          "Salvadoran families fleeing one of the world's highest murder rates were prosecuted and separated at the border. Many had legitimate asylum claims that were never heard due to the zero tolerance policy.",
      }),
      Object.freeze({
        name: "United States",
        flag: "🇺🇸",
        impact:
          "The policy deeply divided the nation. Images of children in cages became one of the most polarizing symbols in modern American politics, and the reunification failures haunted the government for years.",
      }),
    ]),
    status: "Resolved",
  }),

  // =========================================================================
  // ACTION 8: China Trade War
  // =========================================================================
  Object.freeze({
    id: "china-trade-war",
    title: "China Trade War",
    subtitle: "The $360 billion gamble that reshuffled global supply chains",
    category: ActionCategory.TRADE,
    date: "2018 – Present",
    controversyLevel: 82,
    image: "images/china_trade_war.png",
    imageGradient:
      "linear-gradient(135deg, #dc2626 0%, #fbbf24 50%, #1e3a5f 100%)",
    summary:
      "Trump launched the largest trade war in modern history, slapping tariffs on over $360 billion in Chinese goods — with rates peaking at 145%. China retaliated blow-for-blow, disrupting global supply chains, hammering US farmers, and accelerating the tech decoupling between the world's two largest economies.",
    overview:
      "In March 2018, Trump invoked Section 301 of the Trade Act to impose tariffs on Chinese goods, citing unfair trade practices, intellectual property theft, and forced technology transfers. What began as tariffs on $50 billion worth of goods escalated rapidly — by 2025, tariffs covered over $360 billion in Chinese imports with rates reaching 145% on certain categories. China retaliated with tariffs on $110 billion in US goods, specifically targeting agricultural exports from politically sensitive states. US soybean exports to China dropped 75% in 2018. The trade war expanded into a full-spectrum tech conflict: Huawei was blacklisted from US technology, semiconductor exports to China were restricted, and TSMC was pressured to build a $40 billion fabrication plant in Arizona. Global supply chains that had been optimized over decades were upended as manufacturers scrambled to relocate production to Vietnam, India, and Mexico.",
    keyFacts: Object.freeze([
      "Tariffs were imposed on over $360 billion worth of Chinese goods, with rates ranging from 10% to 145% depending on the product category.",
      "China retaliated with tariffs on approximately $110 billion in US goods, targeting soybeans, pork, and other agricultural products from politically key states.",
      "US soybean exports to China fell by 75% in 2018, forcing the government to pay $28 billion in emergency subsidies to affected farmers.",
      "Huawei, the world's largest telecom equipment maker, was placed on the US Entity List in May 2019, cutting it off from American technology and Google services.",
      "The US imposed semiconductor export restrictions preventing TSMC, Samsung, and others from selling advanced chips to Chinese firms.",
      "Studies estimated the tariffs cost the average American household an additional $1,300 per year in higher consumer prices.",
      "Manufacturing shifted significantly: Vietnam's exports to the US surged 35% in 2019 as companies relocated production to avoid tariffs.",
    ]),
    globalEffects: Object.freeze([
      Object.freeze({
        title: "Global Supply Chain Restructuring",
        description:
          "Decades of globalization began reversing as companies adopted 'China Plus One' strategies. Vietnam, India, Mexico, and Bangladesh emerged as alternative manufacturing hubs, reshaping trade patterns across Asia and Latin America.",
      }),
      Object.freeze({
        title: "Technology Bifurcation",
        description:
          "The tech decoupling split the global technology ecosystem into US-led and China-led spheres. Huawei developed its own HarmonyOS, China invested $150 billion in domestic semiconductor capability, and the concept of a 'splinternet' became reality.",
      }),
      Object.freeze({
        title: "Agricultural Market Upheaval",
        description:
          "China's retaliatory tariffs devastated US agriculture. Brazil overtook the US as China's primary soybean supplier, a shift that persisted even after tariffs were partially rolled back, permanently altering global agricultural trade flows.",
      }),
      Object.freeze({
        title: "Consumer Price Increases",
        description:
          "Multiple economic studies confirmed that US consumers, not Chinese producers, bore the majority of tariff costs — with estimates ranging from $800 to $1,300 per household annually in higher prices on electronics, clothing, and goods.",
      }),
    ]),
    affectedCountries: Object.freeze([
      Object.freeze({
        name: "China",
        flag: "🇨🇳",
        impact:
          "GDP growth slowed to its weakest in 30 years. Hundreds of factories closed or relocated. But the pressure also accelerated China's drive for technological self-sufficiency, with massive investments in domestic semiconductors, AI, and alternative supply chains.",
      }),
      Object.freeze({
        name: "United States",
        flag: "🇺🇸",
        impact:
          "Consumers paid higher prices on thousands of goods. Farmers lost their largest export market and required $28 billion in government bailouts. The trade deficit with China actually widened in 2018 despite the tariffs.",
      }),
      Object.freeze({
        name: "Taiwan",
        flag: "🇹🇼",
        impact:
          "TSMC, the world's most important semiconductor manufacturer, was pressured to build a $40 billion fabrication plant in Arizona. Taiwan found itself at the center of the US-China tech war, increasing its strategic vulnerability.",
      }),
      Object.freeze({
        name: "Vietnam",
        flag: "🇻🇳",
        impact:
          "Vietnam was the biggest beneficiary of supply chain shifts. Exports to the US surged 35% in 2019. Samsung, Nike, and dozens of manufacturers expanded Vietnamese operations, though concerns grew about the country becoming a transshipment hub for Chinese goods.",
      }),
      Object.freeze({
        name: "Japan",
        flag: "🇯🇵",
        impact:
          "Japanese manufacturers faced disrupted supply chains and were caught between their two largest trading partners. Japan imposed its own export controls on semiconductor materials to South Korea, adding another layer of trade conflict in Asia.",
      }),
      Object.freeze({
        name: "South Korea",
        flag: "🇰🇷",
        impact:
          "Korean tech giants Samsung and SK Hynix faced restrictions on semiconductor sales to China while navigating Japanese export controls — a double squeeze that threatened the backbone of South Korea's export economy.",
      }),
    ]),
    status: "Escalating",
  }),

  // =========================================================================
  // ACTION 9: COVID-19 'China Virus' Blame
  // =========================================================================
  Object.freeze({
    id: "covid-china-virus-blame",
    title: "COVID-19 'China Virus' Blame",
    subtitle: "When a president weaponized a pandemic for geopolitical points",
    category: ActionCategory.DIPLOMACY,
    date: "2020 – 2021",
    controversyLevel: 85,
    image: null,
    imageGradient:
      "linear-gradient(135deg, #dc2626 0%, #1e3a5f 50%, #fde047 100%)",
    summary:
      "Trump repeatedly branded COVID-19 the 'China Virus' and 'Kung Flu,' pushed the Wuhan lab leak theory, and demanded China pay $10 trillion in reparations. Anti-Asian hate crimes in the US surged 150% as the rhetoric fueled a wave of xenophobia.",
    overview:
      "As COVID-19 killed over 1 million Americans and shattered the global economy, Trump chose to frame the pandemic primarily as a Chinese attack on the world. He consistently referred to COVID-19 as the 'China Virus' and 'Kung Flu' despite objections from public health officials and Asian-American advocacy groups. He promoted the theory that the virus leaked from the Wuhan Institute of Virology — a claim that, while investigated, remained unproven by the intelligence community's own assessment. Trump demanded $10 trillion in reparations from China, threatened sanctions, and withdrew the US from the World Health Organization, accusing it of being a 'puppet of China.' The rhetorical campaign had devastating real-world consequences: hate crimes against Asian-Americans surged 150% in 2020 according to the Center for the Study of Hate and Extremism. Elderly Asian-Americans were attacked in the streets, Asian-owned businesses were vandalized, and the community experienced levels of fear and hostility not seen since the post-Pearl Harbor internment era.",
    keyFacts: Object.freeze([
      "Trump used the term 'China Virus' in at least 20 tweets and dozens of press conferences, despite WHO guidelines against naming diseases after locations to prevent stigma.",
      "Anti-Asian hate crimes surged approximately 150% in major US cities during 2020, with over 10,000 incidents reported to the Stop AAPI Hate coalition by 2021.",
      "Trump withdrew the US from the World Health Organization in July 2020, cutting off approximately $450 million in annual US funding during the worst pandemic in a century.",
      "The Wuhan lab leak theory was investigated but the US intelligence community concluded in 2021 that they could not reach a definitive consensus on the virus's origin.",
      "Trump demanded $10 trillion in reparations from China and suggested the US could cancel its debt obligations to Beijing as 'compensation.'",
      "The Atlanta spa shootings in March 2021, killing six Asian women, became a tragic symbol of the anti-Asian violence wave linked to pandemic xenophobia.",
    ]),
    globalEffects: Object.freeze([
      Object.freeze({
        title: "Anti-Asian Violence Wave",
        description:
          "Trump's rhetoric directly correlated with a massive spike in anti-Asian hate crimes across the US and globally. From violent street attacks to workplace discrimination, Asian communities worldwide experienced unprecedented hostility.",
      }),
      Object.freeze({
        title: "WHO Credibility Crisis",
        description:
          "US withdrawal from WHO during a pandemic undermined the only global body coordinating the international health response. Funding gaps hampered vaccine distribution in developing nations, and the organization's independence was permanently questioned.",
      }),
      Object.freeze({
        title: "US-China Relations Collapse",
        description:
          "The blame campaign accelerated a broader collapse in US-China relations, closing consulates, expelling journalists, and creating the most hostile bilateral dynamic since the normalization of relations in 1979.",
      }),
    ]),
    affectedCountries: Object.freeze([
      Object.freeze({
        name: "China",
        flag: "🇨🇳",
        impact:
          "Beijing responded with its own propaganda campaign, suggesting the virus originated at a US military lab. Diplomatic relations deteriorated to their worst point in decades, with both nations closing consulates and expelling journalists.",
      }),
      Object.freeze({
        name: "United States",
        flag: "🇺🇸",
        impact:
          "Over 1 million Americans died from COVID-19. The politicization of the pandemic — including mask resistance and vaccine hesitancy amplified by the blame campaign — contributed to one of the highest per-capita death rates among wealthy nations.",
      }),
      Object.freeze({
        name: "Asian Diaspora (Global)",
        flag: "🌏",
        impact:
          "Asian communities in the US, UK, Canada, and Australia experienced surges in hate crimes, discrimination, and social exclusion. The 'China Virus' label transcended borders, affecting anyone perceived as East Asian regardless of nationality.",
      }),
    ]),
    status: "Resolved",
  }),

  // =========================================================================
  // ACTION 10: India H-1B & Trade Crackdown
  // =========================================================================
  Object.freeze({
    id: "india-h1b-trade-crackdown",
    title: "India H-1B & Trade Crackdown",
    subtitle: "Bear hugs and backstabs — the paradox of the Trump-Modi relationship",
    category: ActionCategory.TRADE,
    date: "2017 – Present",
    controversyLevel: 72,
    image: null,
    imageGradient:
      "linear-gradient(135deg, #f97316 0%, #ffffff 50%, #15803d 100%)",
    summary:
      "Despite a warm personal rapport with PM Modi and lavish state visits, Trump cracked down hard on India's trade privileges and H-1B visas — the lifeblood of Indian tech workers. Visa denial rates tripled, GSP status was revoked, and India was branded the 'Tariff King.'",
    overview:
      "The Trump-India relationship was a study in contradictions. On one hand, Trump and Modi staged spectacular joint events — the 'Howdy, Modi' rally in Houston drew 50,000 people, and the 'Namaste Trump' event in Ahmedabad attracted 100,000+. On the other, Trump's policies hit India's core economic interests with surgical precision. H-1B visa denial rates surged from 6% in 2015 to 21% by 2020, devastating the pipeline of Indian tech talent to Silicon Valley. In June 2019, Trump revoked India's Generalized System of Preferences (GSP) status, affecting $6.3 billion in Indian exports that had enjoyed duty-free access. He slapped 25% tariffs on Indian steel and 10% on aluminum, publicly labeling India the 'Tariff King' for its high import duties on American goods like Harley-Davidson motorcycles. India retaliated with tariffs on 28 US products including almonds, apples, and walnuts. The paradox — personal warmth alongside economic aggression — defined one of the Trump era's most complex bilateral relationships.",
    keyFacts: Object.freeze([
      "H-1B visa denial rates surged from 6% in 2015 to 21% by 2020, disproportionately affecting Indian IT workers who file roughly 70% of all H-1B petitions.",
      "Trump revoked India's Generalized System of Preferences (GSP) status in June 2019, removing duty-free access for $6.3 billion worth of Indian exports.",
      "The 'Howdy, Modi' rally in Houston in September 2019 drew over 50,000 attendees, the largest reception ever for a foreign leader on US soil.",
      "Trump imposed 25% tariffs on Indian steel and 10% on aluminum imports, calling India 'the Tariff King' for its high import duties.",
      "India retaliated with tariffs on 28 US products including almonds, apples, walnuts, and lentils — directly targeting American agricultural exports.",
      "Trump publicly criticized India's 50% tariff on Harley-Davidson motorcycles, making it a personal trade grievance he mentioned repeatedly at rallies.",
    ]),
    globalEffects: Object.freeze([
      Object.freeze({
        title: "Tech Talent Pipeline Disruption",
        description:
          "Tripled H-1B denial rates disrupted the flow of Indian engineers to US tech companies. Major firms including Google, Microsoft, and Amazon warned of talent shortages, while Canada and Australia aggressively recruited the diverted Indian tech workers.",
      }),
      Object.freeze({
        title: "Trade Diversification Push",
        description:
          "The GSP revocation and tariffs pushed India to diversify trade partnerships. India accelerated trade negotiations with the EU, ASEAN, and the UK, reducing its dependence on US market access.",
      }),
      Object.freeze({
        title: "Strategic Partnership Paradox",
        description:
          "Despite trade tensions, the US and India deepened defense and strategic cooperation — with arms deals, intelligence sharing, and the Quad alliance against China — creating a paradox where economic conflict coexisted with military partnership.",
      }),
    ]),
    affectedCountries: Object.freeze([
      Object.freeze({
        name: "India",
        flag: "🇮🇳",
        impact:
          "India's $6.3 billion in GSP exports lost duty-free access. Indian IT professionals — who file 70% of H-1B petitions — faced triple the rejection rate. But India also retaliated with targeted tariffs and accelerated its push for manufacturing self-reliance under 'Make in India.'",
      }),
      Object.freeze({
        name: "United States",
        flag: "🇺🇸",
        impact:
          "Silicon Valley companies faced critical talent shortages as H-1B restrictions tightened. US agricultural exporters lost market share as India retaliated with tariffs on almonds, apples, and other products from key American farming states.",
      }),
    ]),
    status: "Ongoing",
  }),

  // =========================================================================
  // ACTION 11: Trump-Putin & NATO Threats
  // =========================================================================
  Object.freeze({
    id: "trump-putin-nato-threats",
    title: "Trump-Putin & NATO Threats",
    subtitle: "Siding with an adversary over your own intelligence agencies",
    category: ActionCategory.DIPLOMACY,
    date: "2017 – Present",
    controversyLevel: 91,
    image: "images/trump_putin.png",
    imageGradient:
      "linear-gradient(135deg, #1e40af 0%, #dc2626 50%, #fde047 100%)",
    summary:
      "From the infamous Helsinki summit where he sided with Putin over US intelligence, to calling Putin a 'genius' for invading Ukraine, to threatening NATO withdrawal — Trump's relationship with Russia's president has been the most scrutinized and alarming dynamic of his presidency.",
    overview:
      "Trump's relationship with Vladimir Putin has confounded allies, alarmed intelligence officials, and fueled years of investigation. At the Helsinki summit in July 2018, standing beside Putin, Trump publicly sided with the Russian president over the unanimous assessment of US intelligence agencies that Russia had interfered in the 2016 election — a moment that even Republican allies called 'disgraceful.' He called Putin 'very strong and powerful' while dismissing his own FBI director. When Russia invaded Ukraine in February 2022, Trump called Putin's strategy 'genius' and 'savvy.' He reportedly shared classified intelligence with Russian Foreign Minister Lavrov in the Oval Office in May 2017. He has repeatedly threatened to withdraw from NATO — the bedrock of Western security since 1949 — unless European nations paid more, at one point suggesting he would 'encourage' Russia to attack non-paying members. Multiple investigations, including Robert Mueller's Special Counsel probe, examined the relationship, documenting extensive contacts between Trump's campaign and Russian operatives.",
    keyFacts: Object.freeze([
      "At the Helsinki summit in July 2018, Trump publicly rejected US intelligence findings on Russian election interference while standing beside Putin, stunning bipartisan observers.",
      "Trump called Putin's invasion of Ukraine in February 2022 'genius' and 'savvy,' praising the strategy as 'wonderful' before later walking back the comments.",
      "In May 2017, Trump shared highly classified intelligence about ISIS with Russian Foreign Minister Lavrov and Ambassador Kislyak in the Oval Office.",
      "Trump threatened to withdraw the US from NATO on multiple occasions and publicly suggested he would 'encourage' Russia to attack allies who didn't meet spending targets.",
      "The Mueller investigation documented 140+ contacts between Trump campaign associates and Russian nationals or operatives, including 34 indictments.",
      "Trump had at least five private meetings with Putin where no US officials were present or where notes were confiscated, leaving no official record of what was discussed.",
      "The US expelled 60 Russian diplomats in 2018 over the Skripal poisoning, but Trump reportedly resisted the move and was angry about the scale of expulsions.",
    ]),
    globalEffects: Object.freeze([
      Object.freeze({
        title: "NATO Credibility Crisis",
        description:
          "Trump's threats to abandon NATO shook the foundation of transatlantic security. European leaders began openly discussing a post-American security framework, and the alliance's deterrence value — its core purpose — was fundamentally questioned.",
      }),
      Object.freeze({
        title: "Russian Strategic Emboldening",
        description:
          "Putin interpreted Trump's posture as an implicit green light. Russia escalated hybrid warfare against Western democracies, interfered in elections across Europe, and ultimately launched the full-scale invasion of Ukraine in 2022.",
      }),
      Object.freeze({
        title: "Intelligence Community Demoralization",
        description:
          "Trump's public rejection of US intelligence findings in favor of Putin's denials demoralized intelligence officers and damaged confidence in the information-sharing relationships that are the backbone of Western security cooperation.",
      }),
      Object.freeze({
        title: "Democratic Norms Erosion",
        description:
          "The spectacle of a US president repeatedly praising and deferring to an authoritarian adversary while attacking democratic institutions at home sent shockwaves through democratic nations, emboldening authoritarians worldwide.",
      }),
    ]),
    affectedCountries: Object.freeze([
      Object.freeze({
        name: "Russia",
        flag: "🇷🇺",
        impact:
          "Russia benefited strategically from Trump's stance. Reduced US pressure allowed Russia to consolidate gains in Syria, expand influence in Africa, and ultimately prepare for the Ukraine invasion with less fear of a unified Western response.",
      }),
      Object.freeze({
        name: "United States",
        flag: "🇺🇸",
        impact:
          "Multiple investigations consumed political bandwidth. Intelligence professionals resigned in protest. The country's reputation as a reliable democratic leader was severely damaged in the eyes of allies who had depended on American leadership since 1945.",
      }),
      Object.freeze({
        name: "Germany",
        flag: "🇩🇪",
        impact:
          "Germany, as NATO's most important European member, was forced to rapidly rethink its defense posture. Chancellor Merkel famously declared that Europe could 'no longer fully rely on others,' triggering Germany's historic defense spending reversal.",
      }),
      Object.freeze({
        name: "Poland",
        flag: "🇵🇱",
        impact:
          "As Russia's most vulnerable NATO neighbor, Poland was terrified by Trump's ambivalence. It launched the largest military buildup in its history and sought bilateral security guarantees to supplement the NATO umbrella it no longer fully trusted.",
      }),
      Object.freeze({
        name: "France",
        flag: "🇫🇷",
        impact:
          "President Macron declared NATO 'brain dead' in response to US unreliability and pushed for European strategic autonomy, including a potential EU army and French-led nuclear deterrent covering the continent.",
      }),
      Object.freeze({
        name: "United Kingdom",
        flag: "🇬🇧",
        impact:
          "The UK found itself caught between its 'special relationship' with the US and the need to maintain European unity. British intelligence agencies were reportedly cautious about sharing sensitive information during periods of peak Trump-Putin closeness.",
      }),
    ]),
    status: "Ongoing",
  }),

  // =========================================================================
  // ACTION 12: Greenland & Panama Canal Claims
  // =========================================================================
  Object.freeze({
    id: "greenland-panama-canal-claims",
    title: "Greenland & Panama Canal Claims",
    subtitle: "19th-century imperialism with a 21st-century Twitter account",
    category: ActionCategory.TERRITORIAL,
    date: "2019 – 2025",
    controversyLevel: 68,
    image: null,
    imageGradient:
      "linear-gradient(135deg, #0ea5e9 0%, #ffffff 40%, #16a34a 100%)",
    summary:
      "Trump floated purchasing Greenland from Denmark, cancelled a state visit when rebuffed, threatened to reclaim the Panama Canal, suggested making Canada the 51st state, and proposed renaming the Gulf of Mexico — channeling 19th-century Manifest Destiny in the age of social media.",
    overview:
      "In August 2019, reports emerged that Trump had seriously discussed purchasing Greenland from Denmark — an idea Danish Prime Minister Mette Frederiksen called 'absurd.' Trump reacted by abruptly cancelling a planned state visit to Denmark, insulting the prime minister, and insisting the island was 'strategically interesting' for the US. The episode was initially dismissed as a joke, but it revealed a deeper pattern. In late 2024 and early 2025, Trump escalated territorial rhetoric dramatically: he threatened to reclaim the Panama Canal, falsely claiming Panama was 'ripping off' the United States on shipping fees, despite the canal being legally Panamanian since 1999. He publicly mused about making Canada the 51st state, called Prime Minister Trudeau a 'governor,' and proposed renaming the Gulf of Mexico to the 'Gulf of America.' While some of these proposals were dismissed as trolling, they rattled allies, drew diplomatic protests, and raised serious questions about US respect for sovereignty norms that have underpinned the post-WWII international order.",
    keyFacts: Object.freeze([
      "Trump confirmed in August 2019 that he had discussed purchasing Greenland from Denmark, calling the island 'essentially a large real estate deal.'",
      "Danish PM Mette Frederiksen called the idea 'absurd,' prompting Trump to cancel a planned state visit and call her response 'nasty.'",
      "Greenland holds an estimated $1 trillion in rare earth minerals and is strategically critical for Arctic shipping routes and military early-warning systems.",
      "Trump threatened to retake the Panama Canal in December 2024, falsely claiming the US was being overcharged for shipping access.",
      "The Panama Canal was transferred to Panamanian sovereignty on December 31, 1999, under the Torrijos-Carter Treaties signed in 1977.",
      "Trump referred to Canadian PM Justin Trudeau as 'Governor Trudeau' and called Canada the '51st state' on multiple occasions throughout 2024-2025.",
      "He signed an executive order in January 2025 to rename the Gulf of Mexico to the 'Gulf of America' on official US maps and documents.",
    ]),
    globalEffects: Object.freeze([
      Object.freeze({
        title: "Sovereignty Norms Undermined",
        description:
          "A sitting US president publicly discussing the acquisition of sovereign territory and renaming shared geographic features violated long-established norms of international relations and alarmed smaller nations who rely on those norms for security.",
      }),
      Object.freeze({
        title: "Arctic Geopolitics Heated Up",
        description:
          "The Greenland bid highlighted the intensifying competition for Arctic resources and shipping routes between the US, Russia, and China. Denmark increased its military presence in Greenland, and Greenlanders debated independence with new urgency.",
      }),
      Object.freeze({
        title: "Latin American Distrust Deepened",
        description:
          "The Panama Canal threats evoked painful memories of US imperialism in Latin America. Countries across the region condemned the rhetoric, and Chinese influence in Panama — already growing — was positioned as a counterbalance to US aggression.",
      }),
    ]),
    affectedCountries: Object.freeze([
      Object.freeze({
        name: "Denmark / Greenland",
        flag: "🇩🇰",
        impact:
          "Denmark was publicly humiliated by the purchase proposal and the cancelled state visit. Greenland's independence movement gained momentum, and Denmark increased Arctic military spending by 40% to demonstrate continued sovereignty.",
      }),
      Object.freeze({
        name: "Panama",
        flag: "🇵🇦",
        impact:
          "Panama's government forcefully rejected Trump's threats, asserting its sovereignty over the canal. The incident pushed Panama closer to China, which had already invested heavily in Panamanian infrastructure and port operations.",
      }),
      Object.freeze({
        name: "Canada",
        flag: "🇨🇦",
        impact:
          "Trump's '51st state' comments and 'Governor Trudeau' insults were met with outrage across the Canadian political spectrum. The rhetoric damaged the closest bilateral relationship in the world and fueled Canadian economic nationalism.",
      }),
      Object.freeze({
        name: "Mexico",
        flag: "🇲🇽",
        impact:
          "The Gulf of Mexico renaming was perceived as disrespectful and imperialistic. Mexico's Congress passed a symbolic resolution rejecting the name change, and the issue became a rallying point for Mexican sovereignty advocates.",
      }),
    ]),
    status: "Ongoing",
  }),

  // =========================================================================
  // ACTION 13: Paris Climate Agreement Exit
  // =========================================================================
  Object.freeze({
    id: "paris-climate-agreement-exit",
    title: "Paris Climate Agreement Exit",
    subtitle: "Quitting the planet's last best hope — twice",
    category: ActionCategory.ENVIRONMENT,
    date: "Jun 2017 / Jan 2025",
    controversyLevel: 80,
    image: null,
    imageGradient:
      "linear-gradient(135deg, #065f46 0%, #fde047 40%, #0ea5e9 100%)",
    summary:
      "Trump withdrew the United States from the Paris Climate Agreement not once but twice — first in 2017 and again in 2025. He called climate change a 'hoax,' rolled back over 100 environmental regulations, and expanded fossil fuel drilling, all while the US remained the world's second-largest carbon emitter.",
    overview:
      "On June 1, 2017, Trump announced the US withdrawal from the Paris Climate Agreement, a landmark accord signed by 196 nations to limit global warming to 1.5°C above pre-industrial levels. He argued the agreement was 'unfair' to the US and would cost millions of jobs, claims that were widely disputed by economists and climate scientists. The withdrawal made the US the only country in the world to reject the agreement. Biden rejoined in 2021, but Trump withdrew again upon returning to office in January 2025. Beyond Paris, Trump rolled back over 100 environmental regulations: loosening emissions standards for vehicles and power plants, opening the Arctic National Wildlife Refuge to drilling, shrinking national monuments by millions of acres, and withdrawing from multiple environmental treaties. His administration expanded fossil fuel leasing on federal lands by 300%, fast-tracked pipeline approvals, and eliminated methane reporting requirements. As the world's second-largest carbon emitter (producing roughly 14% of global CO2), the US absence from climate commitments undermined global efforts at a critical moment when scientists warned that the window to avoid catastrophic warming was rapidly closing.",
    keyFacts: Object.freeze([
      "Trump withdrew from the Paris Agreement on June 1, 2017, making the US the only country among 196 signatories to reject the accord.",
      "Upon returning to office, Trump withdrew from Paris a second time in January 2025, the earliest date legally possible.",
      "The US is the world's second-largest CO2 emitter, producing approximately 5 billion metric tons annually — about 14% of the global total.",
      "Trump rolled back over 100 environmental rules and regulations during his first term, according to a Columbia Law School tracker.",
      "Federal fossil fuel leasing expanded by approximately 300% under Trump compared to the preceding administration.",
      "Trump called climate change a 'hoax invented by the Chinese' in a 2012 tweet that he never fully retracted despite being asked repeatedly.",
      "The Arctic National Wildlife Refuge was opened to oil drilling for the first time in its 60-year history under a 2017 tax bill provision.",
    ]),
    globalEffects: Object.freeze([
      Object.freeze({
        title: "Global Climate Leadership Vacuum",
        description:
          "US withdrawal created a leadership vacuum that China and the EU attempted to fill. But without the world's largest economy and second-biggest emitter, the Paris targets became significantly harder to achieve, and smaller nations questioned why they should sacrifice when America wouldn't.",
      }),
      Object.freeze({
        title: "Accelerated Warming Trajectory",
        description:
          "Scientists calculated that the rollback of US climate regulations would add an estimated 1.8 billion metric tons of greenhouse gases through 2035, the equivalent of the annual emissions of the EU, potentially pushing global warming past critical tipping points.",
      }),
      Object.freeze({
        title: "Fossil Fuel Industry Emboldening",
        description:
          "Trump's deregulation gave the global fossil fuel industry political cover to delay transitions to clean energy. Oil and gas companies cited US policy as evidence that aggressive climate action was unnecessary, slowing momentum worldwide.",
      }),
      Object.freeze({
        title: "Vulnerable Nations Left Exposed",
        description:
          "Small island nations, Bangladesh, and sub-Saharan African countries — which contribute minimally to emissions but face existential climate threats — lost their most powerful potential ally in climate negotiations, threatening their very survival.",
      }),
    ]),
    affectedCountries: Object.freeze([
      Object.freeze({
        name: "Pacific Island Nations",
        flag: "🌊",
        impact:
          "Nations like Tuvalu, Marshall Islands, and Kiribati face literal extinction from rising sea levels. US withdrawal from Paris removed their most powerful potential advocate and made the temperature targets needed for their survival increasingly unachievable.",
      }),
      Object.freeze({
        name: "Bangladesh",
        flag: "🇧🇩",
        impact:
          "With 20 million people living in areas expected to be permanently flooded by 2050, Bangladesh faced an existential climate threat. US inaction on emissions directly contributed to the accelerated timeline of devastating floods and cyclones.",
      }),
      Object.freeze({
        name: "India",
        flag: "🇮🇳",
        impact:
          "India faces intensifying heat waves, monsoon disruption, and water scarcity linked to climate change. As the world's third-largest emitter, India argued that US withdrawal undermined the principle that wealthy nations should lead the transition.",
      }),
      Object.freeze({
        name: "China",
        flag: "🇨🇳",
        impact:
          "China positioned itself as a climate leader after US withdrawal, accelerating renewable energy investments and pledging carbon neutrality by 2060. However, critics noted China continued building coal plants while claiming the moral high ground.",
      }),
    ]),
    status: "Implemented",
  }),

  // =========================================================================
  // ACTION 14: Taiwan Strait Provocations
  // =========================================================================
  Object.freeze({
    id: "taiwan-strait-provocations",
    title: "Taiwan Strait Provocations",
    subtitle: "Playing chicken with nuclear powers over a 100-mile strait",
    category: ActionCategory.MILITARY,
    date: "2017 – Present",
    controversyLevel: 76,
    image: null,
    imageGradient:
      "linear-gradient(135deg, #dc2626 0%, #1e3a5f 50%, #ffffff 100%)",
    summary:
      "Trump approved billions in arms sales to Taiwan, eroded decades of strategic ambiguity, suggested Taiwan should pay for US protection, and pressured TSMC to move chip production to America — triggering the most dangerous escalation in cross-strait tensions in decades.",
    overview:
      "Trump's approach to Taiwan veered between strategic provocation and transactional indifference. He broke with 40 years of diplomatic protocol by accepting a congratulatory phone call from Taiwan's President Tsai Ing-wen in December 2016 — the first direct communication between a US president-elect and a Taiwanese leader since 1979. His administration approved over $18 billion in arms sales to Taiwan, including advanced F-16V fighter jets, Abrams tanks, and Harpoon anti-ship missiles. These sales infuriated Beijing, which conducted increasingly aggressive military drills around Taiwan in response, including unprecedented incursions into Taiwan's air defense identification zone — with 969 PLA aircraft detected in 2021 alone. In an unpredictable twist, Trump then questioned whether the US should defend Taiwan at all, suggesting in interviews that Taiwan should 'pay for protection' like a mafia client. He pressured Taiwan Semiconductor Manufacturing Company (TSMC) to build a $40 billion fabrication facility in Arizona, which critics in Taiwan viewed as 'hollowing out' the island's most powerful strategic asset — the so-called 'silicon shield' that made it too valuable to invade.",
    keyFacts: Object.freeze([
      "Trump accepted a phone call from Taiwan's President Tsai Ing-wen in December 2016, breaking 40 years of US diplomatic protocol and enraging Beijing.",
      "The Trump administration approved over $18 billion in arms sales to Taiwan, including F-16V fighters, Abrams tanks, and advanced anti-ship missiles.",
      "China conducted 969 military aircraft incursions into Taiwan's Air Defense Identification Zone in 2021 alone, a record that reflected rising tensions.",
      "Trump suggested Taiwan should pay the US for military protection, comparing the arrangement to an insurance policy and questioning existing commitments.",
      "TSMC, which produces over 90% of the world's most advanced semiconductor chips, was pressured to invest $40 billion in Arizona fabrication facilities.",
      "China conducted its largest-ever military exercises around Taiwan in August 2022 following Speaker Pelosi's visit, effectively rehearsing a blockade scenario.",
    ]),
    globalEffects: Object.freeze([
      Object.freeze({
        title: "Strategic Ambiguity Erosion",
        description:
          "Decades of carefully maintained US strategic ambiguity — neither confirming nor denying whether the US would militarily defend Taiwan — was eroded by Trump's inconsistent signals. This destabilized the equilibrium that had prevented conflict across the strait for 75 years.",
      }),
      Object.freeze({
        title: "Semiconductor Supply Chain Risk",
        description:
          "The push to relocate TSMC production to the US exposed the world's dangerous dependence on a single island for 90% of advanced chips. Any military conflict in the Taiwan Strait would crash the global economy — estimated at $2.5 trillion in losses in the first year alone.",
      }),
      Object.freeze({
        title: "Chinese Military Buildup",
        description:
          "US arms sales and diplomatic provocations accelerated China's military modernization timeline. The PLA Navy surpassed the US Navy in total ship count, and China expanded its nuclear arsenal from approximately 350 to over 500 warheads between 2020 and 2025.",
      }),
    ]),
    affectedCountries: Object.freeze([
      Object.freeze({
        name: "Taiwan",
        flag: "🇹🇼",
        impact:
          "Taiwan received critical military hardware but faced existential uncertainty about US commitment. Trump's 'pay for protection' comments and the TSMC relocation pressured undermined confidence that the US would actually fight to defend the island in a crisis.",
      }),
      Object.freeze({
        name: "China",
        flag: "🇨🇳",
        impact:
          "Beijing viewed the arms sales and diplomatic gestures as violations of the One China policy. China responded with the largest military exercises in Taiwan Strait history, accelerated amphibious invasion capabilities, and intensified reunification rhetoric.",
      }),
      Object.freeze({
        name: "United States",
        flag: "🇺🇸",
        impact:
          "The US military warned that a Taiwan conflict would be the largest military engagement since WWII. Pentagon planners increasingly focused on the 'Davidson window' — the prediction that China could be ready to invade Taiwan by 2027.",
      }),
      Object.freeze({
        name: "Japan",
        flag: "🇯🇵",
        impact:
          "Japan, whose southernmost islands are just 110 km from Taiwan, would be immediately affected by any conflict. Tokyo doubled its defense budget to 2% of GDP and for the first time explicitly identified Taiwan's security as vital to Japan's own.",
      }),
      Object.freeze({
        name: "South Korea",
        flag: "🇰🇷",
        impact:
          "South Korea faced the risk of being drawn into a cross-strait conflict due to US military bases on its soil. Seoul navigated a delicate balancing act between its US alliance and its massive economic dependence on China.",
      }),
    ]),
    status: "Escalating",
  }),
]);

// ---------------------------------------------------------------------------
// Strategic Goals — 6 high-level objectives that unify Trump-era actions
// ---------------------------------------------------------------------------
const StrategicGoals = Object.freeze([
  // =========================================================================
  // GOAL 1: "America First" Economic Dominance
  // =========================================================================
  Object.freeze({
    id: "america-first-economic-dominance",
    title: '"America First" Economic Dominance',
    subtitle: "Manufacturing reshoring & tariff leverage",
    description:
      "The centrepiece of Trump's economic agenda was an aggressive campaign to reshore American manufacturing and weaponise tariffs as a negotiating bludgeon. By withdrawing from the Trans-Pacific Partnership on Day 1 and renegotiating NAFTA into the USMCA, the administration signalled that multilateral free-trade orthodoxy was dead. Tariffs of up to 145% on Chinese goods were deployed not merely as protectionist barriers but as leverage to extract bilateral concessions, while companies from Carrier to Foxconn were publicly pressured — and offered tax incentives — to build factories on American soil. The overarching obsession was the trade surplus: every deficit was framed as a score-line that America was losing, and every tariff as a point clawed back.",
    iconPath:
      "M19.5 8.25l-7.5 7.5-7.5-7.5M12 3v15M4 21h16a1 1 0 001-1v-2a1 1 0 00-1-1H4a1 1 0 00-1 1v2a1 1 0 001 1zM6 14h2v3H6zM10 12h2v5h-2zM14 10h2v7h-2zM18 13h2v4h-2z",
    relatedActionIds: Object.freeze([
      "china-trade-war",
      "india-h1b-trade-crackdown",
      "tiktok-ban-forced-sale",
    ]),
    keyMetrics: Object.freeze([
      Object.freeze({ label: "Total Tariffs Imposed", value: "$360 billion+" }),
      Object.freeze({ label: "Peak Tariff Rate (China)", value: "145%" }),
      Object.freeze({
        label: "Manufacturing Jobs Claimed",
        value: "400,000+",
      }),
    ]),
  }),

  // =========================================================================
  // GOAL 2: Energy Independence & Fossil Fuel Expansion
  // =========================================================================
  Object.freeze({
    id: "energy-independence-fossil-fuel",
    title: "Energy Independence & Fossil Fuel Expansion",
    subtitle: '"Drill baby drill" and petrodollar control',
    description:
      'Under the rallying cry of "Drill, Baby, Drill," the administration pursued a single-minded strategy to make the United States the world\'s undisputed energy superpower. Withdrawing from the Paris Climate Agreement removed the regulatory ceiling on domestic fossil-fuel production, while sanctions on Venezuela\'s state oil company PDVSA conveniently eliminated a rival crude exporter. Arctic and offshore drilling leases were opened at a pace not seen since the 1980s, and LNG export terminals were fast-tracked to flood European and Asian markets with American natural gas. The result was a policy architecture in which every environmental deregulation and every geopolitical sanction served the same master variable: fossil-fuel dominance and petrodollar preservation.',
    iconPath:
      "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8zM17 8l-5 10-2-4-4 2 3-6 4 1z",
    relatedActionIds: Object.freeze([
      "paris-climate-exit",
      "venezuela-military-threats",
    ]),
    keyMetrics: Object.freeze([
      Object.freeze({
        label: "US Oil Production Rank",
        value: "#1 globally",
      }),
      Object.freeze({
        label: "Environmental Rollbacks",
        value: "100+ regulations",
      }),
      Object.freeze({ label: "LNG Export Revenue", value: "$50 billion+" }),
    ]),
  }),

  // =========================================================================
  // GOAL 3: Dismantling the "Deep State"
  // =========================================================================
  Object.freeze({
    id: "dismantling-deep-state",
    title: 'Dismantling the "Deep State"',
    subtitle: "Loyalty purges & institutional demolition",
    description:
      "From the earliest days of his presidency, Trump framed career government officials not as apolitical civil servants but as embedded adversaries — a 'deep state' actively sabotaging his agenda. The response was systematic: FBI directors were fired, inspectors general were dismissed in midnight purges, and the EPA was gutted of climate scientists. The Schedule F executive order sought to reclassify tens of thousands of career civil servants as at-will employees, effectively politicising the federal workforce. Even the declassification of Epstein and JFK files was wielded as leverage — a signal that the establishment's secrets could be weaponised against it at any moment.",
    iconPath:
      "M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18L19.35 8 12 11.82 4.65 8 12 4.18zM4 9.68l7 3.5v7.14l-7-3.5V9.68zm9 10.64v-7.14l7-3.5v7.14l-7 3.5z",
    relatedActionIds: Object.freeze(["epstein-files-declassification"]),
    keyMetrics: Object.freeze([
      Object.freeze({
        label: "Federal Jobs Targeted",
        value: "50,000+",
      }),
      Object.freeze({
        label: "FBI Directors in 8 Years",
        value: "4 directors",
      }),
      Object.freeze({
        label: "IG Investigations Triggered",
        value: "200+",
      }),
    ]),
  }),

  // =========================================================================
  // GOAL 4: Immigration Fortress
  // =========================================================================
  Object.freeze({
    id: "immigration-fortress",
    title: "Immigration Fortress",
    subtitle: "Seal the border, reshape demographics",
    description:
      "No policy arena was more central to the Trump brand than immigration. The border wall was both a physical barrier and a political totem — 450 miles of new and replacement fencing erected at a cost of billions, while the rhetorical wall was even taller. The Muslim travel ban, family separation policy, drastic reductions in refugee admissions, and attempts to end birthright citizenship formed an interlocking system designed to reduce both legal and illegal immigration. H-1B visa restrictions targeted skilled immigration, while asylum denial rates climbed to 90%, effectively closing the door that the United States had held open since 1980. The cumulative effect was a transformation of who could enter — and who could stay.",
    iconPath:
      "M3 3h18v2H3V3zm0 16h18v2H3v-2zm0-8h18v2H3v-2zm2-4h2v4H5V7zm4 0h2v4H9V7zm4 0h2v4h-2V7zm4 0h2v4h-2V7zM5 13h2v4H5v-4zm4 0h2v4H9v-4zm4 0h2v4h-2v-4zm4 0h2v4h-2v-4z",
    relatedActionIds: Object.freeze([
      "muslim-travel-ban",
      "border-family-separations",
      "india-h1b-trade-crackdown",
    ]),
    keyMetrics: Object.freeze([
      Object.freeze({
        label: "Border Wall Built",
        value: "450 miles",
      }),
      Object.freeze({
        label: "Children Separated",
        value: "5,500+",
      }),
      Object.freeze({
        label: "Asylum Denial Rate",
        value: "90%",
      }),
    ]),
  }),

  // =========================================================================
  // GOAL 5: Geopolitical Realignment
  // =========================================================================
  Object.freeze({
    id: "geopolitical-realignment",
    title: "Geopolitical Realignment",
    subtitle: "Bilateral deals over multilateral alliances",
    description:
      "Trump's foreign policy represented a fundamental break from the post-WWII consensus: multilateral alliances were treated as cost centres, not force multipliers. NATO was publicly derided, with Trump suggesting the US might not defend allies who failed to meet the 2% GDP defence-spending target. The UN, WHO, and WTO were defunded or abandoned. In their place, the administration pursued strongman-to-strongman diplomacy — summits with Kim Jong Un, letters of admiration to Putin, and transactional deals with Saudi Arabia's Mohammed bin Salman. Traditional allies in Europe and the Pacific were pressured to 'pay their share' or face reduced American commitment, while adversaries were offered the carrot of personal relationships with the President.",
    iconPath:
      "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z",
    relatedActionIds: Object.freeze([
      "trump-putin-nato-threats",
      "ukraine-aid-freeze",
      "greenland-panama-canal-claims",
      "taiwan-strait-provocations",
    ]),
    keyMetrics: Object.freeze([
      Object.freeze({
        label: "NATO Members Below 2% GDP",
        value: "23 of 31",
      }),
      Object.freeze({
        label: "Ukraine Aid Frozen",
        value: "$113 billion",
      }),
      Object.freeze({
        label: "Bilateral Trade Deals Signed",
        value: "4 agreements",
      }),
    ]),
  }),

  // =========================================================================
  // GOAL 6: Debt & Dollar Supremacy
  // =========================================================================
  Object.freeze({
    id: "debt-dollar-supremacy",
    title: "Debt & Dollar Supremacy",
    subtitle: "Tariff revenue as national debt tool",
    description:
      "Beneath the headline-grabbing trade wars lay a quieter fiscal calculus: tariffs generate revenue without requiring a single congressional tax vote. At over $80 billion annually, tariff receipts became a meaningful — and politically frictionless — revenue stream for a government drowning in $36.2 trillion of national debt. Simultaneously, the administration weaponised the dollar's status as the world's reserve currency, threatening sanctions and exclusion from the SWIFT system against any nation flirting with de-dollarisation. Trade partners were pressured to absorb US inflationary pressures through currency manipulation rules in new trade agreements, while allied nations were nudged toward purchasing US Treasury bonds as a condition of maintaining defence relationships. The dollar wasn't just currency — it was foreign policy.",
    iconPath:
      "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-1h-1c-1.1 0-2-.9-2-2h2c0 .55.45 1 1 1h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-1.65 0-3-1.35-3-3s1.35-3 3-3h1V7h2v1h1c1.1 0 2 .9 2 2h-2c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1h2c1.65 0 3 1.35 3 3s-1.35 3-3 3h-1v1z",
    relatedActionIds: Object.freeze([
      "china-trade-war",
      "india-h1b-trade-crackdown",
    ]),
    keyMetrics: Object.freeze([
      Object.freeze({
        label: "National Debt",
        value: "$36.2 trillion",
      }),
      Object.freeze({
        label: "Annual Tariff Revenue",
        value: "$80 billion+",
      }),
      Object.freeze({
        label: "Dollar Index",
        value: "10-year high",
      }),
    ]),
  }),
]);

// ---------------------------------------------------------------------------
// Potential Reasons — 5 analytical theories behind Trump-era actions
// ---------------------------------------------------------------------------
const PotentialReasons = Object.freeze([
  // =========================================================================
  // REASON 1: The $36 Trillion Debt Crisis
  // =========================================================================
  Object.freeze({
    id: "debt-crisis-fiscal-engine",
    title: "The $36 Trillion Debt Crisis",
    tagline:
      "When you owe $36 trillion, every tariff is a tax you don't have to vote on.",
    analysis:
      "The United States government spends more on interest payments — over $1 trillion annually — than it does on national defence. In this fiscal environment, tariffs become the perfect political instrument: they generate revenue without requiring a single congressional tax vote, they can be imposed unilaterally via executive action, and they shift the political blame for price increases onto foreign governments. By pressuring NATO allies to increase defence spending to 2% of GDP, the administration simultaneously reduced America's overseas financial commitments while creating a narrative of 'fairness.' Every renegotiated trade deal — USMCA, Phase One China, bilateral agreements — included provisions designed to reduce the trade deficit, framing the national debt crisis not as a spending problem but as a 'bad deals' problem that only Trump could fix. The weaponisation of the dollar as the world's reserve currency gave the administration an additional lever: any country threatening to de-dollarise faced the implicit threat of sanctions, ensuring continued global demand for US Treasury bonds.",
    evidence: Object.freeze([
      "US national debt surpassed $36.2 trillion by 2025, with annual interest payments exceeding $1 trillion for the first time in history.",
      "Tariff revenue exceeded $80 billion annually by 2024 — a 75% increase over pre-Trump levels — without any new legislation passed by Congress.",
      "NATO allies collectively increased defence spending by $130 billion between 2017 and 2024 after sustained US pressure, though 23 of 31 members still remained below the 2% target.",
      "The USMCA included provisions requiring 75% of auto parts to be manufactured in North America, up from 62.5% under NAFTA, directly targeting the US trade deficit.",
      "Federal Reserve interest rate increases during the tariff period cost American homebuyers an estimated additional $40,000 over the life of a standard 30-year mortgage.",
      "China purchased $135 billion in additional US agricultural products under the Phase One trade deal, though independent analyses showed the target was never fully met.",
    ]),
    counterArgument:
      "Critics argue tariffs are ultimately paid by American consumers, effectively functioning as a regressive sales tax that disproportionately burdens lower-income households. Economic studies estimated the trade wars cost the average American household $1,277 annually in higher prices.",
  }),

  // =========================================================================
  // REASON 2: Petrodollar & Energy Empire
  // =========================================================================
  Object.freeze({
    id: "petrodollar-energy-empire",
    title: "Petrodollar & Energy Empire",
    tagline: "Control the oil, control the world order.",
    analysis:
      "When mapped against energy markets, virtually every major Trump-era foreign policy action reveals an underlying logic of fossil-fuel dominance. Sanctions on Venezuela — which sits atop the world's largest proven oil reserves at 304 billion barrels — conveniently eliminated a competitor from global crude markets just as US shale production was ramping up. Withdrawing from the Paris Climate Agreement removed regulatory constraints on domestic extraction and signalled to investors that the US was open for carbon-intensive business. The cultivated relationship with Saudi Arabia's Mohammed bin Salman preserved the petrodollar system — the agreement that oil is globally traded in US dollars — while simultaneously securing $450 billion in bilateral deals including $110 billion in arms sales. Even the ambivalent posture toward Russia can be read through an energy lens: Moscow is simultaneously a natural gas competitor in European markets and a potential partner in managing global oil supply through OPEC+ coordination. The LNG export boom, from near-zero in 2016 to over $50 billion annually, became America's most effective soft-power tool in Europe.",
    evidence: Object.freeze([
      "US crude oil production reached 13.3 million barrels per day in 2024, making it the world's largest producer — surpassing Saudi Arabia and Russia by a combined margin of over 3 million barrels per day.",
      "LNG exports grew from virtually zero in 2016 to over $50 billion annually by 2024, with Europe increasing its share of US LNG imports from 5% to over 40% following the Russia-Ukraine conflict.",
      "Venezuela holds 304 billion barrels of proven oil reserves — the world's largest — and US sanctions on PDVSA removed approximately 1.5 million barrels per day from global supply.",
      "The Saudi arms deal, valued at $110 billion with a $450 billion total economic package, was the largest single arms sale in US history.",
      "Over 100 environmental regulations were rolled back, including methane emission rules, clean water protections, and fuel efficiency standards, collectively saving the fossil-fuel industry an estimated $11.6 billion annually.",
    ]),
    counterArgument:
      "Supporters contend energy independence reduces America's vulnerability to foreign supply shocks and that the US becoming a net energy exporter for the first time since 1952 strengthened both national security and the economy.",
  }),

  // =========================================================================
  // REASON 3: Electoral Base Calculus
  // =========================================================================
  Object.freeze({
    id: "electoral-base-calculus",
    title: "Electoral Base Calculus",
    tagline: "Every executive order has a zip code.",
    analysis:
      "A forensic mapping of Trump's major policy actions onto electoral geography reveals a precise demographic calculus. The trade war targeted Rust Belt manufacturing workers in Pennsylvania, Michigan, and Wisconsin — the three states that decided the 2016 election by a combined margin of 77,744 votes. Immigration hardlines resonated in rural border-adjacent communities that swung sharply Republican between 2012 and 2016. The embassy move to Jerusalem and unwavering Israel support locked in evangelical Christians — 81% of white evangelicals voted for Trump in 2020 — while anti-China rhetoric animated the national-security suburban voter that had been drifting toward Democrats. Even the Epstein files declassification served an electoral purpose: energising the conspiracy-aware voter segment that trusts Trump to expose establishment corruption. Each policy action, when viewed through the lens of Electoral College math rather than traditional foreign policy doctrine, maps cleanly to a specific voter cohort in a specific swing-state zip code.",
    evidence: Object.freeze([
      "Trump won Pennsylvania, Michigan, and Wisconsin in 2016 by a combined 77,744 votes — 0.06% of the total electorate — making Rust Belt economic messaging arguably the most electorally efficient policy investment in modern history.",
      "81% of white evangelical Christians voted for Trump in 2020, constituting roughly 28% of the total electorate and making them the single largest reliable voting bloc for either party.",
      "Anti-immigration sentiment correlated with a 14-point swing toward Republicans in counties within 100 miles of the southern border between 2012 and 2020.",
      "The China trade war polled at 60% approval among Republican voters in Rust Belt states, compared to 34% nationally, revealing its targeted electoral value.",
      "Trump improved his vote share among Latino voters from 28% in 2016 to 38% in 2020, partly attributed to anti-socialist messaging tied to Venezuela and Cuba policies.",
      "Rural counties that gained manufacturing jobs during the tariff period swung an average of 3.2 points more toward Trump in 2020 compared to similar counties without job gains.",
    ]),
    counterArgument:
      "Defenders say he is simply delivering on campaign promises to voters who elected him, and that democratic accountability requires presidents to prioritise the interests of their actual constituency.",
  }),

  // =========================================================================
  // REASON 4: Personal & Family Business Interests
  // =========================================================================
  Object.freeze({
    id: "personal-family-business",
    title: "Personal & Family Business Interests",
    tagline:
      "The line between the Oval Office and the corner office was never clear.",
    analysis:
      "The Trump presidency was unprecedented in the scale of potential conflicts between official duties and private business interests. The Trump Organization maintained properties in at least 12 countries during his presidency, including towers in Istanbul and Manila whose host governments actively sought US policy concessions. Ivanka Trump received 18 Chinese trademarks — including for voting machines — during active trade negotiations with Beijing. Jared Kushner's post-White House investment firm, Affinity Partners, secured $2 billion from Saudi Arabia's sovereign wealth fund despite the firm's own advisors flagging concerns about the deal's merits. The Trump International Hotel in Washington, D.C., became a de facto embassy for foreign governments seeking favour, with the Saudi lobby alone spending over $270,000 at the property. While Trump claimed to have separated from business operations, the absence of a blind trust — he merely handed management to his sons — meant the President always knew exactly which countries were paying his family's bills.",
    evidence: Object.freeze([
      "Ivanka Trump received 18 trademarks from China in 2018 alone, several granted on the same day her father dined with Xi Jinping at Mar-a-Lago.",
      "Jared Kushner's Affinity Partners received a $2 billion investment from Saudi Arabia's Public Investment Fund in 2022, six months after leaving the White House, despite the fund's advisory panel recommending against the deal.",
      "Foreign governments and lobbying groups spent over $3.7 million at Trump-branded properties during his presidency, according to congressional investigations.",
      "The Trump Organization held licensing deals in at least 12 countries, including Turkey, the Philippines, India, Indonesia, and the UAE, while the President made policy decisions affecting each nation.",
      "Three separate emoluments clause lawsuits were filed against Trump — though all were dismissed on procedural grounds, none were adjudicated on the merits.",
      "Trump's Mar-a-Lago Club doubled its membership fee from $100,000 to $200,000 after his inauguration, with foreign nationals and lobbyists among the new members.",
    ]),
    counterArgument:
      "Trump's team has maintained that he fully divested from business operations upon taking office, that his sons managed the company independently, and that any overlaps between Trump Organization interests and policy decisions are coincidental rather than causal.",
  }),

  // =========================================================================
  // REASON 5: MAGA as Ideological Movement
  // =========================================================================
  Object.freeze({
    id: "maga-ideological-movement",
    title: "MAGA as Ideological Movement",
    tagline:
      "Not just a slogan — a worldview that reshapes the rules.",
    analysis:
      'What critics dismiss as chaos, MAGA adherents recognise as a coherent ideology with four pillars: economic protectionism, cultural nativism, institutional distrust, and strongman admiration. This worldview did not emerge in a vacuum — it mirrors global populist movements led by Viktor Orbán in Hungary, Jair Bolsonaro in Brazil, and Giorgia Meloni in Italy. Steve Bannon, Trump\'s chief strategist, explicitly articulated the goal as the "deconstruction of the administrative state" — not reform, but demolition. The Heritage Foundation\'s Project 2025, a 922-page policy blueprint for a second Trump term, codified this ideology into actionable executive orders covering everything from abolishing the Department of Education to reclassifying 50,000 civil servants. When viewed through this lens, actions that appear random or impulsive — a tweet attacking NATO, a tariff on Canadian lumber, a pardon for a war criminal — are revealed as consistent applications of a single operating thesis: that the post-WWII liberal international order was designed to benefit elites at the expense of ordinary citizens, and that only its systematic dismantlement can restore American greatness.',
    evidence: Object.freeze([
      "Steve Bannon publicly stated at CPAC 2017 that the administration's goal was the 'deconstruction of the administrative state,' framing regulatory rollbacks as ideological rather than merely economic.",
      "The Heritage Foundation's Project 2025 — a 922-page policy blueprint with contributions from over 400 conservative scholars — explicitly planned the restructuring of every federal agency around MAGA principles.",
      "Viktor Orbán was the first European leader invited to Mar-a-Lago, and Trump publicly praised Hungary's immigration policies, border fencing, and media consolidation as models to emulate.",
      "Bolsonaro modelled his 2018 campaign explicitly on Trump's playbook, including the slogan 'Brazil Above Everything' and anti-establishment institutional attacks on Brazil's Supreme Court.",
      "Giorgia Meloni's Brothers of Italy party rose from 4% to governing majority using the same populist-nationalist template: anti-immigration, anti-EU scepticism, and traditional values rhetoric.",
      "MAGA candidates won 174 of 235 Republican primary races in 2022 where Trump endorsed, demonstrating the movement's institutional capture of the GOP beyond Trump himself.",
    ]),
    counterArgument:
      "Proponents argue MAGA is a necessary correction to decades of globalist policies that left working Americans behind, pointing to wage stagnation, manufacturing decline, and cultural displacement as evidence that the pre-Trump consensus had failed the majority.",
  }),
]);

// ---------------------------------------------------------------------------
// Downloadable Resources — 4 report generators
// ---------------------------------------------------------------------------
const DownloadableResources = Object.freeze([
  Object.freeze({
    id: "full-action-report",
    title: "Full Action Report",
    description:
      "Complete analysis of all 14 actions with detailed facts, global effects, controversy assessments, and country-by-country impact breakdowns. The definitive reference document.",
    format: "html",
    formatLabel: "HTML Report",
    iconType: "report",
    generatorFnName: "generateFullReport",
    executables: Object.freeze({
      windows: "full-action-report.exe",
      macos: "full-action-report-macos",
      linux: "full-action-report-linux",
    }),
  }),
  Object.freeze({
    id: "controversy-rankings",
    title: "Controversy Rankings",
    description:
      "All 14 actions ranked by controversy level — from globally condemned to merely contentious — with full metadata, category breakdowns, and comparative analysis.",
    format: "html",
    formatLabel: "HTML Report",
    iconType: "data",
    generatorFnName: "generateControversyRankings",
    executables: Object.freeze({
      windows: "controversy-rankings.exe",
      macos: "controversy-rankings-macos",
      linux: "controversy-rankings-linux",
    }),
  }),
  Object.freeze({
    id: "country-impact-matrix",
    title: "Country Impact Matrix",
    description:
      "Every country mentioned across all 14 actions, which policies affect it, and detailed impact narratives. A geographic lens on Trump-era foreign policy consequences.",
    format: "html",
    formatLabel: "HTML Report",
    iconType: "matrix",
    generatorFnName: "generateCountryMatrix",
    executables: Object.freeze({
      windows: "country-impact-matrix.exe",
      macos: "country-impact-matrix-macos",
      linux: "country-impact-matrix-linux",
    }),
  }),
  Object.freeze({
    id: "strategic-analysis",
    title: "Strategic Analysis",
    description:
      "Complete strategic goals and analytical theories breakdown with cross-references to specific actions, key metrics, evidence citations, and counter-arguments. The big-picture document.",
    format: "html",
    formatLabel: "HTML Report",
    iconType: "analysis",
    generatorFnName: "generateStrategicAnalysis",
    executables: Object.freeze({
      windows: "strategic-analysis.exe",
      macos: "strategic-analysis-macos",
      linux: "strategic-analysis-linux",
    }),
  }),
]);

// ---------------------------------------------------------------------------
// Utility: Get all unique action categories in the order they first appear
// ---------------------------------------------------------------------------
function getAllActionCategories() {
  const seen = new Set();
  const categories = [];
  for (const action of ActionsData) {
    if (!seen.has(action.category.id)) {
      seen.add(action.category.id);
      categories.push(action.category);
    }
  }
  return categories;
}
