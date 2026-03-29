import './App.css'
import AppSearch from './components/AppSearch'
import './components/AppSearch.css'

function App() {
  return (
    <div className="app-wrapper">
      <div className="note-box">
        <div className="note-box__header">Notes</div>
        <div className="note-box__content">This prototype displays improvements for adding a new module into a scenario form.
          <ul>
            <li>
              New item category: <strong>Templates</strong>
            </li>
            <li>
              User stories:
              <ul>  
                <li>As a user creating a new scenario, I would like to be able to apply a template directly from the scenario editor so that I do not need to leave it.</li>
                <li>As a user creating a new scenario, I would like to see all the existing templates without going elsewhere, so that I can decide which template to apply.</li>
                <li>As a user creating a new scenario, I would like to be able to search among the existing templates, so that I can quickly select the right one.</li>
              </ul>
            </li>
            <li>
              Success metrics:
              <ul>  
                <li><strong>Leading indicator: </strong>Independent scenario creation rate after template use.</li>
                  <ul>
                      <li><strong>Formula: </strong>users who completed a manual scenario (another) after first using a template / users who completed their first templated scenario</li>
                  </ul>
                <li><strong>Counter metric: </strong>Advanced techniques use by power users.</li>
                  <ul>
                      <li><strong>Formula: </strong>percentage of power users using advanced techniques / percentage of power users</li>
                  </ul>
              </ul>
            </li>
          </ul>
          Other identifed friction points:
          <ul>
            <li><strong>Search inconsistency: </strong>e.g. using "Teams" search term does not find "Microsoft Teams" app, while "Sheets" is enough to find "Google Sheets" app.</li>
            <li><strong>Missing autosave: </strong>lost changes when unintentionally closing the form for module settings (e.g. pressing ESC button).</li>
            <li><strong>Unsupported Google Sheets relative references: </strong>e.g. totals row is not supported.</li>
          </ul>
        </div>
      </div>
      <AppSearch />
    </div>
  )
}

export default App
