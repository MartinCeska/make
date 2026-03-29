import { useState } from 'react';
import sheetsToSlackImg from '../assets/sheetsToSlack.png';
import slackToSheetsImg from '../assets/templates/slackToSheets.png';
import templatesImg from '../assets/icons/Templates.svg';
import aiImg from '../assets/icons/AI.png';
import productivityImg from '../assets/icons/Productivity.png';
import builtInToolsImg from '../assets/icons/BuiltInTools.png';
import featuredImg from '../assets/icons/Featured.png';
import allAppsImg from '../assets/icons/Apps.png';
import sheetsImg from '../assets/apps/GoogleSheets.png';
import slackImg from '../assets/apps/Slack.png';
import flowControlImg from '../assets/apps/FlowControl.png';
import shareFeedbackImg from '../assets/icons/SmileyFace.png';
import gmailImg from '../assets/apps/Gmail.png';
import toolsImg from '../assets/apps/Tools.png';
import httpImg from '../assets/apps/HTTP.png';
import webhooksImg from '../assets/apps/Webhooks.png';

const FILTER_ITEMS = [
  { label: 'All apps', active: true, icon: allAppsImg },
  { label: 'Featured', active: false, icon: featuredImg },
  { label: 'Built-in tools', active: false, icon: builtInToolsImg },
  { label: 'Productivity', active: false, icon: productivityImg },
  { label: 'AI', active: false, icon: aiImg },
  { label: 'Templates', active: false, isTemplates: true, icon: templatesImg },
];

const RESULT_ITEMS = [
  { name: 'Flow Control', icon: flowControlImg },
  { name: 'HTTP', icon: httpImg },
  { name: 'Tools', icon: toolsImg },
  { name: 'Webhooks', icon: webhooksImg },
  { name: 'Gmail', icon: gmailImg },
];

const SEARCHABLE_APPS = [
  { name: 'Google Sheets', icon: sheetsImg },
  { name: 'Slack', icon: slackImg },
];

const SEARCHABLE_TEMPLATES = [
  { name: 'Share data added to a Google Sheet as Slack messages', icon: <img src={sheetsToSlackImg} width="40" height="20" alt="" /> },
  { name: 'Add Slack client info with e-mail to Google Sheets spreadsheet with client contacts', icon: <img src={slackToSheetsImg} width="40" height="20" alt="" /> },
  { name: 'Add new Slack messages as rows in Google Sheets', icon: <img src={slackToSheetsImg} width="40" height="20" alt="" /> },
];


function SearchIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="5.5" cy="5.5" r="4.5" stroke="#7E8FA0" strokeWidth="1.5"/>
      <line x1="9" y1="9" x2="13" y2="13" stroke="#7E8FA0" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

const TEMPLATE_ITEMS = SEARCHABLE_TEMPLATES;

export default function AppSearch() {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All apps');

  const q = query.trim().toLowerCase();
  const words = q ? q.split(/\s+/).filter(Boolean) : [];
  const isTemplatesActive = activeFilter === 'Templates' && !query;
  const matchedTemplates = words.length ? SEARCHABLE_TEMPLATES.filter(t => words.every(w => t.name.toLowerCase().includes(w))) : [];
  const matchedApps = words.length ? SEARCHABLE_APPS.filter(a => words.every(w => a.name.toLowerCase().includes(w))) : [];
  const results = isTemplatesActive ? TEMPLATE_ITEMS : (q ? matchedTemplates : RESULT_ITEMS);
  const label = isTemplatesActive ? 'Templates' : (q ? 'Templates' : 'All apps');

  return (
    <div className="app-search">

      {/* Left: Search panel */}
      <div className="app-search__search">
        <div className="app-search__search-bar">
          <SearchIcon />
          <input
            className="app-search__search-input"
            type="text"
            placeholder="Search apps, modules or templates"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>

        <div className="app-search__results-section">
          <div className="app-search__results-label">{label}</div>

          <div className="app-search__results-list">
            {results.map((item) => (
              <div key={item.name} className="app-search__result-item">
                {typeof item.icon === 'string'
                  ? <img src={item.icon} width="28" height="28" alt="" />
                  : item.icon ?? <div className="app-search__result-icon" />}
                <span className="app-search__result-name">{item.name}</span>
              </div>
            ))}
          </div>

          {matchedApps.length > 0 && (
            <>
              <div className="app-search__results-label">Apps</div>
              <div className="app-search__results-list">
                {matchedApps.map(item => (
                  <div key={item.name} className="app-search__result-item">
                    <img src={item.icon} width="40" height="40" alt="" />
                    <span className="app-search__result-name">{item.name}</span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Right: Filters panel */}
      <div className="app-search__filters">
        <div className="app-search__filter-items">
          {FILTER_ITEMS.map((item) => {
            const isActive = item.label === activeFilter && !query;
            return (
              <div
                key={item.label}
                className={`app-search__filter-item${isActive ? ' app-search__filter-item--active' : ''}`}
                onClick={() => setActiveFilter(item.label)}
              >
                {item.icon
                  ? <img src={item.icon} width="16" height="16" alt="" />
                  : <div className={`app-search__filter-icon${isActive ? ' app-search__filter-icon--active' : ''}`} />
                }
                <span className={`app-search__filter-label${isActive ? ' app-search__filter-label--active' : ''}`}>
                  {item.label}
                </span>
              </div>
            );
          })}

        </div>

        <button className="app-search__feedback">
          <img src={shareFeedbackImg} width="13" height="13" alt="" />
          <span>Share feedback</span>
        </button>
      </div>

    </div>
  );
}
