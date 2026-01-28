import { useState } from 'react';
import { Link } from 'react-router-dom';
import WorkBenchDatasheet from '../../assets/logos-resources/workbench-data-sheet.png';
import TheShadowAICrisis from '../../assets/logos-resources/TheShadowAICrisis.svg';
import filtersIcon from '../../assets/filters.svg';
import CompanyOverviewMillPondResearch from '../../assets/logos-resources/company-overview.png';
import TheSecretWarofBigToken from '../../assets/logos-resources/big-token.png';
import TheEmergenceofaShadowAICrisis from '../../assets/logos-resources/TheEmergenceofaShadowAICrisis.svg';
import MillPondResearchCapabilityStatement from '../../assets/logos-resources/MillPondResearchCapabilityStatement.svg';
import MillPondResearch1MinutePitchTechCrunchDisrupt2025 from '../../assets/logos-resources/MillPondResearch1MinutePitchTechCrunchDisrupt2025.svg';
import SoWhatHappensAfterAGI from '../../assets/logos-resources/SoWhatHappensAfterAGI.svg';
import HowEnterprisesCanSecurelyUnlockAIsPower from '../../assets/logos-resources/HowEnterprisesCanSecurelyUnlockAIsPower.svg';
import TheCanaryLeavingTheCoalMine from '../../assets/logos-resources/TheCanaryLeavingTheCoalMine.svg';
import TheContextDilemma from '../../assets/logos-resources/TheContextDilemma.svg';
import NavigatingAICopyrightComplianceUnderTheNewUSPTOGuidelines from '../../assets/logos-resources/NavigatingAICopyrightComplianceUnderTheNewUSPTOGuidelines.svg';
import HarnessingthePowerofAIwithSecureInfrastructure from '../../assets/logos-resources/HarnessingthePowerofAIwithSecureInfrastructure.svg';
import xilos1 from '../../assets/logos-resources/xilos-1.png';
import xilos2 from '../../assets/logos-resources/xilos-2.png';
import xilos3 from '../../assets/logos-resources/xilos-3.png';
import xilos4 from '../../assets/logos-resources/xilos-4.png';
import workbench6 from '../../assets/logos-resources/workbench-6.png';
import TheDataHarvestTheBiggestThreatinAI from '../../assets/logos-resources/TheDataHarvestTheBiggestThreatinAI.svg';
import TheIntelligenceSolution from '../../assets/logos-resources/TheIntelligenceSolution.svg';
import AnImportantLimitationofAI from '../../assets/logos-resources/AnImportantLimitationofAI.svg';
import Masonry from "react-masonry-css";
import SecuringTheAutonomousEnterprise from '../../assets/logos-resources/wb-securing-the-autonomous-enterprise.png';
import TheAgenticImperative from '../../assets/logos-resources/xilos-agentic-imperative.png';
import BreakingFreePOC from '../../assets/logos-resources/breaking-free.jpeg';
import XilosDataSheet from '../../assets/logos-resources/xilos-data-sheet.png';
import AIUnknown from '../../assets/logos-resources/ai-unknown.png';

// Define responsive breakpoints for Masonry columns.
const breakpointColumnsObj = {
  default: 3,
  1024: 2,
  640: 1,
};

/*
 * The FiltersNews component shows a collection of resources with category and topic
 * filters. This modified version tweaks padding and spacing throughout to make
 * the layout work better on smaller screens. Top filter buttons and the
 * collapsible filter panel use responsive horizontal padding (`px-4` on small
 * devices, `md:px-10` on medium and above). The Masonry layout container now
 * uses `pb-24 md:pb-36` to shorten the excessive bottom padding on mobile,
 * and article cards switch from `p-6` to `p-4 md:p-6` for more compact cards.
 */

