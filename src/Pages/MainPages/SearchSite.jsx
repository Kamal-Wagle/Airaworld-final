import React from "react";
import { ABCD } from "./Data"; // Assuming Data.js contains the ABCD data
import "./serchSite.css"; // Make sure to have proper CSS file linked for styling

const SearchSite = () => {
  const JournalSiteData = ABCD[0]; // Accessing the first element of ABCD array

  return (
    <div className="container">
      {/* Section for journal search sites */}

      <section className="search-section">


      <div className="search-box">
          <h2>Article Search Sites</h2>
          <ul style={{ textAlign: "justify", padding: "10px" }}>
            <li>1. Mero Job</li>
            <li>2. Kumari Job</li>
            <li>3. Kantipur Job</li>
            <li>4. Jobejee</li>
            <li>5. Public health update</li>
            <li>6. JobsNepal</li>
          </ul>
        </div>



        <div className="search-box job-search-box">
          <h2>Job Search</h2>
          <ul style={{ textAlign: "justify", padding: "10px" }}>
            <li>1. Internet Archive Scholar</li>
            <li>2. CORE</li>
            <li>3. CiteSeerX</li>
            <li>4. Paperity</li>
            <li>5. Semantic Scholar</li>
            <li>6. Europe PMC</li>
            <li>7. PubMed Central (PMC)</li>
            <li>8. ResearchGate</li>
            <li>9. SSRN: Social Science Research Network</li>
            <li>10. HAL</li>
            <li>11. RePEc: Research Papers in Economics</li>
            <li>12. PhilPapers</li>
            <li>13. ERIC: Educational Resource Information Center</li>
            <li>14. Zendy</li>
            <li>15. Google Scholar.</li>
            <li>16. SciSpace by Typeset</li>
            <li>17. Semantic Scholar</li>
            <li>18. ResearchGate</li>
            <li>19. IEEE Xplore</li>
            <li>20. JSTOR</li>
            <li>21. Scopus</li>
            <li>22. Consensus</li>
          </ul>
        </div>

    
      </section>

      {/* Section for displaying journal categories */}
      <section className="category-section">
        {Object.keys(JournalSiteData).map((category, index) => (
          <div className="category-box" key={index}>
            <h2 className="category-title" style={{ textAlign: "center" }}>
              Journal sites: {category}
            </h2>
            <div className="journal-grid margina">
              {/* Left column */}
              <ul>
                {JournalSiteData[category].map(
                  (journal, idx) =>
                    idx % 2 === 0 && (
                      <li key={idx}>
                        {idx + 1}. {journal}
                      </li>
                    )
                )}
              </ul>

              {/* Right column */}
              <ul>
                {JournalSiteData[category].map(
                  (journal, idx) =>
                    idx % 2 !== 0 && (
                      <li key={idx}>
                        {idx + 1}. {journal}
                      </li>
                    )
                )}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default SearchSite;