function FiltersNews() {
  const [resources] = useState([
          {
       id: 30,
       title: 'Company Overview - Mill Pond Research Inc',
       category: 'Collateral',
       topic: 'Product Collateral',
       date: 'January 2026',
       description:
         "Mill Pond Research delivers the world's only end-to-end platform for deploying, securing, and orchestrating agentic AI at enterprise scale through WorkBench and Xilos—patented solutions that enable CIOs and CISOs to safely harness AI efficiency while protecting proprietary data and ensuring compliance across their networks.",
       image: CompanyOverviewMillPondResearch,
       link: 'https://48049833.fs1.hubspotusercontent-na2.net/hubfs/48049833/MPR_Company_Overview_012226.pdf',
     }, 
    {
       id: 29,
       title: 'Your Employees Are Already Using AI. The Question Is Whether You Know About It.',
       category: 'Blog',
       topic: 'AI Security & Governance',
       date: 'January 2026',
       description: 'Here’s an uncomfortable truth: right now, most of the people in your organization are pasting sensitive company data into ChatGPT or Gemini. Or Claude.',
       image: AIUnknown,
       link: 'https://blog.millpondresearch.com/your-employees-are-already-using-ai-the-question-is-whether-you-know-about-it-d135e00a17c6',
       },
      {
       id: 28,
       title: 'Securing the Autonomous Enterprise',
       category: 'White Paper',
       topic: 'AI Security & Governance',
       date: 'January 2026',
       description:
       'A field-guide for CIOs and CISOs to deploy agentic AI without falling victim to shadow-AI sprawl, data leakage, or compliance violations.',
       image: SecuringTheAutonomousEnterprise,
       link: 'https://48049833.fs1.hubspotusercontent-na2.net/hubfs/48049833/Securing%20the%20Autonomous%20Enterprise.pdf',
       },
       {
       id: 27,
       title: 'The Agentic Imperative',
       category: 'White Paper',
       topic: 'AI Strategy & Deployment',
       date: 'January 2026',
       description:
       'Why 40 % of agentic-AI projects will be canceled by 2027 and how to build the unified tooling that moves enterprises from pilot purgatory to production at pace.',
       image: TheAgenticImperative,
       link: 'https://48049833.fs1.hubspotusercontent-na2.net/hubfs/48049833/The%20Agentic%20Imperative.pdf',
       },
       {
       id: 26,
       title: 'Breaking Free from Perpetual Proof-of-Concept Purgatory',
       category: 'Blog',
       topic: 'AI Development Practices',
       date: 'January 2026',
       description:
       'Stop rebuilding agents from scratch every time you swap a model—use authoring tools that turn weeks of tinkering into days of systematic, production-ready development.',
       image: BreakingFreePOC,
       link: 'https://blog.millpondresearch.com/breaking-free-from-perpetual-proof-of-concept-purgatory-8bcf991ba4d8',
       },
       {
       id: 25,
       title: 'Xilos - Data Sheet',
       category: 'Collateral',
       topic: 'Product Collateral',
       date: 'January 2026',
       description:
         "Xilos: Mill Pond Research's comprehensive AI governance platform that provides complete visibility, security, and orchestration for enterprise agentic AI systems while preventing data leakage, reducing costs, and enabling secure cross-departmental collaboration.",
       image: XilosDataSheet,
       link: 'https://48049833.fs1.hubspotusercontent-na2.net/hubfs/48049833/Xilos%20-%20Data%20Sheet%20-%2020260114.pdf',
     },
     {
       id: 24,
       title: 'Workbench - Data Sheet',
       category: 'Collateral',
       topic: 'Product Collateral',
       date: 'January 2025',
       description:
         "Workbench: Mill Pond Research's universal LLM workspace - a frontend for using LLM models, creating agents, writing and sharing prompts, built on your context.",
       image: WorkBenchDatasheet,
       link: 'https://48049833.fs1.hubspotusercontent-na2.net/hubfs/48049833/WorkBench%20-%20Data%20Sheet%20-%2020260114.pdf',
     },
     {
       id: 23,
       title: 'The Shadow AI Crisis',
       category: 'Collateral',
       topic: 'Product Collateral',
       date: 'November 2025',
       description:
         "Mill Pond Research's comprehensive analysis of the shadow AI crisis, revealing critical enterprise vulnerabilities and introducing Xilos.AI as an integrated governance platform that observes, secures, and orchestrates AI deployments across organizations.",
       image: TheShadowAICrisis,
       link: 'https://48049833.fs1.hubspotusercontent-na2.net/hubfs/48049833/The%20Shadow%20AI%20Crisis%20-%20Xilos%20-%20Mill%20Pond%20Research.pdf',
     },
     {
       id: 22,
       title: 'The Secret War or "Big Token"',
       category: 'Blog',
       topic: 'AI Strategy',
       date: 'September 2025',
       description:
         'The arrival of "Big Token" AI models has revolutionized enterprise capabilities, enabling unprecedented efficiency and insight extraction…',
       image: TheSecretWarofBigToken,
       link: 'https://blog.millpondresearch.com/the-rise-of-big-token-a700f967edac',
     },
     {
       id: 21,
       title: 'Mill Pond Research Capability Statement',
       category: 'Case Study',
       topic: 'Company Overview',
       date: 'August 2025',
       description:
         "Comprehensive overview of Mill Pond Research's capabilities, expertise, and proven track record in AI security and orchestration.",
       image: MillPondResearchCapabilityStatement,
       link: 'https://www.millpondresearch.com/resources/files/Mill%20Pond%20Research%20Capability%20Statement.pdf',
     },
     {
       id: 20,
       title: 'The Emergence of a Shadow AI Crisis',
       category: 'White Paper',
       topic: 'Security',
       date: 'August 2025',
       description:
         'A comprehensive White Paper examining the growing challenge of shadow AI in enterprise environments and strategies for mitigation.',
       image: TheEmergenceofaShadowAICrisis,
       link: '#top',
     },
     {
       id: 19,
       title: 'Xilos - Quick Introduction',
       category: 'Video',
       topic: 'Xilos',
       date: 'August2025',
       description:
         'A quick introduction to Xilos, the AI security and orchestration platform that gives you complete control over your AI agents.',
       image: xilos3,
       link: 'https://www.youtube.com/watch?v=nJ1YIbrTL3s&feature=youtu.be',
     },
     {
       id: 18,
       title: 'Xilos: A Definitive Answer to the Shadow AI Crisis',
       category: 'Blog',
       topic: 'Security',
       date: 'July 2025',
       description:
         'The $670,000 Question: Why Shadow AI Is the Fastest-Growing Line Item in Your Next Breach.',
       image: xilos4,
       link: 'https://devsecopsai.today/xilos-a-definitive-answer-to-the-shadow-ai-crisis-4793463779ec',
     },
     {
       id: 17,
       title: 'Xilos: The Missing Piece for Secure Enterprise AI in an Agentic World',
       category: 'Blog',
       topic: 'Security',
       date: 'July 2025',
       description: 'The Unseen Crisis in Enterprise AI Adoption.',
       image: xilos1,
       link: 'https://blog.millpondresearch.com/xilos-the-missing-piece-for-secure-enterprise-ai-in-an-agentic-world-a631f714347f',
     },
     {
       id: 16,
       title: 'Mill Pond Research 1-Minute Pitch TechCrunch Disrupt 2025',
       category: 'Video',
       topic: 'Company Overview',
       date: 'July 2025',
       description:
         "Watch Mill Pond Research's 1-minute pitch presentation from TechCrunch Disrupt 2025, showcasing our AI security and orchestration solutions.",
       image: MillPondResearch1MinutePitchTechCrunchDisrupt2025,
       link: 'https://www.youtube.com/watch?v=IvWfC_ELe-w',
     },
     {
       id: 15,
       title: 'WorkBench Brochure',
       category: 'Collateral',
       topic: 'WorkBench',
       date: 'July 2025',
       description:
         'Detailed product information for WorkBench, the unified AI authoring platform for enterprise teams.',
       image: workbench6,
       link: 'https://www.millpondresearch.com/resources/files/Workbench%20-%20Brochure.pdf',
     },
     {
       id: 14,
       title: 'Xilos Brochure',
       category: 'Collateral',
       topic: 'Xilos',
       date: 'July 2025',
       description:
         'Comprehensive overview of Xilos features, capabilities, and enterprise security solutions for AI orchestration.',
       image: xilos2,
       link: 'https://www.millpondresearch.com/resources/files/Xilos%20-%20Brochure.pdf',
     },
     {
       id: 13,
       title: 'So, What Happens After AGI?',
       category: 'Blog',
       topic: 'Future of AI',
       date: 'June 2025',
       description:
         "The digital landscape is transforming before our eyes. AI isn't merely a passing trend; it's the foundation upon which every application…",
       image: SoWhatHappensAfterAGI,
       link: 'https://blog.millpondresearch.com/so-what-happens-after-agi-a6aecac21b6a',
     },
     {
       id: 12,
       title: "How Enterprises Can Securely Unlock AI's Power",
       category: 'Blog',
       topic: 'Enterprise AI',
       date: 'May 2025',
       description:
         "Navigating the complexities of AI governance isn't just about avoiding pitfalls; it's about building a foundation for innovation. Here's a…",
       image: HowEnterprisesCanSecurelyUnlockAIsPower,
       link: 'https://devsecopsai.today/how-enterprises-can-securely-unlock-ais-power-aa2e02329852',
     },
     {
       id: 11,
       title: 'The Canary Leaving the Coal Mine',
       category: 'Blog',
       topic: 'Business Strategy',
       date: 'May 2025',
       description: "The Existential Threat That Most Businesses Won't Survive.",
       image: TheCanaryLeavingTheCoalMine,
       link: 'https://blog.millpondresearch.com/the-canary-leaving-the-coal-mine-7e589d8822d0',
     },
     {
       id: 10,
       title: 'The Context Dilemma',
       category: 'Blog',
       topic: 'Technology',
       date: 'May 2025',
       description: 'How Fragmented Digital Experiences Are Undermining Our AI Future.',
       image: TheContextDilemma,
       link: 'https://devsecopsai.today/the-context-dilemma-2c53a8a9a68f',
     },
     {
       id: 9,
       title: 'Navigating AI Copyright Compliance Under the New USPTO Guidelines',
       category: 'Blog',
       topic: 'Legal & Compliance',
       date: 'May 2025',
       description: 'The New AI Copyright Landscape.',
       image: NavigatingAICopyrightComplianceUnderTheNewUSPTOGuidelines,
       link: 'https://blog.millpondresearch.com/how-to-navigate-ai-copyright-compliance-under-the-new-uspto-guidelines-25bc63505549',
     },
     {
       id: 8,
       title: 'Harnessing the Power of AI with Secure Infrastructure',
       category: 'White Paper',
       topic: 'Enterprise AI',
       date: 'May 2025',
       description:
         'A detailed White Paper exploring how organizations can leverage AI capabilities while maintaining robust security and intelligent orchestration.',
       image: HarnessingthePowerofAIwithSecureInfrastructure,
       link: '#top',
     },
     {
       id: 7,
       title: 'The Data Harvest: The Biggest Threat in AI',
       category: 'Blog',
       topic: 'Data Privacy',
       date: 'April 2025',
       description: 'State of the User + Provider Agreement.',
       image: TheDataHarvestTheBiggestThreatinAI,
       link: 'https://devsecopsai.today/the-data-harvest-how-llm-providers-leverage-user-interactions-for-model-improvement-75384c878b69',
     },
     {
       id: 6,
       title: 'The Intelligence Solution',
       category: 'White Paper',
       topic: 'eBook',
       date: 'March 2025',
       description:
         'A comprehensive eBook exploring the future of artificial intelligence and how organizations can harness its transformative power.',
       image: TheIntelligenceSolution,
       link: 'https://www.theintelligencesolution.com',
     },
     {
       id: 5,
       title: 'An Important Limitation of AI',
       category: 'Blog',
       topic: 'AI Fundamentals',
       date: 'February 2025',
       description:
         'In the pursuit of understanding artificial intelligence (AI) and its limitations, we must properly frame AI in our collective…',
       image: AnImportantLimitationofAI,
       link: 'https://blog.millpondresearch.com/an-important-limitation-of-ai-457324951af7',
     },
   ]);

  const categories = ['Collateral', 'Blog', 'Case Study', 'eBook', 'White Paper', 'Video'];
  const topics = [
    'AI Fundamentals',
    'AI Strategy',
    'Business Strategy',
    'Company Overview',
    'Data Governance',
    'Data Privacy',
    'Enterprise AI',
    'Future of AI',
    'Legal & Compliance',
    'Product Collateral',
    'Security',
    'Technology',
    'WorkBench',
    'Xilos',
  ];

  const [selectedCategories, setSelectedCategories] = useState(new Set());
  const [selectedTopics, setSelectedTopics] = useState(new Set());
  const [showAllCategories, setShowAllCategories] = useState(true);
  const [showAllTopics, setShowAllTopics] = useState(true);
  const [showFilters, setShowFilters] = useState(false);

  const toggleCategory = (category) => {
    if (category === 'All') {
      setShowAllCategories(!showAllCategories);
      setSelectedCategories(new Set());
    } else {
      const newSelected = new Set(selectedCategories);
      if (newSelected.has(category)) {
        newSelected.delete(category);
      } else {
        newSelected.add(category);
      }
      setSelectedCategories(newSelected);
      setShowAllCategories(false);
    }
  };

  const toggleTopic = (topic) => {
    if (topic === 'All') {
      setShowAllTopics(!showAllTopics);
      setSelectedTopics(new Set());
    } else {
      const newSelected = new Set(selectedTopics);
      if (newSelected.has(topic)) {
        newSelected.delete(topic);
      } else {
        newSelected.add(topic);
      }
      setSelectedTopics(newSelected);
      setShowAllTopics(false);
    }
  };

  const clearAll = () => {
    setSelectedCategories(new Set());
    setSelectedTopics(new Set());
    setShowAllCategories(true);
    setShowAllTopics(true);
  };

  const filteredResources = resources.filter((resource) => {
    const categoryMatch =
      selectedCategories.size === 0 || selectedCategories.has(resource.category) || showAllCategories;
    const topicMatch = selectedTopics.size === 0 || selectedTopics.has(resource.topic) || showAllTopics || !resource.topic;
    return categoryMatch && topicMatch;
  });

  return (
    <>
      {/* Top buttons */}
      <div className="flex justify-left gap-4 px-4 md:px-10 pt-4 pb-4 max-w-7xl mx-auto">
        <button
          className={`button-filter ${showFilters ? 'selected' : ''}`}
          style={showFilters ? { backgroundColor: '#4B4B4B', color: '#FFFFFF' } : {}}
          onClick={() => setShowFilters(!showFilters)}
        >
          <img src={filtersIcon} alt="Filters" className="w-4 h-4" />
          Filters
        </button>

        {showFilters && (
          <button
            className="button-filter"
            style={{ backgroundColor: 'transparent', border: '1px solid #4B4B4B' }}
            onClick={clearAll}
          >
            Clear All
          </button>
        )}
      </div>

      {/* Filters */}
      {showFilters && (
        <div className="flex flex-col gap-6 px-4 md:px-10 max-w-7xl mx-auto pb-8 md:pb-6">
          <div>
            <p className="small-font font-medium text-left">By Category</p>
            <div className="flex flex-wrap gap-3 mt-2">
              <button
                className={`button-filter ${showAllCategories ? 'selected' : ''}`}
                onClick={() => toggleCategory('All')}
              >
                All
              </button>
              {categories.map((c) => (
                <button
                  key={c}
                  className={`button-filter ${selectedCategories.has(c) ? 'selected' : ''}`}
                  onClick={() => toggleCategory(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="small-font font-medium text-left">By Topic</p>
            <div className="flex flex-wrap gap-3 mt-2">
              <button
                className={`button-filter ${showAllTopics ? 'selected' : ''}`}
                onClick={() => toggleTopic('All')}
              >
                All
              </button>
              {topics.map((t) => (
                <button
                  key={t}
                  className={`button-filter ${selectedTopics.has(t) ? 'selected' : ''}`}
                  onClick={() => toggleTopic(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Masonry layout */}
      <div className="relative px-4 md:px-6 pt-6 pb-24 md:pb-36 max-w-7xl mx-auto flex justify-center">
        <div className="mx-4">
          {filteredResources.length > 0 ? (
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="flex w-full -ml-8"
              columnClassName="pl-8 space-y-8"
            >
              {filteredResources.map((resource) => (
                <article
                  key={resource.id}
                  className="flex flex-col shadow-md ring-1 ring-gray-200 hover:shadow-lg transition-all rounded-[3rem] overflow-hidden bg-[#FBFAF8] text-left"
                >
                  <div className="p-4 md:p-6 text-left">
                    <div className="flex gap-3 text-sm font-semibold flex-wrap">
                      <span className="rounded-full bg-white px-3 py-1 text-[#4B4B4B]">
                        {resource.category}
                      </span>
                      <span className="rounded-full bg-white px-3 py-1 text-[#4B4B4B]">
                        {resource.topic}
                      </span>
                    </div>

                    <p className="subheader mt-4 text-sm leading-relaxed text-[#4B4B4B] text-left">
                      {resource.title}
                    </p>
                    <p className="small-font text-[#567C8D] text-left">{resource.date}</p>
                    <p className="small-font mt-4 text-[#4B4B4B] text-left">
                      {resource.description}
                    </p>
                  </div>

                  {resource.image && (
                    <div className="relative">
                      <img
                        src={resource.image}
                        alt={resource.title}
                        className="w-full min-h-[200px] object-cover"
                      />

                      {resource.link &&
                        (resource.link === '#top' ? (
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className="readmore-btn"
                          >
                            Read More →
                          </button>
                        ) : resource.link.startsWith('/') ? (
                          <Link to={resource.link} className="readmore-btn">
                            Read More →
                          </Link>
                        ) : (
                          <a
                            href={resource.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="readmore-btn"
                          >
                            Read More →
                          </a>
                        ))}
                    </div>
                  )}
                </article>
              ))}
            </Masonry>
          ) : (
            <p className="text-center py-12 text-gray-500">No resources match the selected filters.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default FiltersNews;